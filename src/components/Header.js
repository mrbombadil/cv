//import { ButtonPrimary } from "./ui/ButtonPrimary"
import { ButtonTernary } from "./ui/ButtonTernary"
// import { ButtonSecondary } from "./ui/ButtonSecondary"

export const Header = (props) => {
    return (
        <header {...props}>
            <div className="crisImage"></div>
            <h2>Cristian González</h2>
            <h3>Desarrollador web</h3>
            <ButtonTernary url="!#">Descargar CV</ButtonTernary>

        </header>
    )
}