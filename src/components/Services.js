import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img7.jpg';

const Services = () => {

    const Section = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;

        @media screen and (max-width:400px){
            flex-direction: column;
        }
    `;

    return (
        <div>
            <Section>
                <Card myImage={img1} myTitle='Xin giấy phép xây dựng'/>
                <Card myImage={img2} myTitle='Hoàn công xây dựng'/>
                <Card myImage={img3} myTitle='Hợp thức hóa nhà'/>
            </Section>
            <Section>
                <Card myImage={img4} myTitle='Đo vẽ các loại bản vẽ'/>
                <Card myImage={img5} myTitle='Các vấn đề liên quan tới nhà đất'/>
                <Card myImage={img6} myTitle='In, photo màu từ A4 - A0'/>
            </Section>
        </div>
        
    )
}

export default Services;
