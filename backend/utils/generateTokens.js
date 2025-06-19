import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRETE, {
        expiresIn: '10d'
    })

    res.cookie('jwt', token, {
        maxAge: 10 * 24 * 60 * 60 * 1000,
        httpOnly:true, // prevents from cross-site-scripting
        sameSite:"strict", // prevents from cross-site-request-furgery
        secure:process.env.NODE_ENV !== 'development'
    })
}


export default generateTokenAndSetCookie;