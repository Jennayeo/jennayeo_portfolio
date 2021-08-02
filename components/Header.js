import React from 'react'
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";

function Header () {

    return (
        <HeaderGrid>
            <Container>
                <Title
                    // onClick={this.scrollToTop}
                    >Jiyoung Jenna Yeo</Title>
                <NavGrid>
                    <Nav><Link activeClass="active" to="about" spy={true} smooth={true} style={{cursor:'pointer'}}>About</Link></Nav>
                    <Nav><Link activeClass="active" to="skills" spy={true} smooth={true} style={{cursor:'pointer'}}>Skills</Link></Nav>
                    <Nav><Link activeClass="active" to="projects" spy={true} smooth={true} style={{cursor:'pointer'}}>Projects</Link></Nav>
                    {/* <Nav><Link activeClass="active" to="contacts" spy={true} smooth={true} style={{cursor:'pointer'}}>Contacts</Link></Nav> */}
                    <Nav><Link activeClass="active" to="PE" spy={true} smooth={true} style={{cursor:'pointer'}}>Professional Experience</Link></Nav>
                </NavGrid>
            </Container>
        </HeaderGrid>
    )
}

const HeaderGrid = styled.div`
    background-color: #212529;
    width: 100%;
    height: 100px;
    // padding-top: 25px;
    // padding-bottom: 25px;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 80px;
    // margin-left: 200px;
`;

const Title = styled.div`
    width: 600px;
    //padding: 40px;
    font-size: 150%;
    font-family: KaushanScript;
    //margin-left: 20%;
    color: #fed136;
`;
const NavGrid = styled.div`
    //float: right;
    display: flex;
    // margin-left: 40%;
    color: #FFFFFF;
    align-items: right;

    
`;
const Nav = styled.div`
padding: 30px;
font-size: 150%;
// align-items: right;
font-family: Montserrat-Regular;
//cursor: pointer;
`;

export default Header;