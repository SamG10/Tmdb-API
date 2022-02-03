import React, { useEffect, useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useParams } from "react-router";
import Card from "../components/Card";
import PopularFilmsRequest from "../services/PopularFilmsRequest";
import "../style/Description.css";
import "../style/style.css"

const Description = () => {
    let { id } = useParams();
    
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [actor, setActor] = useState([]);
    
  useEffect(() => {
      fetchFilms(id).then("r");

    }, [id]);
    
  const fetchFilms = async (id) => {
      const data = await PopularFilmsRequest.getDescription(id);
      const actor = await PopularFilmsRequest.getActor(id)
      setFilms(data);
      setActor(actor)

      setLoading(false)
    };
  // console.log(actor)



  return <>
    {!loading && <>
      <div style={{background: `url(https://image.tmdb.org/t/p/w1280${films.backdrop_path})`, backgroundSize: "cover",}}>
            <div style={{background: "linear-gradient(to right, rgba(6.27%, 6.27%, 9.02%, 1.00), rgba(6.27%, 6.27%, 9.02%, 0.6)"}}>
        <section className="section-top d-flex mt-5">
          <div className="poster col-4">
            <img
              src={"https://image.tmdb.org/t/p/w500/" + films.poster_path}
              alt=""
              className="rounded"
              id="img"
            />
          </div>
          <div className="description">
            <div className="head">
              <h3 className="titre">{films.original_title}</h3>
              <div className="date">{films.release_date}</div>
            </div>
            <div className="d-flex">
              <div className="vote">{films.vote_average * 10 + "%"}</div>
              <div>
                <p className="col-3" id="note-text">
                  Notes des utilisateurs
                </p>
              </div>
            </div>
            <div className="tagline">
              <p>{films.tagline}</p>
            </div>
            <div className="synopsis">
              <h4>Synopsis</h4>
              {films.overview}
            </div>
          </div>
        </section>
        </div>
        </div>
        <ScrollMenu>
            {actor.cast.map(film => <Card key={film.id} image={film.profile_path} titre={film.name} id={film.id}/>)}
        </ScrollMenu>
      </>}
      {loading && <div id="loading-icon" className="mt-5"></div>}
    </>
};

export default Description;
