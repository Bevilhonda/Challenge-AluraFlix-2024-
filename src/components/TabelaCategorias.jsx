import '../css/estilos.css'
import { excluirDados } from '../api/api';



const TablaCategorias = ({ videos, categorias, setSolicitarDatos, manejarEditar: editar }) => {

    const Remover = (url, nomeCategoria) => {
        if (videos.some(video => video.categorie === nomeCategoria)) {
            alert(` NÃO É POSSÍVEL REMOVER A CATEGORIA!\n *Existen videos associados a categoria "${nomeCategoria.toUpperCase()}".\n *Para remover a categoria primero elimine todos os videos relacionados.`)
        } else {
            excluirDados(url)
            alert('Categoria Eliminada!...')
            setSolicitarDatos(true)
        }
    }

    return (
        <table>
            <thead>
                <tr>
                    <td>Nome</td>
                    <td>Descrição</td>
                    <td>Editar</td>
                    <td>Remover</td>
                </tr>
            </thead>
            <tbody>
                {
                    categorias.map((categoria, i) => {
                        return (
                            <tr key={i}>
                                <td>{categoria.nombre}</td>
                                <td>{categoria.description}</td>
                                <td className="table__editar" ><button type='reset' className='table_btn' onClick={() => editar(categoria.id, categoria.name, categoria.description, categoria.color)}>Editar</button></td>
                                <td className="table__remover"><button type='reset' className='table_btn' onClick={() => Remover(`/categories/${categoria.id}`, categoria.nombre)}>Remover</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default TablaCategorias