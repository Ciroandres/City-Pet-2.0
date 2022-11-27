import React from 'react'
import Contact from '../containers/Contact'
import Geolocate from '../containers/Geolocate'
import Caracterist from './Caracterist'
import Dondeir from './Dondeir'
import Services from './Services'

const Home = () => {
    return (
        <div>
            <Services />
            <Caracterist />
            <Dondeir />
            <Geolocate />
            <Contact />
        </div>
    )
}

export default Home