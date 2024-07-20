import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RoomJoin() {
  const { roomId } = useParams();
  const [files, setFiles] = useState([]);
  const [nickname, setNickname] = useState('');
  const [members, setMembers] = useState([]);
  const [fileToSend, setFileToSend] = useState(null);

  const socket = useMemo(() => io('http://localhost:8000'), []);

  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');
    if (storedNickname) {
      setNickname(storedNickname);
      socket.emit('join_room', { roomId, nickname: storedNickname });
    } else {
      const userNickname = prompt('Please enter your nickname:');
      if (userNickname) {
        setNickname(userNickname);
        localStorage.setItem('nickname', userNickname);
        socket.emit('join_room', { roomId, nickname: userNickname });
      }
    }

    socket.on('room_members', (members) => {
      setMembers(members);
    });

    socket.on('file_shared', (file) => {
      setFiles((prevFiles) => [...prevFiles, file]);
    });

    return () => {
      socket.emit('disconnect');
      socket.off('room_members');
      socket.off('file_shared');
    };
  }, [roomId, socket]);

  const handleFileChange = (event) => {
    setFileToSend(event.target.files[0]);
  };

  const handleSendFile = () => {
    if (fileToSend) {
      const reader = new FileReader();
      reader.readAsDataURL(fileToSend);
      reader.onloadend = () => {
        socket.emit('share_file', { roomId, file: { name: fileToSend.name, data: reader.result } });
        setFileToSend(null);
        toast.success('File sent successfully!');
      };
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <h2 className="mt-5">Hi, {nickname}!</h2>
      <h2 className="mt-5">Room ID: {roomId}</h2>
      <h3 className="mt-5">Members:</h3>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
      <input type="file" onChange={handleFileChange} value={fileToSend ? '' : null} />
      <button onClick={handleSendFile} disabled={!fileToSend}>Send File</button>
      <h3 className="mt-5">Shared Files:</h3>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            <a href={file.data} download={file.name}>
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
