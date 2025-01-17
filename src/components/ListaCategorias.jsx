import VideoCard from "./VideoCard"
import { obterDados } from "../api/api"
import { useEffect, useState } from "react"

const ListaCategorias = () => {
    const [categorias, setCategorias] = useState([])
    const [videos, setVideos] = useState([])

    useEffect(() => {
        obterDados('/categories', (data) => {
            console.log("Categorias:", data);
            setCategorias(data);
        });
    
        obterDados('/videos', (data) => {
            console.log("Vídeos:", data);
            setVideos(data);
        });
    }, []);

    return (
        <main className="categorias">
            <h1 className="sr-only">Lista Categorias videos</h1>
            <p className="sr-only">AluraFlix plataforma para registrar e ver nossos videos favoritos</p>
            <div className="categorias_Listas">
                {
                    categorias.map((categoria) => {

                        const { id, name, description, color } = categoria

                        if (videos.some(video => video.categorie === name)) {
                            let colorLista = {
                                backgroundColor: color
                            }

                            return (
                                <div className="categorias__contenido container" key={id}>
                                    <div className="categorias__titulo">
                                        <div className="categorias__nome" style={colorLista}>{name}</div>
                                        <div className="categorias__descricao">{description}</div>
                                    </div>
                                    <div className="categorias__listavideos">

                                        <VideoCard url='/videos' nomeCategoria={name} color={color} />

                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })
                }
            </div>
        </main>
    )
}

export default ListaCategorias