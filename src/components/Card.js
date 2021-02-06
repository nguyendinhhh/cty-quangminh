import React from 'react';
import styled from 'styled-components';
import img1 from '../images/img1.jpg';

const Card = ( {myImage, myTitle} ) => {
    const Button = styled.button`
        cursor: pointer;
        background: transparent;
        font-size: 16px;
        border-radius: 3px;
        margin: 0 1em;
        color: ${props => (props.primary ? 'violet' : 'palevioletred')};
        border: ${props => props.primary ? '2px solid violet' : '2px solid palevioletred'};
        padding: 0.25em 1em;
        transition: 0.5s all ease-out;

        &:hover {
            color: white;
            background-color: ${props =>
              props.primary ? 'violet' : 'palevioletred'};
        }
    `;
    
    
    const Title = styled.h3`
        color: white;
        text-align: center;
        padding: 10px 10px;
    `;

    const Image = styled.img`
        width: 100%;
        height: 150px;
        overflow: hidden;
        object-fit: cover;
    `;

    const Box = styled.div`
        height: 200px;
        width: 250px;
        overflow: hidden;
        box-shadow: 0px 0px 15px -5px;
        margin: 20px 20px;

        display: flex;
        flex-direction: column;
        // justify-content: center;
        align-items: center;
        

        transition: 0.3s all ease-out;

        &:hover {
            transform: scale(1.1);
        }
    `;

    return (
        <Box>
            <Image alt='' src={myImage} /> 
            {/* If import image from website, use src={`link to photo here`} */}
            <Title>{myTitle}</Title>
            
            {/* <Button>I am a Button</Button>
            <Button primary>I am a Primary Button</Button> */}
        </Box>
        // <Box>
        //     <myImg1 src="https://www.wallpaperup.com/uploads/wallpapers/2014/09/24/455792/7afa6a4b4174b7f0dfd46898de5ac53b-700.jpg"/>
        // </Box>
    )
}

export default Card;
