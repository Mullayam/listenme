import { Song } from '@/lib/types'
import { Download, PlayCircle ,Menu} from 'lucide-react'
import React from 'react'
 
const MusicCard = ({song}:{song:Song}) => {
  console.log()
  return (
    <div className="py-4 w-72">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
       <img src={song.image[2].link} width={"128px"} height={"128px"}/>
        <div className="w-3/5 p-2 ">
         <div className='flex flex-row justify-between'>
         <h3 className="text-gray-900 font-bold text-md">{song.label}</h3>
         <h3 className="text-gray-900 font-bold text-md">2023</h3>
         </div>
          <p className="text-gray-600 text-sm">{song.name}</p>          
          <div className="flex item-center gap-2 mt-3">
            <button className="px-2 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded-full">
              <Download />
            </button>
            <button className="px-2 py-1.5 bg-gray-800 text-white text-xs font-bold uppercase rounded-full">
              <PlayCircle />
            </button>
            <button className="px-2 py-1.5 bg-gray-800 text-white text-xs font-bold uppercase rounded-full">
              <Menu />
            </button>
            
          </div>
        </div>
      </div>
    </div>

  )
}

export default MusicCard