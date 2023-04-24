import React from 'react'
import { Heroimg1, arrow, avatar } from '../../assets/images'
import Footer from './Footer'
import Stats from './Stats'
import Features from './Provide'
import HeroSection from './HeroSection'
import Opportunies from './Opportunies'
import Location from './Location'
const HomeLayout = () => {
    return (
        <section className=' w-full overflow-hidden'>
            <HeroSection/>
            <Stats/>
            <Features/>
            <Opportunies/>
            <Location/>
            <Footer/>
        </section>
    )
}

export default HomeLayout
