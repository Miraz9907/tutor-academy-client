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
        
          <div className='w-100 p-5 d-flex flex-column justify-content-center align-items-center' style={{backgroundImage:'url("https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGphdmFzY3JpcHQlMjBjb2RlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60")', backgroundPosition:'center center', backgroundSize: 'cover', backgroundRepeat:'no-repeat', height:'90vh'}}>
            <h3><span className='text-white'>Got Stuck!</span> Just read our course document.</h3>
            <p >When you face any problem about your development then just read our documentation here. May be you can find your desire solution</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='w-100 p-5 d-flex flex-column justify-content-center align-items-center' style={{backgroundImage:'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")', backgroundPosition:'center center', backgroundSize: 'cover', backgroundRepeat:'no-repeat', height:'90vh'}}>
            <h3>slide2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dignissimos deserunt harum! Officiis alias est sequi. Placeat praesentium aperiam, pariatur porro minus, libero optio doloribus totam numquam iure, inventore fugit!</p>
          </div>

        </Carousel.Item>
        <Carousel.Item>
        <div className='w-100 p-5 d-flex flex-column justify-content-center align-items-center' style={{backgroundImage:'url("https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")', backgroundPosition:'center center', backgroundSize: 'cover', backgroundRepeat:'no-repeat', height:'90vh'}}>
            <h3>slide3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dignissimos deserunt harum! Officiis alias est sequi. Placeat praesentium aperiam, pariatur porro minus, libero optio doloribus totam numquam iure, inventore fugit!</p>
          </div>

        </Carousel.Item>
      </Carousel>
      
    );
};

export default Home;