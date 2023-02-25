

export const FormLoginPass = ({ nameWithPoints }) => {
  return (
    <>
    <body className="text-center">
      <main className="form-signin w-100 m-auto">
          
          <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">
            Bienvenido: {nameWithPoints}!
          </h1>
          <h1 className="h3 mb-3 fw-normal">Ingrese su contraseña</h1>


          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label>Contraseña</label>
          </div>

          <button 
            type="submit"
            className="w-100 btn btn-lg btn-primary mt-3"
          > Iniciar sesión
          </button>

      </main>
    </body>
    </>
  )
}
