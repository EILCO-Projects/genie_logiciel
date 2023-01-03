import { PrismaClient } from '@prisma/client'



const prisma = new PrismaClient()

const getListVocabulaires = async (req, res) => {
    try {
        const listVocabulaires = await prisma.listVocabulaire.findMany({ include: {
            vocabulaires:true,
            user:true
        }});
        return res.status(200).json(listVocabulaires);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const getListVocabulaire = async (req, res) => {
    try {
        const id = req.params.id;
        const listVocabulaire = await prisma.listVocabulaire.findUnique({
            where: {
                id: parseInt(id)
            },

            include: {
               vocabulaires : true,
               user:true
            }
        });
        return res.status(200).json(listVocabulaire);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const createListVocabulaire = async (req, res) => {
    try {
        const data = req.body;
        const listVocabulaire = await prisma.listVocabulaire.create({
            data: data,
            include: {
               vocabulaires:true,
               user:true
            }
        })
        return res.status(200).json(listVocabulaire);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export {
    getListVocabulaires,
    getListVocabulaire,
    createListVocabulaire
}