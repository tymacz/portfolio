import React, {useEffect} from "react";
import "./contact.css"
import insta from "./img/insta.png"
import github from "./img/github.png"
import phone from "./img/phone.png"
import linkedin from "./img/linkedin.webp"

function Contact(){
    function refresh() {
        var t = 10; // rafraîchissement en millisecondes
        setInterval(() => {
          showDate();
        }, t);
      }

    function showDate() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var date = new Date()
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        if( h < 10 ){ h = '0' + h; }
        if( m < 10 ){ m = '0' + m; }
        if( s < 10 ){ s = '0' + s; }
        var time = h + ':' + m 
        let day = days[date.getDay()];
        let month = months[date.getMonth()];
        let nb = date.getDate();
        document.getElementById('horloge').innerHTML = time;
        document.getElementById('date').innerHTML =day+" "+nb+" "+month ;
     }

     useEffect(() => {
        refresh();
      }, []);
    return(
        <div>
        <div id="clock">
            <div id='date'></div>
            <div id='horloge'></div>
        </div>
        <div id="social">
            <a href="https://www.instagram.com/tymacz/?hl=fr"><img src={insta}></img></a>
            <a id="phone" href=""><img src={phone}></img></a>
            <a id="github" href="https://github.com/tymacz"><img src={github}></img></a>
            <a id="linkedin" href="https://www.linkedin.com/in/maxence-rebours-bab53027a/"><img src={linkedin}></img></a>
        </div>
        </div>
    )   
}

export default Contact