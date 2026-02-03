import { registerAdmin, loginAdmin, logoutAdmin } from "../services/auth.service.js";

// req e res são do Express
export async function register(req, res) {
  try {
    const body = req.body;
    await registerAdmin(body);
    res.status(201).json({ message: "Admin criado" });
  } catch (err) {
    res.status(500).json({ error: "Falha no cadastro" });
  }
}

export async function login(req, res) {
  try {
    const body = req.body;
    const admin = await loginAdmin(body);

    // setar cookie via Express
    res.cookie("auth", admin.id, { httpOnly: true });
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: "Credenciais inválidas" });
  }
}

export async function logout(req, res) {
  await logoutAdmin();
  res.clearCookie("auth", { httpOnly: true, path: "/" });
  res.json({ ok: true });
}
