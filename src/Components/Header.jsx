import { Circle, Ellipse, Group21, } from './index.jsx'

const Header = () => {
  return (
    <div className='flex flex-col gap-4 -mt-3 mb-[60px]'>
      <div className='flex-col md:px-8 md:flex-row md:justify-between items-center'>      
        <h4 className='md:text-left'>ayoadejugbe</h4>
        <div className='md:flex-row md:ml-[78%] md:-mt-5'>
          <Group21 />
        </div>
      </div>
      <div className='flex flex-col md:-mt-2 gap-0 mt-3'>
        <Ellipse className='opacity-25 '/>
        <Ellipse className='-mt-[20%] opacity-25 md:-mt-[70px]'/>
        <Ellipse className='-mt-[20%] opacity-25 md:-mt-[70px]'/>
        <Ellipse className='-mt-[20%] opacity-25 md:-mt-[70px]'/>
        <Ellipse className='-mt-[20%] opacity-25 md:-mt-[70px]'/>   
      </div>
      <div className='flex w-full justify-end opacity-25'><Circle /></div>
      
    </div>
  )
}

export default Header