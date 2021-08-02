import React from 'react'
import styled from 'styled-components';
import skill from '../shared/Images/skill.png';
import project1 from '../shared/Images/Project1.png';
import project2 from '../shared/Images/Project2.png';
import Image from "next/image";

function Projects () {


    return (
        <Container>
            <h1>Project</h1>
            <Project>
            <Project1>
                <Title>SANTA - 등산은산타😎</Title>
                <Grid>
                <ImgGrid><Image src={project1}></Image></ImgGrid>
                    <Text>
                        <p>SANTA는 혼자서는 가기는 애매하고, 지인들은 바빠서 등산을 망설이시는 분들을 위한 등산메이트를 구할 수 있는 서비스입니다! 
                            등산 모임을 주최하면 신청자 수락/거절이 가능하며, 참여자로서 등산모임에 신청/취소가 가능합니다. 
                            참여했던 모임에 한해서 후기글도 남길 수 있습니다. 
                            이번 프로젝트를 통해 백엔드, 디자이너와 협업 능력을 기를 수 있었습니다.</p>
                        <p>
                        <li>개발기간: 2021.04.28 - 2021.05.12</li>
                        <li>프로젝트 주제: 등산 메이트 커뮤니티</li>
                        <li>개발 인원: 프론트엔드 2, 백엔드(spring) 2, 디자이너(UI/UX Wireframe) 2</li>
                        </p>
                        <p>
                        ✨ 소셜로그인 ✔️<br />
                        ✨ 컨텐츠 업로드 & 수정 & 삭제✔️<br />
                        ✨ 컨텐츠 조회 -  페이지네이션 ✔️<br />
                        ✨ 모임 신청, 수락, 거절 ✔️<br />
                        ✨ responsive web design ✔️<br />
                        </p>
                    </Text>
                </Grid>
            </Project1>
            </Project>
            <Project2>
                <Title>My Journey - Share your journey!</Title>
                <Grid>
                <ImgGrid2><Image src={project2}></Image></ImgGrid2>
                    <Text2>
                        <p>
                        My Journey는 글, 이미지를 공유할 수 있는 커뮤니티 서비스입니다. 회원가입과 로그인 후 원하는 컨텐츠 포스팅이 가능하며, 다른 유저의 포스트에 댓글 등록도 가능합니다. 본인의 글에 달린 최신 댓글을 확인 할 수 있도록 알림 기능도 추가하였습니다. 기본적인 CRUD구현이지만, 이번 프로젝트를 통해 서버리스 플랫폼인  firebase를 사용해 볼 수있는 좋은 기회였습니다.
                        </p>
                        <p>
                        - 개인 프로젝트<br />
                        - 프로젝트 주제: 이미지 게시물 공유 커뮤니티<br />
                        - 개발 기간: 2021.07.04 ~ 2021.07.11<br />
                        - React + firebase 사용<br />
                        - 데이터 베이스: firestore
                        </p>
                        <p>
                        ✨ 회원가입, 로그인 - 정규식 표현 ✔️<br />
                        ✨ 컨텐츠 포스팅 - 글, 이미지 업로드 & 수정 ✔️<br />
                        ✨ 컨텐츠 조회 -  무한 스크롤 ✔️<br />
                        ✨ responsive web design ✔️<br />
                        </p>
                    </Text2>
                </Grid>
            </Project2>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    align-items: center;
    background-color: #cccccc;
    padding: 100px;
`;
const Title = styled.div`
        font-family: NanumBrushScript-Regular;
        font-size: 3vw;
        font-weight: bold;
    `;
const Project = styled.div`
    display: flex;
    // width: 100%;
    margin: auto;
    margin-bottom: 50px;
`;
const Project1 = styled.div`
    width: 90%;
    // height: 500px;
    border-radius: 80px;
    background-color: #ffffff;
    // border-radius: 26px;
    // background-color: black;
    text-align: center;
    margin: auto;
    padding:  30px 10px ;

`;
const Grid = styled.div`
    align-items: center;
    width: 100%;
    display: flex;
`;

const Text =styled.div`
    font-family: NotoSansKR-Regular;
    width: 400px;
    text-align: left;
    margin: auto;
    font-size: 1vw;
    `;

    const Text2 =styled.div`
    font-family: NotoSansKR-Regular;
    width: 500px;
    text-align: left;
    margin: auto;
    margin-left: 50px;
    font-size: 1vw;
    `;   
const Check = styled.div``;

const ImgGrid = styled.div`
    width: 50%;
    margin-left: auto;

`;
const ImgGrid2 = styled.div`
    width: 34%;
    margin: auto;
    padding-left: 50px;
`;
const Project2 = styled.div`
width: 90%;
    // height: 500px;
    border-radius: 80px;
    background-color: #ffffff;
    // border-radius: 26px;
    // background-color: black;
    text-align: center;
    margin: auto;
    padding:  30px 10px ;

`;
export default Projects;