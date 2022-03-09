import { dateFormat } from "../helpers";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoVarios from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'


const Gasto = ( {gasto, setGastoEditar, eliminarGasto} ) => {

    const {categoriaGasto, nombreGasto, cantidadGasto, id, fecha} = gasto;

    const diccionarioIconos = {
        ahorro: IconoAhorro,
        casa: IconoCasa,
        comida: IconoComida,
        gastos: IconoVarios,
        entretenimiento: IconoOcio,
        salud: IconoSalud,
        suscripciones: IconoSuscripciones
    }

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto) }>
                Editar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
                onClick={() => eliminarGasto(id)}
                destructive = {true}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
            <div className="gasto sombra">
                <div className="contenido-gasto">
                    <img
                        src={diccionarioIconos[categoriaGasto]}
                        alt="Icono Gasto"
                    />
                <div className="descripcion-gasto">
                    <p className="categoria">
                        {categoriaGasto}
                    </p>
                    <p className="nombre-gasto">
                        {nombreGasto}
                    </p> 
                    <p className="fecha-gasto">
                        {dateFormat(fecha)}
                    </p>
                </div>
            </div>
            <div className="cantidad-gasto">
                    ${cantidadGasto}
            </div>
        </div>
            </SwipeableListItem>
        </SwipeableList> 
    )
}

export default Gasto