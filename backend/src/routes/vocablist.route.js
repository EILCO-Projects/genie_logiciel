import * as listVocabController from '../controllers/vocablist.controller.js'
import  express  from 'express'
import { ensureAuthorization } from '../security/security.middleware.js'

const listVocabRouter = express.Router()

listVocabRouter.get('/',listVocabController.getListVocabulaires)
listVocabRouter.get('/:id',listVocabController.getListVocabulaire)
listVocabRouter.post('/',listVocabController.createListVocabulaire)
// listVocabRouter.put('/:id',testController.updateTest)
// listVocabRouter.delete('/:id',testController.deleteTest)
// listVocabRouter.put('/:tId/parties/:pId',testController.associatePartieToTest)
// listVocabRouter.delete('/:tId/parties/:pId',testController.removePartieFromTest)

export default listVocabRouter