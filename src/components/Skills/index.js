import React from "react";
import styled from 'styled-components'
import { skills } from '../../data/constants'
import { Container } from "@mui/material";


const skills = () => {
    return <Container id="Skills">
        <wrapper>
          <Title>Skills</Title> 
          <Desc>
          Here are some of my skills on which I have been working on for the past 2 years.
          </Desc>
          <Skillscontainer>
          {skills.map((skill) => (
            <Skill>
                <SkillTitle>
                {item.title}
                </SkillTitle>
                <SkillList>
                {item.skills.map((skill) => (
                    
                </SkillList>
            </Skill>
          </Skillscontainer>
        </wrapper>
        
        </Container>;
};

export default skills;