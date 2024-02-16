import { Fragment } from "react";
import Headers from "./header";
import Work from "./work";
import bg from "./img/blueprint.jpg"
function Projet(){

    document.documentElement.style.backgroundImage = `url(${bg})`;
    document.documentElement.style.backgroundRepeat = 'repeat';
    document.documentElement.style.backgroundSize = 'cover';
    return(
        <Fragment>
            <Headers/>
            <Work/>
        </Fragment>
        
    )
}

export default Projet