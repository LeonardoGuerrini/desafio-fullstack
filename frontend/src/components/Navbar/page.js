"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  async function handleLogout() {
    await fetch("http://localhost:8000/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    router.push("/login");
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-black"
        aria-label="Offcanvas navbar large"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">Dashboard Admin</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end fs-6 bg-black text-light" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
                Dashboard Admin
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item"><Link className="nav-link text-light" href="/home">Home</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" href="/usuarios">Usuários</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" href="/produtos">Produtos</Link></li>
                
              </ul>

              <button className="btn btn-outline-danger" type="submit" onClick={handleLogout}>
                  Sair
                </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
