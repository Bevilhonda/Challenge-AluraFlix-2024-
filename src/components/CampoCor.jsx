import '../css/estilos.css'

const CampoCor = ({titulo, required, error, valor, actualizarValor: atualizarValor }) => {
    
    const atualizarCampo = (e) => {
        atualizarValor(e.target.value)
    }

    return (
        <div className="form__input ">
            <div className="form__input inputbackground">
            <label className='form__label' htmlFor="">{titulo}</label>
        <input
            required={required}
            type='color'
            value={valor}
            onChange={atualizarCampo}
        />
        </div>
            <span className="form__mensagem">{error}</span>
        </div>
   )
}

export default CampoCor