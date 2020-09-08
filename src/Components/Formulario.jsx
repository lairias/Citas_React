import React, { Fragment, useState } from 'react'
import uuid from 'react-uuid'

const Formulario = ({ CrearCita }) =>
{
    //secciones de los State
    const [cita, setCita] = useState({
        mascota: "",
        propietario: "",
        telefono: "",
        fecha: "",
        hora: "",
        sintomas: "",
    });
    //State de los errores
    const [error, setError] = useState(false);
    //funcion que ejecut cuando se escribe dento de un input
    const actualizarState = (e) =>
    {
        setCita({
            ...cita,
            [e.target.name]: e.target.value,
        });
    };

    const { mascota, propietario, fecha, hora, sintomas, telefono } = cita;

    const submitCita = (e) =>
    {
        e.preventDefault();
        console.log("click en el button");

        //Validacion del formulario
        if (
            mascota.trim() === "" ||
            propietario.trim() === "" ||
            fecha.trim() === "" ||
            hora.trim() === "" ||
            sintomas.trim() === "" ||
            telefono.trim() === ""
        )
        {
            setError(true);
            setTimeout(() =>
            {
                setError(false);
            }, 3000);
        }

        //Asignar un ID
        cita.id = uuid();

        //Crear una Cuenta
        CrearCita(cita)
        //formatiar el from
        setCita({
          mascota: "",
          propietario: "",
          telefono: "",
          fecha: "",
          hora: "",
          sintomas: "",
        });

    };

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {error ? <p className="cita">Todos los campos son necesarios</p> : null}
            <form onSubmit={submitCita}>
                <label>Nombre de Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre de Propietario</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Propietario"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Nombre de Telefono</label>
                <input
                    type="tel"
                    name="telefono"
                    className="u-full-width"
                    placeholder="Nombre Telefono"
                    onChange={actualizarState}
                    value={telefono}
                />
                <label>Nombre de Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Nombre de hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button type="submit" className="u-full-width button-primary">
                    Guardar
        </button>
            </form>
        </Fragment>
    );
};
export default Formulario;
