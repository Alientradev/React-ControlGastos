
import {useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ( {
                            presupuesto, 
                            setPresupuesto, 
                            setEsPresupuestoValido} ) => {

    const [mensaje, setMensaje] = useState('')


    const handlePresupuesto = (e) => {
        e.preventDefault()

        if(!presupuesto || presupuesto <= 0){
            setMensaje('No es un presupuesto valido')

            setTimeout( ()=> {
                setMensaje('');
            },2000)

            return
        }

        setEsPresupuestoValido(true)
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form
                onSubmit={handlePresupuesto}
                className="formulario">
                <div className="campo">
                    <label>Ingresar presupuesto</label>
                    <input
                        className="nuevo-presupuesto"
                        type="number"
                        placeholder={presupuesto}
                        onChange={ (e) => setPresupuesto(Number(e.target.value)) }
                    />
                </div>
                <input
                    type="submit"
                    value="añadir"
                />
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto