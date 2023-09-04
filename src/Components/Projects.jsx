import { useState } from 'react'
import PropTypes from 'prop-types'


const Projects = ({ Snipett, title }) => {

const [isHovering, setIsHovering] = useState(false)

const handleMouseOver = ()=> {
  setIsHovering(true)
}

const handleMouseOut = ()=> {
  setIsHovering(false)
}

// const boxStyle = {
//   backgroundColor: isHovering ? 'black':'none',
//   opacity: isHovering ? '0.75': '0',
//   transition: '0.6',
//   height: '253px',
//   width: '345px'
// };


  return (

    <div className='flex flex-col items-center gap-3'>
            
      <div className='w-max relative h-max' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <img src= { Snipett } alt='pngImage' className='w-[400px] h-[300px] md:w-[364px] md:h-[273px] xl:w-[535px] xl:h-[430px]'/>  { isHovering && ( 

          <div className='flex flex-col justify-center items-center gap-y-5 w-[400px] h-[300px] md:w-[364px] md:h-[273px] xl:w-[535px] xl:h-[430px] duration-500 hover:bg-black/75 absolute bottom-0'>                  
            <h5 className="w-max border-b-2 leading-9 border-[#4EE1A0]">VIEW PROJECT</h5>
            <h5 className="w-max border-b-2 leading-9 border-[#4EE1A0]">VIEW CODE</h5>                
          </div>      
        )}      
      </div>     
        
      <div className='flex flex-col w-full items-start gap-3 xl:pt-3'>          
        <h3>{ title }</h3>          
        <p>HTML   CSS</p>         
        <div className='flex justify-start gap-8 mb-10'>
          <h5 className="border-b-2 leading-9 border-[#4EE1A0] xl:hidden">VIEW PROJECT</h5> 
          <h5 className="border-b-2 leading-9 border-[#4EE1A0] xl:hidden">VIEW CODE</h5>
        </div>
      </div>
        
    </div>     
    
    
  )
}

Projects.propTypes = {
  Snipett: PropTypes.string,
  title: PropTypes.string
}

export default Projects