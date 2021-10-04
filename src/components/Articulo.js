
import classes from '../components/Articulo.module.css'
import Card from './ui/Card'

function Item(props) {

    return (
        <Card>
            <div className={classes.container}>
                <a href={props.url} className={classes.url} target="_blank" rel="noreferrer">
                    <div>
                        <img src={(props.imagenNota)} alt="imagen nota" className={classes.imagenNota}></img>
                        <div className={classes.volanta_titulo}>
                            <h2 className={classes.volanta}>{props.volanta}</h2>
                            <h3 className={classes.titulo}>{props.titulo}</h3>
                        </div>
                        <h4 className={classes.bajada}>{props.bajada}</h4>


                        <div className={classes.imgContainer}>
                            <img src={props.imagenAutor} alt="imagen nota" className={classes.imagenAutor}></img>
                        </div>
                        <div className={classes.marquesina_autor}>
                            <h5 className={classes.marquesina}>{props.marquesina}</h5>
                            <h5 className={classes.nombreAutor}>{props.nombreAutor}</h5>
                        </div>
                    </div>
                </a>
            </div>
        </Card>

    )
}

export default Item