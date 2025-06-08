import React from 'react'

const mySkills = [
  { name: 'Microsoft Office Programs', level: 70 },
  { name: 'UML - Unified Modeling Language', level: 65 },
  { name: 'Java', level: 55 },
  { name: 'Oracle SQL Developer', level: 50 },
  { name: 'Kotlin', level: 48 },
  { name: 'Photoshop', level: 40 },
  { name: 'React', level: 40 },
  { name: 'Canva', level: 50 },
  { name: 'Figma', level: 30 },
]

function Skills() {
  return (
    <div id="Skills" className="  text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">My Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {mySkills.map((skill, index, icon) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="font-bold">
                  {skill.name}
                </span>
              </div>
              <div className="w-full bg-white h-3 rounded-full">
                <div
                  className="h-3 bg-cyan-400 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
