import React from 'react'
import CustomerExperience from '../customers/CustomerExperience'
import Properties from '../properties/Properties'
import Slider from '../slider/Slider'
import Title from '../titulo/Title'


export default function Home() {
    return (
      <div>
          <Slider />
          <Title title="Inmuebles BREXIU"/>
          <Properties />
          <Title title="Experiencias BREXIU" />
          <CustomerExperience />
      </div>
    )
}
