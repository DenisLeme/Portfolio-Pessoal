import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'
import TypingName from '../../styles/TypingName'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <TypingName text="Olá, Sou Denis Leme"/>
        <Function>FullStack Developer</Function>
        <Intro>Formado em Análise e desenvolvimento de sistemas, 
          tenho experiência em desenvolvimento Web
          (React, Asp, JS e outros).
        </Intro>
        <Link href="projects" passHref>
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/logo.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}
