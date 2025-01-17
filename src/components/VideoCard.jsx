import '../css/estilos.css'
import { Link } from 'react-router-dom'
import { obterDados, excluirDados } from '../api/api';
import { useEffect, useState } from 'react'
import Modal from 'react-modal';

const VideoCards = ({ url, color, nomeCategoria }) => {
    const [videos, setVideos] = useState([])
    const [videoAEliminar, setVideoAEliminar] = useState(null)
    const [solicitarDadosVideos, setSolicitarDadosVideos] = useState(false)

    useEffect(() => {
        obterDados('/videos', setVideos)
        setSolicitarDadosVideos(false)
    }, [solicitarDadosVideos])

    let colorCard = {
        border: `2px solid ${color}`,
        backgroundColor: `${color}`
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = (id) => {
        setVideoAEliminar(id)
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
        setVideoAEliminar(null)
    };

    const alterarEliminar = () => {
        if (videoAEliminar !== null) {
            excluirDados(videoAEliminar)
            setSolicitarDadosVideos(true)
        }
        closeModal();
    }

    return (
        <>
            {
                videos.map(video => {
                    const { id, urlVideo, urlImagen, categoria } = video;
                    console.log("URL da Imagem:", urlImagen);
                    if (categoria === nomeCategoria) {
                        return (
                            <div className='videocard_container' key={id}>
                                <button className='videocard_btn' onClick={() => openModal(id)}>X</button>
                                <Link to={`${urlVideo}`} target="_blank" rel="noopener noreferrer">
                                    <div className='videocard' style={colorCard}>
                                        <img src={`${urlImagen}`} alt="Imagen video card" />
                                    </div>
                                </Link>
                            </div>
                        );
                    }
                    return null;
                })
            }
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Exemplo de Modal"
            >
                <div className='modal_header'>
                    <button className='btn_cancel' onClick={closeModal}>X</button>
                </div>
                <div className='modal_content'>
                    <h2>Eliminar Video</h2>
                    <p>Quer mesmo excluir este video, deseja continuar?</p>
                </div>

                <div className='Modal_footer'>
                    <button className='modal_btn modal_btn-ok' onClick={alterarEliminar}>Eliminar Video</button>
                    <button className='modal_btn modal_btn-no' onClick={closeModal}>Cancelar</button>
                </div>
            </Modal>
        </>
    )
}

export default VideoCards
