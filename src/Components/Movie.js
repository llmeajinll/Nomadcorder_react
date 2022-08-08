import React from 'react'
import { Link } from "react-router-dom";
import style from "../Styles/Movie.module.css";
import PropTypes from "prop-types";

function Movie({id, coverImg, title, summary, genres}) {
  
    return (
    <div>
        <img src={coverImg} alt={title}/>
        <Link to={`/movie/${id}`}><h2>{title}</h2></Link>
        <p>{summary.length>235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul>
            {genres.map((g) => {
                return <li key={g}>{g}</li>
            })}
        </ul>
        <hr/>
    </div>
  );
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    coverImg:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default Movie