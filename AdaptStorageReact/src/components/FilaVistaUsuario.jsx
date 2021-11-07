import React, { useState } from "react";

const URL_REGISTRO = "http://localhost/AdaptStorage/modificar.php";

function FilaVistaUsuario({ usuario }) {
  const [Nombre, setNombre] = useState(usuario.nombre);
  const [Correo, setCorreo] = useState(usuario.usuario);
  const [Nivel, setNivel] = useState(usuario.idTipoUsuario);
  const [IdUsuario, setIdUsuario] = useState(usuario.id);

  const handleChangeNivel = (event) => {
      setNivel((Nivel) => event.target.value);
      event.target.className = "form-control cambiado";
  };

  //Función Mandar datos a PHP
  const enviarData = async (url, data) => {
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(resp);
  const json = await resp.json();
  console.log(json);

  return json;

};
  const actualizarUsuario = async () =>{
    const data = {
      IdUsuario,
      Nombre,
      Correo,
      Nivel,
    };

    console.log("ID: " + IdUsuario + "Nombre: " + Nombre + "Correo: "+ Correo + "Nivel: "  + Nivel);
    const respuestaJson = await enviarData(URL_REGISTRO, data);
    console.log(respuestaJson);
    
  }

  const eliminarUsuario = () =>{
    console.log(Nombre + " eliminado");
  }

  return (
    <tr style={{ borderBottom: "solid 0.05rem #bbb" }}>
      <th
        scope="row" 
        style={{
          paddingTop: "1rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {Nombre}
      </th>
      <td style={{ fontWeight: 400 }}>
      <style>
          {
            "\
                select.cambiado{\
                    border-bottom: solid orange;\
                }\
                \
                "
          }
        </style>
        <select id="nivel" onChange={handleChangeNivel} class="form-control" style={{ width: "2rem" }}>
          {Nivel == 1 ? <option value='1' selected>1</option> : <option value='1'>1</option>}
          {Nivel == 2 ? <option value='2' selected>2</option> : <option value='2'>2</option>}
          {Nivel == 3 ? <option value='3' selected>3</option> : <option value='3'>3</option>}
          {Nivel == 4 ? <option value='4' selected>4</option> : <option value='4'>4</option>}
          {Nivel == 5 ? <option value='5' selected>5</option> : <option value='5'>5</option>}
        </select>
      </td>
      <td
        style={{
          paddingTop: "1rem",
          fontWeight: 400,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {Correo}
      </td>
      <td
        style={{
          paddingTop: "1rem",
          display: "flex",
          fontWeight: 400,
          justifyContent: "center",
          borderBottom: "none",
        }}
      >
        <button
          type="button"
          onClick={actualizarUsuario}
          className="btn btn-success btn-sm"
          style={{ textTransform: "capitalize" }}
        >
          Guardar
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={eliminarUsuario}
          style={{
            textTransform: "capitalize",
            marginLeft: "0.5rem",
          }}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default FilaVistaUsuario;