import { Fragment } from "react";
import Headers from "./header";
import bg from "./img/bureau.jpg"
import Grade from "./grade";



function Competence(){
    document.documentElement.style.backgroundImage = `url(${bg})`;
    document.documentElement.style.backgroundRepeat = 'repeat';
    document.documentElement.style.backgroundSize = 'cover';
    return(
        <Fragment>
            <Headers/>
            <Grade/>
        </Fragment>
        
    )
}

export default Competence