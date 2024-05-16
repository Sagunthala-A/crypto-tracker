import React from 'react';
import './style.css';
import Button from '../Common/Button';
import Phone from '../../Assets/phone.png';
import Gradient from '../../Assets/gradient.png';
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div className='landingPage'>
        <div className='landingPage__left'>
            <motion.h1 
                className='landingPage__trackText'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: .4 }}
                >Track Crypto
            </motion.h1>
            <motion.h1 
                className='landingPage__realText'
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .8, duration: .4 }}
            >Real Time.</motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 120 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: .4 }}
            >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
            <motion.div 
                className='landingPage__buttons'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: .4 }}
            >
                <Button 
                    text={"Dashboard"}
                    linkTo={"/dashboard"}
                />
                <Button 
                    text={"Share App"}
                    outlined={true}
                />
            </motion.div>
        </div>
        <div className='landingPage__right'>
                <img className="gradient_img" src={Gradient} alt='gradient_image'/>
                <motion.img 
                    className="phone_img" 
                    src={Phone} 
                    alt='phone_image'
                    initial={{ y: -10 }}
                    animate={{ y: 20 }}
                    transition={{
                        type: "smooth",
                        repeatType: "mirror",
                        duration: 2,
                        repeat: Infinity,
                    }}
                />
        </div>
    </div>
  )
}

export default LandingPage;