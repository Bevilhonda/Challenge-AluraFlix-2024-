import '../css/estilos.css'

const TextArea = ({titulo, required, error, valor, actualizarValor: atualizarValor}) => {

    const atualizaVideo = (e) => {
        atualizarValor(e.target.value)
    }

    return (
        <div className="form__input ">
            <div className="form__input inputbackground">
                <label className='form__label' htmlFor="descripcion" >{titulo}</label>
                <textarea 
                    name="descrição" 
                    id="descripcion" 
                    cols="30" rows="4"
                    required={required}
                    value={valor}
                    onChange={atualizaVideo}>
                </textarea>
            </div>
            <span className="form__mensaje">{error}</span>
        </div>
    );
}

export default TextArea