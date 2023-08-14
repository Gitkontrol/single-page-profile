import { Circle, Ellipse, Group21, } from './index.jsx'

const Header = () => {
  return (
    <div className='flex flex-col gap-4 -mt-3 mb-[60px] md:mx-auto md:justify-around'>
      <div className='flex flex-col mt-8 gap-5 lg:mt-10 lg:px-32 md:px-8 md:flex-row md:justify-between md:mt-8 items-center'>      
        <h4 className='md:text-left md:mb-2'>ayoadejugbe</h4>
        <div>
          <Group21 />
        </div>
      </div>
      <div className='flex flex-col md:-mt-2 gap-0 mt-3'>
        <Ellipse className='opacity-25 '/>
        <Ellipse className='-mt-[16%] opacity-25 md:-mt-[70px]'/>
        <Ellipse className='-mt-[16%] opacity-25 md:-mt-[70px]'/>
        <Ellipse className='-mt-[16%] opacity-25 md:-mt-[70px]'/>
        <Ellipse className='-mt-[16%] opacity-25 md:-mt-[70px]'/>   
      </div>
      <div className='flex w-full justify-end opacity-25'><Circle /></div>
      
    </div>
  )
}

export default Header