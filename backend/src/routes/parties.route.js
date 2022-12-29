import * as partieController from '../controllers/parties.controller.js'
import  express  from 'express'
import { ensureAuthorization } from '../security/security.middleware.js'

const partiesRouter = express.Router()

partiesRouter.get('/',partieController.getParties)
partiesRouter.get('/:id',partieController.getPartie)
partiesRouter.post('/',partieController.createPartie)
partiesRouter.put('/:id',partieController.updatePartie)
partiesRouter.delete('/:id',partieController.deletePartie)

export default partiesRouter