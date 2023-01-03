import * as vocabController from '../controllers/vocab.controller.js'
import  express  from 'express'
import { ensureAuthorization } from '../security/security.middleware.js'

const vocabRouter = express.Router()

vocabRouter.get('/',vocabController.getVocabulaires)
vocabRouter.get('/:id',vocabController.getVocabulaire)
vocabRouter.post('/',vocabController.createVocabulaire)
// vocabRouter.put('/:id',testController.updateTest)
// vocabRouter.delete('/:id',testController.deleteTest)
// vocabRouter.put('/:tId/parties/:pId',testController.associatePartieToTest)
// vocabRouter.delete('/:tId/parties/:pId',testController.removePartieFromTest)

export default vocabRouter