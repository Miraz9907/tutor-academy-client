import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer class="bg-dark text-center text-white my-5">
  
  <div class="container p-4">
   
    {/* <section class="mb-4">
      
      <Link class="btn btn-outline-light btn-floating m-1" to='https://web.facebook.com/profile.php?id=100006375407675' role="button"
        ><FaFacebook/></Link>
        <Link class="btn btn-outline-light btn-floating m-1" to='https://www.facebook.com/arman.hossen.9619/' role="button"
        ><FaGithub/></Link>
        <Link class="btn btn-outline-light btn-floating m-1" to='https://www.facebook.com/arman.hossen.9619/' role="button"
        ><FaGoogle/></Link>
        <Link class="btn btn-outline-light btn-floating m-1" to='https://www.facebook.com/arman.hossen.9619/' role="button"
        ><FaLinkedin/></Link>

      
    </section> */}
   
    <section class="mb-4">
      <h2>Tutor Academy</h2>
      <p>Explore your skills with us and get your dream skill job.</p>
    </section>

  </div>
  
  <div class="text-center p-3" style={{backgroundColor:"rgba(0, 0, 0, 0.2"}}>
    © 2022 Copyright: All right riserved
    <p class="text-white" >Tutor Academy</p>
  </div>
</footer>
    );
};

export default Footer;