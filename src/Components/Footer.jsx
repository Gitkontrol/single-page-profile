import { Group21, Ellipse } from './index'
import { useState } from 'react'


const fieldDataType ={

  name:'text',
  email:'email',
  message:'text'
};


  const validateEmail = (email) => {
  // Regular expression for email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};


const validateText = ( input )=> {
  return typeof input === 'string'
}


const Footer= ()=>  {
 

  const[fields, setFields] = useState({
    name:'',
    email:'',
    message:''
  });

  const[error, setError] = useState({
    name:false,
    email:false,
    message:false
  });


  const handleonChange = (fieldname, value)=> {
    setFields((prevFields)=> ({
      ...prevFields, 
      [fieldname]: value
    }))
  };

  
// if (
//   (fieldDataType['message'] === 'text' && !validateText(fields['message'])) ||
//    (fieldDataType['email'] === 'email' && !validateEmail(fields['email'])) ||
//    (fieldDataType['name'] === 'text') && !validateText(fields['name']))
//     {
//   setError({
    
//     name: true,
//     email: true,
//     message: true 

//   });
// } else {
//   setError({
    
//     name: false,
//     email: false,
//     message: false
//   });
// }

 
  return (
    <div className='flex flex-col bg-[#242424] mt-28 md:h-[880px] md:px-8 md:pt-20 md:mt-12 md:my-auto gap-6'>
        <h1 className='md:text-[70px] md:pb-4'>Contact</h1>
        <p className='mb-10 px-8'>I would love to hear about your project and how I could help. Please fill in the form, and I&aposll get back to you as soon as possible.</p>

        <div className='px-8'>
          <div> 
            <input 
            className='relative top-10 text-white bg-[#242424]' 
            type='text' 
            value={fields.name}
            onChange={(e)=> handleonChange('name', e.target.value)}
            />
            <p className='leading-[60px] -mb-0.5 text-left pl-6'>NAME</p><hr/>
               { error.name && <div className='text-red text-xs'>Sorry, invalid format here </div>  }                                  
          </div>
        
          <div> 
            <input 
            className='relative top-11 text-white bg-[#242424]' 
            type='email' 
            value={fields.email}
            onChange={(e)=> handleonChange('email', e.target.value)} />
            <p className='leading-[60px] mt-0.5 text-left pl-6'>EMAIL</p><hr className='hr2'/>
              { error.email && <div className='text-red text-xs'>Sorry, invalid format here </div>  }      
          </div>
          <div> 
            <input 
            className='relative left-6 top-9 text-white bg-[#242424]' 
            type='text' 
            value={fields.message}
            onChange={(e)=> handleonChange('message', e.target.value)} />
            <p className='leading-[90px] mb-14 relative bottom-2 -mt-2.5 text-left pl-6'>MESSAGE</p><hr className='hr3'/>
            { error.message && <div className='text-red text-xs'>Sorry, invalid format here </div>  }            
          </div>       
        </div>
        <div className='flex flex-col gap-0 -mt-[23%] md:relative md:right-6'>
          <Ellipse className='opacity-25 '/>
          <Ellipse className='-mt-[20%] opacity-25'/>
          <Ellipse className='-mt-[20%] opacity-25'/>
          <Ellipse className='-mt-[20%] opacity-25'/>
          <Ellipse className='-mt-[20%] opacity-25'/>   
        </div>
                   
        <button className=' mb-20 w-fit ml-60'>
            <h5 className='border-b-2 leading-1 mt-6 border-[#4EE1A0]'>SEND-MESSAGE</h5> 
        </button>  
        
        <div className='px-8'><hr /></div>
        

        <div className=' flex flex-col px-8 mt-8 mb-14 gap-5 items-center'>          
            <h4>ayoadejugbe</h4>
            <div>
              <Group21 />
            </div>
        </div>       
       
    </div>
  )
}

export default Footer