import { Fragment } from "react";
import Contact from "./contact";
import Headers from "./header";
import bg from "./img/wallpaper.jpg"



function Reseaux(){
    document.documentElement.style.backgroundImage = `url(${bg})`;
    document.documentElement.style.backgroundRepeat = 'repeat';
    document.documentElement.style.backgroundSize = 'cover';
    return(
        <Fragment>
            <Headers/>
            <Contact/>
        </Fragment>
        
    )
}

export default Reseaux