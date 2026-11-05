import { Router } from "express";
import * as jogadoresController from "../controllers/jogadoresController.js";
import validarId from "../middlewares/validarId.js"; // Se usou export default. Se usou named export, mantenha { validarId }

const router = Router();

router.get("/", jogadoresController.listar);
router.get("/:id", validarId, jogadoresController.buscarPorId);
router.post("/", jogadoresController.criar);
router.put("/:id", validarId, jogadoresController.atualizar);
router.delete("/:id", validarId, jogadoresController.excluir); // Confirme se no controller está "deletar" ou "excluir"

export default router;