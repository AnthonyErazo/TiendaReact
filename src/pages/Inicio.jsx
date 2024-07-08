import Comentarios from "../home/Comentarios"
import Envios from "../home/Envios"
import MainBanner from "../home/MainBanner"
import Nosotros from "../home/Nosotros"
import Novedades from "../home/Novedades"

function Inicio() {
    return (
        <>
            <MainBanner/>
            <Nosotros/>
            <Novedades/>
            <Comentarios />
            <Envios/>
        </>
    )
}

export default Inicio