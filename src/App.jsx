import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Footer from "./Components/Footer"
import { Design, ELearning, Entertainment, Todo, Memory } from "./Components"
import './App.css'


function App() {
      
  const images = [
  { id:1, bitmap: <Design />, text:'DESIGN PORTFOLIO' },
  { id:2, bitmap: <Entertainment />, text:'ENTERTAINMENT APP' },
  { id:3, bitmap: <ELearning />, text:'E-LEARNING PAGE' },
  { id:4, bitmap: <Memory />, text:'MEMORY GAME APP' },
  { id:5, bitmap: <Todo />, text:'TODO APP' } 
]

const mappedProjects = images.map(({bitmap, text, id}) => (
<Projects key={id} Snipett={bitmap} title={text} />             
    ))
   console.log(mappedProjects)           
    
  return (
    <>
      <div className="text-white md:w-full">
       <Header />
     
       <Hero />
       <div className="px-8">
        <hr />     
        <Skills />
        <hr className="md:border-[#151515] "/>
       </div>    
       <div className="flex justify-between px-8 mt-[70px] md:-mt-10 md:mb-8">
        <h1 className="md:text-[70px]">Projects</h1><h5 className="border-b-2 border-[#4EE1A0] leading-9">CONTACT ME</h5>
       </div>         
       <br /><br /> 
       <div className="md:grid md:grid-cols-2 md:pr-10">  
          { mappedProjects }
       </div>          
        <Footer />
      </div>
      
    </>
  )
}

export default App
