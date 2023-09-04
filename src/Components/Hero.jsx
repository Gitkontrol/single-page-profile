import { Circle, HeaderEllipse } from "."

const Hero = () => {
  return (
    <div className="flex flex-col px-8 mt-9 gap-6 xl:pt-8">
      <div className="flex flex-col items-center gap-8 relative top-[350px] md:pb-3 md:pr-[12.3rem] md:top-[61px] md:text-left xl:pl-12">
        <div className="flex md:flex-col xl:w-[77%] xl:mr-[6.5rem]">       
          <h1 className="flex-row text-[40px] md:leading-none md:font-bold md:text-[72px] md:pb-4 md:w-[100%] xl:text-[88px] ">
          Nice to<br className="hidden md:block xl:hidden"/> meet you! I&apos;m <span className='w-fit border-b-4 leading-none border-[#4EE1A0] md:border-b-8'>Ayo Adejugbe.</span>                    
          </h1>        
        </div>
        <div className='flex flex-col gap-5 items-center md:gap-9 md:items-start xl:pr-9 xl:w-[55%] xl:mr-[22rem] xl:gap-[4.25rem]'>        
          <p className="md:text-left md:md:text-lg md:font-medium md:pt-8 md:w-[75%]">Based in Nigeria, I&apos;m a front-end developer passionate about building accessible web apps that users love.</p> 
          <h5 className="w-fit border-b-2 leading-9 border-[#4EE1A0]">CONTACT ME</h5>
        </div>
      </div>
      <div className='flex flex-col absolute right-60 md:right-[480px] md:top-[83px] xl:right-[63rem] xl:top-[8rem]'>
        <HeaderEllipse className='opacity-25'/>
        <HeaderEllipse className='-mt-[15.7%] opacity-25'/>
        <HeaderEllipse className='-mt-[15.7%] opacity-25'/>
        <HeaderEllipse className='-mt-[15.7%] opacity-25'/>
        <HeaderEllipse className='-mt-[15.7%] opacity-25'/>   
      </div>      
      <Circle className='absolute right-0 top-60 xl:hidden'/>
    </div>

  )
}

export default Hero