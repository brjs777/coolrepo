import React from 'react'
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import Trending from '../components/Trending'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Nav />
            <Carousel />
            <Card />
            <Trending />
            <Footer />
        </div>
    )
}

export default Home
