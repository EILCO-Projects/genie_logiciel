import * as testController from '../controllers/tests.controller.js'
import  express  from 'express'
import { ensureAuthorization } from '../security/security.middleware.js'

const testsRouter = express.Router()

testsRouter.get('/',testController.getTests)
testsRouter.get('/:id',testController.getTest)
testsRouter.post('/',testController.createTest)
testsRouter.put('/:id',testController.updateTest)
testsRouter.delete('/:id',testController.deleteTest)
testsRouter.put('/:tId/parties/:pId',testController.associatePartieToTest)
testsRouter.delete('/:tId/parties/:pId',testController.removePartieFromTest)

export default testsRouter