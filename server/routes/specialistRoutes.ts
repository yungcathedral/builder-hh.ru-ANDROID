import { Router } from 'express';
import { getAllSpecialists, getSpecialistById } from '../controllers/specialistController.js'; 

const router = Router();

router.get('/', getAllSpecialists);
router.get('/:id', getSpecialistById);

export default router;
