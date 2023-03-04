import React from 'react'
import {SunIcon, BoltIcon, ExclamationTriangleIcon} from "@heroicons/react/24/outline"

const HomePage = () => {
  return (
    <div className='flex flex-col px-2 items-center justify-center md:h-screen text-white'>
      <h1 className='text-2xl pt-5 md:text-5xl font-bold my-10'>ChatGPT</h1>
      
      {/* Container for the three sections */}
      <div className='md:flex space-x-2 text-center'>
        {/* Section 1: Examples */}
        <div>
          {/* Icon and heading */}
          <div className='flex flex-col items-center justify-center mb-5'>
            <SunIcon className='h-8 w-8 text-white' />
            <h2>Examples</h2>
          </div>

          {/* List of example questions */}
          <div className='space-y-2'>
            <p className='infoText'>"Explain Something to me"</p>
            <p className='infoText'>"What is the difference between a dog and a cat?"</p>
            <p className='infoText'>"What is the color of sun?"</p>
          </div>
        </div>

        {/* Section 2: Capabilities */}
        <div>
          {/* Icon and heading */}
          <div className='flex flex-col items-center justify-center mb-5'>
            <BoltIcon className='h-8 w-8 text-white' />
            <h2>Capabilities</h2>
          </div>

          {/* List of capabilities */}
          <div className='space-y-2'>
            <p className='infoText'>"Change the ChatGPT Model to use"</p>
            <p className='infoText'>"Messages are stored in Firebase's Firestore"</p>
            <p className='infoText'>"Hot Toast notifications when ChatGPT is thinking!"</p>
          </div>
        </div>

        {/* Section 3: Limitations */}
        <div>
          {/* Icon and heading */}
          <div className='flex flex-col items-center justify-center mb-5'>
            <ExclamationTriangleIcon className='h-8 w-8 text-white' />
            <h2>Limitations</h2>
          </div>

          {/* List of limitations */}
          <div className='space-y-2'>
            <p className='infoText'>"May occasionally generate incorrect information"</p>
            <p className='infoText'>"May Occasionally produce harmful Instructions or biased content"</p>
            <p className='infoText'>"Limited knowledge of world and events after 2021"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage