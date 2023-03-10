import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/duc-binh-nguyen-3b4839168/" target = "_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/tripplen23" target = "_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.instagram.com/fenfhnib/" target = "_blank" rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials