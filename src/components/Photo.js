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
                            {/* <img src="/Users/nguyendinh/Desktop/coding/cty-quangminh/src/images/img8.jpeg" alt="HoChiMinhCity"/> */}
                            <img src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG8lMjBjaGklMjBtaW5oJTIwY2l0eSUyMHZpZXRuYW18ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="HoChiMinhCity"/>
                            <h1 className="headline">Công ty Cổ phần <br></br>Tư vấn - Xây dựng <br></br>Quang Minh</h1>
                        </div>
                    </section>
                </div>
            )}
        </Spring>
    )
}

export default Photo;
