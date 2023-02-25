"use client"
import React from 'react'
import {Toaster} from "react-hot-toast"

const ClientProvider = () => {
  return (
    <div>
        <Toaster position='top-center'/>
    </div>
  )
}

export default ClientProvider