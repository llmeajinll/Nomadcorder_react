import React, { useEffect, useState } from 'react';
import Movie from '../Components/Movie';
import axios from 'axios';

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
    <div>
        {loading?<h1>Home Loading...</h1>:
        (movies.map((movie)=>(
            <Movie
            key={movie.id}
            id={movie.id}
            coverImg = {movie.medium_cover_image} 
            title = {movie.title}
            summary = {movie.summary}
            genres = {movie.genres}/>
        ))   
        )}
    </div>
  );
}

export default Home