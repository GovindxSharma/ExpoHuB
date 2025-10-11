import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import WhyChooseUs from '../components/WhyChooseUs'
import RequestQuotation from '../components/RequestQuotation'
import Footer from '../components/Footer'
import ProductCatalogue from '../components/ProductCatalogue'

const Homepage = () => {
  return (<>
    <Navbar/>
    <HeroSection/>
    <ProductCatalogue/>
    <WhyChooseUs/>
    <RequestQuotation/>
    <Footer/>
    </>


  )
}

export default Homepage