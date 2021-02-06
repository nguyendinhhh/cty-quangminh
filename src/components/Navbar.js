import React, {useState, useEffect} from 'react';
import { Link } from 'react-scroll';
import { Spring, config } from 'react-spring/renderprops';

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    
    const handleScroll=() => {
        const offset=window.scrollY;
        if (offset > 200 ){
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })

    let navbarClasses = ['navbar'];
    // let navbarClass = 'navbar';
    
    if (scrolled){
        navbarClasses.push('scrolled');
        // navbarClass = 'scrolled';
    }
    
    return (
        <Spring
            from = {{ opacity: 0,  marginRight: -300}}
            to={{ opacity: 1, marginRight: 0 }}
            config={config.slow}>
            {props => (
                <div style={props}>
                    {/* <nav className="navbar-container"> */}
                    <nav className={navbarClasses.join(' ')}>
                    {/* <nav className={navbarClass}> */}
                        <Link to="services" spy={true} smooth={true} duration={500} offset={-100} className="link" id="service-nav">Dịch vụ</Link>
                        <Link to="about" spy={true} smooth={true} duration={500} className="link" id="aboutus-nav">Thông tin</Link>
                        <Link to="contact" spy={true} smooth={true} duration={500} className="link" id="contactus-nav">Liên hệ</Link>
                    </nav>
                </div>
            )}
        </Spring>
        
    )
}

export default Navbar;
