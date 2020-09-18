import React,{Fragment, useState} from 'react'
import Error from './Error'

const Pregunta =({guardarPresupuesto, guardarRestante, actualizarPregunta})=>{

    const [cantidad, guardarCantidad] = useState(0)

    const [error, setError] = useState(false)

    const handleChange = (e)=>{
        guardarCantidad(parseInt(e.target.value))
    }

    const submit = (e)=>{
        e.preventDefault()

        if(cantidad < 1 || isNaN(cantidad)){
            setError(true)
            return
        }

        setError(false)
        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)
        actualizarPregunta(false)
    }

    return(
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El Presupuesto no es valido" /> : null}
            <form
            onSubmit={submit}
            >
                <input
                type='number'
                className='u-full-width'
                placeholder='Coloca tu presupuesto'
                onChange={handleChange}
                />
                <input
                type='submit'
                className='button-primary u-full-width'
                value='Definir presupuesto'
                />
            </form>
        </Fragment>
    )
}


export default Pregunta