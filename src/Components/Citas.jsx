import React from 'react';

const Citas = ({ cita, eliminarCita }) => (
  <div className="cita">
    <p>
      <span>Mascota:{cita.mascota}</span>
    </p>
    <p>
      <span>Propietario:{cita.propietario}</span>
    </p>
    <p>
      <span>Fecha:{cita.fecha}</span>
    </p>
    <p>
      <span>Hora:{cita.hora}</span>
    </p>
    <p>
      <span>sintomsa:{cita.sintomas}</span>
    </p>
    <button className="button eliminar u-full-width"
    onClick={()=>{
        eliminarCita(cita.id)
    }}
    
    > Eliinar &times;</button>
  </div>
);

export default Citas;