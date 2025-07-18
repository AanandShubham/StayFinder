import crypto from "crypto";
import multer from "multer";
import path from "path";
// import route  from '../public/images/uploads'
const diskStorage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/images/uploads")
    },
    filename:function(req,file,cb){
        crypto.randomBytes(14,(err,bytes)=>{
            const fn = bytes.toString('hex') + path.extname(file.originalname)
            cb(null,fn)
        })
    }
})

const upload = multer({storage:diskStorage})

export default upload 