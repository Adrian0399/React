
export const FormLoginEmail = () => {
  return (
    <>
    <body className="text-center">
      <main className="form-signin w-100 m-auto">
          <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Ingresar su correo</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label>Correo electronico</label>
          </div>

          <button 
            type="submit"
            className="w-100 btn btn-lg btn-primary mt-3"
          > Continuar
          </button>
          
          <p className="mt-5 mb-3 text-muted">© 2017–2022</p>

      </main>
    </body>
    </>
  )
}
