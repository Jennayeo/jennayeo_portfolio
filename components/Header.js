import React from 'react'
import styled from 'styled-components';

function Header () {


    return (
        <HeaderGrid>
            <Title>Jiyoung Jenna Yeo</Title>
            <NavGrid>
                <Nav>About</Nav>
                <Nav>Skills</Nav>
                <Nav>Projects</Nav>
                <Nav>Contacts</Nav>
            </NavGrid>
        </HeaderGrid>
    )
}

const HeaderGrid = styled.div`
    background-color: #212529;
    display: flex;
    width: 100%;
    height: 100px;
    // padding-top: 25px;
    // padding-bottom: 25px;
`;

const Title = styled.div`
    padding: 40px;
    font-size: 150%;
    font-family: KaushanScript;
    color: #fed136;
`;
const NavGrid = styled.div`
    float: right;
    display: flex;
    // margin-left: 100px;
    color: #FFFFFF;
`;
const Nav = styled.div`
    padding: 40px;
    font-size: 150%;
    // align-items: right;
    font-family: Montserrat-Regular;
`;

export default Header;