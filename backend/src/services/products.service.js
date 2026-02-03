import Product from "../models/products.model.js";

export async function createProduct({ nome, categoria, quantidadeEstoque, valor }) {
  return await Product.create({ nome, categoria, quantidadeEstoque, valor});
}

export async function getProducts() {
  return await Product.find();
}

export async function deleteProduct(id) {
  return await Product.findByIdAndDelete(id);
}
