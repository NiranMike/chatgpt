"use client"
import React from 'react'
import useSWR from "swr"
import Select from "react-select";

const fetchModels = () => {
    return fetch("/api/getEngines").then((res) => res.json());
}
const ModalSelection = () => {
  const {data: models, isLoading} = useSWR('models', fetchModels)
  return (
    <div>
        <Select 
        className='mt-2'
        // defaultValue={model}
        // placeholder={model}
        isLoading={isLoading}
        menuPosition='fixed'
        classNames={{
            control: (state) => "bg-[#434654] border-[#434654]"
        }}
        />
    </div>
  )
}

export default ModalSelection;