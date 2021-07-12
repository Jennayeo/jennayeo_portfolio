import React from 'react'
import styled from 'styled-components';
import skill from '../shared/Images/skill.png';
import Image from "next/image";


function Skills () {


    return (
        
        <Container>
            <ImgGrid>
                <Img src={skill} ></Img>
            </ImgGrid>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    // height: 10%;
    background-color: #fed136;
    text-align: center;
`;


const ImgGrid = styled.div`
    // padding-top: 100px;
    width: 90%;
    padding: 100px;
    margin: 80px;
    margin-bottom: 0;
`;
const Img = styled(Image)`
    border-radius: 80px;

`;

export default Skills;