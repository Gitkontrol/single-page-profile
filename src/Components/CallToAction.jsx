import { HeaderEllipse } from "."
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
  
  
  const CallToAction =()=> { 
   
  
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
    <div className='flex flex-col bg-[#242424] mt-10 pt-12 gap-6 xl:w-full'>            
      <div className='md:flex md:flex-col md:gap-8 xl:text-left xl:mt-16 xl:gap-12'>      
        <h1 className='mb-2 md:text-[72px] xl:text-[88px] xl:ml-44'>Contact</h1>
        <p className='flex w-[410px] mx-auto justify-center mb-10 px-8 md:w-[460px] xl:ml-36 xl:text-left'>
          I would love to hear about your project and how I could help. 
          Please fill in the form, and I&apos;ll get back to you as soon as possible.
        </p> 
      </div>    

      <div className='flex flex-col px-11 gap-6 md:px-48 xl:w-[51rem] xl:relative xl:bottom-44 xl:left-[39rem] xl:-mt-[4rem]'>
        <div> 
          <input 
          placeholder='NAME'
          className='text-white pr-48 xl:w-fit w-full leading-[3rem] bg-[#33bb45] placeholder:text-[#D9D9D9] placeholder:text-[16px]' 
          type='text' 
          value={fields.name}
          onChange={(e)=> handleonChange('name', e.target.value)}
          />
          <hr/>
          { error.name && <div className='text-red text-xs'>Sorry, invalid format here </div>  }                                 
        </div>                    
        <div> 
          <input 
          className='text-white pr-48 xl:w-fit leading-[3rem] w-full bg-[#33bb45] placeholder:text-[#D9D9D9] placeholder:text-[16px]'
          placeholder='EMAIL' 
          type='email' 
          value={fields.email}
          onChange={(e)=> handleonChange('email', e.target.value)} />
          <hr/>
          { error.email && <div className='text-red text-xs'>Sorry, invalid format here </div>  }      
        </div>
        <div> 
          <input 
          className='text-white pr-48 xl:w-fit w-full leading-[3rem] pb-16 bg-[#2da742] placeholder:text-[#D9D9D9] placeholder:text-[16px]'
          placeholder='MESSAGE' 
          type='text' 
          value={fields.message}
          onChange={(e)=> handleonChange('message', e.target.value)} />
          <hr/>
          { error.message && <div className='text-red text-xs'>Sorry, invalid format here </div>  }            
        </div>
        <button className='pl-[193px] pb-16  xl:ml-12'>
          <h5 className='border-b-2 leading-10 w-fit md:ml-[47px] border-[#4EE1A0]'>SEND MESSAGE</h5> 
        </button>         
      </div>                    
      <div className='flex flex-col absolute right-52 top-[835.7%] md:top-[207.5rem] md:right-[38rem] xl:mt-[19rem] xl:right-[72rem]'>
        <HeaderEllipse className='opacity-25'/>
        <HeaderEllipse className='-mt-[16%] opacity-25'/>
        <HeaderEllipse className='-mt-[16%] opacity-25'/>
        <HeaderEllipse className='-mt-[16%] opacity-25'/>
        <HeaderEllipse className='-mt-[16%] opacity-25'/>   
      </div>
    </div>
  ) 
}
export default CallToAction