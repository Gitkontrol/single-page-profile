import { Group12 } from ".";



const Footer= ()=> {
 
return (
    <div className='flex flex-col bg-[#242424] xl:gap-6'>      
      <div className='w-full xl:-mt-[8rem] xl:px-[9.5rem]'>         
        <div  className='px-12 md:px-9'><hr/></div>
        <div className='flex flex-col px-8 mt-12 mb-14 gap-5 items-center md:mx-auto md:flex-row md:justify-between xl:pt-8 xl:px-12'>          
          <h4 className='md:text-[32px]'>ayoadejugbe</h4>
          <img src={Group12} alt='groupIcons' className='md:w-52' />
        </div>
      </div>                     
    </div>
  )
}

export default Footer