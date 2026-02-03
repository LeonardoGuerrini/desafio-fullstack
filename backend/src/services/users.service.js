import User from "../models/user.models.js";

export async function createUser({ nome, sobrenome, email, celular }) {
  return await User.create({ nome, sobrenome, email, celular,});
}

export async function getUsers() {
  return await User.find();
}

export async function deleteUser(id) {
  return await User.findByIdAndDelete(id);
}
