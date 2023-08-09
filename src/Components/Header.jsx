import { Circle, Ellipse, Group21, } from './index.jsx'

const Header = () => {
  return (
    <div className='flex flex-col gap-4 -mt-3 mb-[60px]'>      
      <h4>ayoadejugbe</h4>
      <div className='flex flex-row justify-center'>
        <Group21 />
      </div>
      <div className='flex flex-col gap-0 mt-3'>
        <Ellipse className='opacity-25 '/>
        <Ellipse className='-mt-[20%] opacity-25'/>
        <Ellipse className='-mt-[20%] opacity-25'/>
        <Ellipse className='-mt-[20%] opacity-25'/>  
      </div>
      <div className='flex w-full justify-end opacity-25'><Circle /></div>
      
    </div>
  )
}

export default Header