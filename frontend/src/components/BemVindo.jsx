import React from "react";
import { useSelector } from "react-redux";
import pgeFachada from "../pgeFachada.png";

const BemVindo = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <h2 className="subtitle">
        Bem vindo de volta <strong>{user && user.name}</strong>

      </h2>
      <img src={pgeFachada} width="90%" alt='logo' />

    </div>
  );
};

export default BemVindo;