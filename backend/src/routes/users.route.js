import * as userController from '../controllers/users.controller.js'
import  express  from 'express'
import { ensureAuthorization } from '../security/security.middleware.js'

const usersRouter = express.Router()

usersRouter.get('/',userController.getUsers)
usersRouter.get('/:id',userController.getUser)
usersRouter.post('/',userController.createUser)
usersRouter.put('/:id',userController.updateUser)
usersRouter.delete('/:id',userController.deleteUser)

export default usersRouter