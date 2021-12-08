import React from 'react'
import CustomerExperience from '../customers/CustomerExperience'
import Properties from '../properties/Properties'
import Slider from '../slider/Slider'
import About from '../about/About'
import Title from '../titulo/Title'
import ContactForm from '../contactForm/ContactForm'
import CustomerInversion from '../customerInversion/CustomerInversion'
import AddForm from '../addForm/AddForm'

export default function Home() {
    return (
      <div>
          <Slider />
          <About />
          <AddForm />
          <Title title="Inmuebles BREXIU"/>
          <Properties />
          <Title title="Experiencias BREXIU" />
          <CustomerExperience />
          <CustomerInversion />
          <ContactForm />
          
      </div>
     
    )}
