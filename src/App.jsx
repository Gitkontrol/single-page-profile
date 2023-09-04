import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import CallToAction from "./Components/CallToAction"
import Footer from "./Components/Footer"
import { Design, Elearning, Entertainment, Todo, Memory } from "./Components"
import './App.css'


function App() {
      
  const images = [
  { id:1, bitmap: Design, text:'DESIGN PORTFOLIO' },
  { id:2, bitmap: Entertainment, text:'ENTERTAINMENT APP' },
  { id:3, bitmap: Elearning, text:'E-LEARNING PAGE' },
  { id:4, bitmap: Memory, text:'MEMORY GAME APP' },
  { id:5, bitmap: Todo, text:'TODO APP' }
  ]

const mappedProjects = images.map(({bitmap, text, id}) => (
<Projects key={id} Snipett={bitmap} title={text} />             
    ))
   console.log(mappedProjects)           
    
  return (
   
    <div className="text-white">
      <Header />     
      <Hero />          
      <Skills />  
      <div className="w-fit mx-auto mt-20 px-3">     
        <div className="flex justify-between mb-10 md:items-center">
          <div className='text-[40px] md:text-[72px] md:font-bold xl:text-[88px]'>Projects</div><h5 className="h-fit leading-[3.25rem] border-b-2 border-[#4EE1A0]">CONTACT ME</h5>
        </div>         
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-x-4 md:gap-y-8 xl:gap-x-10">  
          { mappedProjects }
        </div>
      </div>  
      <CallToAction />
      <Footer />
    </div>     
    
  )
}

export default App
