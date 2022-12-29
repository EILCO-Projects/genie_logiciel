import { PrismaClient } from '@prisma/client'
import sha from "sha2"
const { sha512 } = sha;

const prisma = new PrismaClient()

const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        return res.status(200).json(users);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(id)
            },

            include: {
                tests: true,
                listVocabulaires: {
                    include: {
                        vocabulaires: true
                    }
                }
            }
        });
        return res.status(200).json(user);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const createUser = async (req, res) => {
    try {
        const data = req.body;
        data.password = sha512(data.password).toString('hex'); //hashing password
        const user = await prisma.user.create({
            data: data,
            include: {
                tests: true,
                listVocabulaires: {
                    include: {
                        vocabulaires: true
                    }
                }
            }
        })
        return res.status(200).json(user);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;

        if (!(data.email && data.oldpwd && data.newpwd)) {
            return res.status(400).json({ status: 400, message: "Champ email, oldpwd et newpwd obligatoires" });
        }

        let user = await prisma.user.findUnique({
            where: {
                id: parseInt(id)
            }
        })

        
        if (!user || user.email!==data.email ||user.password !== sha512(data.oldpwd).toString('hex')) {
            return res.status(400).json({ status: 400, message: "Aucun utilisateur n'a cet email et mot de passe : " });
        }

        data.password = sha512(data.newpwd).toString('hex'); //hashing password
         data.oldpwd = undefined
        data.newpwd = undefined

        user = await prisma.user.update({
            where :{
                id : parseInt(id)
            },
            data: data,
            include: {
                tests: true,
                listVocabulaires: {
                    include: {
                        vocabulaires: true
                    }
                }
            }
        })
        return res.status(200).json(user);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;

        if (!(data.email && data.password)) {
            return res.status(400).json({ status: 400, message: "Champ email, password obligatoires" });
        }

        const user = await prisma.user.findUnique({
            where: {
                email: data.email,

            }
        })

        if (!user || user.password !==  sha512(data.password).toString('hex')) {
            return res.status(400).json({ status: 400, message: "Aucun utilisateur n'a cet email et mot de passe : " });
        }
        await prisma.user.delete({where:{
            email: data.email
        }})

        return res.status(200).json({ status: 200, message: "Bien supprimé" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}