import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Spring, config } from 'react-spring/renderprops';

const Photo = () => {

    return (        
        <Spring
            from = {{ opacity: 0,  marginLeft: -800}}
            to={{ opacity: 1, marginLeft: 0 }}
            config={config.slow}>
            {props => (
                <div style={props}>
                    <section>
                        <div className="hero">
                            <img src="https://i0.wp.com/www.director.co.uk/wp-content/uploads/2016/03/March-2016-Reviews-Cities-Ho-Chi-Minh-City-The-Reverie-Saigon-2.jpg?resize=1000%2C500&ssl=1" alt="HoChiMinhCity"/>
                            <h1 className="headline">Công ty Cổ phần <br></br>Tư vấn - Xây dựng <br></br>Quang Minh</h1>
                        </div>
                    </section>
                </div>
            )}
        </Spring>
    )
}

export default Photo;
