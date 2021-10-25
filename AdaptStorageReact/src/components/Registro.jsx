import React, { Fragment } from 'react'

export function Registro({mostrarLogin}) {

    return (
        <Fragment>
            <div>
                <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "50px",
                }}
                >
                <div className="card mb-3" style={{ background: "#D0DFF2" }}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    fill="currentColor"
                    className="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                    style={{ marginLeft: 15, marginTop: 15 }}
                    >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                    </svg>
                    <h4 style={{ textAlign: "center", marginTop: "10px" }}>Registro</h4>
                    <div className="card-body">
                    {/*FORMULARIO DE REGISTRO DE USUARIO*/}
                    <form>
                        <fieldset>
                        <div className="form-group row">
                            <label for="email" className="col-sm-2 col-form-label">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                fill="currentColor"
                                class="bi bi-person"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg>
                            </label>
                            <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="usuario"
                                aria-describedby="emailHelp"
                                placeholder="Usuario"
                                style={{
                                textDecorationColor: "white",
                                //padding: 0,
                                }}
                            />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="email" className="col-sm-2 col-form-label">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                            </svg>
                            </label>
                            <div className="col-sm-10">
                            <input
                                type="email"
                                className="form-control"
                                id="correo"
                                aria-describedby="emailHelp"
                                placeholder="Correo"
                                style={{
                                textDecorationColor: "white",
                                //padding: 0,
                                }}
                            />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="email" className="col-sm-2 col-form-label">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                fill="currentColor"
                                class="bi bi-lock"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                            </svg>
                            </label>
                            <div className="col-sm-10">
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Contraseña"
                            />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="email" className="col-sm-2 col-form-label">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30"fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                            </svg>
                            </label>
                            <div className="col-sm-10">
                            <input
                                type="password"
                                className="form-control"
                                id="confirm_password"
                                placeholder="Confirmar contraseña"
                            />
                            </div>
                        </div>
                        <br/>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button
                            type="submit"
                            className="btn"
                            style={{
                                background: "#5FF27A",
                                color: "white",
                                fontWeight: 400,
                            }}
                            >
                            Registrar
                            </button>
                        </div>
                        </fieldset>
                    </form>

                    <div style={{ marginTop: "20%" }}>
                        <style>
                        {
                            "\
                                h6:hover{\
                                text-decoration: solid underline 2px\
                                }\
                            "
                        }
                        </style>
                        <a onClick={mostrarLogin} style={{ textDecoration: "none", cursor: "pointer"}}>
                        <h6
                            className="card-subtitle text-muted"
                            style={{
                            textAlign: "left",
                            fontWeight: 400,
                            fontSize: 14,
                            }}
                        >
                            ¿Ya tienes cuenta? <b>Inicia sesión.</b>
                        </h6>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>


        </Fragment>
    )
}

export default Registro;