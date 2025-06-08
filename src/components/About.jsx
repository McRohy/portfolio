import React from 'react'

const About = () => {
  return (
    <div id="About" className="flex flex-col items-center justify-center text-center min-h-screen px-6 py-16">
   
      <div className="rounded-full border-[12px] border-cyan-500 p-1 overflow-hidden shadow-lg mb-6">
        <img
          src="/profilePicture.png"
          className="h-60 w-60 object-cover rounded-full "
        />
      </div>
      <p className="text-black font-medium mb-4">Matej Roháč</p>

      <h1 className="text-4xl md:text-5xl font-bold text-black">
        Passionate <br />
        <span className="text-cyan-500">Student of Computer Science</span>
      </h1>
      <p className="mt-6 text-black max-w-xl">
     {/* Som študent informatiky a ridenia na fakulte FRI - Fakulta riadenia a informatiky v Žiline 
      s orientáciou na vývoj softvéru, návrh systémov v UML a prácu s Oracle SQL. 
      Vyznačujem sa spoľahlivosťou, komunikatívnosťou a cieľavedomosťou a nie len to,
      rád prijím nové výzvy. 
      */}

      I am a student of Computer Science and Management at the Faculty of Management Science and Informatics (FRI) in Žilina.
      My focus is on software development, system design using UML and working with Oracle SQL. 
      I am reliable, communicative, and goal-oriented 
      and I like taking on new challenges.
      </p>
    </div>
  );
};


export default About
