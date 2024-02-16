import React from "react"
import "./work.css"
import door from "./img/PTdoor.png"
import maze from "./img/PTmaze .png"
import find from "./img/PTFindRacing.png"
import iot from "./img/PTIot.png"

function Work(){
    return (
      <div id="work">
        <div id="door">
          <img
            id="img-door"
            src={door}
            alt="croquis d'une porte"
            style={{ width: "35vw" }}
          />
          <div id="text-door">
            <h1>Création d'une porte Sécurisé : </h1>
            <h2>Stack utilisée(s) : C++ .</h2>
            <h3>Description :</h3>
            <p>
              Réalisation d'un projet pour le baccalauréat STI2D spécialité SIN.
              Avec mon groupe nous avons fabriqué une porte Sécurisé à triple
              authentification : Badge RFID, Code Personnel et Code aléatoire
              envoyé par téléphone.
            </p>
            <h3>Mon rôle :</h3>
            <p>
              Dans ce projet j'ai hérité de la gestion de l'alimentation,de la
              gestion de la gâche électrique de l'envoie du SMS contenant le
              code aléatoire et la création du code envoyé.
            </p>
            <h3>Compétence aquisent :</h3>
            <p>
              Utilisation du module SMS arduino et la programmation qui en
              découle, manipulation du nombre aléatoire et quelques base
              d'électronique.
            </p>
            <h4>Date du projet : 2019.</h4>
          </div>
        </div>

        <div id="maze">
          <img
            id="img-maze"
            src={maze}
            alt="croquis d'un labyrinthe"
            style={{ width: "35vw" }}
          />
          <div id="text-maze">
            <h1>Création d'un jeu de labyrinthe à gravité : </h1>
            <h2>Stack utilisée(s) : Python (pygame).</h2>
            <h3>Description :</h3>
            <p>
              Réalisation d'un jeu de labyrinthe à gravité sous pygame. C'est un
              projet réalisé en groupe de 4 dans le cadre de mes études en
              licence informatique. Le principe du jeu est de récuperer le fils
              qui fera apparaitre le minautor qu'il faudra rejoindre pour
              gagner.
            </p>
            <h3>Mon rôle :</h3>
            <p>
              Sur ce projet j'ai codé les features suivantes : Gestion de la
              physique du jeu (gravité,colisions), apparition du minautor ,
              positionnement aléatoire du fils. Je suis aussi à l'origine de la
              direction artistique axée sur la mythologie de thésée.
            </p>
            <h3>Compétence aquisent :</h3>
            <p>
              gestion de class, gestion graphique, gestion de physique et
              gestion d'objet.
            </p>
            <h5>
              <a href="https://youtu.be/C9AN2RE1OXs">
                Lien youtube vers une vidéo du jeu.
              </a>
            </h5>
            <h4>Date du projet : 2022.</h4>
          </div>
        </div>

        <div id="find">
          <img
            id="img-find"
            src={find}
            alt="croquis d'un site"
            style={{ width: "35vw" }}
          />
          <div id="text-find">
            <h1>Site de rencontre FindRacing :</h1>
            <h2>Stack utilisée(s) : Html, Css, Javascript, Sql.</h2>
            <h3>Description :</h3>
            <p>
              Création d'un site web où les passionné(e)s de jeux vidéos de
              simulation de cours auto peuvent se retrouver pour jouer en
              ensemble ! Le projet comprends une page d'insciption/connexion,
              une page d'accueil avec un système de recherche et une page de
              profil pour consulter les informations des joueurs.
            </p>
            <h3>fonctionnement du site :</h3>
            <p>
              Le site comprends une base de données Postgres Sql qui est relié
              au site par une API Express JS.
            </p>
            <h3>Compétence aquisent :</h3>
            <p>
              Création d'une base de données , création d'API , création de lien
              entre le site l'API et la bdd.
            </p>
            <h4>Date du projet : 2023.</h4>
          </div>
        </div>

        <div id="iot">
          <img
            id="img-door"
            src={iot}
            alt="croquis d'une Iot station météo'"
            style={{ width: "35vw" }}
          />
          <div id="text-iot">
            <h1>
              Création d'une station météo avec une Raspberry Pi et création
              d'un site dashboard :{" "}
            </h1>
            <h2>Stack utilisée(s) : Html, Css, Javascript, Sql, Python.</h2>
            <h3>Description :</h3>
            <p>
              Création d'une station météo à partir d'un Raspberry Pi 4 et d'un
              capteur Bme 280 de BOSCH. Envoie des données vers une base de
              données pour ensuite les envoyer vers un site dashboard.
            </p>
            <h3>Mon rôle :</h3>
            <p>
              Sur ce projet de groupe je me suis chargé de coder le script
              python qui récupère les données de température en fait une moyenne
              tout les cinq relevés pour ensuite les envoyer à la base de
              données. J'ai ensuite aidé à la création d'une API FastAPI en
              coder quelques routes. Pour finir je suis chargé des recupérations
              de données via les routes API, pour les affichés sur le site
              dashboard.
            </p>
            <h3>Compétence aquisent :</h3>
            <p>
              Utilisation d'une Raspbery Pi 4,programmation Python orienté IOT.{" "}
            </p>
            <h4>Date du projet : 2024.</h4>
          </div>
        </div>
        <div id="other">
            <h1>Autres Projets</h1>
            <div id="container">
                <div>
                    <h2>Site de création de Devis :</h2>
                    <h3>Stack utilisée(s) : HTML, CSS, JavaScript</h3>
                    <h4>Date du projet : 2020</h4>
                </div>
                <div>
                    <h2>Pac-Man</h2>
                    <h3>Stack(s) utilisée(s) : Pytthon</h3>
                    <h4>Date du projet : 2021</h4>
                </div>
                <div>
                    <h2>Jeu du pendu :</h2>
                    <h3>Stacks utilisée(s) : C</h3>
                    <h4>Date du projet : 2023</h4>
                </div>
                <div>
                    <h2>Badgeuse :</h2>
                    <h3>Stack utilisée(s) : Python, HTML, CSS, JavaScript, SQL</h3>
                    <h4>Date du projet : 2024</h4>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Work