
export const GeolocationInfoHome = () => {
  return (
    <div >
      <div className="content card card-form mt-5">
        <div className="">
          <img className="" />
        </div>
        <div className="text-center">
          <img className="" />
        </div>
        <h1 className="">¡Oops, Ocurrió un problema!</h1>
        <p className="">
        En cumplimiento a las disposiciones de la CNBV y para tu seguridad es necesario obtener 
        la localización de tu dispositivo y no lo hemos conseguido. Puedes enviarnos un correo a <a href="#">atencionempresarial@klu.mx</a> o hacer click en el botón para intentar nuevamente
        </p>
        <div className="">
          <button onClick={()=>{window.location.reload()}} className="" >
            Intenta nuevamente
          </button>
        </div>
      </div>
    </div>
  );
};
