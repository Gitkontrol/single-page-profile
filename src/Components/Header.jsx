import {  Group12, } from './index.jsx'

const Header = () => {
  return (
    <div className='flex flex-col gap-4 pt-4 items-center md:flex-row md:justify-between md:px-6 md:pt-6 xl:px-40 xl:pt-10'>          
        <h4 className='md:text-[32px]'>ayoadejugbe</h4>
        <div>
          <img src={Group12} alt='groupIcons' className='w-32 md:w-52' />
        </div>      
    </div>
  )
}

export default Header