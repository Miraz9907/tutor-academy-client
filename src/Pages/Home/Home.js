import React from 'react';
import { Carousel } from 'react-bootstrap';
// import Carousel from 'react-bootstrap/Carousel';
// import Brand1 from '../../assests/images/Brand1.png';
// import Brand2 from '../../assests/images/Brand2.png';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css'

const Home = () => {
    return (
      <Carousel>
        <Carousel.Item>
        
          <div className='w-100 p-5 d-flex flex-column justify-content-center align-items-center' style={{backgroundImage:'url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")', backgroundPosition:'center center', backgroundSize: 'cover', backgroundRepeat:'no-repeat', height:'90vh'}}>
            <h2 className='header-text'><span className='text-white'>Got Stuck!</span> We are alwayes here for you.</h2>
            <p className=' header-para text-light'>When you face any problem about your development then just read our documentation here. May be you can find your desire solution. And our team will teach you every topics step by step</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='w-100 p-5 d-flex flex-column justify-content-center align-items-center' style={{backgroundImage:'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")', backgroundPosition:'center center', backgroundSize: 'cover', backgroundRepeat:'no-repeat', height:'90vh'}}>
            <h2 className='header-text'>Building few Project with us!</h2>
            <p className=' header-para text-light'>you can learn how to build a website from sketch. If you are complete biginer, don't worry. Our team will with you until your success</p>
          </div>

        </Carousel.Item>
        <Carousel.Item>
        <div className='w-100 p-5 d-flex flex-column justify-content-center align-items-center' style={{backgroundImage:'url("https://images.unsplash.com/photo-1525373698358-041e3a460346?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80")', backgroundPosition:'center center', backgroundSize: 'cover', backgroundRepeat:'no-repeat', height:'90vh'}}>
            <h2 className='header-text'>Got Opportunity to get job</h2>
            <p className=' header-para text-light'>When you will buy our premium couse. its high changes to get job in you area. Our job placement team will help you until you got your dream job</p>
          </div>

        </Carousel.Item>
      </Carousel>

    
      
    );
};

export default Home;