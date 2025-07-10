import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    listings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Listing",
            default:[]
        }
    ],
    bookings: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Listing",
            default:[]
        }
    ]
}, { timestamps: true })

// userSchema.pre("save", async function(next){
//     if(!this.isModified("password")){
//         next();
//     }
//     this.password = await bcrypt.hash(this.password, 10);
//     next();
// })

const User = mongoose.model("user", userSchema);

export default User;