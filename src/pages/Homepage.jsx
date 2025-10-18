import React from 'react'
import HeroSection from '../components/home/HeroSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import RequestQuotation from '../components/home/RequestQuotation'
import ProductCatalogue from '../components/home/ProductCatalogue'

const Homepage = () => {
  return (<>
    <HeroSection/>
    <ProductCatalogue/>
    <WhyChooseUs/>
    <RequestQuotation/>
    </>


  )
}

export default Homepage