"use client";

import Navbar from "../../components/Navbar/page";
import Link from "next/link";

export default function Home() {
  return (
    <div className="d-flex flex-column">
      <Navbar />
      <main className="flex-grow-1 p-3">
        <h1 className="fw-normal">
          Seja bem-vindo ao <span className="fw-bold">Dashboard Admin</span>.
        </h1>
        <div>
          <p>
            Para adicionar um novo <b>usuário</b> ao sistema da empresa, <Link href="/usuarios">clique aqui.</Link>
          </p>
          <p>
            Para adicionar um novo <b>produto</b> ao sistema da empresa, <Link href="/produtos">clique aqui.</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
