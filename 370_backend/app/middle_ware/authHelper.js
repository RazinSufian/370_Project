import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const saltRounds = 10;

export const hashPassword = async (password) => {
    return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (password, hash) => {
    const isMatch = await bcrypt.compare(password, hash);
    if (!isMatch) {
        console.log(`Password mismatch: the entered password '${password}' does not match the stored hash.`);
    }
    return isMatch;
};

export const generateToken = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '24h' });
};

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}

export const extractToken = (req) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
}

export const extractUser = (token) => {
    return verifyToken(token);
}
