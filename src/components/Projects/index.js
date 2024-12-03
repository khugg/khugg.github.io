import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects including Automation, monitoring, containarization, and security. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'automation' ?
            <ToggleButton active value="automation" onClick={() => setToggle('automation')}>automation</ToggleButton>
            :
            <ToggleButton value="automation" onClick={() => setToggle('automation')}>automation</ToggleButton>
          }
          <Divider />
          {toggle === 'monitoring' ?
            <ToggleButton active value="monitoring" onClick={() => setToggle('monitoring')}>monitoring</ToggleButton>
            :
            <ToggleButton value="monitoring" onClick={() => setToggle('monitoring')}>monitoring</ToggleButton>
          }
          <Divider />
          {toggle === 'Devops' ?
            <ToggleButton active value="Devops" onClick={() => setToggle('Devops')}>Devops</ToggleButton>
            :
            <ToggleButton value="Devops" onClick={() => setToggle('Devops')}>Devops</ToggleButton>
          }
          <Divider />
          {toggle === 'portfolio website' ?
            <ToggleButton active value="portfolio website" onClick={() => setToggle('portfolio website')}>Portfolio website</ToggleButton>
            :
            <ToggleButton value="portfolio website" onClick={() => setToggle('portfolio website')}>Portfolio website</ToggleButton>
          }
        </ToggleButtonGroup>

        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects;