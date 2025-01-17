import { useState, useEffect } from "react"
import { obterDados } from "../api/api"

const ListaOpcao = ({titulo, required, error, valor, actualizarValor: atualizarValor}) => {
    
    const [categorias,setCategorias] = useState([])

    useEffect(()=>{
        obterDados('/categories',setCategorias)
    },[])

    const atualizar = (e) => {
        atualizarValor(e.target.value)
    }
    
    return (
        <div className="form__input">
            <div className="form__input inputbackground">
                <label className='form__label' htmlFor="categoria">{titulo}</label>
                <select name="categoria" id="categoria" required={required} value={valor} onChange={atualizar}>
                    <option value="" disabled defaultValue='' hidden>** Escolha uma categoria **</option>
                    {
                        categorias.map((categoria, i) => {
                            return(
                                <option value={categoria.name} key={i}>{categoria.name}</option>
                            )
                        })
                    }
                </select>
            </div>
            <span className="form__mensagem">{error}</span>
        </div>
    )
}

export default ListaOpcao