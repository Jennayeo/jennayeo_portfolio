import React from 'react'
import styled from 'styled-components';
import Person from '../shared/Icons/user.png';
import Email from '../shared/Icons/email.png';
import Education from '../shared/Icons/education.png';
import Me from '../shared/Images/jiyoung.png';
import Image from "next/image";
import Home from '../shared/Icons/home.png';
import github from '../shared/Icons/github.png';
function about() {
    return (
        <Container>
            <h1>About</h1>
            <Title>
                "월요일이 설레는 주니어 개발자 여지영입니다!"
            </Title>
            <Contents>
                <ProfilePic>
                    <Image src={Me} width="400" height="400"></Image>
                </ProfilePic>
                <TextContents>
                <TextGrid>
                    <IconBox>
                        <IconGrid><SubGrid><Icon src={Person} width="45" height="35"/></SubGrid>Jiyoung Jenna Yeo</IconGrid><br/><br/>
                        <IconGrid><SubGrid><Icon src={Education} width="40" height="40"/></SubGrid>Michigan State University</IconGrid><br/><br/>
                        <IconGrid><SubGrid><Icon src={Email} width="35" height="35"/></SubGrid>jenna.jiyoung.yeo@gmail.com</IconGrid>
                    </IconBox>
                </TextGrid>
                <Blog>
                        <IconGrid><SubGrid><Icon src={Home} width="35" height="35"/></SubGrid>jennayeo.tistory.com</IconGrid><br/><br/>
                        <IconGrid><SubGrid><Icon src={github} width="35" height="35"/></SubGrid>github.com/Jennayeo</IconGrid>
                </Blog>
                </TextContents>
            </Contents>
        </Container>
    )
    }
    const Container = styled.div`
        width: 80%;
        // height: 500px;
        margin: 0 auto;

    `;
    const Title = styled.div`
        font-family: NanumBrushScript-Regular;
        font-size: 3vw;
    `;
    const Contents = styled.div`
        display: flex;
        text-align: center;
        margin-top: 90px;
        // margin: 80px auto auto auto;
    `;
    const ProfilePic = styled.div`
        width: 30%;
        
    `
    const TextGrid = styled.div`
        padding: 20px;
        display: flex;
    `;

    const TextContents = styled.div`
        margin-left: 100px;
        display: flex;
    `;
    const IconBox = styled.div`
        padding:10px;
    `;
    const IconGrid = styled.div`
        display: flex;
        font-family: NotoSansKR-Regular;
        font-size: 1.5vw;
    `;
    const Blog =styled.div`
        padding-top: 60px;
    `;

    const SubGrid = styled.div`
        margin-right: 10px;
    `;
    const Img = styled.img`
        width: 70%;
    `;
    const Text = styled.div`
        width: 50%;

    `;
    const  Icon= styled(Image)`
        margin-bottom: 50px;
    `;
export default about
