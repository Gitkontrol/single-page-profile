import { Oval10 } from './'

const Skills = () => {
  return (

    <div className="my-9 flex px-8 flex-col md:grid md:px-0 md:grid-cols-2 md:text-left md:gap-x-32 md:pr-40 md:gap-y-12 gap-6">
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
        
        <div className='md:relative md:left-[265%] md:bottom-10'> 
            <Oval10 className='-mt-[20%] opacity-25 md:-mt-[70px] md:w-[90%]'/>
            <Oval10 className='-mt-[20%] opacity-25 md:-mt-[70px] md:w-[90%]'/>
            <Oval10 className='-mt-[20%] opacity-25 md:-mt-[70px] md:w-[90%]'/>
            <Oval10 className='-mt-[20%] opacity-25 md:-mt-[70px] md:w-[90%]'/>
            <Oval10 className='-mt-[20%] opacity-25 md:-mt-[70px] md:w-[90%]'/>
        </div>

    </div>
  )
}

export default Skills