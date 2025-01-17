import { Link } from 'react-router-dom'
import '../css/estilos.css'
import LogoAluraFlix from '../img/LogoFooter.png'
import ButtonLink from './ButtonLink'



const Footer = () => {

    const estilos = {
        color: '#F5F5F5',
        backgroundColor: '#2A7AE4',
        width: '100%',
        display: 'flex',
        fontSize: '21px',
        fontWeight: '600',
        flexdirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 0'
    }

    return (
        <footer>
            <div className='footer__div'>
                <ButtonLink id='footer__btn' className='footer__btn' to='' titulo='Novo Video' styles={estilos} />
            </div>

            <img className='footer__logo' src={LogoAluraFlix} alt="Logo AluraFlix" />
            <p className='footer__paragrafo'>
                
                <Link to='https://www.linkedin.com/in/marcelo-bevilacqua-de-andrade-443097235/'
                    target='_blank'>
                    <span className='footer__span'> Marcelo Bevilacqua de Andrade </span>
                </Link></p>
        </footer>
    )
}

export default Footer