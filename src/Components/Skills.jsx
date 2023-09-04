import { Revrs, Revrs2 } from './'

const Skills = () => {
  return (

    <div className="mt-[440px] px-4 md:mt-[140px] md:text-left md:px-[33px] xl:px-40 xl:mt-60">
        <hr/>
        <div className='flex flex-col gap-8 relative top-12 pb-[85px] md:grid md:grid-cols-2 md:gap-y-16 xl:grid-cols-3 xl:pl-1 xl:pt-8'>            
            <div className='flex flex-col md:gap-4'>
                <h2 className="md:text-[48px]">HTML</h2>
                <div className="text-[#D9D9D9] text-[16px] font-medium leading-7 md:text-lg">4 Years Experience</div>       
            </div> 
            <div className='flex flex-col md:gap-4'>
                <h2 className="md:text-[48px]">CSS</h2>
                <div className="text-[#D9D9D9] text-[16px] font-medium leading-7 md:text-lg">4 Years Experience</div>       
            </div>
            <div className='flex flex-col md:gap-4'>
                <h2 className="md:text-[48px]">Javascript</h2>
                <div className="text-[#D9D9D9] text-[16px] font-medium leading-7 md:text-lg">4 Years Experience</div>       
            </div>
            <div className='flex flex-col md:gap-4'>
                <h2 className="md:text-[48px]">React</h2>
                <div className="text-[#D9D9D9] text-[16px] font-medium leading-7 md:text-lg">4 Years Experience</div>       
            </div>
            <div className='flex flex-col md:gap-4'>
                <h2 className="md:text-[48px]">Python</h2>
                <div className="text-[#D9D9D9] text-[16px] font-medium leading-7 md:text-lg">4 Years Experience</div>       
            </div>
            <div className='flex flex-col md:gap-4'>
                <h2 className="md:text-[48px]">SQL</h2>
                <div className="text-[#D9D9D9] text-[16px] font-medium leading-7 md:text-lg">4 Years Experience</div> 
            </div>
        </div>
        <div className='md:hidden xl:hidden'>
            <hr />    
        </div>
        <div className='absolute md:hidden left-[227px] -mt-[68px] md:right-0 md:top-[69.5%] xl:hidden'> 
            <img src={Revrs} alt='ellipse' className='opacity-25'/>
            <img src={Revrs} alt='ellipse' className='-mt-[66px] opacity-25'/>
            <img src={Revrs} alt='ellipse' className='-mt-[66px] opacity-25'/>
            <img src={Revrs} alt='ellipse' className='-mt-[66px] opacity-25'/>
            <img src={Revrs} alt='ellipse' className='-mt-[66px] opacity-25'/>
        </div>
        <div className='hidden md:hidden xl:absolute xl:right-0 xl:top-[66rem]'> 
            <Revrs2 className='opacity-25'/>
            <Revrs2 className='-mt-[22%] opacity-25'/>
            <Revrs2 className='-mt-[22%] opacity-25'/>
            <Revrs2 className='-mt-[22%] opacity-25'/>
            <Revrs2 className='-mt-[22%] opacity-25'/>
        </div>
    </div>
  )
}
export default Skills