import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaUpload, FaUsers, FaFile } from 'react-icons/fa';

export default function RoomJoin() {
  const { roomId } = useParams();
  const [files, setFiles] = useState([]);
  const [nickname, setNickname] = useState('');
  const [members, setMembers] = useState([]);
  const [filesToSend, setFilesToSend] = useState([]);
  const [nicknameInput, setNicknameInput] = useState('');
  let iconStyles = { color: "#808DAD" };

  const socket = useMemo(() => io('http://localhost:8000'), []);

  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');
    if (storedNickname) {
      setNickname(storedNickname);
      socket.emit('join_room', { roomId, nickname: storedNickname });
    }

    socket.on('room_members', (members) => {
      setMembers(members);
    });

    socket.on('file_shared', (sharedFiles) => {
      if (Array.isArray(sharedFiles)) {
        setFiles(sharedFiles);
      } else {
        setFiles(prevFiles => [...prevFiles, sharedFiles]);
      }
    });

    return () => {
      socket.emit('leave_room', { roomId, nickname });
      socket.off('room_members');
      socket.off('file_shared');
    };
  }, [roomId, nickname, socket]);

  const handleFileChange = (event) => {
    setFilesToSend([...event.target.files]);
  };

  const handleSendFile = () => {
    filesToSend.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        socket.emit('share_file', { roomId, file: { name: file.name, data: reader.result } });
        toast.success(`${file.name} sent successfully!`);
        console.log('File sent:', file.name);
      };
      reader.onerror = () => {
        toast.error(`Failed to read ${file.name}.`);
      };
    });
    setFilesToSend([]);
    document.getElementById('file-input').value = null;
  };

  const handleJoinRoom = () => {
    if (nicknameInput) {
      setNickname(nicknameInput);
      localStorage.setItem('nickname', nicknameInput);
      socket.emit('join_room', { roomId, nickname: nicknameInput });
    } else {
      toast.error('Please enter a nickname.');
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      {!nickname ? (
        <div>
          <h2>Enter your nickname to join the room</h2>
          <input
            type="text"
            value={nicknameInput}
            onChange={(e) => setNicknameInput(e.target.value)}
            placeholder="Enter your nickname"
          />
          <button onClick={handleJoinRoom}>Join Room</button>
        </div>
      ) : (
        <div>
          <h2 className="mt-5">Hi, <span style={{ color: '#FF4E4C' }}>{nickname}!</span> </h2>
          <h6 className="mt-2 fw-bold" style={{ color: '#808DAD' }}>Room ID: {roomId}</h6>

          <h3 className='mt-5'><FaUsers style={iconStyles} className="icon " /> Members:</h3>
          <ul>
            {members.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
          <input
            type="file"
            id="file-input"
            multiple
            onChange={handleFileChange}
          />
          <button className='custombtn ' onClick={handleSendFile} disabled={filesToSend.length === 0}>


            Send File
          </button>

          <h3 className='mt-5' style={{ color: '#808DAD' }}><FaFile className="icon " /> Shared Files:</h3>
          <ol className='files-list'>
            {Array.isArray(files) && files.map((file, index) => (
              <li key={index}>
                <a href={file.data} download={file.name}>
                  {file.name}
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

