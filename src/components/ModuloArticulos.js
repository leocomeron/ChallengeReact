import ArticulosDisponibles from './ArticulosDisponibles'
import classes from './ModuloArticulos.module.css'

function ModuloArticulos() {
    return (
        <section>
            <div className={classes.row}>
                <div className={classes.col8}>
                    <ArticulosDisponibles /> {/* DEBERIA EVALUAR SOLO 1ER OBJETO/ARTÍCULO */}
                    <ArticulosDisponibles /> {/* DEBERIA EVALUAR SOLO 2DO OBJETO/ARTÍCULO */}
                </div>
                <div className={classes.col4}>
                    <ArticulosDisponibles /> {/* DEBERIA EVALUAR SOLO 3ER OBJETO/ARTÍCULO, y así sucesivamente. */}
                    <ArticulosDisponibles />
                </div>
            </div>
            <div className={classes.row}>
                <div className={classes.col6}>
                    <ArticulosDisponibles />
                    <ArticulosDisponibles />
                </div>
            </div>
        </section>
    )
}

export default ModuloArticulos