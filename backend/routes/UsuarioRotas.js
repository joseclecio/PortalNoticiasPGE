import express from "express";
import{
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/Usuarios.js";
import { verifyUser , adminOnly} from "../middleware/AuthUsuario.js";

const router = express.Router();

router.get('/users', verifyUser, adminOnly, getUsers);
router.get('/users/:id', verifyUser, adminOnly, getUserById);
router.post('/users', verifyUser, adminOnly, createUser); //desativar e verifyUser, adminOnly para criar admin
router.patch('/users/:id', verifyUser, adminOnly, updateUser);
router.delete('/users/:id', verifyUser, adminOnly, deleteUser);

export default router;