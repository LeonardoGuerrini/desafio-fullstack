import { createUser, getUsers, deleteUser } from "../services/users.service.js";

// req e res são do Express
export async function createUserController(req, res) {
  try {
    const body = req.body;
    await createUser(body);
    res.status(201).json({ message: "Usuário cadastrado. Recarregue a página." });
  } catch (err) {
    res.status(500).json({ error: "Falha ao criar usuário" });
  }
}

export async function getUsersController(req, res) {
  try {
    const users = await getUsers();
    res.json({ users });
  } catch (err) {
    res.status(500).json({ error: "Falha ao buscar usuários" });
  }
}

export async function deleteUserController(req, res) {
  try {
    const { id } = req.params;
    await deleteUser(id);
    res.json({ message: "Usuário deletado" });
  } catch (err) {
    res.status(500).json({ error: "Falha ao deletar usuário" });
  }
}
