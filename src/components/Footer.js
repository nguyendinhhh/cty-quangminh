import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    const Division = styled.div`
        width: 100%;
        height: 70px;
        background: #474160;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    return (
        <Division>
            <p style={{color: 'white',textAlign:'center'}}>Công ty Cổ phần Tư vấn - Xây dựng Quang Minh Copyright @ 2021</p>
        </Division>
    )
}

export default Footer;
