import React, { useEffect, useState } from 'react';
import Movie from '../Components/Movie';
import axios from 'axios';
import styles from "../Styles/Home.module.css";

function Home() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    axios.get("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
    .then((response)=>{
        console.log(response);
        setMovies(response.data.data.movies);
        setLoading(false);
        
    })
    .catch((error)=>{
        console.log(error);
    })
    }, []);

  return (
    <div className={styles.container}>
        {loading?
        <div id = {styles.loading}>
          <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_pjulrn8x.json" background="#EFF3F7" speed="1.5" loop autoplay></lottie-player>
        </div>

        
        :

        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      }



    </div>
  );
}

export default Home