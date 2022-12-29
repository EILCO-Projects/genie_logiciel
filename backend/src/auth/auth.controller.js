import { PrismaClient } from '@prisma/client'
import sha from "sha2"
const { sha512 } = sha;

const prisma = new PrismaClient()

const login = async (req, res) => {
    try {
        const data = req.body;
        if (!(data.email && data.password)) {
            return res.status(400).json({ status: 400, message: "Champs email et password obligatoires" });
        }

        if(req.session.authenticated){
            return res.status(200).json(req.session);
        }

        const user = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        })
        if (user && user.password === sha512(data.password).toString('hex') ) {
            req.session.authenticated=true;
            req.session.user = user.email
            return res.status(200).json(user);
        } else {
            return res.status(400).json({ status: 400, message: "Email ou mot de passe incorrect" });
        }


    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const logout = async (req, res) => {
    try {

        req.session.authenticated = false;
        req.session.user=undefined;
        return res.status(200).json(req.session);

    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}




export {
    login,
    logout
}