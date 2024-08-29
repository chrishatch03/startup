import React, { useState } from 'react';

export default function Chat() {
    const [messages, setMessages] = useState([]);

  return (
    <main className="container-fluid bg-[url('/adventurebg.jpg')] bg-cover bg-center text-center mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4 h-screen p-8 pb-8">
			<div className="h-full col-span-1 col-start-1 bg-white/65 rounded-3xl flex flex-col justify-start pb-8 items-center">
			  <h1 className="font-bold text-lg lg:text-3xl border-b-2 border-black w-full flex justify-center items-center h-20">Collaborate!</h1>
				<form className="flex flex-wrap w-full p-8 justify-between">
					<input type="text" className="rounded-xl min-h-10 outline-none pl-8" />
					<button className="bg-black text-white rounded-3xl py-4 px-6">New Chat</button>
				</form>
			</div>
			<div className="h-full lg:col-span-3 lg:col-start-2 bg-white/65 rounded-3xl flex flex-col justify-start pb-8 items-center">
			  <h2 className="font-bold text-3xl border-b-2 border-black w-full flex justify-center items-center h-20">Chat Display</h2>
			  <div id="message-display" className="w-full h-full flex flex-col gap-8 p-8">
				<p className="justify-start p-4 bg-blue-400 rounded-3xl max-w-96 text-wrap">Chat Messages will display here</p>
				<p className="justify-end p-4 bg-blue-400 rounded-3xl max-w-96 text-wrap">Chat Messages will display here</p>
				<p className="justify-start p-4 bg-blue-400 rounded-3xl max-w-96 text-wrap">Chat Messages will display here</p>
			</div>
			<form className="w-3/4 px-8 h-20 rounded-3xl ring-2 ring-black bg-red-300 flex justify-center items-center">
			  <input type="text" placeholder="Create Message" name="chatMessage" className="w-3/4 p-2 rounded-xl"/>
			  <button type="submit" className="bg-black rounded-3xl h-10 text-white dark w-14 ml-4">Send</button>
			</form>
			</div>
		</div>
    </main>
  );
}
