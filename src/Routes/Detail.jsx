import axios from 'axios';
import React , { useEffect, useState }from 'react';
import { useParams } from "react-router-dom";
import styles from '../Styles/Home.module.css';
import style from '../Styles/Detail.module.css';
import logo from '../Resources/logo.png';
import deco from '../Resources/deco.png';

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
          <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_pjulrn8x.json" background="#000000" speed="1.5" loop autoplay></lottie-player>
        </div>)
      :(
        <div id={style.background}>
          <img className={style.logo} src={logo} alt="logo"/>
          <div id={style.wrap}>
            <img className={style.deco1} src={deco} alt="deco"/>
            <img className={style.deco2} src={deco} alt="deco"/>

            {/* <div id={style.wrap_sentence}> */}
              <h2 className={style.title}>{detail.data.movie.title}</h2>
              
              <img className={style.image} src={detail.data.movie.medium_cover_image} alt={detail.data.movie.title}/>
              <p className={style.summary}>{detail.data.movie.description_full}</p>
              <ul className={style.genres}>
                {detail.data.movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
            <img className={style.deco3} src={deco} alt="deco"/>
            <img className={style.deco4} src={deco} alt="deco"/>
{/* 
          </div> */}
        </div>

      // <Movie
      //   id={detail.data.movie.id}
      //   coverImg={detail.data.movie.medium_cover_image}
      //   title={detail.data.movie.title}
      //   summary={detail.data.movie.description_full}
      //   genres={detail.data.movie.genres}
      // />


      
      )}

    </div>
  )
}

export default Detail