import React from "react";
import html from "./img/html.png"
import css from "./img/css.png"
import js from "./img/js.webp"
import react from "./img/react.png"
import python from "./img/python.png"
import c from "./img/c.png"
import cplus from "./img/cpp.png"
import sql from "./img/sql.png"
import "./grade.css"

function Grade (){
    return(
        <div id="grid">
            <div>
                <h1>HTML</h1>
                <img src={html}></img>
            </div>
            <div>
                <h1>CSS</h1>
                <img src={css}></img>
            </div>
            <div>
                <h1>JavaScript</h1>
                <img src={js}></img>
            </div>
            <div>
                <h1>React</h1>
                <img src={react}></img>
            </div>
            <div>
                <h1>Python</h1>
                <img src={python}></img>
            </div>
            <div>
                <h1>C</h1>
                <img src={c}></img>
            </div>
            <div>
                <h1>C++</h1>
                <img src={cplus}></img>
            </div>
            <div>
                <h1>SQL</h1>
                <img src={sql}></img>
            </div>
        </div>
    )
}

export default  Grade;