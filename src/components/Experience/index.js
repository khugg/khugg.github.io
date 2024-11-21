import React from "react";
import styled from "styled-components"

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`;


const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
gap: 12px;
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




const Experience = () => {
    return (<container>
         <wrapper>
            <Title>Experience</Title>
            <Desc> Here are some of my projects</Desc>
            <TimeLineSection>
            <Timeline>
             {experiences.map((experience) => (
                 <TimelineItem></TimeLineItem>
                    ))}
            </TimeLineSection>


     </wrapper>
    </container>);
};

export default Experience;