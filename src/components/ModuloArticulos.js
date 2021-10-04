import ArticulosDisponibles from './ArticulosDisponibles'
import classes from './ModuloArticulos.module.css'

function ModuloArticulos() {

    return (
        <section>
            <div className={classes.row}>
                <div className={classes.col8}>
                    <ArticulosDisponibles />
                    <ArticulosDisponibles />
                </div>
                <div className={classes.col4}>
                    <ArticulosDisponibles />
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