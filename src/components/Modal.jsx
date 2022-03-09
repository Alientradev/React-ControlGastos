import { useState, useEffect } from 'react'
import IconoCerrar from '../img/cerrar.svg'
import Mensaje from '../components/Mensaje'

const Modal = ( { 
    setModal, 
    animarModal, 
    setAnimarModal,
    guardarGasto,
    gastoEditar,
    setGastoEditar
} ) => {

    const [mensaje , setMensaje] = useState('') 
    const [nombreGasto, setNombreGasto] = useState('')
    const [cantidadGasto, setCantidadGasto] = useState('')
    const [categoriaGasto, setCategoriaGasto] = useState('')
    const [id, setId] = useState('')
    const [fecha, setFecha] = useState('')

    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0){
            setNombreGasto(gastoEditar.nombreGasto)
            setCantidadGasto(gastoEditar.cantidadGasto)
            setCategoriaGasto(gastoEditar.categoriaGasto)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    },[]);

    const cerrarModal = () => {
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout( ()=> {
            setModal(false)
        }, 300)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if([nombreGasto, cantidadGasto, categoriaGasto].includes('')){
            setMensaje('Todos los campos son obligatorios')
            
            setTimeout( ()=> {
                setMensaje('')
            }, 3000)
            
            return;
        }

        guardarGasto({
            nombreGasto,
            cantidadGasto,
            categoriaGasto,
            fecha,
            id,
        })

    }

    return (
        <div className="modal">
            <div className='cerrar-modal'>
                <img 
                    src={IconoCerrar} 
                    alt='Cerrar Ventana'
                    onClick={cerrarModal}
                />
            </div>

            <form
                onSubmit={handleSubmit}
                className={`formulario ${ animarModal ? 'animar' : 'cerrar'}`}>
                <legend>{gastoEditar.nombreGasto ? 'Editar Gasto':'Nuevo Gasto'}</legend>

                { mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

                <div className='campo'>
                    <label htmlFor='nombre'>Nuevo Gasto</label>
                    <input 
                        type='text' 
                        id='nombre'
                        placeholder='Ingresa el nombre del gasto'
                        value={nombreGasto}
                        onChange={ e => setNombreGasto(e.target.value) }
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='cantidad'>Cantidad</label>
                    <input 
                        type='number' 
                        id='cantidad'
                        placeholder='Ingrese la cantidad'
                        value={cantidadGasto}
                        onChange={ e => setCantidadGasto(Number(e.target.value)) } 
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='categoria'>Categoría del gasto</label>
                    <select
                        id='categoria'
                        value={categoriaGasto}
                        onChange={ e => setCategoriaGasto(e.target.value) } 
                    >
                        <option value=''> -- Seleccionar Categoría -- </option>
                        <option value='ahorro'> Ahorro </option> 
                        <option value='comida'> Comida </option> 
                        <option value='casa'> Casa </option> 
                        <option value='gastos'> Gastos Varios </option> 
                        <option value='ocio'> Entretenimiento </option> 
                        <option value='salud'> Salud </option> 
                        <option value='suscripciones'> Suscripciones </option>
                    </select>
                </div>

                <input
                    type='submit'
                    value={gastoEditar.nombreGasto ? 'Guardar Cambios':'Añadir Gasto'}
                />

            </form>
        </div>
    )
}

export default Modal