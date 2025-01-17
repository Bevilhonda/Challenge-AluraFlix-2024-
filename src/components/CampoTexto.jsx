import '../css/estilos.css'

const CampoTexto = ({titulo, required, error, valor, actualizarValor }) => {
    
    const lidarComAlteracao = (e) => {
        actualizarValor(e.target.value)
    }

    return (
        <div className="form__input ">
            <div className="form__input inputbackground">
            <label className='form__label' htmlFor="">{titulo}</label>
        <input
            required={required}
            value={valor}
            onChange={lidarComAlteracao}
        />
        </div>
            <span className="form__mensaje">{error}</span>
        </div>
   )
}

export default CampoTexto



