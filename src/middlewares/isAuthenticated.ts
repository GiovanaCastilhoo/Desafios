import { Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export default async (req: any, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({ error: 'token não fornecido' });

    const token = authHeader.split(' ')[1];

    try {
        const decoded = verify(token, process.env.JWT_SECRET) as any;

        req.userId = decoded.id;

        return next();
    } catch (error) {
        return res.status(401).json({ error: 'Token Invalido' });
    }
};
