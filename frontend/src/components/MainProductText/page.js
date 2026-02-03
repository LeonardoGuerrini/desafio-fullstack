"use client"

import { useEffect, useState } from "react"

export default function MainProductText(){
    const [nome, setNome] = useState("")
    const [categoria, setCategoria] = useState("")
    const [quantidadeEstoque, setQuantidadeEstoque] = useState("")
    const [valor, setValor] = useState("")

    const [products, setProducts] = useState([]);

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");


    async function handleSubmit(e) {
        e.preventDefault();

        setMessage("")
        setError("")

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nome, categoria, quantidadeEstoque, valor }),
        });

        const data = await res.json()

        if(res.ok){
            setMessage(data.message || "Produto adicionado com sucesso.")
            setNome("")
            setCategoria("")
            setQuantidadeEstoque("")
            setValor("")
        } else{
            setError(data.error)
        }
    }

    async function handleDelete(id) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            setProducts(prev => prev.filter(product => product._id !== id));
        }
    }

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
        .then(res => res.json())
        .then(data => setProducts(data.products));
    }, []);

    return(
        <main className="d-flex flex-column p-3">
            <div>
                <h1>CRUD Produtos</h1>
                <p>Adicione ou remova um produto.</p>
            </div>
            <div className="d-flex">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="nome" id="nome" placeholder="Nome"  className="form-control" onChange={e=>setNome(e.target.value)} required/>
                        <input type="text" name="categoria" id="categoria" placeholder="Categoria" className="form-control mt-1" onChange={e=>setCategoria(e.target.value)} required/>
                        <input type="number" name="quantidadeEstoque" id="quantidadeEstoque" placeholder="Quantidade no estoque" className="form-control mt-1" min="1" onChange={e=>setQuantidadeEstoque(e.target.value)} required/>
                        <input type="number" name="valor" id="valor" placeholder="Valor unitário" className="form-control mt-1" min="1" step="0.01" onChange={e=>setValor(e.target.value)} required/>
                    </div>
                    <button type="submit" className="btn bg-black text-white w-100 mt-2 fw-medium">Cadastrar</button>
                </form>
                
            </div>
            <div>
                {message && <div className="alert alert-success mt-3">{message}</div>}
                {error && <div className="alert alert-danger mt-3">{error}</div>}
            </div>
            <div className="d-fled flex-column">
                <h2 className="mt-3">Produtos Cadastrados</h2>
                <ul className="list-unstyled fs-6">
                    {products.map(product => (
                    <li key={product._id}>
                        <b>Nome:</b> {product.nome}<br/>
                        <b>Categoria:</b> {product.categoria}<br/>
                        <b>Quantidade no estoque:</b> {product.quantidadeEstoque}<br/>
                        <b>Valor unitário:</b> R${product.valor}<br/>
                        <b>Valor total:</b> R${product.valor*product.quantidadeEstoque}<br/>
                        <button className="btn btn-danger btn-sm mt-2 mb-2" onClick={() => handleDelete(product._id)}>Excluir</button>
                    </li>
                    ))}
                </ul>
            </div>
            
        </main>
    )
}