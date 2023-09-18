import React, { useState } from 'react'
import Modal from './Modal'
import {AiOutlinePlus} from 'react-icons/ai'

const AddProfile = () => {

    const [modal, setModal] = useState(false)

    
  const displayModal = ()=>{
    setModal(true)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    
  }

  return (
    <div className='w-[480px] h-[256px] shadow-slate-200 shadow-lg rounded-[20px] flex flex-col items-center justify-center px-[40px] py-[30px] border-2'>
      <button onClick={displayModal} className='rounded-full w-[76px] text-[#999CA0] transition-all hover:rotate-12 h-[76px] flex items-center justify-center bg-[#F2F2F2]'>
        <AiOutlinePlus className='w-[51px] h-[51px]'/>
      </button>
        <p className='text-[16px] text-[#858585]'>Add Profile</p>
        {modal?<Modal setModal={setModal}/>:null}

    </div>
  )
}

export default AddProfile
