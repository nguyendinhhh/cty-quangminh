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
                <p style={{color: "white", letterSpacing: 2, lineHeight: 2, textAlign: 'center'}}>Công ty Quang Minh được thành lập từ năm 2005 tại Thành phố Hồ Chí Minh. Các nhân viên của công ty chúng tôi có nhiều kinh nghiệm lâu năm về xây dựng và các thủ tục pháp lý nhà đất. Công ty Quang Minh chúng tôi luôn sẵn sàng nhiệt tình hỗ trợ quý khách.</p>
            </SmallDivision>
            
        </Division>
    )
}

export default About;
