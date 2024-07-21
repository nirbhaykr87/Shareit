import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Working() {
  const navigate = useNavigate();

  const handleStartSharing = () => {
    navigate('/room');
  };

  return (
    <>

      <h2 className='text-center mt-5' style={{ color: '#c5c7cc' }}>How <span style={{ color: '#01d293' }}>Share</span><span style={{ color: 'red' }}>i</span>t works</h2>
      <h5 style={{ color: '#636979' }} className='text-center'>Designed to work on any device, anywhere!</h5>

      <div className="container ">
        <div className="row mt-5">

          <div className='col-md-6 order-md-2 mockupimg'>
            <img className="text-center " style={{ display: 'block', margin: '0 auto' }} src="images/mockup1.png" alt="" width={'220px'} />
          </div>

          <div className='col-md-6  order-md-1'>
            <h3 className='working_font_adjust' style={{ color: '#c5c7cc' }}>Start by joining a room</h3>
            <p className='mt-4 working_font_adjust' style={{ fontSize: '1.2em', color: '#636979' }}>A room is a collection of users among which you want to send/receive files. Rooms in <span style={{ color: '#01d293' }}>Share</span><span style={{ color: 'red' }}>i</span>t  can be thought of as group chats in messaging apps. Each user in a room must have a unique name for them to correctly join the room.</p>
            <p className='working_font_adjust' style={{ fontSize: '1.2em', color: '#636979' }}>All your previously joined rooms show up in <span style={{ color: '#c5c7cc' }}>Recent Rooms</span> page for quick access in the future. These rooms itself are not persisted on any database and are immediately destroyed once all the users of that room leave.</p>
          </div>

        </div>
      </div>


      <div className="container ">
        <div className="row mt-5">

          <div className='col-md-6  mockupimg'>
            <img className="text-center " style={{ display: 'block', margin: '0 auto' }} src="images/mockup2.png" alt="" width={'220px'} />
          </div>

          <div className='col-md-6  '>
            <h3 className='working_font_adjust' style={{ color: '#c5c7cc' }}>Send a file!</h3>
            <p className='mt-4 working_font_adjust' style={{ fontSize: '1.2em', color: '#636979' }}>Sending a file is easy in <span style={{ color: '#01d293' }}>Share</span><span style={{ color: 'red' }}>i</span>t. Just click on the 'Send File' button at the bottom right and choose the files that you want to send. Once the files are selected, they would be shared with all the other users in that room.</p>
            <p className='working_font_adjust' style={{ fontSize: '1.2em', color: '#636979' }}><span style={{ color: '#01d293' }}>Share</span><span style={{ color: 'red' }}>i</span>t uses WebSockets for sharing files depending on the WebRTC support of the browsers being used. WebRTC is the protocol that makes it possible for the peer-to-peer connection for file transfer.</p>

          </div>

        </div>
      </div>



      <div className="container ">
        <div className="row mt-5">

          <div className='col-md-6 order-md-2 mockupimg'>
            <img className="text-center " style={{ display: 'block', margin: '0 auto' }} src="images/mockup3.png" alt="" width={'220px'} />
          </div>

          <div className='col-md-6  order-md-1'>
            <h3 className='working_font_adjust' style={{ color: '#c5c7cc' }}>Download File</h3>
            <p className='mt-4 working_font_adjust' style={{ fontSize: '1.2em', color: '#636979' }}>To download a file, navigate to the <span style={{ color: '#01d293' }}>Shared Files</span> section in the room. Locate the file you want to download and click on its name or the download link. This action will prompt your browser to save the file. Choose your preferred location on your device to save the file, and the download will begin automatically. Ensure you have a stable internet connection to avoid interruptions.</p>
          </div>

        </div>
      </div>


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
          <small className="text-center" style={{ color: '#c5c7cc' }}>© Copyright 2024 - Developed by Nirbhay Kumar. All right reserved.</small>
        </div>
      </footer>


    </>
  )
}
