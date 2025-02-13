import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../assets/images/logo/01.svg";
import pic1 from "../assets/images/preview/01.jpg"
import pic2 from "../assets/images/preview/02.jpg";
import pic3 from "../assets/images/preview/03.jpg";
import pic4 from "../assets/images/preview/04.jpg";
import pic5 from "../assets/images/preview/05.jpg";
import pic6 from "../assets/images/preview/06.jpg";
import pic7 from "../assets/images/preview/07.jpg";
import pic8 from "../assets/images/preview/08.jpg";
import pic9 from "../assets/images/preview/09.jpg";
import commingSoon from "../assets/images/preview/coming-soon.jpg"
import service1 from "../assets/images/service/04.svg";
import service2 from "../assets/images/service/05.svg";
import service3 from '../assets/images/service/06.svg'
import service4 from "../assets/images/service/07.svg";
import service5 from "../assets/images/service/09.svg";
import service6 from "../assets/images/service/10.webp";
import arrowUpRight from "../assets/images/icons/arrow-up-right.svg";
import barLogo from "../assets/images/logo/bar.svg";
import HeaderLogo from "../assets/images/logo/01.svg";
import demoConstruction from "../assets/images/preview/01.jpg";
import demoConstuction2 from "../assets/images/preview/02.jpg";
import demoRenovation from "../assets/images/preview/03.jpg";
import demoBuilding from "../assets/images/preview/04.jpg";
import demoInterior from "../assets/images/preview/05.jpg";
import demoIndustrial from "../assets/images/preview/06.jpg";
import demoFactory from "../assets/images/preview/07.jpg";
import demoEngineering from "../assets/images/preview/08.jpg"
import demoVedio from "../assets/images/preview/09.jpg";
import residentialConstruction from  "../assets/images/service/04.svg";
import RR from "../assets/images/service/05.svg";
import DesignBuilding from "../assets/images/service/06.svg";
import StructuralEngineering from "../assets/images/service/07.svg"
import postConstruction from "../assets/images/service/09.svg";
import menuTumb from "../assets/images/service/10.webp";
import arrowupright2 from "../assets/images/icons/arrow-up-right-1.svg";
const Header = () => {
  return (
    <div>
         <header className="heder-one">
    <div className="header-two-container">
        <div className="row">
            <div className="col-12">
                <div className="header-main-wrapper">
                    <div className="logo-area">
                        <Link href="/" className="logo">
                            <Image src={logo} width={100} height={100} alt="image-logo" />
                        </Link>
                    </div>
                    <div className="rts-header-right position-static">
                        <div className="top">

                            <div className="end-top">
                                <div className="single-info">
                                    <div className="icon">
                                        <i className="fa-light fa-mobile"></i>
                                    </div>
                                    <a href="#">(555) 123-4567,</a>
                                    <a href="#">(555) 123-4567,</a>
                                </div>
                                <div className="single-info">
                                    <div className="icon"><i className="fa-regular fa-envelope"></i></div>
                                    <a href="mailto:name@email.com">info@elever.com</a>
                                </div>
                            </div>
                            <div className="start-top">
                                <div className="social-header">
                                    <span>Follow Us On:</span>
                                    <ul>
                                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="nav-area">
                                <ul className="">
                                    <li className="has-dropdown main-nav has-demo-down  project-a-after">
                                        <a href="#">Home</a>
                                        <ul className="submenu menu-home">
                                            <li>
                                                <a >
                                                    <Image src={pic1}  width={250} height={250} alt="preview" />
                                                    <span>Demo Construction</span>
                                                </a>
                                                <ul className="page">
                                                    <li className="multipage"><a className="rts-btn btn-primary"
                                                            href="index.html">Multipage</a>
                                                    </li>
                                                    <li className="onepage"><a className="rts-btn btn-primary"
                                                            href="onepage-one.html">Onepage</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="index-two.html">
                                                    <Image src={pic2} width={250} height={250} alt="preview" />
                                                    <span>Demo Construction</span>
                                                </a>
                                                <ul className="page">
                                                    <li className="multipage"><a className="rts-btn btn-primary"
                                                            href="index-two.html">Multipage</a>
                                                    </li>
                                                    <li className="onepage"><a className="rts-btn btn-primary"
                                                            href="onepage-two.html">Onepage</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="index-three.html">
                                                    <Image src={pic3} alt="preview"  width={250} height={250} />
                                                    <span>Demo Renovation</span>
                                                </a>
                                                <ul className="page">
                                                    <li className="multipage"><a className="rts-btn btn-primary"
                                                            href="index-three.html">Multipage</a></li>
                                                    <li className="onepage"><a className="rts-btn btn-primary"
                                                            href="onepage-three.html">Onepage</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="index-four.html">
                                                    <Image src={pic4} alt="preview"  width={250} height={250} />
                                                    <span>Demo Building</span>
                                                </a>
                                                <ul className="page">
                                                    <li className="multipage"><a className="rts-btn btn-primary"
                                                            href="index-four.html">Multipage</a></li>
                                                    <li className="onepage"><a className="rts-btn btn-primary"
                                                            href="onepage-four.html">Onepage</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="index-five.html">
                                                    <Image src={pic5} alt="preview"  width={250} height={250} />
                                                    <span>Demo Interior</span>
                                                </a>
                                                <ul className="page">
                                                    <li className="multipage"><a className="rts-btn btn-primary"
                                                            href="index-five.html">Multipage</a></li>
                                                    <li className="onepage"><a className="rts-btn btn-primary"
                                                            href="onepage-five.html">Onepage</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="index-six.html">
                                                    <Image src={pic6} alt="preview"  width={250} height={250} />
                                                    <span>Demo Industrial</span>
                                                </a>
                                                <ul className="page">
                                                    <li className="multipage"><a className="rts-btn btn-primary"
                                                            href="index-six.html">Multipage</a>
                                                    </li>
                                                    <li className="onepage"><a className="rts-btn btn-primary"
                                                            href="onepage-six.html">Onepage</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="index-seven.html">
                                                    <Image src={pic7} alt="preview"  width={250} height={250} />
                                                    <span>Demo Factory</span>
                                                </a>
                                                <ul className="page">
                                                    <li className="multipage"><a className="rts-btn btn-primary"
                                                            href="index-seven.html">Multipage</a></li>
                                                    <li className="onepage"><a className="rts-btn btn-primary"
                                                            href="onepage-seven.html">Onepage</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="index-eight.html">
                                                    <Image src={pic8} alt="preview"  width={250} height={250} />
                                                    <span>Demo Engineering</span>
                                                </a>
                                                <ul className="page">
                                                    <li className="multipage"><a className="rts-btn btn-primary"
                                                            href="index-eight.html">Multipage</a></li>
                                                    <li className="onepage"><a className="rts-btn btn-primary"
                                                            href="onepage-eight.html">Onepage</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="index-nine.html">
                                                    <Image src={pic9} alt="preview" width={250} height={250} />
                                                    <span>Demo Video</span>
                                                </a>
                                                <ul className="page">
                                                    <li className="multipage"><a className="rts-btn btn-primary"
                                                            href="index-nine.html">Multipage</a></li>
                                                    <li className="onepage"><a className="rts-btn btn-primary"
                                                            href="onepage-nine.html">Onepage</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="coming-soon">
                                                <a href="#">
                                                    <Image src={commingSoon} alt="preview"  width={250} height={250} />
                                                    <span>Coming Soon</span>
                                                </a>
                                                <ul className="page">
                                                    <li className="multipage"><a className="rts-btn btn-primary"
                                                            href="#">Coming Soon</a></li>
                                                    <li className="onepage"><a className="rts-btn btn-primary"
                                                            href="#">Coming Soon</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="main-nav has-dropdown mega-menu">
                                        <a href="#">Service</a>
                                        <div className="rts-mega-menu service-mega-menu-style">
                                            <div className="wrapper">
                                                <div className="container">
                                                    <div className="row g-5">
                                                        <div className="col-lg-4">
                                                            <ul className="mega-menu-item parent-nav">
                                                                <li>
                                                                    <a href="service-single.html">
                                                                        <div className="single-service-menu">
                                                                            <div className="icon">
                                                                                <Image src={service1}  width={250} height={250}
                                                                                    alt="service" />
                                                                            </div>
                                                                            <div className="info">
                                                                                <h5 className="title">Residential
                                                                                    Construction</h5>
                                                                                <p className="details">
                                                                                    Once planning is complete, site
                                                                                    preparation begins. This phase
                                                                                    involves clearing...
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="service-single-two.html">
                                                                        <div className="single-service-menu">
                                                                            <div className="icon">
                                                                                <Image src={service2}  width={250} height={250}
                                                                                    alt="service" />
                                                                            </div>
                                                                            <div className="info">
                                                                                <h5 className="title">Renovations &
                                                                                    Remodeling</h5>
                                                                                <p className="details">
                                                                                    Quis nulla blandit vulputate
                                                                                    morbi adipiscing sem vestibulum.
                                                                                    Nulla turpis...
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="service-single-three.html">
                                                                        <div className="single-service-menu">
                                                                            <div className="icon">
                                                                                <Image src={service3}  width={250} height={250}
                                                                                    alt="service" />
                                                                            </div>
                                                                            <div className="info">
                                                                                <h5 className="title">Design Build
                                                                                    Services</h5>
                                                                                <p className="details">
                                                                                    Elever Architecture is a
                                                                                    New-York-based studio on modern
                                                                                    design,
                                                                                    interiors and landscapes...
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <ul className="mega-menu-item parent-nav">
                                                                <li>
                                                                    <a href="service-single-four.html">
                                                                        <div className="single-service-menu">
                                                                            <div className="icon">
                                                                                <Image src={service4}  width={250} height={250}
                                                                                    alt="service" />
                                                                            </div>
                                                                            <div className="info">
                                                                                <h5 className="title">Structural
                                                                                    Engineering</h5>
                                                                                <p className="details">
                                                                                    We provide best IT solutions for
                                                                                    any type of business as
                                                                                    stragegy, management...
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="service-single-five.html">
                                                                        <div className="single-service-menu">
                                                                            <div className="icon">
                                                                                <Image src={service5}  width={250} height={250}
                                                                                    alt="service" />
                                                                            </div>
                                                                            <div className="info">
                                                                                <h5 className="title">Post-Construction
                                                                                </h5>
                                                                                <p className="details">
                                                                                    We provide best IT solutions for
                                                                                    any type of business as
                                                                                    stragegy, management...
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="contact.html"
                                                                        className="free-consultation">
                                                                        <div className="single-service-menu">
                                                                            <div className="info">
                                                                                <h5 className="title">Get Free
                                                                                    Consultation</h5>
                                                                                <p className="details">
                                                                                    From preconstruction to virtual
                                                                                    design and construction, we
                                                                                    offer virtual design
                                                                                    construction.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="menu-thumb pl--20">
                                                                <Image src={service6}  width={800} height={300} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="main-nav has-dropdown mega-menu hidden">
                                        <a href="#">Pages</a>
                                        <div className="rts-mega-menu">
                                            <div className="wrapper">
                                                <div className="container">
                                                    <div className="row g-0">
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li><a href="about.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>About
                                                                        Company</a></li>
                                                                <li><a href="company-history.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Company
                                                                        History</a></li>

                                                                <li><a href="company-story.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Company History 2</a></li>
                                                                <li><a href="company-values.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Company
                                                                        Values</a></li>
                                                                <li><a href="our-office.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Our
                                                                        Office</a></li>
                                                                <li><a href="working-process.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Working
                                                                        Process</a>
                                                                </li>
                                                                <li><a href="working-process-2.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Working
                                                                        Process 2</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li><a href="safety.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Safety</a>
                                                                </li>
                                                                <li><a href="pricing.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Pricing
                                                                        Plan</a>
                                                                </li>
                                                                <li><a href="pricing-2.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Pricing
                                                                        Plan 2</a>
                                                                </li>
                                                                <li><a href="vision.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Vision</a>
                                                                </li>
                                                                <li><a href="careers.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Career</a></li>
                                                                <li><a href="sustainability.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Sustainability</a></li>
                                                                <li><a href="gallery.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Company Gallery</a></li>

                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li><a href="our-clients.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Our
                                                                        Clients</a></li>
                                                                <li><a href="blog-grid.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Blog
                                                                        Grid</a></li>
                                                                <li><a href="blog-list.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Blog
                                                                        List</a></li>
                                                                <li><a href="blog-details.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Blog
                                                                        Details</a></li>
                                                                <li><a href="service.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Service</a>
                                                                </li>



                                                                <li><a href="team.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Our
                                                                        Team</a></li>
                                                                <li><a href="team-details.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Team
                                                                        Details</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">

                                                                <li><a href="faq.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>FAQ'S</a>
                                                                </li>

                                                                <li><a href="appoinment.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Appointment</a>
                                                                </li>
                                                                <li><a href="contact.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Contact</a>
                                                                </li>



                                                                <li><a href="privacy-policy.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Privacy
                                                                        Policy</a></li>
                                                                <li><a href="terms-of-condition.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Terms
                                                                        & Condition</a>
                                                                </li>
                                                                <li><a href="coming-soon.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Coming
                                                                        Soon</a>
                                                                </li>

                                                                <li><a href="404.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>404</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="main-nav has-dropdown project-a-after hidden">
                                        <a href="#">Shop</a>
                                        <ul className="submenu parent-nav">
                                            <li><a href="shop.html">Shop</a></li>
                                            <li><a href="cart.html">Cart</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="account.html">Account</a></li>
                                            <li className="sub-dropdown down">
                                                <a href="#">Product Single</a>
                                                <ul className="submenu third-lvl base">
                                                    <li><a href="single-product.html">Shop Single</a></li>
                                                    <li><a href="single-product-left.html">Shop Single Left</a></li>
                                                    <li><a href="single-product-right.html">Shop Single Right</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="main-nav has-dropdown mega-menu">
                                        <a href="#">Project</a>
                                        <div className="rts-mega-menu">
                                            <div className="wrapper">
                                                <div className="container">
                                                    <div className="row g-0">
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li className="hega-menu-head-wrapper">
                                                                    <p className="hega-menu-head"><i
                                                                            className="fa-regular fa-folder-open"></i>
                                                                        Types</p>
                                                                </li>
                                                                <li><a href="project.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project</a>
                                                                </li>
                                                                <li><a href="project-slider.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Slider</a></li>

                                                                <li><a href="project-slider-2.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Project Slider 2</a></li>
                                                                <li><a href="project-slider-3.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Slider 3</a>
                                                                </li>
                                                                <li><a href="project-list.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        List</a></li>
                                                                <li><a href="project-card.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Card</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li className="hega-menu-head-wrapper">
                                                                    <p className="hega-menu-head"><i
                                                                            className="fa-regular fa-folder-open"></i>
                                                                        Layout</p>
                                                                </li>
                                                                <li><a href="project-two-column.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        2 Columns</a>
                                                                </li>
                                                                <li><a href="project-three-column.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        3 Columns</a>
                                                                </li>
                                                                <li><a href="project-two-column-wide.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        2 Columns
                                                                        Wide</a></li>
                                                                <li><a href="project-three-column-wide.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        3 Columns
                                                                        Wide</a></li>
                                                                <li><a href="project-four-column.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        4 Columns
                                                                    </a></li>
                                                                <li><a href="project-four-column-wide.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        4 Columns Wide
                                                                    </a></li>

                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li className="hega-menu-head-wrapper">
                                                                    <p className="hega-menu-head"><i
                                                                            className="fa-regular fa-folder-open"></i>Hover
                                                                        Type
                                                                    </p>
                                                                </li>
                                                                <li><a href="project-hide-content-col-3.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Hide
                                                                        Content</a>
                                                                </li>
                                                                <li><a href="project-hide-content.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Hide
                                                                        Content wide</a>
                                                                </li>
                                                                <li><a href="project-card-hover.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Card Hover</a>
                                                                </li>
                                                                <li><a href="project-zoom-slider.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Slider Image
                                                                        Zoom</a>
                                                                </li>
                                                                <li><a href="project-hide-show.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Hide Show</a>
                                                                </li>
                                                                <li><a href="project-slider-hover.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Slider
                                                                        Hover</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li className="hega-menu-head-wrapper">
                                                                    <p className="hega-menu-head"><i
                                                                            className="fa-regular fa-folder-open"></i>
                                                                        Single</p>
                                                                </li>
                                                                <li><a href="project-details.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Detials</a>
                                                                </li>
                                                                <li><a href="project-details-2.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Detials
                                                                        Video</a>
                                                                </li>
                                                                <li><a href="project-details-3.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Detials
                                                                        Slider</a></li>
                                                                <li><a href="project-details-large-image.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Large Image</a>
                                                                </li>
                                                                <li><a href="project-details-gallery.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Project Gallery</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="main-nav has-dropdown project-a-after hidden">
                                        <a href="#">Blog</a>
                                        <ul className="submenu parent-nav">
                                            <li><a href="blog-grid.html">Blog Grid</a></li>
                                            <li><a href="blog-list.html">Blog List</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="main-nav"><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                            <div className="right-area">
                                <div className="icon-area">
                                    <div className="search">
                                        <i className="fa-regular fa-magnifying-glass"></i>
                                    </div>
                                </div>
                                <a href="contact.html" className="rts-btn btn-header btn-transparent">Get a Quote
                                    <Image src={arrowUpRight}  width={10} height={10}  alt="arrow" />
                                </a>
                                <div className="nav-btn menu-btn" >
                                    <Image src={barLogo}  width={100} height={100} alt="nav-iamge" />
                                </div>
                            </div>
                        </div>
                  
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</header>
<header className="heder-one header--sticky">
    <div className="header-two-container">
        <div className="row">
            <div className="col-12">
                <div className="header-main-wrapper">
                    <div className="logo-area">
                        <a href="index.html" className="logo">
                            <Image src={HeaderLogo} alt="image-logo"  width={100} height={100} />
                        </a>
                    </div>
                    <div className="rts-header-right  position-static">
                        <div className="top">

                            <div className="end-top">
                                <div className="single-info">
                                    <div className="icon">
                                        <i className="fa-light fa-mobile"></i>
                                    </div>
                                    <a href="#">(555) 123-4567,</a>
                                    <a href="#">(555) 123-4567,</a>
                                </div>
                                <div className="single-info">
                                    <div className="icon"><i className="fa-regular fa-envelope"></i></div>
                                    <a href="mailto:name@email.com">info@elever.com</a>
                                </div>
                            </div>
                            <div className="start-top">
                                <div className="social-header">
                                    <span>Follow Us On:</span>
                                    <ul>
                                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="nav-area">
                                <ul className="">
                                    <li className="has-dropdown main-nav has-demo-down  project-a-after">
                                        <a href="#">Home</a>
                                        <ul className="submenu menu-home">
                                            <li>
                                                <a href="index.html">
                                                    <Image src={demoConstruction} alt="preview"  width={100} height={100} />
                                                    <span>Demo Construction</span>
                                                </a>
                                                <ul className="page">
                                                    <li className="multipage"><a className="rts-btn btn-primary"
                                                            href="index.html">Multipage</a>
                                                    </li>
                                                    <li className="onepage"><a className="rts-btn btn-primary"
                                                            href="onepage-one.html">Onepage</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="index-two.html">
                                                    <Image src={demoConstuction2} alt="preview"  width={100} height={100} />
                                                    <span>Demo Construction</span>
                                                </a>
                                                <ul className="page">
                                                    <li className="multipage"><a className="rts-btn btn-primary"
                                                            href="index-two.html">Multipage</a>
                                                    </li>
                                                    <li className="onepage"><a className="rts-btn btn-primary"
                                                            href="onepage-two.html">Onepage</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="index-three.html">
                                                    <Image src={demoRenovation} alt="preview"  width={100} height={100} />
                                                    <span>Demo Renovation</span>
                                                </a>
                                                <ul className="page">
                                                    <li className="multipage"><a className="rts-btn btn-primary"
                                                            href="index-three.html">Multipage</a></li>
                                                    <li className="onepage"><a className="rts-btn btn-primary"
                                                            href="onepage-three.html">Onepage</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="index-four.html">
                                                    <Image src={demoBuilding} alt="preview"  width={100} height={100} />
                                                    <span>Demo Building</span>
                                                </a>
                                                <ul className="page">
                                                    <li className="multipage"><a className="rts-btn btn-primary"
                                                            href="index-four.html">Multipage</a></li>
                                                    <li className="onepage"><a className="rts-btn btn-primary"
                                                            href="onepage-four.html">Onepage</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="index-five.html">
                                                    <Image src={demoInterior} alt="preview"  width={100} height={100} />
                                                    <span>Demo Interior</span>
                                                </a>
                                                <ul className="page">
                                                    <li className="multipage"><a className="rts-btn btn-primary"
                                                            href="index-five.html">Multipage</a></li>
                                                    <li className="onepage"><a className="rts-btn btn-primary"
                                                            href="onepage-five.html">Onepage</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="index-six.html">
                                                    <Image src={demoIndustrial} alt="preview"  width={100} height={100} />
                                                    <span>Demo Industrial</span>
                                                </a>
                                                <ul className="page">
                                                    <li className="multipage"><a className="rts-btn btn-primary"
                                                            href="index-six.html">Multipage</a>
                                                    </li>
                                                    <li className="onepage"><a className="rts-btn btn-primary"
                                                            href="onepage-six.html">Onepage</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="index-seven.html">
                                                    <Image src={demoFactory} alt="preview"  width={100} height={100} />
                                                    <span>Demo Factory</span>
                                                </a>
                                                <ul className="page">
                                                    <li className="multipage"><a className="rts-btn btn-primary"
                                                            href="index-seven.html">Multipage</a></li>
                                                    <li className="onepage"><a className="rts-btn btn-primary"
                                                            href="onepage-seven.html">Onepage</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="index-eight.html">
                                                    <Image src={demoEngineering} alt="preview"  width={100} height={100} />
                                                    <span>Demo Engineering</span>
                                                </a>
                                                <ul className="page">
                                                    <li className="multipage"><a className="rts-btn btn-primary"
                                                            href="index-eight.html">Multipage</a></li>
                                                    <li className="onepage"><a className="rts-btn btn-primary"
                                                            href="onepage-eight.html">Onepage</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="index-nine.html">
                                                    <Image src={demoVedio} alt="preview"  width={100} height={100} />
                                                    <span>Demo Video</span>
                                                </a>
                                                <ul className="page">
                                                    <li className="multipage"><a className="rts-btn btn-primary"
                                                            href="index-nine.html">Multipage</a></li>
                                                    <li className="onepage"><a className="rts-btn btn-primary"
                                                            href="onepage-nine.html">Onepage</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="coming-soon">
                                                <a href="#">
                                                    <Image src={commingSoon} alt="preview"  width={100} height={100} />
                                                    <span>Coming Soon</span>
                                                </a>
                                                <ul className="page">
                                                    <li className="multipage"><a className="rts-btn btn-primary"
                                                            href="#">Coming Soon</a></li>
                                                    <li className="onepage"><a className="rts-btn btn-primary"
                                                            href="#">Coming Soon</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="main-nav has-dropdown mega-menu">
                                        <a href="#">Service</a>
                                        <div className="rts-mega-menu service-mega-menu-style">
                                            <div className="wrapper">
                                                <div className="container">
                                                    <div className="row g-5">
                                                        <div className="col-lg-4">
                                                            <ul className="mega-menu-item parent-nav">
                                                                <li>
                                                                    <a href="service-single.html">
                                                                        <div className="single-service-menu">
                                                                            <div className="icon">
                                                                                <Image src={residentialConstruction}
                                                                                    alt="service"  width={100} height={100} />
                                                                            </div>
                                                                            <div className="info">
                                                                                <h5 className="title">Residential
                                                                                    Construction</h5>
                                                                                <p className="details">
                                                                                    Once planning is complete, site
                                                                                    preparation begins. This phase
                                                                                    involves clearing...
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="service-single-two.html">
                                                                        <div className="single-service-menu">
                                                                            <div className="icon">
                                                                                <Image src={RR}  width={100} height={100}
                                                                                    alt="service" />
                                                                            </div>
                                                                            <div className="info">
                                                                                <h5 className="title">Renovations &
                                                                                    Remodeling</h5>
                                                                                <p className="details">
                                                                                    Quis nulla blandit vulputate
                                                                                    morbi adipiscing sem vestibulum.
                                                                                    Nulla turpis...
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="service-single-three.html">
                                                                        <div className="single-service-menu">
                                                                            <div className="icon">
                                                                                <Image src={DesignBuilding}  width={100} height={100}
                                                                                    alt="service" />
                                                                            </div>
                                                                            <div className="info">
                                                                                <h5 className="title">Design Build
                                                                                    Services</h5>
                                                                                <p className="details">
                                                                                    Elever Architecture is a
                                                                                    New-York-based studio on modern
                                                                                    design,
                                                                                    interiors and landscapes...
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <ul className="mega-menu-item parent-nav">
                                                                <li>
                                                                    <a href="service-single-four.html">
                                                                        <div className="single-service-menu">
                                                                            <div className="icon">
                                                                                <Image src={StructuralEngineering}  width={100} height={100}
                                                                                    alt="service" />
                                                                            </div>
                                                                            <div className="info">
                                                                                <h5 className="title">Structural
                                                                                    Engineering</h5>
                                                                                <p className="details">
                                                                                    We provide best IT solutions for
                                                                                    any type of business as
                                                                                    stragegy, management...
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="service-single-five.html">
                                                                        <div className="single-service-menu">
                                                                            <div className="icon">
                                                                                <Image src={postConstruction}  width={100} height={100}
                                                                                    alt="service" />
                                                                            </div>
                                                                            <div className="info">
                                                                                <h5 className="title">Post-Construction
                                                                                </h5>
                                                                                <p className="details">
                                                                                    We provide best IT solutions for
                                                                                    any type of business as
                                                                                    stragegy, management...
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="contact.html"
                                                                        className="free-consultation">
                                                                        <div className="single-service-menu">
                                                                            <div className="info">
                                                                                <h5 className="title">Get Free
                                                                                    Consultation</h5>
                                                                                <p className="details">
                                                                                    From preconstruction to virtual
                                                                                    design and construction, we
                                                                                    offer virtual design
                                                                                    construction.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="menu-thumb pl--20">
                                                                <Image src={menuTumb}  width={100} height={100} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="main-nav has-dropdown mega-menu hidden">
                                        <a href="#">Pages</a>
                                        <div className="rts-mega-menu">
                                            <div className="wrapper">
                                                <div className="container">
                                                    <div className="row g-0">
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li><a href="about.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>About
                                                                        Company</a></li>
                                                                <li><a href="company-history.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Company
                                                                        History</a></li>

                                                                <li><a href="company-story.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Company History 2</a></li>
                                                                <li><a href="company-values.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Company
                                                                        Values</a></li>
                                                                <li><a href="our-office.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Our
                                                                        Office</a></li>
                                                                <li><a href="working-process.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Working
                                                                        Process</a>
                                                                </li>
                                                                <li><a href="working-process-2.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Working
                                                                        Process 2</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li><a href="safety.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Safety</a>
                                                                </li>
                                                                <li><a href="pricing.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Pricing
                                                                        Plan</a>
                                                                </li>
                                                                <li><a href="pricing-2.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Pricing
                                                                        Plan 2</a>
                                                                </li>
                                                                <li><a href="vision.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Vision</a>
                                                                </li>
                                                                <li><a href="careers.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Career</a></li>
                                                                <li><a href="sustainability.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Sustainability</a></li>
                                                                <li><a href="gallery.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Company Gallery</a></li>

                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li><a href="our-clients.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Our
                                                                        Clients</a></li>
                                                                <li><a href="blog-grid.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Blog
                                                                        Grid</a></li>
                                                                <li><a href="blog-list.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Blog
                                                                        List</a></li>
                                                                <li><a href="blog-details.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Blog
                                                                        Details</a></li>
                                                                <li><a href="service.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Service</a>
                                                                </li>



                                                                <li><a href="team.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Our
                                                                        Team</a></li>
                                                                <li><a href="team-details.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Team
                                                                        Details</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">

                                                                <li><a href="faq.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>FAQ'S</a>
                                                                </li>

                                                                <li><a href="appoinment.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Appointment</a>
                                                                </li>
                                                                <li><a href="contact.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Contact</a>
                                                                </li>



                                                                <li><a href="privacy-policy.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Privacy
                                                                        Policy</a></li>
                                                                <li><a href="terms-of-condition.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Terms
                                                                        & Condition</a>
                                                                </li>
                                                                <li><a href="coming-soon.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Coming
                                                                        Soon</a>
                                                                </li>

                                                                <li><a href="404.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>404</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="main-nav has-dropdown project-a-after hidden">
                                        <a href="#">Shop</a>
                                        <ul className="submenu parent-nav">
                                            <li><a href="shop.html">Shop</a></li>
                                            <li><a href="cart.html">Cart</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="account.html">Account</a></li>
                                            <li className="sub-dropdown down">
                                                <a href="#">Product Single</a>
                                                <ul className="submenu third-lvl base">
                                                    <li><a href="single-product.html">Shop Single</a></li>
                                                    <li><a href="single-product-left.html">Shop Single Left</a></li>
                                                    <li><a href="single-product-right.html">Shop Single Right</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="main-nav has-dropdown mega-menu">
                                        <a href="#">Project</a>
                                        <div className="rts-mega-menu">
                                            <div className="wrapper">
                                                <div className="container">
                                                    <div className="row g-0">
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li className="hega-menu-head-wrapper">
                                                                    <p className="hega-menu-head"><i
                                                                            className="fa-regular fa-folder-open"></i>
                                                                        Types</p>
                                                                </li>
                                                                <li><a href="project.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project</a>
                                                                </li>
                                                                <li><a href="project-slider.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Slider</a></li>

                                                                <li><a href="project-slider-2.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Project Slider 2</a></li>
                                                                <li><a href="project-slider-3.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Slider 3</a>
                                                                </li>
                                                                <li><a href="project-list.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        List</a></li>
                                                                <li><a href="project-card.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Card</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li className="hega-menu-head-wrapper">
                                                                    <p className="hega-menu-head"><i
                                                                            className="fa-regular fa-folder-open"></i>
                                                                        Layout</p>
                                                                </li>
                                                                <li><a href="project-two-column.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        2 Columns</a>
                                                                </li>
                                                                <li><a href="project-three-column.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        3 Columns</a>
                                                                </li>
                                                                <li><a href="project-two-column-wide.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        2 Columns
                                                                        Wide</a></li>
                                                                <li><a href="project-three-column-wide.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        3 Columns
                                                                        Wide</a></li>
                                                                <li><a href="project-four-column.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        4 Columns
                                                                    </a></li>
                                                                <li><a href="project-four-column-wide.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        4 Columns Wide
                                                                    </a></li>

                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li className="hega-menu-head-wrapper">
                                                                    <p className="hega-menu-head"><i
                                                                            className="fa-regular fa-folder-open"></i>Hover
                                                                        Type
                                                                    </p>
                                                                </li>
                                                                <li><a href="project-hide-content-col-3.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Hide
                                                                        Content</a>
                                                                </li>
                                                                <li><a href="project-hide-content.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Hide
                                                                        Content wide</a>
                                                                </li>
                                                                <li><a href="project-card-hover.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Card Hover</a>
                                                                </li>
                                                                <li><a href="project-zoom-slider.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Slider Image
                                                                        Zoom</a>
                                                                </li>
                                                                <li><a href="project-hide-show.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Hide Show</a>
                                                                </li>
                                                                <li><a href="project-slider-hover.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Slider
                                                                        Hover</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li className="hega-menu-head-wrapper">
                                                                    <p className="hega-menu-head"><i
                                                                            className="fa-regular fa-folder-open"></i>
                                                                        Single</p>
                                                                </li>
                                                                <li><a href="project-details.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Detials</a>
                                                                </li>
                                                                <li><a href="project-details-2.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Detials
                                                                        Video</a>
                                                                </li>
                                                                <li><a href="project-details-3.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Detials
                                                                        Slider</a></li>
                                                                <li><a href="project-details-large-image.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Large Image</a>
                                                                </li>
                                                                <li><a href="project-details-gallery.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Project Gallery</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="main-nav has-dropdown project-a-after">
                                        <a href="#">Blog</a>
                                        <ul className="submenu parent-nav">
                                            <li><a href="blog-grid.html">Blog Grid</a></li>
                                            <li><a href="blog-list.html">Blog List</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="main-nav"><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                            <div className="right-area">
                                <div className="icon-area">
                                    <div className="search" id="search">
                                        <i className="fa-regular fa-magnifying-glass"></i>
                                    </div>
                                </div>
                                <a href="contact.html" className="rts-btn btn-header btn-transparent">Get a Quote
                                    <Image src={arrowUpRight} alt="arrow"  width={100} height={100} />
                                </a>
                                <div className="nav-btn menu-btn" id="menu-btn">
                                    <Image src={barLogo} alt="nav-iamge"  width={100} height={100} />
                                </div>
                            </div>
                        </div>
                    
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
</header>
    </div>
  )
}

export default Header
