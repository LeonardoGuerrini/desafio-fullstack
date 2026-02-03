import Admin from "../models/admin.models.js";
import bcrypt from "bcrypt";

export async function registerAdmin({ username, password }) {

  const exists = await Admin.findOne({ username });
  if (exists) throw new Error("Usuário já existe");

  const hash = await bcrypt.hash(password, 10);
  return await Admin.create({ username, password: hash });
}

export async function loginAdmin({ username, password }) {

  const admin = await Admin.findOne({ username });
  if (!admin) throw new Error("Credenciais inválidas");

  const match = await bcrypt.compare(password, admin.password);
  if (!match) throw new Error("Credenciais inválidas");

  return { id: admin._id, username: admin.username };
}

export async function logoutAdmin() {
  return true;
}
