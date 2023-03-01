"use client"
import React from 'react'
import useSWR from "swr"
import Select from "react-select";

const fetchModels = async () => {
    const res = await fetch("/api/getEngines");
  return await res.json();
}
const ModelSelection = () => {
  const {data: models, isLoading} = useSWR('models', fetchModels)
  const {data: model, mutate: setModel } = useSWR("model",{
    fallbackData: "davinci"
  })
  return (
    <div className='mt-2'>
        <Select 
        className='mt-2'
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition='fixed'
        classNames={{
            control: (state) => "bg-[#434654] border-[#434654]"
        }}
        onChange={(e)=> setModel(e.value)}
        />
    </div>
  )
}

export default ModelSelection;