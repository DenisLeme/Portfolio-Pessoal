import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/denis-ribeiro-leme/" 
        />
        <ItemContact 
          IconFa={FaFacebook} 
          LinkContact="https://www.facebook.com/denis.ribeiroleme/" 
        />
        <ItemContact 
          IconFa={FaGithub} 
          LinkContact="https://github.com/DenisLeme" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="denis_leme@hotmail.com" 
        />
      </Content>
    </Container>
  )
}
