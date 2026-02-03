"use client"

import { useEffect, useState } from "react"

export default function MainUserText(){
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [celular, setCelular] = useState("")

    const [users, setUsers] = useState([]);

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");


    async function handleSubmit(e) {
        e.preventDefault();

        setMessage("")
        setError("")

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nome, sobrenome, email, celular }),
        });

        const data = await res.json()

        if(res.ok){
            setMessage(data.message || "Usuário adicionado com sucesso.")
            setNome("")
            setSobrenome("")
            setEmail("")
            setCelular("")
        } else{
            setError(data.error)
        }
    }

    async function handleDelete(id) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            setUsers(prev => prev.filter(user => user._id !== id));
        }
    }

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`)
        .then(res => res.json())
        .then(data => setUsers(data.users));
    }, []);

    return(
        <main className="d-flex flex-column p-3">
            <div>
                <h1>CRUD Usuários</h1>
                <p>Nessa página é possível cadastrar e remover um usuário, e também atualizar suas informações.</p>
            </div>
            <div className="d-flex">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="nome" id="nome" placeholder="Nome"  className="form-control" onChange={e=>setNome(e.target.value)} required/>
                        <input type="text" name="sobrenome" id="sobrenome" placeholder="Sobrenome" className="form-control mt-1" onChange={e=>setSobrenome(e.target.value)} required/>
                        <input type="email" name="email" id="email" placeholder="E-mail" className="form-control mt-1" onChange={e=>setEmail(e.target.value)} required/>
                        <input type="tel" name="celular" id="celular" placeholder="Número de celular" className="form-control mt-1" minLength="1" maxLength="11" onChange={e=>setCelular(e.target.value)} required/>
                    </div>
                    <button type="submit" className="btn bg-black text-white w-100 mt-2 fw-medium">Cadastrar</button>
                </form>
                
            </div>
            <div>
                {message && <div className="alert alert-success mt-3">{message}</div>}
                {error && <div className="alert alert-danger mt-3">{error}</div>}
            </div>
            <div className="d-fled flex-column">
                <h2 className="mt-3">Usuários Cadastrados</h2>
                <ul className="list-unstyled fs-6">
                    {users.map(user => (
                    <li key={user._id}>
                        <b>Nome completo:</b> {user.nome} {user.sobrenome}<br/>
                        <b>E-mail:</b> {user.email}<br/>
                        <b>Celular:</b> {user.celular}<br/>
                        <button className="btn btn-danger btn-sm mt-2 mb-2" onClick={() => handleDelete(user._id)}>Excluir</button>
                    </li>
                    ))}
                </ul>
            </div>
            
        </main>
    )
}