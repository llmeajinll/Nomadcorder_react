import React from 'react'
import { Link } from "react-router-dom";
import styles from "../Styles/Movie.module.css";
import PropTypes from "prop-types";

function Movie({id, coverImg, title, summary, genres}) {
  
    return (
    <div>
  
    <div className={styles.movie}>
      
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
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