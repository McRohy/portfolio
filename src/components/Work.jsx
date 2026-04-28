import { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext.js'
import './Work.css'

const projects = [
  { id: 'survivor',   img: './telemedicine2.png' },
  { id: 'pathPulse',  video: './pp_mobVersion2.mp4' },
  { id: 'warOfClash', video: './warofclash.mp4' },
  { id: 'invitation', img: './invitationNR.png' },
]

export default function Work() {
  const { texts } = useLanguage()
  const t = texts.work
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 380
  }

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 380
  }

  return (
    <section id="Work" className="work-section reveal">

      <div className="work-header">
        <span className="work-num">02</span>
        <span className="work-rule"></span>
        <span className="work-label">{t.sectionLabel}</span>
      </div>

      <h2 className="work-title">
        {t.title} <span className="accent">{t.titleAccent}</span>
      </h2>

      <p className="work-sub">{t.sub}</p>

      <div className="work-carousel">
        <div className="work-list" ref={scrollRef}>
          {projects.map((p) => {
            const item = t.items[p.id]
            return (
              <div key={p.id} className="work-card">
                {p.video ? (
                  <video src={p.video} autoPlay loop muted />
                ) : (
                  <img src={p.img} alt={item.title} />
                )}
                <div className="work-body">
                  <span className="work-cat">{item.cat}</span>
                  <h3>
                    {item.title}
                    <span className="year-badge">{item.year}</span>
                  </h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="work-controls">
          <button className="scroll-btn" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>
          <button className="scroll-btn" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>
      </div>

    </section>
  )
}
