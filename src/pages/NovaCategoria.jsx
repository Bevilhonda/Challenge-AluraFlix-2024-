import { useState, useEffect } from 'react'
import ButtonForm from '../components/ButtonForm'
import CampoTexto from '../components/CampoTexto'
import '../css/estilos.css'
import TextArea from '../components/TextArea'
import CampoCor from '../components/CampoCor'
import { atualizarDados,  obterDados } from '../api/api'
import TabelaCategorias from '../components/TabelaCategorias'

const NovaCategoria = () =>{
    
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [cor, setCor] = useState('')

    const [AtualizarId, setAtualizarId] = useState('11')

    const [videos, setVideos] = useState([])
    const [categorias,setCategorias] = useState([])

 
    const [solicitarDados, setSolicitarDados] = useState(false)
    
    useEffect(() => {
            obterDados('/videos',setVideos)
            obterDados('/categories',setCategorias)
            setSolicitarDados(false)
        },[solicitarDados])
    
     const atualizarExcluir = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setNome('')
            setDescricao('')
            setCor('')
    }

    const atualizarVideo = (e) => {
        e.preventDefault()
        
        const enviarOsDados = {
                nombre: nome,
                descripcion: descricao,
                color: cor,
                id: AtualizarId
            }


        if(categorias.some((categoria) => categoria.id === enviarOsDados.id))
        {
            const url = `/categories/${enviarOsDados.id}`
            console.log(url)

            const datosAActualizar = {
                id: enviarOsDados.id,
                name: nome,
                description: descricao,
                color: cor,
            }
            console.log(datosAActualizar)
            atualizarDados(url,datosAActualizar)
           
        }else {
            

            console.log(enviarOsDados)
            enviarOsDados('/categories',enviarOsDados);
            setSolicitarDados(true);
            atualizarExcluir()
        }

        
    }

    const manejarEditar = (id, nombre, descripcion, color) => {
        
        
        window.scrollTo({ top: 0, behavior: "smooth" });
        setAtualizarId(id)
        setNome(nombre);
        setDescricao(descripcion);
        setCor(color);
        
    }

    const EstilosBtnGuardar = {
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
                    <h2 className="novovideo__titulo">Nova categoria</h2>
                    <form className='form' action="" onSubmit={atualizarVideo}>
                        
                        <CampoTexto
                            id='txt1'
                            titulo='Nome' 
                            error='' 
                            required 
                            valor={nome}
                            actualizarValor={setNome}    
                        />

                        <TextArea 
                            titulo='Descrição' 
                            error='' 
                            required
                            valor={descricao}
                            actualizarValor={setDescricao} 
                        />

                        <CampoCor 
                            titulo='Cor' 
                            error='' 
                            required
                            valor={cor}
                            actualizarValor={setCor}
                        />

                        <div className="botao">
                            <ButtonForm tipo='submit' titulo='Salvar' styles={EstilosBtnGuardar}/>
                            <ButtonForm tipo='reset' titulo='Limpar' styles={EstilosBtnExcluir} manejarClic={()=>atualizarExcluir()}/>
                        </div>

                    </form>

                    <TabelaCategorias 
                        videos={videos}
                        categorias={categorias}
                        setSolicitarDatos={()=>setSolicitarDados(true)}
                        manejarEditar={manejarEditar}
                    />

                </div>
            </main>
        </>
        
        
        
    )
    
}

export default NovaCategoria