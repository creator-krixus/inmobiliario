import React from 'react'
import CustomerExperience from '../customers/CustomerExperience'
import Properties from '../properties/Properties'
import Slider from '../slider/Slider'
import About from '../about/About'
import Title from '../titulo/Title'
import ContactForm from '../contactForm/ContactForm'
import CustomerInversion from '../customerInversion/CustomerInversion'

export default function Home() {
    return (
      <div>
          <Slider />
          <About />
          <Title title="Inmuebles Relieve"/>
          <Properties />
          <Title title="Experiencias Relieve" />
          <CustomerExperience />
          <CustomerInversion />
          <ContactForm />
      </div>
     
    )}
