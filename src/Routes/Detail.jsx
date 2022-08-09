import axios from 'axios';
import React , { useEffect, useState }from 'react';
import { useParams } from "react-router-dom";
import Movie from  "../Components/Movie";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);

    const { id }  = useParams();

    useEffect(()=>{
        axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then((response)=>{
            console.log(response);
            setDetail(response.data);
            setLoading(false);
        })
    }, [id]);

    console.log(detail);

  return (
    <div>
      {loading 
      ? (<h1>Detail Loading</h1>)
      :(
      <Movie
        id={detail.data.movie.id}
        coverImg={detail.data.movie.medium_cover_image}
        title={detail.data.movie.title}
        summary={detail.data.movie.description_full}
        genres={detail.data.movie.genres}
      />
      )}

    </div>
  )
}

export default Detail