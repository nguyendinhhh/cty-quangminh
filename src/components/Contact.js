import React from 'react';
import styled from 'styled-components';

const Contact = () => {

    const Division = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 20px;
    `;

    const SmallDivision = styled.div`
        width: 60vw;
    `;


    const Title = styled.h1`
        padding: 20px 20px;
        margin-top: 20px;
        color: white;
        text-align: center;
        text-shadow: 1px 1px 2px grey;
    `;

    return (
        <Division id="contact">
            <Title>Liên hệ chúng tôi</Title>
            <SmallDivision>
                <p style={{ color: "white", letterSpacing: 2, lineHeight: 2, textAlign: 'center' }}>
                    312/4/3 Quang Trung, Phường 10, Quận Gò Vấp, TP HCM<br></br>
                    Điện thoại: 028 3985 9913 -- 0908 638 262<br></br>
                    Email: inbanvecad@gmail.com
                </p>
            </SmallDivision>
            
        </Division>
    )
}

export default Contact;
