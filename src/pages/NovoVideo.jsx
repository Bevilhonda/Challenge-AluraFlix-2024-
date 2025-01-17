import { useState } from "react"
import ButtonLink from "../components/ButtonLink"
import ButtonForm from "../components/ButtonForm"
import CampoTexto from "../components/CampoTexto"
import ListaOpcao from "../components/ListaOpcoes"
import TextArea from "../components/TextArea"
import { v4 as uuidv4 } from "uuid"

const NovoVideo = () =>{

    const[nome,setNome] = useState('')
    const[urlVideo,setUrlVideo] = useState('')
    const[urlImagen,setUrlImagen] = useState('')
    const[categoria,setCategoria] = useState('')
    const[descricao,setDescricao] = useState('')
    

    const LimparVideos = () => {
        setNome('')
        setUrlVideo('')
        setUrlImagen('')
        setCategoria('** Escolha uma categoria **')
        setDescricao('')
    }

    const editarVideo = (e) =>{
        e.preventDefault()
        const id = uuidv4()
        let enviarDadosVideo = {
            title: nome,
            url: urlVideo,
            image: urlImagen,
            description: descricao,
            categorie: categoria,
            id
        }
        enviarDadosVideo('/videos',enviarDadosVideo)
        LimparVideos()
    }

    const EstilosBtnNovaCategoria = {
        color: '#ffffff',
        background: '#2A7AE4',
        fontSize: '21px',
        fontWeight: '600',
        width: '254px',
        height: '54px',
        borderRadius: '4px',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const EstilosBtnSalvar = {
        display: 'inline-block',
        color: '#ffffff',
        background: '#2A7AE4',
        fontSize: '21px',
        fontWeight: '600',
        width: '180px',
        height: '54px',
        borderRadius: '4px',
        border: 'none'
    }

    const EstilosBtnExcluir = {
        display: 'inline-block',
        color: '#000000',
        background: '#9E9E9E',
        fontSize: '21px',
        fontWeight: '600',
        width: '180px',
        height: '54px',
        borderRadius: '4px',
        border: 'none'
    }

    return (
        <>
            <main className="novovideo">
                <div className="container">
                    <h2 className="novovideo__titulo">Novo Video</h2>
                    
                    <form className='form' action="" onSubmit={editarVideo}>
                        
                        <CampoTexto 
                            titulo='Título'
                            mensaje="" 
                            required={true} 
                            valor={nome} 
                            actualizarValor={setNome} 
                        />
                        
                        <CampoTexto 
                            titulo='Link do video' 
                            mensaje="" 
                            required={true} 
                            valor={urlVideo} 
                            actualizarValor={setUrlVideo} 
                        />

                        <CampoTexto 
                            titulo='Link da imagem do video' 
                            mensaje="" 
                            required={true} 
                            valor={urlImagen} 
                            actualizarValor={setUrlImagen} 
                        />

                        <ListaOpcao 
                            titulo='Categoria' 
                            mensaje="" 
                            required={true} 
                            valor={categoria} 
                            actualizarValor={setCategoria} 
                        />

                        <TextArea 
                            titulo='Descrição' 
                            mensaje='' 
                            required={true} 
                            valor={descricao} 
                            actualizarValor={setDescricao} 
                        />

                        <div className="barra__botao">
                            <div className="botao">
                                <ButtonForm tipo='submit' titulo='Salvar' styles={EstilosBtnSalvar} />
                                <ButtonForm tipo='reset' titulo='Excluir' styles={EstilosBtnExcluir} manejarClic={()=>LimparVideos()}/>
                            </div>
                            <ButtonLink to='/novacategoria' titulo='Nova Categoria' styles={EstilosBtnNovaCategoria}/>
                        </div>

                    </form>

                </div>
            </main>
        </>
        
        
        
    )
    
}

export default NovoVideo