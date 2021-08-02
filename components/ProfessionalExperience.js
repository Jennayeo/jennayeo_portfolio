import React from 'react'
import styled from 'styled-components';
import skill from '../shared/Images/skill.png';
import dataitgirls from '../shared/Images/dataitgirls.png';
import hanghae99 from '../shared/Images/hanghae99.png';
import msu from '../shared/Images/msu.png';
import bexco from '../shared/Images/bexco.png';
import ihg from '../shared/Images/ihg.jpg';
import Image from "next/image";
import Swal from 'sweetalert2'

function Projects () {

    const hanghaeBtn = () => {
        Swal.fire({
            title: "항해99",
            html: "기간: 2021.03 ~ 2021.06 <br><br> 프론트엔드 개발자가 되기위해 99일간 하루 평균 16시간씩 코딩하는 부트캠프에 참여하였습니다. 프론트엔드 개발자로서 역량을 발전시킬뿐 아닌 서버 개발자, 디자이너와도 협업하여 프로젝트를 진행할 수 있는 좋은 기회였습니다. "
        });
        return;
    }
    const dataitgirlsBtn = () => {
        Swal.fire({
            title: "데잇걸즈 DATA.IT.GIRLS",
            html: "기간: 2020.07 ~ 2020.12 <br><br> 과학기술정보통신원과 한국정보화진흥원이 주관하는 데이터분석가 양성 프로그램으로 mySQL, 파이썬, 태블로 그리고 회귀분석을 중심으로한 통계를 공부하였습니다. 데이터 분석 프로젝트를 진행하며 팀원간의협업능력도기를수있었으며서비스개선을위한데이터분석스킬을성장시킬수있는좋은 기회였습니다. <br><br> ✔️ 한국소프트웨어산업협회 우수상"
        });
        return;
    }
    const msuBtn = () => {
        Swal.fire({
            title: "Michigan State University",
            html: "기간: 2015.09 ~ 2019.05 <br><br> ✔️ 전공: Hospitality Business <br> ✔️ 학점: 3.3/4.0 <br> ✔️ 활동: 창업동아리 Michigan Entrepreneur Student Association 부회장"
        });
        return;
    }
    const bexcoBtn = () => {
        Swal.fire({
            title: "Bexco - 마이스사업부",
            html: "기간: 2019.07 ~ 2019.10 <br><br> 부산시 주관 행사를 담당하여 마케팅과 홍보를 주 업무로 하였으며 3일간 참관객 1만명이상의 성과를 이루었습니다."
        });
        return;
    }
    const ihgBtn = () => {
        Swal.fire({
            title: "Intercontinental Hotel Group",
            html: "기간: 2018.09 ~ 2019.05 <br><br> 미국 미시간 주의 인터콘티넨탈 호텔그룹의 candlewood suites에서 room sales & reservation을 담당하였습니다."
        });
        return;
    }

    return (
            <Container>
                <Project>
                <Project1>
                <Msu><Image src={msu} onClick={msuBtn}></Image>2019</Msu>
                <Data><Image src={dataitgirls} onClick={dataitgirlsBtn}></Image>2020</Data>
                </Project1>
                    <hr/>
                <Project1>
                <Ihg>2018<Image src={ihg} onClick={ihgBtn}></Image></Ihg>
                <Bexco>2019<Image src={bexco} onClick={bexcoBtn}></Image></Bexco>
                <Hanghae>2021<Image src={hanghae99} onClick={hanghaeBtn}></Image></Hanghae>
                </Project1>
                </Project>
            </Container>
    )
}
const Container = styled.div`
    width: 80%;
    //display: flex;
    //flex-direction: row;
    margin: auto;
    padding: 100px;
    font-family: NotoSansKR-Regular;
`;
const Line = styled.div`
    display: flex;
`;
const Title = styled.div`
        font-family: NanumBrushScript-Regular;
        font-size: 3vw;
        font-weight: bold;
    `;
const Project = styled.div`
    width: 100%;
    // display: flex;
    // flex-direction: row;
    //margin: auto;
    // margin-bottom: 50px;
`;
const Project1 = styled.div`
    display: flex;
    //width: 50%;
    // height: 500px;
    border-radius: 80px;
    // background-color: #cccccc;
    // border-radius: 26px;
    // background-color: black;
    text-align: center;
    margin: auto;
    padding:  30px 10px ;

`;
const Grid = styled.div`
    align-items: center;
    //width: 100%;
    display: flex;
`;

const Text =styled.div`
    font-family: NotoSansKR-Regular;
    width: 100%;
    text-align: left;
    margin: auto;
    font-size: 1vw;
    `;

const Ihg = styled.div`
    width: 30%;
    margin-right: 100px;
    cursor: pointer;
    :hover {
        transform: scale(1.2);
    }
`;
const Data = styled.div`
cursor: pointer;
width: 15%;
    margin-left: 300px;
    :hover {
        transform: scale(1.2);
    }
`;
const Msu = styled.div`
    width: 20%;
    margin-left: 200px;
    cursor: pointer;
    :hover {
        transform: scale(1.2);
    }
`;
const Bexco = styled.div`
width: 30%;
margin-right: 100px;
margin-top: 80px;
cursor: pointer;
:hover {
    transform: scale(1.2);
}
`;
const Hanghae = styled.div`
    width: 20%;
    margin-right: 100px;
    cursor: pointer;
    :hover {
        transform: scale(1.2);
    }
`;
    const Text2 =styled.div`
    font-family: NotoSansKR-Regular;
    width: 500px;
    text-align: left;
    margin: auto;
    margin-left: 50px;
    font-size: 1vw;
    `;   

const Project2 = styled.div`
    width: 50%;
    // height: 500px;
    border-radius: 80px;
    background-color: #cccccc;
    // border-radius: 26px;
    // background-color: black;
    text-align: center;
    margin: auto;
    padding:  30px 10px ;

`;
export default Projects;