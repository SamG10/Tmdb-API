import React from 'react';
import {Link} from 'react-router-dom';
import "../style/Card.css";

const Card = ({image, titre="", synopsis="", id=""}) => {

    return<>
    <div className="card m-3" style={{width: 18+ "rem"}}>
    <img className="card-img-top" style={{minHeight: "429px"}} src={image === null ? "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-grey-d9222f16ec16a33ed5e2c9bbdca07a4c48db14008bbebbabced8f8ed1fa2ad59.svg" : "https://www.themoviedb.org/t/p/w1280" + image } alt={titre} />
  <div className="card-body">
    <h5 className="card-title">{titre}</h5>
    <p className="restrict-synopsis card-text">{synopsis}</p>
    <Link to={"/films/" + id} className="btn btn-primary">Voir les détails</Link>
  </div>
</div>
    </>
}

export default Card;