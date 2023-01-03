import { PrismaClient } from '@prisma/client'



const prisma = new PrismaClient()

const getVocabulaires = async (req, res) => {
    try {
        const vocabulaires = await prisma.vocabulaire.findMany({ include: {
            list:true
        }});
        return res.status(200).json(vocabulaires);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const getVocabulaire = async (req, res) => {
    try {
        const id = req.params.id;
        const vocabulaire = await prisma.vocabulaire.findUnique({
            where: {
                id: parseInt(id)
            },

            include: {
               list:true
            }
        });
        return res.status(200).json(vocabulaire);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const createVocabulaire = async (req, res) => {
    try {
        const data = req.body;
        const vocabulaire = await prisma.vocabulaire.create({
            data: data,
            include: {
               list:true
            }
        })
        return res.status(200).json(vocabulaire);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export {
    getVocabulaires,
    getVocabulaire,
    createVocabulaire
}