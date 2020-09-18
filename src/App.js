import React, { useState, useEffect } from 'react';
import Pregunta from './Components/Pregunta'
import Formulario from './Components/Formulario';
import Listado from './Components/Listado'
import Control from './Components/ControlPresupuesto'

function App() {


  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  const [pregunta, actualizarPregunta] = useState(true)
  const [gastos, guardaGasto] = useState([])
  const [gasto, analizarGasto ] = useState({})
  const [actualizar, actualizarGasto] = useState(false)

  useEffect(()=>{

    if(actualizar){
      guardaGasto([
        ...gastos,
        gasto
        ])
    }
    //Cambiar el estado del restante

    var calcular = (restante - gasto.cantidad)
    guardarRestante(calcular)

   actualizarGasto(false)

  },[gasto])


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className='contenido-principal contenido' >
          {pregunta? (    <Pregunta
          guardarPresupuesto={guardarPresupuesto}
          guardarRestante={guardarRestante}
          actualizarPregunta={actualizarPregunta}
          />): (   
          <div className='row'>
          <div className='one-half column'>
           <Formulario  
           analizarGasto={analizarGasto}
           actualizarGasto={actualizarGasto}
           />
          </div>
          <div className='one-half column' >
           <Listado
           gastos={gastos}
           />

           <Control
           presupuesto={presupuesto}
           restante={restante}
           />
          </div>
        </div>)}
         
       
        </div>
      </header>
    </div>
  );
}

export default App;
