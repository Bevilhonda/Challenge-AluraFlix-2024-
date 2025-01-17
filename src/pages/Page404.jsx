import '../css/estilos.css'
import LogoMenu from '../img/LogoMenu.png'

const Page404 = ()=>{
    return (
        <main className="error">
            <div className='error__mensaje'>
                <h1>404</h1>
                <p>Esta página não existe</p>
                <img src={ LogoMenu } alt="Logo AluraFlix" />
            </div>

        </main>
    )
}

export default Page404