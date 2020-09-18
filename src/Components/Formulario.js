import React, {useState} from 'react'
import Error from './Error'
import shortid from 'shortid'

const Formulario =({analizarGasto, actualizarGasto})=>{

    const [cantidad, setCantidad] = useState(0)
    const [nombre, setNombre] =useState('')
    const [error, guardarError] = useState(false)

    const submit = (e)=>{
    e.preventDefault()

    if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
        guardarError(true)
        return;
    }
    guardarError(false)

    const gasto = {
        nombre,
        cantidad,
        shortid: shortid.generate()
    }
    analizarGasto(gasto)
    actualizarGasto(true)

    setCantidad(0)
    setNombre('')
    }

    return(
            <form
            onSubmit={submit}
            >
                <div className='campo' >
               <h2>Agrega tus gastos aquí</h2>
               {error ? <Error mensaje='Ambos campos son requeridos o presupuesto invalido' /> : null}
                <label>Nombre Gasto</label>
                <input
                type='text'
                placeholder='Ej. Transporte'
                className='u-full-width'
                value={nombre}
                onChange={e=> setNombre(e.target.value)}
                /></div>
                 <div className='campo' >
                <label>Cantidad Gasto</label>
                <input
                type='number'
                placeholder='Ej. 300'
                className='u-full-width'
                value={cantidad}
                onChange={e=> setCantidad(parseInt(e.target.value))}
                /></div>
                <input
                type='submit'
                className='button-primary u-full-width'
                value='Agregar gasto'
                />
            </form>
        
    )
}

export default Formulario