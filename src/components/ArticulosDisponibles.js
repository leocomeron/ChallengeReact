import Articulo from './Articulo'
import DUMMY_DATA from '../data/allData'

function ArticulosDisponibles() {

    const articles = DUMMY_DATA.map((article) => (
        <Articulo
            key={article.id}
            volanta={article.volanta}
            titulo={article.titulo}
            bajada={article.bajada}
            imagenNota={article.imagenNota}
            marquesina={article.marquesina}
            nombreAutor={article.nombreAutor}
            imagenAutor={article.imagenAutor}
            url={article.url}
        />
    ))
    console.log(articles)
    return (
        <div>{articles}</div>
    )
}

export default ArticulosDisponibles

