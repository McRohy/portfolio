import React from 'react'

const listItems = [
    'About',
    'Skills',
    'Work',
    'Contact'
]

function Navbar(){
  return (
    <div className="fixed bg-black flex 
     justify-between items-center gap-20 py-2 px-10 
     left-1/2 translate-x-[-50%] top-[10px]
     rounded-full backdrop-blur-md bg-opacity-60
     text-white shadow-lg z-10">
      
      <ul className="flex gap-8 text-l">
      {listItems.map((item) => {
    
    return (
      <li className="relative group cursor-pointer" key={item}>
       
        <a href={`#${item}`} className="inline-block">
          {item}
          <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl 
                            bg-gradient-to-r from-blue-500 to-green-500 
                            transition-all duration-300 
                            group-hover:w-full">
          </span>
        </a>
      </li>
    )
  })}
</ul>
    </div>
  )
}

export default Navbar
