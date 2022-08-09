import React, { useEffect, useState, useRef } from 'react';
import Movie from '../Components/Movie';
import axios from 'axios';
import styles from "../Styles/Home.module.css";
import Lottie from 'lottie-react';
import Animation from './Loading';

function Home() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  // const container = useRef();
  // useEffect(()=>{
  //   Lottie.loadAnimation({
  //     container : container.current,
  //     renderer : 'svg',
  //     loop : false,
  //     autoplay : true,
  //     animationData : animation,

  //   });
  // }, [])

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

        <div className={styles.loader}>
          <Animation />
        </div>:

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