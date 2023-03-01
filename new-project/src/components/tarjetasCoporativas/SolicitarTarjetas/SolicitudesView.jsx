import { FormSolicitud } from "./FormSolicitud"
import { MisSolicitudes } from "./MisSolicitudes"


export const SolicitudesView = () => {
  return (
    <>
        <FormSolicitud />            
        <div className="separator"></div>
        <MisSolicitudes />
    </>
  )
}
