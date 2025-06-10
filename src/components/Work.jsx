import React, { useRef, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const works = [
  {
    title: 'Survivor',
    description: 'Survivor is semestral project which is created in Java and ispired by game Crossy Road.',
    video: './survivorResized.mp4',
    year: '2023'
  },
  {
    title: 'WarOfClash',
    description: 'WarOfClash is a semester project implemented in Java, designed as a real-time strategy game inspired by the original game Clash Royale.',
    video: './warofclash.mp4',
    year: '2024'
  },
  {
    title: 'PathPulse',
    description: 'PathPulse is a semester-long Kotlin project created for passionate travelers who like to track their journeys.',
    video: './pp_mob.mp4',
    year: '2025'
  },
  {
    title: 'Invitation',
    description: 'Invitation to the 3rd Educational Event for Patients with Cardiovascular Disease. This work was created at the request of the client (Kardiocentrum Nitra).',
    img: './invitationNR.png',
    year: '2025'
  },
  {
    title: 'Desings',
    description: 'My favourite part of work to school are desings of my presentations',
    img: './ppDesigns.png',
    year: '2024/25'
  }
]

function Work() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const container = scrollRef.current
    if (container) {
      const scrollAmount = 400
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const container = scrollRef.current
    if (container && container.children.length > 0) {
      const totalWidth = container.scrollWidth
      const visibleWidth = container.offsetWidth
      const centerOffset = (totalWidth - visibleWidth) / 2
      container.scrollLeft = centerOffset
    }
  }, [])

  return (
    <section id="Work" className="py-20 px-6 text-center relative">
      <h2 className="text-5xl text-white font-bold mb-4">My Works</h2>
      <p className="text-white mb-12 max-w-2xl mx-auto">
        These are short examples of my work, mostly from semester assignments.
      </p>

      {/* Šípky */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white k p-2 rounded-full shadow-md z-10 hover:scale-110 transition"
        onClick={() => scroll('left')}
      >
        <FaChevronLeft size={24} />
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white  p-2 rounded-full shadow-md z-10 hover:scale-110 transition"
        onClick={() => scroll('right')}
      >
        <FaChevronRight size={24} />
      </button>

      <div className="max-w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth px-4"
        >
          {works.map((work, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[350px] h-[650px] bg-white rounded-2xl overflow-hidden"
            >
              {work.video ? (
                <video
                  controls
                  loop
                  autoPlay
                  muted
                  className="w-full h-[450px] object-cover rounded-t-2xl"
                >
                  <source src={work.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : work.img ? (
                <img
                  src={work.img}
                  className="w-full h-[450px] object-cover rounded-t-2xl"
                  alt={work.title}
                />
              ) : (
                <div className="w-full h-[450px] bg-gray-200 flex items-center justify-center text-gray-500">
                  No media available
                </div>
              )}
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2 flex justify-between w-full">
                  {work.title}
                  <span className="bg-black text-white text-xs px-3 py-2 rounded-full">
                    {work.year}
                  </span>
                </h3>
                <p className="text-gray-700 text-sm">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
