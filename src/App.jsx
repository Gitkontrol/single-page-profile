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
      <div className="text-white">
       <Header />
     
       <Hero />
       <hr />
       <Skills />
       <hr /> 
       <div className="flex justify-between mt-[70px]">
        <h1>Projects</h1><h5 className="border-b-2 border-[#4EE1A0] leading-9">CONTACT ME</h5>
       </div>         
       <br /><br /> 
      { mappedProjects }          
        <Footer />
      </div>
      
    </>
  )
}

export default App
