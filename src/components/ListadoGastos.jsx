import Gasto from "./Gasto"

const ListadoGastos = ( {
    gastos, 
    setGastoEditar, 
    eliminarGasto, 
    filtro, 
    gastosFiltrados} ) => {

    return ( 
        <div className="listado-gastos contenedor">

            { filtro ? (
                    <>
                        <h2>{gastosFiltrados.length ? 'Gastos (Para editar o eliminar un gasto arrastra el gasto a la derecha o a la izquierda)' : 'No Hay Gastos en esta categoría'}</h2>
                        {gastosFiltrados.map( gasto => (
                            <Gasto 
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <h2>{gastos.length ? 'Gastos (Para editar o eliminar un gasto arrastra el gastos a la derecha o a la izquierda)' : 'No Hay Gastos aún'}</h2>
                        {gastos.map( gasto => (
                            <Gasto 
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                )
            }

        </div>
    )
}

export default ListadoGastos