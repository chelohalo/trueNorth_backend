import { Router } from "express";
import { 
    register, 
    authenticate, 
    profile,
    updateBalance,
} from "../controllers/usersControllers.js";
import checkAuth from "../middleware/checkAuth.js";

const router = Router();

router.post('/', register);
router.post('/login', authenticate);
router.get('/profile', checkAuth, profile);

router.post('/update-balance', checkAuth, updateBalance);

export default router;