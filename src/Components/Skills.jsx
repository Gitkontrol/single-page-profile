import { Oval10 } from './'

const Skills = () => {
  return (

    <div className="flex px-8 -mb-20 flex-col md:mx-auto lg:grid-cols-3 md:grid md:px-0 md:grid-cols-2 md:text-left md:gap-x-32 md:pr-40 md:gap-y-12 gap-6">
    
        <div>
            <h2 className="md:text-3xl">HTML</h2><p className="md:text-lg md:text-left">4 Years Experience</p>       
        </div>
        <div>
            <h2 className="md:text-3xl">CSS</h2><p className="md:text-lg md:text-left">4 Years Experience</p>       
        </div>
        <div>
            <h2 className="md:text-3xl">JAVASCRIPT</h2><p className="md:text-lg md:text-left">4 Years Experience</p>       
        </div>
        <div>
            <h2 className="md:text-3xl">REACT</h2><p className="md:text-lg md:text-left">4 Years Experience</p>       
        </div>
        <div>
            <h2 className="md:text-3xl">PYTHON</h2><p className="md:text-lg md:text-left">4 Years Experience</p>       
        </div>
        <div>
            <h2 className="md:text-3xl">SQL</h2><p className="md:text-lg md:text-left">4 Years Experience</p> 
        </div>
    
        
        <div className='ml-[162px] mt-4 md:relative md:left-[200%] md:bottom-16'> 
            <Oval10 className='-mt-[50%] opacity-25 md:-mt-[70px]'/>
            <Oval10 className='-mt-[50%] opacity-25 md:-mt-[70px]'/>
            <Oval10 className='-mt-[50%] opacity-25 md:-mt-[70px]'/>
            <Oval10 className='-mt-[50%] opacity-25 md:-mt-[70px]'/>
            <Oval10 className='-mt-[50%] opacity-25 md:-mt-[70px]'/>
        </div>

    </div>
  )
}

export default Skills