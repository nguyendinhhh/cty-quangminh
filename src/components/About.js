import React from 'react';
import styled from 'styled-components';
const About = () => {

    const Division = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
    `;

    const SmallDivision = styled.div`
        width: 60vw;
        // height: 100%;
        // display: flex;
        // flex-direction: row;
        // justify-content: center;
        // align-items: center;


    `;
    const Title = styled.h1`
        padding: 20px 20px;
        margin-top: 20px;
        color: white;
        text-align: center;
        text-shadow: 1px 1px 2px grey;
    `;
    return (
        <Division id="about">
            <Title>Về Công ty Quang Minh</Title>
            <SmallDivision>
                <p style={{color: "white", letterSpacing: 2, lineHeight: 2, textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </SmallDivision>
            
        </Division>
    )
}

export default About;
