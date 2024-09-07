import React, { useState, useEffect } from 'react';

export default function Chat() {
    // const uid = '1234';
    // const [currentChat, setCurrentChat] = useState('');
    // INPUTS
    const [joinRoomId, setJoinRoomId] = useState('');
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([]);
    // const [rooms, setRooms] = useState([]);
    const [room, setRoom] = useState({});
    const [roomId, setRoomId] = useState('');
    const [users, setUsers] = useState([]);

    const uid = localStorage.getItem('uid');

  
    const handleJoinRoomIdChange = (e) => {
      e.preventDefault();
      setJoinRoomId(e.target.value);
    };
  
    const handleCreateRoom = async (e) => {
      e.preventDefault();
      
      // Create a new chat room
      const response = await fetch('/api/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ host: uid }),
      });
      const room = await response.json();
      
      if (response.status === 201) {
        console.log(`Room Created: ${room}`);
        setRoomId(room.id);
        setRoom(room);
        setUsers(room.users);
        
        // Get messages from the newly created room
        const messages = await getMessagesFromRoom(room.id);
        setMessages(messages);
      } else {
        console.error('Failed to create room', room);
      }
    };
  
    const handleNewMessageChange = (e) => {
      setNewMessage(e.target.value);
    };
  
    const handleSendMessage = async (e) => {
      e.preventDefault();
      const message = await sendMessageToRoom(currentChat, uid, newMessage);
      setMessages([...messages, message]);
      setNewMessage('');
    };

    async function getMessagesFromRoom(roomId) {
      const response = await fetch(`/api/rooms/${roomId}/messages`);
      const messages = await response.json();
      return messages;
    }

    async function sendMessageToRoom(roomId, userId, text) {
      const response = await fetch(`/api/rooms/${roomId}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, text }),
      });
      const message = await response.json();
      return message;
    }

    async function removeUserFromRoom(roomId, userId) {
      await fetch(`/api/rooms/${roomId}/users/${userId}`, {
        method: 'DELETE',
      });
    }

    async function handleJoinRoom(joinRoomId) {
      const response = await fetch(`/api/rooms/${joinRoomId}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uid: uid }),
      });
      const user = await response.json();
      // console.log(user);
      return user;
    }

    async function getUsers() {
      const response = await fetch('/api/users');
      const users = await response.json();
      return users;
    }

    async function getChatRooms() {
      const response = await fetch('/api/rooms');
      const rooms = await response.json();
      return rooms;
    }



  return (
    <main className="container-fluid bg-[url('/adventurebg.jpg')] bg-cover bg-center text-center mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4 h-screen p-8 pb-8">
			<div className="h-full col-span-1 col-start-1 bg-white/65 rounded-3xl flex flex-col justify-start pb-8 items-center">
			  <h1 className="font-bold text-lg lg:text-3xl border-b-2 border-black w-full flex justify-center items-center h-20">Collaborate!</h1>
				<div className="flex flex-wrap w-full p-8 lg:p-4 lg:flex-col justify-between">
					<button onClick={handleCreateRoom} className="bg-black text-white rounded-3xl py-4 lg:mt-4 px-6">New Chat Room</button>
					<input type="text" className="rounded-xl min-h-10 outline-none pl-8" placeholder="Room id..." value={joinRoomId} onChange={handleJoinRoomIdChange} />
					<button onClick={handleJoinRoom} className="bg-black text-white rounded-3xl py-4 lg:mt-4 px-6">Join Room</button>
          <div className="flex flex-col gap-4">
            <ul>
              {Array.isArray(room.users) ? (
                room.users.map((user) => (
                  <li key={user.uid}>{user.name}</li>
                ))
              ) : (
                <li>No users found</li>
              )}
            </ul>
          </div>
				</div>
			</div>
			<div className="h-full lg:col-span-3 lg:col-start-2 bg-white/65 rounded-3xl flex flex-col justify-start pb-8 items-center">
			  <h2 className="font-bold text-3xl border-b-2 border-black w-full flex justify-center items-center h-20">{roomId ? (roomId) : ("Chat Display")}</h2>
                  <div id="message-display" className="w-full h-full flex flex-col gap-8 p-8">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${uid === msg.uid ? 'justify-end' : 'justify-start'}`}>
                                <p className="p-4 bg-blue-400 rounded-3xl max-w-96 text-wrap">
                                    {new Date(msg.date).toLocaleTimeString()}: {msg.message}
                                </p>
                            </div>
                        ))}
                  </div>
			<div className="w-3/4 px-8 h-20 rounded-3xl ring-2 ring-black bg-red-300 flex justify-center items-center">
			  <input type="text" placeholder="Send a message..." value={newMessage} onChange={handleNewMessageChange} className="w-3/4 p-2 rounded-xl"/>
			  <button onClick={handleSendMessage} className="bg-black rounded-3xl h-10 text-white dark w-14 ml-4">Send</button>
			</div>
			</div>
		</div>
    </main>
  );
}
