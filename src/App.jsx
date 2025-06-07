
import Navbar from './Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <div 
      id="About"
      className="min-h-screen w-full relative
      bg-gradient-to-r from-fuchsia-500 via-red-500
      to-orange-500 flex items-center justify-center
      text-center flex-col gap-10 text-white p-52">
        <h1 
        id="about"
        className="text-7xl"> About</h1>
         <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          molestiae dignissimos dolores quam ipsa nisi ab maiores! Vitae ad iusto
          eveniet autem cumque dolorum, mollitia voluptate eligendi nobis
          consectetur maiores.
         </p>
      </div>

      <div 
      id="Skills"
      className="min-h-screen w-full relative
      bg-gradient-to-r from-blue-400 to-gray-400 
      flex items-center justify-center
      text-center flex-col gap-10 text-white p-52">
        <h1 className="text-7xl"> Section 2</h1>
         <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          molestiae dignissimos dolores quam ipsa nisi ab maiores! Vitae ad iusto
          eveniet autem cumque dolorum, mollitia voluptate eligendi nobis
          consectetur maiores.
         </p>
      </div>

      <div 
      id="Work"
      className="min-h-screen w-full relative
      bg-gradient-to-r from-green-500 via-yellow-300
      to-orange-500 flex items-center justify-center
      text-center flex-col gap-10 text-white p-52">
        <h1 className="text-7xl"> Section 3</h1>
         <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          molestiae dignissimos dolores quam ipsa nisi ab maiores! Vitae ad iusto
          eveniet autem cumque dolorum, mollitia voluptate eligendi nobis
          consectetur maiores.
         </p>
      </div>

      
      <div 
      id="Contact"
      className=" w-full relative
      bg-gradient-to-r from-red-500 via-yellow-300
      to-black-500 flex items-center justify-center
      text-center flex-col gap-10 text-white p-12">
        
      </div>
    </>
  )
}

export default App
