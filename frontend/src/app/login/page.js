"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function Login() {

  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setError("");

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });

    const data = await res.json(); // recebe resp da request

    if (res.ok) {
      setMessage(data.message || "Login feito com sucesso. Redirecionando...");
      setUsername("");
      setPassword("");
      router.push("/home")
    } else {
      setError(data.error);
    }
  }

  return (
    <section className=" d-flex flex-column align-items-center justify-content-center vh-100 text-center w-100">
      <div className="bg-dark p-5 rounded-4">
        <div className="text-light">
          <h1 className="h2 fw-medium">Faça o Login</h1>
          <p className="fw-normal">Acesse o Dashboard Admin!</p>
        </div>
        <div className="text-light px-5 py-2 m-1">
          <form onSubmit={handleSubmit}>
            <div className="">
              <div className="text-start">
                <label htmlFor="username">Usuário</label>
                <input
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Digite aqui..."
                  className="form-control"
                  required
                />
              </div>
              <div className="text-start mt-1">
                <label htmlFor="password">Senha</label>
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite aqui..."
                  className="form-control"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn text-black w-100 mt-4 fw-medium bg-light"
              
            >
              Entrar
            </button>
          </form>
          <p className="mt-3 text-primary">
            <Link href="/registro">Criar uma conta</Link>
          </p>
        </div>
      </div>

      {message && <div className="alert alert-success mt-3">{message}</div>}

      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </section>
  );
}
