import React, { useState } from 'react';

export default function Chat() {
    const uid = '1234';
    const [currentChat, setCurrentChat] = useState('');
    // INPUTS
    const [recipientUid, setRecipientUid] = useState('');
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleRecipientUidChange = (e) => {
        e.preventDefault();
        setRecipientUid(e.target.value);
    }

    const handleSubmitRecipientUid = (e) => {
        e.preventDefault();
        setCurrentChat(recipientUid);
        setRecipientUid('');
    }

    const handleNewMessageChange = (e) => {
        setNewMessage(e.target.value);
    }

    const handleSendMessage = (e) => {
        e.preventDefault();
        setMessages([...messages, { uid: uid, date: Date.now(), message: newMessage }]);
        setTimeout(() => {
            setMessages((prevMessages) => [
              ...prevMessages,
              { uid: '4321', date: Date.now(), message: 'This is an automatic response message sent after 5 seconds' },
            ]);
          }, 5000);
        setNewMessage('');
    }



  return (
    <main className="container-fluid bg-[url('/adventurebg.jpg')] bg-cover bg-center text-center mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4 h-screen p-8 pb-8">
			<div className="h-full col-span-1 col-start-1 bg-white/65 rounded-3xl flex flex-col justify-start pb-8 items-center">
			  <h1 className="font-bold text-lg lg:text-3xl border-b-2 border-black w-full flex justify-center items-center h-20">Collaborate!</h1>
				<div className="flex flex-wrap w-full p-8 lg:p-4 lg:flex-col justify-between">
					<input type="text" className="rounded-xl min-h-10 outline-none pl-8" placeholder="Start a chat with..." value={recipientUid} onChange={handleRecipientUidChange} />
					<button onClick={handleSubmitRecipientUid} className="bg-black text-white rounded-3xl py-4 lg:mt-4 px-6">New Chat</button>
				</div>
			</div>
			<div className="h-full lg:col-span-3 lg:col-start-2 bg-white/65 rounded-3xl flex flex-col justify-start pb-8 items-center">
			  <h2 className="font-bold text-3xl border-b-2 border-black w-full flex justify-center items-center h-20">{currentChat ? (currentChat) : ("Chat Display")}</h2>
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
