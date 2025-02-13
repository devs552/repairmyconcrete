'use client'

import Image from "next/image";
import logo from "./assets/images/logo/01.svg";
import banner1 from "./assets/images/banner/04.jpg";
import arrowupright3 from "./assets/images/icons/arrow-up-right-2.svg";
import funfact1 from "./assets/images/service/01.svg";
import funfact2 from "./assets/images/service/02.svg";
import funfact3 from "./assets/images/service/03.svg";
import journeyArea from "./assets/images/about/01.webp";
import consultationBuilding from "./assets/images/service/07.svg";
import designPreConstruction from "./assets/images/service/08.svg"; 
import constructionDelivery from "./assets/images/service/09.svg";
import CTAService from "./assets/images/cta/01.webp";
import BlockCord from "./assets/images/blog/01.webp";
import blogCard from "./assets/images/blog/02.webp";
import blogCard1 from "./assets/images/blog/03.webp";
import brand1 from "./assets/images/brand/01.svg";
import brand2 from "./assets/images/brand/02.svg";
import brand3 from "./assets/images/brand/03.svg";
import brand4 from "./assets/images/brand/04.svg";
import brand5 from "./assets/images/brand/05.svg";
import brand6 from "./assets/images/brand/06.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Correct way to import
import "./assets/css/plugins/odometer.css";

import "./assets/css/plugins/metismenu.css";
import "./assets/css/plugins/magnifying-popup.css"
import "./assets/css/vendor/bootstrap.min.css";
import "./assets/css/plugins/hover-revel.css";
import "./assets/css/plugins/unicons.css";
import SwiperComponent from "./Components/SwiperComponent";
import ProjectSwiper from "./Components/ProjectSwiper";
import MeetOurTeam from "./Components/MeetOurTeam";
import Testimonials from "./Components/Testimonials";
import BannerSlider from "./Components/BannerSwiper";
import AOS from "aos";
import 'aos/dist/aos.css'; // AOS styles
import { useEffect } from "react";
import Header from "./Components/Header";

export default function Home() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Duration of the animation
          once: true, // Animation happens only once
        });
      }, []);
    
  return (
    <div>
 <Header />
<div id="side-bar" className="side-bar header-two">
    <button className="close-icon-menu"><i className="far fa-times"></i></button>
    
    <div className="inner-main-wrapper-desk">
        <div className="thumbnail">
            <Image src={banner1} alt="elevate"  width={10} height={10} />
        </div>
        <div className="inner-content">
            <h4 className="title">We Build Building and Great Constructive Homes.</h4>
            <p className="disc">
                We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly
                master new technologies.
            </p>
            <div className="footer">
                <h4 className="title">Got a project in mind?</h4>
                <a href="contact.html" className="rts-btn btn-primary">Let's talk</a>
            </div>
        </div>
    </div>
  
    <div className="mobile-menu d-block d-xl-none">
        <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu metismenu" id="mobile-menu-active">
                <li className="has-droupdown">
                    <a href="#" className="main">Home</a>
                    <ul className="submenu mm-collapse">
                        <li><a href="index.html">Demo Construction</a></li>
                        <li><a href="index-two.html">Demo Construction</a></li>
                        <li><a href="index-three.html">Demo Renovation</a></li>
                        <li><a href="index-four.html">Demo Building</a></li>
                        <li><a href="index-five.html">Demo Interior</a></li>
                    </ul>
                </li>
                <li className="has-droupdown">
                    <a href="#" className="main">Pages</a>
                    <ul className="submenu mm-collapse">
                        <li><a href="about.html">About</a></li>
                        <li><a href="company-history.html">Company
                                History</a></li>
                        <li><a href="company-values.html">Company
                                Values</a></li>
                        <li><a href="our-office.html">Our
                                Office</a></li>
                        <li><a href="our-clients.html">Our
                                Clients</a></li>
                        <li><a href="faq.html">FAQ'S</a>
                        </li>
                        <li><a href="project.html">Project</a></li>
                        <li><a href="project-details.html">Project
                                Details</a>
                        </li>
                        <li><a href="blog-grid.html">Blog Grid</a>
                        </li>
                        <li><a href="blog-list.html">Blog List</a>
                        </li>
                        <li><a href="blog-details.html">Blog
                                Details</a></li>
                        <li><a href="service.html">Service</a></li>
                        <li><a href="team.html">Our
                                Team</a></li>
                        <li><a href="team-details.html">Team
                                Details</a></li>
                        <li><a href="appoinment.html">Appointment</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </li>
                <li className="has-droupdown">
                    <a href="#" className="main">Services</a>
                    <ul className="submenu mm-collapse">
                        <li><a className="mobile-menu-link" href="service.html">Service</a></li>
                        <li><a className="mobile-menu-link" href="service-single.html">Service Single</a></li>
                        <li><a className="mobile-menu-link" href="service-single-two.html">Service Single 2</a></li>
                        <li><a className="mobile-menu-link" href="service-single-three.html">Service Single 3</a></li>
                        <li><a className="mobile-menu-link" href="service-single-four.html">Service Single 4</a></li>
                        <li><a className="mobile-menu-link" href="service-single-five.html">Service Single 5</a></li>
                    </ul>
                </li>
                <li className="has-droupdown">
                    <a href="#" className="main">Projects</a>
                    <ul className="submenu mm-collapse">
                        <li className="has-droupdown third-lvl">
                            <a className="main" href="#">Types</a>
                            <ul className="submenu-third-lvl mm-collapse">
                                <li><a href="project.html"></a>Project</li>
                                <li><a href="project-slider.html"></a>Project Slider</li>
                                <li><a href="project-slider-2.html"></a>Project Slider 2</li>
                                <li><a href="project-slider-3.html"></a>Project Slider 3</li>
                                <li><a href="project-list.html"></a>Project List</li>
                                <li><a href="project-card.html"></a>Project Card</li>
                            </ul>
                        </li>
                        <li className="has-droupdown third-lvl">
                            <a className="main" href="#">Layouts</a>
                            <ul className="submenu-third-lvl mm-collapse">
                                <li><a href="project-two-column.html"></a>Project 2 Columns</li>
                                <li><a href="project-three-column.html"></a>Project 3 Columns</li>
                                <li><a href="project-two-column-wide.html"></a>Project 2 Columns Wide</li>
                                <li><a href="project-three-column-wide.html"></a>Project 3 Columns Wide</li>
                                <li><a href="project-four-column.html"></a>Project 4 Columns </li>
                                <li><a href="project-four-column-wide.html"></a>Project 4 Columns Wide </li>
                            </ul>
                        </li>
                        <li className="has-droupdown third-lvl">
                            <a className="main" href="#">Hover Type</a>
                            <ul className="submenu-third-lvl mm-collapse">
                                <li><a href="project-hide-content-col-3.html"></a>Project Hide Content</li>
                                <li><a href="project-hide-content.html"></a>Project Hide Content wide</li>
                                <li><a href="project-card-hover.html"></a>Project Card Hover</li>
                                <li><a href="project-zoom-slider.html"></a>Project Slider Image Zoom</li>
                                <li><a href="project-hide-show.html"></a>Project Hide Show</li>
                                <li><a href="project-slider-hover.html"></a>Project Slider Hover</li>
                            </ul>
                        </li>
                        <li className="has-droupdown third-lvl">
                            <a className="main" href="#">Singles</a>
                            <ul className="submenu-third-lvl mm-collapse">
                                <li><a href="project-details.html"></a>Project Detials</li>
                                <li><a href="project-details-2.html"></a>Project Detials Video</li>
                                <li><a href="project-details-3.html"></a>Project Detials Slider</li>
                                <li><a href="project-details-large-image.html"></a>Large Image</li>
                                <li><a href="project-details-gallery.html"></a>Project Gallery</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="has-droupdown hidden">
                    <a href="#" className="main">Shop Pages</a>
                    <ul className="submenu mm-collapse">
                        <li><a href="shop.html"></a>Shop</li>
                        <li><a href="cart.html"></a>Cart</li>
                        <li><a href="checkout.html"></a>Checkout</li>
                        <li><a href="account.html"></a>Account</li>
                        <li><a href="single-product.html"></a>Shop Single</li>
                        <li><a href="single-product-left.html"></a>Shop Single Left</li>
                        <li><a href="single-product-right.html"></a>Shop Single Right</li>
                    </ul>
                </li>
                <li className="has-droupdown">
                    <a href="#" className="main">Blog</a>
                    <ul className="submenu mm-collapse">
                        <li><a href="blog-grid.html">Blog Grid</a></li>
                        <li><a href="blog-list.html">Blog List</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                    </ul>
                </li>
                <li>
                    <a href="contact.html" className="main">Contact Us</a>
                </li>
            </ul>
        </nav>

        <div className="social-wrapper-one">
            <ul>
                <li>
                    <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
<div className="banner-swiper-area-one mySwiper-banner-one " >
<BannerSlider />
</div>
<div className="fun-facts-area rts-section-gap">
    <div className="container">
        <div className="row g-24">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-fun-facts-area">
                    <div className="icons">
                        <Image src={funfact1} alt="service"  width={100} height={100} />
                    </div>
                    <h2 className="counter title"><span className="odometer" data-count="1200">00</span>+
                    </h2>
                    <p className="disc">
                        Over 1,000 projects successfully delivered, from residential homes to large developments...
                    </p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-fun-facts-area">
                    <div className="icons">
                        <Image src={funfact2} alt="service"  width={100} height={100} />
                    </div>
                    <h2 className="counter title"><span className="odometer" data-count="85">00</span>%
                    </h2>
                    <p className="disc">
                        85% of clients return for future projects, demonstrating our commitment to quality...
                    </p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-fun-facts-area">
                    <div className="icons">
                        <Image src={funfact3} alt="service "  width={100} height={100} />
                    </div>
                    <h2 className="counter title"><span className="odometer" data-count="20">00</span>%
                    </h2>
                    <p className="disc">
                        Consistent 20% annual revenue growth over the past five years, reflecting our expanding...
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="about-company-service-area rts-about-company-area rts-section-gap bg_image bg-dark">
    <div className="about-section-area rts-section-gapBottom">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="about-thumbnail-inner-one">
                        <div className="reveal-item overflow-hidden aos-init">
                            <div className="reveal-animation reveal-end reveal-primary aos aos-init"
                                data-aos="reveal-end">
                            </div>
                            <Image src={journeyArea} alt="journey-area"  width={100} height={100} />
                        </div>
                        <div className="content-wrapper">
                            <div className="single">
                                <h5 className="title">500+</h5>
                                <h2 className="counter title"><span className="odometer" data-count="500">00</span>+
                                </h2>
                                <span className="pp">Complete Projects</span>
                            </div>
                            <div className="single primary">
                                <h2 className="counter title"><span className="odometer" data-count="48">00</span>+
                                </h2>
                                <span className="pp">Award Winning</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 pl--80 pl_md--15 pl_sm--10 pt_md--25 mt_sm--25">
                    <div className="about-inner-area-content-one">
                        <span className="pre">About our Company</span>
                        <h2 className="title text-light">Delivering our clients more
                            project clarity, greater insight,
                            and less chaos.</h2>
                        <p className="disc">
                            Artificial Intelligence refers to the development of computer systems that can perform
                            tasks
                            that would typically require human intelligence. It involves the creation of algorithms
                            and
                            models that enable machines to learn, reason, perceive, and make decisions.
                        </p>
                        <p className="disc">
                            There are generally two types of AI: Narrow or Weak AI, which is designed to perform
                            specific tasks, and General or Strong AI, which possesses human-level intelligence and
                            can
                            handle a wide range of tasks.
                        </p>
                        <a href="about.html" className="rts-btn btn-primary border">Explore More <Image
                                src={arrowupright3} alt="service"  width={100} height={100} /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
    <div className="service-section-area">
        <div className="container">
            <div className="row rts-section-gapTop">
                <div className="col-lg-12">
                    <div className="title-center-style-one">
                        <span className="pre">What We Offer</span>
                        <h2 className="title text-light">Explore Our Services</h2>
                    </div>
                </div>
                <div className="col-lg-12 mt--40">
                    <SwiperComponent />
                  

                </div>
            </div>
        </div>
    </div>

<div className="why-choose-us-area rts-section-gap demo-1">
    <div className="container">
        <div className="row align-items-center">
        <div className="col-xl-6 col-lg-12 pr--60 pr_md--0 pr_sm--0">
      <div className="reveal-item overflow-hidden aos-init">
        <div className="reveal-animation reveal-end reveal-primary aos aos-init" data-aos="reveal-end"></div>
        <Image src={journeyArea}  alt="journey-area" width={500} height={500} />
        <div className="vedio-icone">
          <a className="video-play-button play-video" href="#">
            <span><b></b> Watch Video</span>
          </a>
          <div className="video-overlay">
            <a className="video-overlay-close">×</a>
          </div>
        </div>
      </div>
    </div>
            <div className="col-xl-6 col-lg-12 pt_md--30 pt_sm--50">
                <div className="how-we-works-wrappers">
                    <div className="title-wrapper-left mb--50">
                        <span className="pre">How We Works</span>
                        <h2 className="title">
                            How To Work With Elever <br/>
                            Construction Builder
                        </h2>
                    </div>
                    <div className="single-choose-us-one">
                        <div className="icon">
                            <Image src={consultationBuilding} alt="service"  width={100} height={100} />
                            <span>1</span>
                        </div>
                        <div className="info-wrapper">
                            <h5 className="title">Consultation & Planning</h5>
                            <p className="disc">We begin with a thorough consultation to understand your vision, budget,
                                and project goals. Our team works with you to develop a tailored plan</p>
                        </div>
                    </div>
                    <div className="single-choose-us-one">
                        <div className="icon">
                            <Image src={designPreConstruction} alt="service"  width={100} height={100} />
                            <span>2</span>
                        </div>
                        <div className="info-wrapper">
                            <h5 className="title">Design & Pre-Construction</h5>
                            <p className="disc">We begin with a thorough consultation to understand your vision, budget,
                                and project goals. Our team works with you to develop a tailored plan</p>
                        </div>
                    </div>
                    <div className="single-choose-us-one">
                        <div className="icon">
                            <Image src={constructionDelivery} alt="service"  width={100} height={100} />
                            <span>3</span>
                        </div>
                        <div className="info-wrapper">
                            <h5 className="title">Construction & Delivery</h5>
                            <p className="disc">We begin with a thorough consultation to understand your vision, budget,
                                and project goals. Our team works with you to develop a tailored plan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="portfolio-team-area-bg rts-section-gap bg_image bg-dark">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="title-center-style-one">
                    <span className="pre">Recent Projects</span>
                    <h2 className="title text-light">Our Completed Projects</h2>
                </div>
            </div>
        </div>
    </div>
    <div className="row mt--40">
        <div className="col-lg-12 ">
           <ProjectSwiper />
        </div>
    </div>
    </div>
    <div className="rts-team-area-start rts-section-gapTop">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="title-center-style-one">
                        <span className="pre">Expert Team Members</span>
                        <h2 className="title text-dark">Meet The Awesome Team</h2>
                    </div>
                </div>
            </div>
            <div className="row g-24 mt--20">
                <div className="col-xl-12">
                 <MeetOurTeam />
    </div>
    
</div>
</div>
</div>
<div className="rts-testimonials-area rts-section-gap">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="title-center-style-one dark-title">
                    <span className="pre">Client’s Feedback</span>
                    <h2 className="title text-dark">What Our Client’s Say After <br/>
                        Get Our Service</h2>
                </div>
            </div>
        </div>
        <div className="row g-24 mt--30 mt_sm--10">
            <div className="col-lg-12">
               <Testimonials />
            </div>
        </div>
    </div>
</div>


<div className="cta-area-wrapper">
    <div className="container-full ">
        <div className="row g-0 bg-primary  ">
            <div className="col-xl-4">
                <div className="thumbnail">
                    <Image src={CTAService} alt="service"  width={600} height={500} />
                </div>
            </div>
            <div className="col-xl-8">
                <div className="cta-wrapper-inner">
                    <div className="inner">
                        <h2 className="title">
                            Ready to Build Your Dream? <br/>
                            Schedule Your Consultation Today!
                        </h2>
                        <div className="button-wrapper">
                            <a href="about.html" className="rts-btn btn-white">More About Us</a>
                            <a href="service.html" className="rts-btn btn-white">Our Services</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



<div className="rts-blog-area rts-section-gap">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="title-center-style-one dark-title">
                    <span className="pre">Latest News</span>
                    <h2 className="title">Articles & Blog Posts</h2>
                </div>
            </div>
        </div>
        <div className="row g-24 mt--30 mt_sm--10">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="rts-blog-card-one">
                    <a href="blog-details.html" className="thumbnail">
                        <Image src={BlockCord} alt="blog_card"  width={500} height={500} />
                        <div className="tag-area">
                            <span className="time">2Years Ago</span>
                            <span className="location">Office</span>
                        </div>
                    </a>
                    <div className="inner-wrapper">
                        <a href="blog-details.html">
                            <h5 className="title">Modern Construction Techniques Materials Changing</h5>
                        </a>
                        <p className="disc">
                            Construction industry undergone transformations in recent years. With advancements
                            technology & the introduction of new materials
                        </p>
                        <a href="blog-details.html" className="read-more-btn">Read More<i
                                className="fa-sharp fa-regular fa-arrow-right"></i></a>
                    </div>
                </div>
            
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              
                <div className="rts-blog-card-one">
                    <a href="blog-details.html" className="thumbnail">
                        <Image src={blogCard} alt="blog_card"  width={500} height={500} />
                        <div className="tag-area">
                            <span className="time">2Years Ago</span>
                            <span className="location">Office</span>
                        </div>
                    </a>
                    <div className="inner-wrapper">
                        <a href="blog-details.html">
                            <h5 className="title">Streamlining Projects for Faster Cost Effective Results</h5>
                        </a>
                        <p className="disc">
                            Construction industry undergone transformations in recent years. With advancements
                            technology & the introduction of new materials
                        </p>
                        <a href="blog-details.html" className="read-more-btn">Read More<i
                                className="fa-sharp fa-regular fa-arrow-right"></i></a>
                    </div>
                </div>
             
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              
                <div className="rts-blog-card-one">
                    <a href="blog-details.html" className="thumbnail">
                        <Image src={blogCard1} alt="blog_card"  width={500} height={500}  />
                        <div className="tag-area">
                            <span className="time">2Years Ago</span>
                            <span className="location">Office</span>
                        </div>
                    </a>
                    <div className="inner-wrapper">
                        <a href="blog-details.html">
                            <h5 className="title">Modern Construction Techniques Materials Changing</h5>
                        </a>
                        <p className="disc">
                            Construction industry undergone transformations in recent years. With advancements
                            technology & the introduction of new materials
                        </p>
                        <a href="blog-details.html" className="read-more-btn">Read More<i
                                className="fa-sharp fa-regular fa-arrow-right"></i></a>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
</div>

<div className="rts-brand-area rts-section-gapBottom">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="swiper mySwiper-brand-1" dir="ltr">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="sigle-brand">
                                <Image src={brand1} alt="brand"  width={100} height={100} />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="sigle-brand">
                                <Image src={brand2} alt="brand"  width={100} height={100} />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="sigle-brand">
                                <Image src={brand3} alt="brand"  width={100} height={100} />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="sigle-brand">
                                <Image src={brand4} alt="brand"  width={100} height={100} />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="sigle-brand">
                                <Image src={brand5} alt="brand"  width={100} height={100} />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="sigle-brand">
                                <Image src={brand6} alt="brand"  width={100} height={100} />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="sigle-brand">
                                <Image src={brand1} alt="brand"  width={100} height={100} />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="sigle-brand">
                                <Image src={brand2} alt="brand"  width={100} height={100} />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="sigle-brand">
                                <Image src={brand3} alt="brand"  width={100} height={100} />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="sigle-brand">
                                <Image src={brand4} alt="brand"  width={100} height={100} />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="sigle-brand">
                                <Image src={brand5} alt="brand"  width={100} height={100} />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="sigle-brand">
                                <Image src={brand6} alt="brand"  width={100} height={100} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="rts-footer-area rts-section-gapTop bg_footer-1 bg_image">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="contact-area-footer-top">
                    <div className="single-contact-area-box">
                        <div className="icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <h6 className="title  text-light">Call Us Now</h6>
                        <a href="#">(646) 555-0258</a>
                        <a href="#">(213) 555-0456, (503) 555-0666</a>
                    </div>
                    <div className="single-contact-area-box">
                        <div className="icon">
                            <i className="fa-solid fa-clock"></i>
                        </div>
                        <h6 className="title text-light">Office Time</h6>
                        <a href="#">Mon-Fri: 9:00 am to 5:00 pm <br/>
                            Sat: 9:00 am to 2:00 pm</a>
                    </div>
                    <div className="single-contact-area-box">
                        <div className="icon">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <h6 className="title text-light">Need Support</h6>
                        <a href="#">support@elever.com</a>
                        <a href="#">help-elver@gmail.com</a>
                    </div>
                    <div className="single-contact-area-box">
                        <div className="icon">
                            <i className="fa-sharp fa-solid fa-location-dot"></i>
                        </div>
                        <h6 className="title text-light">Our Address</h6>
                        <a href="#">456 Elm Avenue, Floor 2, San <br/>
                            Francisco, CA 94103</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-full">
        <div className="row">
            <div className="col-lg-12">
                <div className="nav-footer-wrapper-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="footer-float-nav">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="project.html">Projects</a></li>
                                    <li><a href="blog-grid.html">Updates</a></li>
                                    <li><a href="vision.html">Mission</a></li>
                                    <li><a href="company-history.html">Inside</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="company-history.html">History</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="footer-wrapper-left-one">
                    <a href="#" className="logo">
                        <Image src={logo} alt="logo"  width={100} height={100} />
                    </a>
                    <p className="disc">
                        we’re committed to elevating the construction experience for our clients. With a passion for
                        innovation and quality craftsmanship,
                    </p>
                    <div className="social-area-wrapper-one">
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="footer-wrapper-right">
                    <div className="single-nav-area-footer use-link">
                        <h4 className="title text-light">Useful Links</h4>
                        <ul>
                            <li><a href="about.html"><i className="fa-regular fa-arrow-right-long"></i>About Us</a></li>
                            <li><a href="about.html"><i className="fa-regular fa-arrow-right-long"></i>Our Gallery</a>
                            </li>
                            <li><a href="service.html"><i className="fa-regular fa-arrow-right-long"></i>Our
                                    Services</a>
                            </li>
                            <li><a href="team.html"><i className="fa-regular fa-arrow-right-long"></i>Our Team</a></li>
                            <li><a href="contact.html"><i className="fa-regular fa-arrow-right-long"></i>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="single-nav-area-footer use-link">
                        <h4 className="title text-light">Quick Services</h4>
                        <ul>
                            <li><a href="service.html"><i className="fa-regular fa-arrow-right-long"></i>General
                                    Contracting</a>
                            </li>
                            <li><a href="service.html"><i className="fa-regular fa-arrow-right-long"></i>Project
                                    Management</a>
                            </li>
                            <li><a href="service.html"><i className="fa-regular fa-arrow-right-long"></i>New
                                    Construction</a></li>
                            <li><a href="service.html"><i className="fa-regular fa-arrow-right-long"></i>Renovations &
                                    Remodeling</a></li>
                            <li><a href="service.html"><i className="fa-regular fa-arrow-right-long"></i>Interior
                                    Finishing</a>
                            </li>
                        </ul>
                    </div>
                    <div className="single-nav-area-footer news-letter">
                        <h4 className="title text-light">Newsletter</h4>
                        <p>Aplications prodize before front end ortals visualize front end</p>
                        <form action="#">
                            <input type="email" placeholder="Email Address" required />
                            <button className="btn-subscribe mt--15">Subscribe Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="container-full copyright-area-one">
        <div className="row">
            <div className="col-lg-12">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright-wrapper">
                                <p className="mb-0">Copyright &copy;
                                    <script>
                                        document.write(
                                            new Date().getFullYear()
                                        )
                                    </script>
                                    Elever. All Rights Reserved.
                                </p>
                                <div className="right-nav">
                                    <ul>
                                        <li><a href="terms-of-condition.html">Terms of use </a></li>
                                        <li><a href="privacy-policy.html"> Privacy</a></li>
                                        <li><a href="privacy-policy.html">Environmental Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

 <div id="elevate-load">
<div className="loader-wrapper">
    <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
</div>

{/* <div className="rtl-ltr-switcher-btn">
    <span className="rtl show">View RTL</span>
    <span className="ltr">View LTR</span>
</div> */}

<div className="progress-wrap">
<svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
    <path 
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        style={{
            transition: "stroke-dashoffset 10ms linear 0s",
            strokeDasharray: "307.919, 307.919",
            strokeDashoffset: "307.919"
        }}
    />
</svg>

</div>

<div className="search-input-area">
    <div className="container">
        <div className="search-input-inner">
            <div className="input-div">
                <input className="search-input autocomplete" type="text" placeholder="Search by keyword or #" />
                <button><i className="far fa-search"></i></button>
            </div>
        </div>
    </div>
    <div id="close" className="search-close-icon"><i className="far fa-times"></i></div>
</div>
</div>
  );
}
