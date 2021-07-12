import React from 'react'
import styled from 'styled-components';
import IMG_8464 from '../shared/Images/IMG_8464.PNG';
import Image from "next/image";

function Main () {


    return (
        <Container>
            <ProfilePic src={IMG_8464}></ProfilePic>
            <TitleGrid>
                <Title>Frontend Developer</Title>
                <SubTitle>Portfolio</SubTitle>
            </TitleGrid>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 800px;
    background-color: grey;
    text-align: center;
`;

const ProfilePic = styled(Image)`
    // --size: ${(props) => props.size}px;
    width: 300px;
    height: 300px;
    // border-radius: 300px;
    // background-image: src('../shared/Images/IMG_8464.PNG');
    background-size: cover;
    // background-color: black;
    padding-top: 100px;
`;
const TitleGrid = styled.div`
padding-top: 30px;
padding-bottom: 200px;
`;
const Title = styled.div`
    font-size: 100px;
    font-family: Montserrat-Bold;
    color: #ffffff;
`;

const SubTitle = styled.div`
    font-size: 40px;
    font-family: Montserrat-Regular;
`;

export default Main;