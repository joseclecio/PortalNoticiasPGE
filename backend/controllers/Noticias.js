import Noticias from "../models/NoticiasModel.js";
import User from "../models/UsuarioModel.js";
import { Op } from "sequelize";

export const getNoticias = async (req, res) => {
    try {
        let response;
        if (req.role === "admin" || req.role === "user") { //mudar visualização para admin e user
            response = await Noticias.findAll({
                attributes: ['id','uuid', 'name', 'notice'],
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        } else {
            response = await Noticias.findAll({
                attributes: ['id','uuid', 'name', 'notice'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response.reverse());//ordem reversa
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getNoticiasById = async (req, res) => {
    try {
        const notices = await Noticias.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!notices) return res.status(404).json({ msg: "Dados não encontrados!" });
        let response;
        if (req.role === "admin") {
            response = await Noticias.findOne({
                attributes: ['uuid', 'name', 'notice'],
                where: {
                    id: notices.id
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        } else {
            response = await Noticias.findOne({
                attributes: ['uuid', 'name', 'notice'],
                where: {
                    [Op.and]: [{ id: notices.id }, { userId: req.userId }]
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const criarNoticias = async (req, res) => {
    const { name, notice } = req.body;
    try {
        await Noticias.create({
            name: name,
            notice: notice,
            userId: req.userId
        });
        res.status(201).json({ msg: "Noticia criada com sucesso!" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const atualizarNoticias = async (req, res) => {
    try {
        const notices = await Noticias.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!notices) return res.status(404).json({ msg: "Dados não encontrados!" });
        const { name, notice } = req.body;
        if (req.role === "admin") {
            await Noticias.update({ name, notice }, {
                where: {
                    id: notices.id
                }
            });
        } else {
            if (req.userId !== notices.userId) return res.status(403).json({ msg: "Acesso proibido!" });
            await Noticias.update({ name, notice }, {
                where: {
                    [Op.and]: [{ id: notices.id }, { userId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: "Noticia atualizada com sucesso!" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const deletarNoticias = async (req, res) => {
    try {
        const notices = await Noticias.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!notices) return res.status(404).json({ msg: "Dados não encontrados!" });
        const { name, notice } = req.body;
        if (req.role === "admin") {
            await Noticias.destroy({
                where: {
                    id: notices.id
                }
            });
        } else {
            if (req.userId !== notices.userId) return res.status(403).json({ msg: "Acesso proibido" });
            await Noticias.destroy({
                where: {
                    [Op.and]: [{ id: notices.id }, { userId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: "Noticia excluida com sucesso!" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}