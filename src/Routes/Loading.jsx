import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from './112308-walking-ball.json';

function Loading() {
    const container = useRef();

    useEffect(()=>{
        lottie.loadAnimation({
            container: container,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animationData,
        });
    }, []);

  return (
    <div ref={container}></div>
  )
}

export default Loading