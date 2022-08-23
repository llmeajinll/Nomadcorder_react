import axios from 'axios';
import React , { useEffect, useState }from 'react';
import { useParams } from "react-router-dom";
import Movie from  "../Components/Movie";
import styles from '../Styles/Home.module.css';
import style from '../Styles/Detail.module.css';

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
      ? (        
        <div id={styles.loading}>
          <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_pjulrn8x.json" background="#EFF3F7" speed="1.5" loop autoplay></lottie-player>
        </div>)
      :(
      // <Movie
      //   id={detail.data.movie.id}
      //   coverImg={detail.data.movie.medium_cover_image}
      //   title={detail.data.movie.title}
      //   summary={detail.data.movie.description_full}
      //   genres={detail.data.movie.genres}
      // />
      <div id={style.wrap}>
        <h2 className={style.title}>{detail.data.movie.title}</h2>
        <img className={style.image} src={detail.data.movie.medium_cover_image} alt={detail.data.movie.title}/>
        <p className={style.summary}>{detail.data.movie.description_full}</p>
        <ul className={style.genres}>
          {detail.data.movie.genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <div></div>

      </div>
      
      )}

    </div>
  )
}

export default Detail