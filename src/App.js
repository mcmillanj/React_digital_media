import React from 'react'
import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'
import 'bulma/css/bulma.css'

const App = () => {
  return (
    <div>
      <section class='hero is-primary'>
        <div class='hero-body'>
          <p class='title'>
            <h1>Personal Digital Assistants </h1>
          </p>
        </div>
      </section>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard
                title='Alexa'
                handle='@alexa99'
                image={AlexaImage}
                description='Alexa was created by amazon to aid in you every day life journey'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                title='Cortana'
                handle='@Cortana327'
                image={CortanaImage}
                description='Cortana was made by Micorsoft. Who knows what it does?'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                title='Siri'
                handle='@Siri01'
                image={SiriImage}
                description='Siri was made by Apple and is being faised out'
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
