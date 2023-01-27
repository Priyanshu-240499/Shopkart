import React from 'react'
import "./loading.css";
import {motion} from 'framer-motion/dist/framer-motion'
const loadingData=[
    {src:"https://media.tenor.com/6uYHmiE2sewAAAAM/snoopy-love.gif",color:"royalblue",tagline:"Arram Ki Baat Shopify K Saath...👟"},
    {src:"https://cdn.videoplasty.com/gif/sikh-woman-waving-with-briefcase-stock-gif-54099-1280x720.gif",color:"red",tagline:"Shop Shop Shopifyyy...🛒"},
    {src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/74bf7c16479553.562ac79431533.gif",color:"olive",tagline:"Choice Aisi jo mood Badal de...💍👚👕💻"},
    {src:"https://cdn.dribbble.com/users/12601/screenshots/3554804/gif.gif",color:"orangered",tagline:"khaali Haath Aae They Or Bhare Haath Jaoge... 💃🕺"},
    {src:"https://i.gifer.com/origin/2a/2a2a9aa166ca5482fcbecf06f1d9c35e.gif",color:"palevioletred",tagline:"Maroo Mauke P Chauka...🏃‍♂️🏃‍♀️"},
]
function Loading() {
    const i=Math.floor(Math.random()*5);
  return (
    <motion.div animate={{scale:1.5}} className='loading'>
      <img loading='lazy' className='loading-img' src={loadingData[i].src} alt="loading"/>
      <h1 style={{color:`${loadingData[i].color}`}}>{loadingData[i].tagline}</h1>
    </motion.div>
  )
}

export default Loading;
