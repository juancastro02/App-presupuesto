import React, {Fragment} from 'react'
import {agregar} from './Helper'
const Control =({presupuesto, restante})=>{
    return(
    <Fragment>
        <div className='alert alert-primary' >
         Presupuesto: $ {presupuesto}
        </div>
        <div className={agregar(presupuesto, restante)} >
         Restante: $ {restante}
        </div>
    </Fragment>
    )
}

export default Control