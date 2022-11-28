import express from "express";
import {
    getNoticias,
    getNoticiasById,
    criarNoticias,
    atualizarNoticias,
    deletarNoticias
} from "../controllers/Noticias.js";
import { verifyUser } from "../middleware/AuthUsuario.js";

const router = express.Router();

router.get('/notices', verifyUser, getNoticias);
router.get('/notices/:id', verifyUser, getNoticiasById);
router.post('/notices', verifyUser, criarNoticias);
router.patch('/notices/:id', verifyUser, atualizarNoticias);
router.delete('/notices/:id', verifyUser, deletarNoticias);

export default router;