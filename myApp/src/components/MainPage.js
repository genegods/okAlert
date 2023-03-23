import React from 'react'
import ContactForm from './ContactForm'

const MainPage = () => {
  return (
    <React.Fragment>
    <main>
      <div className="md:w-5/12 md:mx-auto">
        <ContactForm/>
      </div>
    </main>
  </React.Fragment>
  )
}

export default MainPage