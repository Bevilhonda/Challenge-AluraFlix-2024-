import ListaCategorias from "../components/ListaCategorias"
import Apresentacao from "../components/Apresentacao"


const Home = () =>{

    return (
        <>  
            <Apresentacao />
            <ListaCategorias url='/categorias'/>
        </>
    )
    
}

export default Home