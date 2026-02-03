import { createProduct, getProducts, deleteProduct } from "../services/products.service.js";

// req e res do Express
export async function createProductController(req, res) {
  try {
    const body = req.body;
    await createProduct(body);
    res.status(201).json({ message: "Produto cadastrado. Recarregue a página." });
  } catch (err) {
    res.status(500).json({ error: "Falha ao criar produto" });
  }
}

export async function getProductsController(req, res) {
  try {
    const products = await getProducts();
    res.json({ products });
  } catch (err) {
    res.status(500).json({ error: "Falha ao buscar produtos" });
  }
}

export async function deleteProductController(req, res) {
  try {
    const { id } = req.params;
    await deleteProduct(id);
    res.json({ message: "Produto deletado" });
  } catch (err) {
    res.status(500).json({ error: "Falha ao deletar produto" });
  }
}
