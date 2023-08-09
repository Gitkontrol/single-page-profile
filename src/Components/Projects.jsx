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

    <div className='flex flex-col gap-3 text-left'>
    
      <div className='w-max relative h-max' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          { Snipett }  { isHovering && ( 

                <div className='flex flex-col justify-center items-center gap-y-5 pb-[50px] w-[342px] h-[253px] hover:bg-black/75 absolute bottom-0'>                  
                    <h5 className="w-max border-b-2 leading-9 border-[#4EE1A0]">VIEW PROJECT</h5>
                    <h5 className="w-max border-b-2 leading-9 border-[#4EE1A0]">VIEW CODE</h5>                
                </div>
           )}      
        
      </div>               
             
        <h3>{ title }</h3>

        <div className='pb-2 -mt-2'>
            <parent>HTML   CSS</parent>            
        </div>
        <div className='flex justify-start gap-8 mb-10'>
            <h5 className="border-b-2 leading-9 border-[#4EE1A0]">VIEW PROJECT</h5> 
            <h5 className="border-b-2 leading-9 border-[#4EE1A0]">VIEW CODE</h5>
        </div>

    </div>
  )
}

Projects.propTypes = {
  Snipett: PropTypes.element,
  title: PropTypes.string
}

export default Projects