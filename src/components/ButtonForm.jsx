import '../css/estilos.css'

const ButtonForm = ({tipo, titulo, styles, Click}) => {
    return <button className='btn_form' type={tipo} 
        onClick={Click}
        style={styles}>
           {titulo}
        </button>
}

export default ButtonForm