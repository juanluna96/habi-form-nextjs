// pages/index.tsx

import React from "react";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Bienvenido a la página principal</h1>
      <ul>
        <li>
          <Link href="/datos-cliente">
            Datos del cliente
          </Link>
        </li>
        <li>
          <Link href="/correo">
            Correo
          </Link>
        </li>
        <li>
          <Link href="/direccion-apartamento">
            Dirección del apartamento
          </Link>
        </li>
        <li>
          <Link href="/numero-piso">
            Número de piso
          </Link>
        </li>
        <li>
          <Link href="/opciones">
            Opciones del apartamento
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
