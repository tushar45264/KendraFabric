import React, { useState } from 'react'
import { Button } from '../ui/button'
import { IoSearch } from 'react-icons/io5'
import CardItem from './CardItem'
import CreateApp from './CreateApp'
import ModelDialog from '../ModelDialog/ModelDialog'

const Apps = () => {
  const [showDialog, setShowDialog] = useState(false)

  return (
    <div>
      {/* <h1 className='font-bold text-2xl mt-8'>My Apps</h1> */}
      <div className='flex justify-between items-center'>
        <div className='border border-gray-200 focus:border-gray-400 rounded flex flex-row items-center pl-2 py-2'>
          <IoSearch className="" />
          <input
            type="search"
            placeholder="Search apps..."
            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] focus:outline-none"
          />
        </div>
        <div>
          {/* <Button className="bg-sky-800 hover:bg-sky-800/90">Create App</Button> */}
          <CreateApp />
        </div>
      </div>
      <div className='flex flex-row mr-48 mt-8 justify-between items-center'>
        <Button className="bg-white text-black border border-gray-300 hover:bg-white">Finance</Button>
        <Button className="bg-white text-black border border-gray-300 hover:bg-white">Featured</Button>
        <Button className="bg-white text-black border border-gray-300 hover:bg-white">ImageGeneration</Button>
        <Button className="bg-white text-black border border-gray-300 hover:bg-white">Health</Button>
        <Button className="bg-white text-black border border-gray-300 hover:bg-white">Translation</Button>
        <Button className="bg-white text-black border border-gray-300 hover:bg-white">Design</Button>
        <Button className="bg-white text-black border border-gray-300 hover:bg-white">Strategy</Button>
        <Button className="bg-white text-black border border-gray-300 hover:bg-white">Programming</Button>
        <Button className="bg-white text-black border border-gray-300 hover:bg-white">Official</Button>
      </div>
      <h1 className='font-bold text-2xl mt-8'>My Apps</h1>
      <div className="grid gap-4 mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <CardItem onClick={() => setShowDialog(true)} />
        <CardItem onClick={() => setShowDialog(true)} />
        <CardItem onClick={() => setShowDialog(true)} />
      </div>
      <h1 className='font-bold text-2xl mt-8'>Explore Apps</h1>
      <div className="grid gap-4 mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <CardItem onClick={() => setShowDialog(true)} />
        <CardItem onClick={() => setShowDialog(true)} />
        <CardItem onClick={() => setShowDialog(true)} />
      </div>
      <h1 className='font-bold text-2xl mt-8'>Trending Apps</h1>
      <div className="grid gap-4 mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <CardItem onClick={() => setShowDialog(true)} />
        <CardItem onClick={() => setShowDialog(true)} />
        <CardItem onClick={() => setShowDialog(true)} />
        <CardItem onClick={() => setShowDialog(true)} />
        <CardItem onClick={() => setShowDialog(true)} />
        <CardItem onClick={() => setShowDialog(true)} />
      </div>
      {showDialog && <ModelDialog onClose={() => setShowDialog(false)} />}
    </div>
  )
}

export default Apps
