import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddNoticias = () => {
    const [name, setName] = useState("");
    const [notice, setNotice] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/notices", {
                name: name,
                notice: notice,
            });
            navigate("/notices");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    return (
        <div>
            <h1 className="title">Noticias</h1>
            <h2 className="subtitle">Cadastrar Nova Noticia</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={saveProduct}>
                            <p className="has-text-centered">{msg}</p>
                            <div className="field">
                                <label className="label">Nome</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Noticia Nome" required
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Noticia</label>
                                <div className="control">
                                    <textarea style={{ width: "100%", padding: "10pt", blockSize: "200pt" }}
                                        value={notice}
                                        onChange={(e) => setNotice(e.target.value)}
                                        placeholder="Noticia" required></textarea>
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <button type="submit" className="button is-success">
                                        Cadastrar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormAddNoticias;