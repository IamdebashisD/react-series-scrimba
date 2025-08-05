import React from 'react'
import phoneIcon from '../assets/phoneIcon.png'
import mailIcon from '../assets/mailIcon.png'
import about from '../assets/about.png'

function ContactComponent(props) {
    return (
        <article className="flex flex-col p-[13px] pb-5 bg-white m-3 rounded-[10px] shadow-[1px_1px_8px_rgba(0,0,0,0.25)] basis-[225px] cursor-pointer  transition-transform duration-100 ease-in-out hover:-translate-y-1 overflow-hidden">
            <img className='w-full h-auto self-center rounded-[5px] object-cover'
                src={props.dogImg}
                alt="Photo of Mr. Whiskerson"
            />

            <h3 className='font-[700] flex text-[18px] items-baseline'>{props.name}</h3>

            <div className="flex items-center space-x-3 cursor-pointer">
                <img
                    src={phoneIcon}
                    alt="phone icon"
                    width={12}
                />
                <p >{props.contactNo}</p>
            </div>

            <div className='flex items-center space-x-1'>
                <img className='h-[11px] mr-[8px]'
                    src={mailIcon}
                    alt="mail icon"
                />
                <p className='my-[3px] text-[12px] text-[#2B283A] cursor-pointer'>{props.email}</p>
            </div>

            <div className='flex place-items-center font-[300] space-x-1'>
                <img width={15} src={about} alt="about-icon" />
                <span className='my-[3px] text-[12px] text-[#2B283A]'>{props.details}</span>
            </div>

        </article>
    )
}

export default ContactComponent
