import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ( {
    presupuesto,
    setPresupuesto,
    gastos,
    setGastos,
    setEsPresupuestoValido
} ) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    const [porcentaje, setPorcentaje] = useState(0)

    useEffect( () => { 
        const totalGastos= gastos.reduce( (total,gasto) => gasto.cantidadGasto + total, 0)
        const totalDisponible =  presupuesto - totalGastos;

        //Calculo del porcentaje
        const nuevoPorcentaje = ( ( (presupuesto - totalDisponible) / presupuesto ) * 100 ).toFixed(1)

        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }, 1000)
        
        setGastado(totalGastos);
        setDisponible(totalDisponible);
    }, [gastos])

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    } 

    const handleResetApp = () => {
        const resultado = confirm('Deseas reiniciar la Aplicación y resetear el prespuesto y los gastos?')

        if(resultado){
            //Reiniciar
            setPresupuesto(0)
            setGastos([])
            setEsPresupuestoValido(false)
        }
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                    background
                    backgroundPadding={5}
                    styles={buildStyles({
                        backgroundColor: "#3B82F6",
                        textColor: porcentaje > 100 ? "red" : "#fff",
                        pathColor: porcentaje > 100 ? "red" : "#fff",
                        trailColor: "transparent"
                    })} 
                />
            </div>
            
            <div className='contenido-presupuesto'>
                <button className='reset-app'
                        type='button'
                        onClick={handleResetApp}>
                    Reiniciar Aplicación 
                </button>
                <p>
                    <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
                </p>
                <p className={`${disponible < 0 ? 'negativo' : '' }`}>
                    <span>Disponible: </span>{formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado: </span>{formatearCantidad(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto