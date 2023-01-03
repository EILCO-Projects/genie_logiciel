import { PrismaClient  } from '@prisma/client'
import sha from "sha2"


const prisma = new PrismaClient()

const getParties = async (req, res) => {
    try {
        const parties = await prisma.partie.findMany();
        return res.status(200).json(parties);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const getPartie = async (req, res) => {
    try {
        const id = req.params.id;
        const partie = await prisma.partie.findUnique({
            where: {
                id: parseInt(id)
            },

            include: {
               tests:true
            }
        });
        return res.status(200).json(partie);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const createPartie = async (req, res) => {
    try {
        const data = req.body;
        const partie = await prisma.partie.create({
            data: data,
            include: {
                tests:true
            }
        })
        return res.status(200).json(partie);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const updatePartie = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;

        let partie = await prisma.partie.findUnique({
            where: {
                id: parseInt(id)
            }
        })

        if (!partie) {
            return res.status(400).json({ status: 400, message: "Cette partie n'existe pas" });
        }


        partie = await prisma.partie.update({
            where: {
                id: parseInt(id)
            },
            data: data,
            include: {
                tests:true
            }
        })
        return res.status(200).json(partie);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
const deletePartie = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;


        const partie = await prisma.partie.findUnique({
            where: {
                id: parseInt(id),

            }
        })

        if (!partie ) {
            return res.status(400).json({ status: 400, message: "Cette partie n'existe pas" });
        }
        await prisma.partie.delete({
            where: {
                id : parseInt(id)
            }
        })

        return res.status(200).json({ status: 200, message: "Bien supprimé" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export {
    getParties,
    getPartie,
    createPartie,
    updatePartie,
    deletePartie
}