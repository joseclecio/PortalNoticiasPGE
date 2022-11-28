import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const NoticiastList = () => {
    const [notices, setProducts] = useState([]);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get("http://localhost:5000/notices");
        setProducts(response.data);
    };

    const deleteProduct = async (productId) => {
        await axios.delete(`http://localhost:5000/notices/${productId}`);
        getProducts();
    };

    return (

        <div>
            <h1 className="title">Portal de Notícias</h1>
            <h2 className="subtitle">Acompanhe todas as notícias de primeira mão</h2>
            {user && user.role === "admin" && (
                <Link to="/notices/add" className="button is-primary mb-2">
                    Adicionar Noticia
                </Link>
            )}<br/><br/>
            {notices.map(( notices, index) => (
                <div class="card mb-5" style={{ width: "99%" }}>
                                  {/*<td>{notices.id}</td>*/}

                    <div style={{ marginLeft: "30pt", marginRight: "30pt" }}>
                        <h6 style={{ fontSize: "20pt" }}><br /><b>{notices.name}</b></h6>
                        <h5 class="card-subtitle mb-2 text-muted">&nbsp;Criado por: {notices.user.name}</h5><br />
                        <textarea style={{
                            textAlign: "justify", marginBottom: "20pt", width: "100%",
                            blockSize: "500pt", border: "0 none", resize: "none", backgroundColor: "white", fontSize: "11pt"
                        }} disabled>{notices.notice}</textarea>
                        {user && user.role === "admin" && (
                            <td>
                                <Link
                                    to={`/notices/edit/${notices.uuid}`}
                                    className="button is-small is-info"
                                >
                                    Editar
                                </Link>

                                &nbsp;

                                <button
                                    onClick={() => deleteProduct(notices.uuid)}
                                    className="button is-small is-danger"
                                >
                                    Apagar
                                </button><br /><br />

                            </td>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NoticiastList;