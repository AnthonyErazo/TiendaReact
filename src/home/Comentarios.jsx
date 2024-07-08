import { useState, useEffect } from "react";

function Comentarios() {
    const [listaComentarios, setListaComentarios] = useState([]);

    useEffect(() => {
        // Generar comentarios ficticios
        const comentariosFicticios = [
            {
                idcomentario: 1,
                nombre_cliente: "Juan Pérez",
                comentario: "La comida fue excelente y el servicio muy amable. Definitivamente volveré.",
                fecha: "2024-07-01"
            },
            {
                idcomentario: 2,
                nombre_cliente: "María Gómez",
                comentario: "Me encantó el ambiente y los platos eran exquisitos. Lo recomiendo totalmente.",
                fecha: "2024-06-28"
            },
            {
                idcomentario: 3,
                nombre_cliente: "Carlos Ramírez",
                comentario: "Un lugar maravilloso para cenar en familia. Gran variedad de platos y todos deliciosos.",
                fecha: "2024-06-25"
            }
        ];
        setListaComentarios(comentariosFicticios);
    }, []);

    return (
        <section id='comentarios'>
            <div className="container">
                <h2>Comentarios de Clientes</h2>
                <div className="row">
                    {listaComentarios.map(item => (
                        <div key={item.idcomentario} className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{item.nombre_cliente}</h5>
                                    <p className="card-text">{item.comentario}</p>
                                    <p className="card-text"><strong>Fecha: </strong>{item.fecha}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Comentarios;