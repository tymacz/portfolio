import Headers from "./header"
import Content from "./content"
import { Fragment } from "react"
import bg from "./img/bg-coder.png"

document.documentElement.style.backgroundImage = `url(${bg})`;
document.documentElement.style.backgroundRepeat = 'repeat';
document.documentElement.style.backgroundSize = 'cover';

function Qui(){
        return (
            <Fragment>
                <Headers/>
                <Content/>
            </Fragment>
            )
}

export default Qui