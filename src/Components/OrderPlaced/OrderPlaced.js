import React from 'react'
import "./OrderPlaced.css";
import { BiSmile } from 'react-icons/bi'
import {Link} from "react-router-dom";
import { AiOutlineDoubleRight } from 'react-icons/ai'
import {motion} from 'framer-motion/dist/framer-motion'
function OrderPlaced() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.1 }} animate={{opacity: 1, scale: 1}} transition={{ duration: 1.5}} className='emptyCart'>
        <div className='emptyCart-box'>
        <h1>Hurray! Order Placed</h1>
        <h1><BiSmile/></h1>
        <h1 className='logo'><Link to={{pathname:"/home"}} className="empty-to-home">Home <AiOutlineDoubleRight/></Link></h1>
        </div>
      
    </motion.div>
  )
}

export default OrderPlaced
