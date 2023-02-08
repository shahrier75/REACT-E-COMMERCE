import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
const Hero = () => {
  return (
   <div className={css.container}>

    {/* leftside */}

   <div className={css.h_sides}>
        <span className={css.text1}>Skin Protection Cream</span>
        <div className={css.text2}>
            <span>Trandy Collection</span>
            <span >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, fugit.</span>
            </div>
    </div>

    {/* middle side hero section */}

    <div className={css.wrapper}>
        <div className={css.blueCircle}></div>

        <img src={HeroImg} alt="" width={600}/>
        <div className={css.card2}>
            <RiShoppingBagFill/>
            <div className={css.signup}>
            <span>Best Signup offers</span> 
            <div>
                <BsArrowRight/>
            </div>
            </div>
        </div>
    </div>


    {/* Right Side */}
    <div className={css.h_sides}>
    <div className={css.traffic}>
    <span>1.5M</span>
    <span>Monthly Traffic</span>
    </div>
    <div className={css.customer}>
        <span>100K</span>
        <span>Happy Customer</span>
    </div>
    </div>
   </div>
  )
}

export default Hero