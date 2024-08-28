import React from 'react';
import './index.css';
import './app.css';

export default function App() {
  return (
        <>
            <header class="font-bold flex flex-row flex-wrap justify-between ml-4 mr-4 mt-4">
            <nav class="flex flex-row gap-10 items-center">
                <a href="./index.html" class="bg-gray-400 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700">Login</a>
                <a href="./planningBoard.html" class="bg-gray-400 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700">Planning Board</a>
                <a href="#" class="bg-gray-400 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700">Chat</a>
            </nav>
            <div class="flex flex-row gap-5 items-center">
                <a href="https://github.com/chrishatch03/startup" class="text-blue-500 hover:text-blue-700 font-semibold bg-gray-400  py-2 px-4 rounded hover:bg-gray-700">My Github</a>
                <p class="">Christopher Hatch</p>
                <h1>MyVision: Weekly Planner</h1>
            </div>
            </header>
        </>
    );
}