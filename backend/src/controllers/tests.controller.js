import { PrismaClient } from '@prisma/client'
import sha from "sha2"


const prisma = new PrismaClient()

const getTests = async (req, res) => {
    try {
        const tests = await prisma.test.findMany({ include: {
            parties: true,
            users: true
        }});
        return res.status(200).json(tests);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const getTest = async (req, res) => {
    try {
        const id = req.params.id;
        const test = await prisma.test.findUnique({
            where: {
                id: parseInt(id)
            },

            include: {
                parties: true,
                users: true
            }
        });
        return res.status(200).json(test);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const createTest = async (req, res) => {
    try {
        const data = req.body;
        const test = await prisma.test.create({
            data: data,
            include: {
                parties: true,
                users: true
            }
        })
        return res.status(200).json(test);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const updateTest = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;

        let test = await prisma.test.findUnique({
            where: {
                id: parseInt(id)
            }
        })

        if (!test) {
            return res.status(400).json({ status: 400, message: "Ce test n'existe pas" });
        }


        test = await prisma.test.update({
            where: {
                id: parseInt(id)
            },
            data: data,
            include: {
                parties: true,
                users: true
            }
        })
        return res.status(200).json(test);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
const deleteTest = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;


        const test = await prisma.test.findUnique({
            where: {
                id: parseInt(id),

            }
        })

        if (!test ) {
            return res.status(400).json({ status: 400, message: "Ce test n'existe pas" });
        }
        await prisma.test.delete({
            where: {
                id : parseInt(id)
            }
        })

        return res.status(200).json({ status: 200, message: "Bien supprimé" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const associatePartieToTest = async (req, res) => {
    try {
        const {tId ,pId} = req.params;
        const data = req.body;

        let test = await prisma.test.findUnique({
            where: {
                id: parseInt(tId)
            }
        })
        let partie = await prisma.partie.findUnique({
            where: {
                id: parseInt(pId)
            }
        })

        if (!(test && partie)) {
            return res.status(400).json({ status: 400, message: "Le test et/ou la partie n'existe pas" });
        }


        test = await prisma.test.update({
            where: {
                id: parseInt(tId)
            },
            data: {
                parties : {
                    connect : {
                        id:parseInt(pId)
                    }
                }
            },
            include: {
                parties: true,
                users: true
            }
        })
        return res.status(200).json(test);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const removePartieFromTest = async (req, res) => {
    try {
        const {tId ,pId} = req.params;
        const data = req.body;

        let test = await prisma.test.findUnique({
            where: {
                id: parseInt(tId)
            }
        })
        let partie = await prisma.partie.findUnique({
            where: {
                id: parseInt(pId)
            }
        })

        if (!(test && partie)) {
            return res.status(400).json({ status: 400, message: "Le test et/ou la partie n'existe pas" });
        }


        test = await prisma.test.update({
            where: {
                id: parseInt(tId)
            },
            data: {
                parties : {
                    disconnect :{
                        id: parseInt(pId)
                    }
                }
            },
            include: {
                parties: true,
                users: true
            }
        })
        return res.status(200).json(test);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export {
    getTests,
    getTest,
    createTest,
    updateTest,
    deleteTest,
    associatePartieToTest,
    removePartieFromTest
}