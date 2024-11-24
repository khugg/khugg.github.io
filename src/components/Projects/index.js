import React from 'react'
import styled from "styled-components";
import { useState } from 'react'
import ProjectCard from '../Cards/ProjectCard';
import { projects } from '../../data/constants';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
 clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;


const Wrapper = styled.div`
max-width: 1350px;
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
gap: 12px;
padding: 10px 6px 100px 0;
`;


const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

  const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const ToogleGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;


const ToogleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`;


const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;



const Projects = ({}) => {
    const [Toogle, setToogle] = useState('all');
   return <Container id="projects" >

      <Wrapper>
      <Title>Projects</Title> 
          <Desc>
          I have worked on a wide range of projects. Here are some of my projects. 
          </Desc>

          <ToogleGroup>
          {Toogle === 'all' ? (
            <ToogleButton active value='all' onClick={() => setToogle('all')} >
                ALL
                </ToogleButton>
          ) : (
           
            <ToogleButton value='all' onClick={() => setToogle('all')} >
                ALL
            </ToogleButton>
          )}
            <Divider />

            {Toogle === 'automation' ? (
           <ToogleButton active onClick={() => setToogle('automation')}>
            AUTOMATION
            </ToogleButton>
            ) : (
                <ToogleButton onClick={() => setToogle('automation')}>
                    AUTOMATION
                </ToogleButton>
            )} 


            <Divider/>
            {Toogle === 'monitoring' ? (
            <ToogleButton active onClick={() =>setToogle('monitoring')}>
                MONITORING
            </ToogleButton>
            ) : (
                <ToogleButton  onClick={() =>setToogle('monitoring')}>
                MONITORING
            </ToogleButton>
             )} 
            <Divider/>
            
            {Toogle === 'devops' ? (
            <ToogleButton active onClick={() =>setToogle('devops')}>
                DEVOPS
            </ToogleButton>
            ) : (
                <ToogleButton  onClick={() =>setToogle('devops')}>
                DEVOPS
            </ToogleButton>
             )} 

          </ToogleGroup>

          <CardContainer>
               {Toogle === 'all' &&
                projects.map((project) =>  
                <ProjectCard project={project}/>
             )} 
             {projects
                .filter((item) => item.category === Toogle)
                .map((project) => (   
                    <ProjectCard project={project} />
                ))} 
          </CardContainer>

      </Wrapper>

   </Container>
};

export default Projects