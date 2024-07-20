import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

export default function Home() {
  const navigate = useNavigate();

  const handleStartSharing = () => {
    navigate('/room');
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className='col-md-6 order-2 order-md-1'>
            <h2 className='mt-5 header-align' style={{fontFamily:'sans-serif ', color:'#c5c7cc'}}>
              Instant File Sharing Made Simple
            </h2>
            <p className='header-align' style={{color:'#FF6A3D', fontSize:'1.4rem'}}>
              Fast, Secure, and Hassle-Free!
            </p>
            <button className='bt mt-4 d-flex justify-content-center' onClick={handleStartSharing}>
              Start sharing
            </button>
          </div>
          <div className='col-md-6 order-1 order-md-2'>
            <img id='network-image' src="1.png" alt="" width={'90%'} />
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row mt-4 ">
          <div className="col-md-4 mt-4">
            <div className='text-center mx-auto'>
              <img src="/images/img1.svg" alt="computer-img" />
            </div>
            <h3 style={{color:'#c5c7cc'}} className='text-center'>Easy to use</h3>
            <p style={{color:'#808DAD'}}>
              Shareit is a web app, just open it in your browser, join a room, and start sharing. No need to install any specific app, or create an account!
            </p>
          </div>

          <div className="col-md-4 mt-4">
            <div className='text-center'>
              <img className='img-fluid' src="/images/img2.svg" alt="computer-img" />
            </div>
            <h3 style={{color:'#c5c7cc'}} className='mt-3 text-center'>Multi-device</h3>
            <p style={{color:'#808DAD'}}>
              Traditionally, sharing files to multiple devices has been a hassle. With Shareit, you can share files across multiple devices with ease.
            </p>
          </div>

          <div className="col-md-4 mt-5">
            <div className='text-center mx-auto'>
              <img className='mx-auto' src="/images/img3.svg" alt="world-img" height={'160px'} />
            </div>
            <h3 style={{color:'#c5c7cc'}} className='mt-3 text-center'>Anywhere</h3>
            <p className='' style={{color:'#808DAD'}}>
              Shareit is built on modern web technologies, allowing it to work on devices far away from each other. It just needs to be connected to the internet.
            </p>
          </div>
        </div>
      </div>

      <section className='creator mt-4'>
        <div className="container mt-4">
          <div className="row">
            <div style={{fontSize:'' , color:'#c5c7cc'}} className='col-md-12 text-center pt-4 fw-bold'>
              "I built Shareit because I wanted a fast, radically different way to transfer files between my laptop and mobile"
            </div>
          </div>
          <div className="row">
            <div className="img-center col-md-12">
              <img src="./images/profile.png" className="rounded mx-auto d-block rounded-circle profile-photo" alt="profile-photo" />
            </div>
            <div className="text-center">
              <p className='fs-5 mb-2' style={{ color: '#c5c7cc' }}>Nirbhay Kumar</p>
              <p className='fw-bold mb-0' style={{ color: '#808DAD' }}>Creator</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-5 mb-4">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            <h2>Ready to Share?</h2>
            <p style={{ color: '#808DAD' }}>Get started with ShareIt today and experience seamless file sharing.</p>
            <button className='bt mt-4' onClick={handleStartSharing}>Start sharing</button>
          </div>
        </div>
      </div>

      <footer className="footer mt-auto py-3 text-center">
        <div className="container mt-5">
          <small className="text-center" style={{color:'#c5c7cc'}}>© Copyright 2024 - Developed by Nirbhay Kumar. All right reserved.</small>
        </div>
      </footer>
    </>
  );
}
