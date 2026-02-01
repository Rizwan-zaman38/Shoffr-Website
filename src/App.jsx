import React from 'react'
import Nav from './components/Nav'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Team from './sections/Team'
import SpecialOffer from './sections/SpecialOffer'
import Fleet1 from './sections/Fleet1'
import Fleet2 from './sections/Fleet2'
import Tour from './sections/Tour'
import Services from './sections/Services'
import Subcribe from './sections/Subcribe'
import Footer from './sections/Footer'
import FAQS from './sections/FAQS'
import Booking from './sections/Booking'

const App = () => {
  return (
    <main>
      <Nav/>
      <section><Header/></section>
      <section><Hero/></section>
      <section><Team/></section>
      <section><SpecialOffer/></section>
      <section><Fleet1/></section>
      <section><Fleet2/></section>
      <section><Tour/></section>
      <section><Services/></section>
      <section><Booking/></section>
      <section><FAQS/></section>
      <section><Subcribe/></section>
      <section><Footer/></section>
    </main>
  )
}

export default App