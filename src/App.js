import React,{Fragment,useState} from 'react';

//importaciones de los componentes
import Formulario from './Components/Formulario.jsx'
import Citas from './Components/Citas.jsx'

function App() {


  
  //arreglo de las citas
  const [citas, setCitas] =useState([])

  //funcion de las cits actuales y las nuevas
  const CrearCita = cita=>{
    setCitas([
      ...citas,
      cita]
    )
  }

  //Funcion que elimina un cita
  const ElminarCita = id =>{
    const nuevasCitas =citas.filter(cita => cita.id !== id )

    setCitas(nuevasCitas)
  }
//condicional de las notificaciones
  const titulo =citas.length === 0 ? "No hay Citas" : "Administra tus Citas";
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario CrearCita={CrearCita} />
          </div>
          <div className="one-half column">
              <h2>{titulo}</h2>

            {citas.map((cita) => (
              <Citas key={cita.id} cita={cita} eliminarCita={ElminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
