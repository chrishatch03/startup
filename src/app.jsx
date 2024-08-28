import React from 'react';
import './index.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Login from './login/login';
import PlanningBoard from './planning-board/planning-board';
import Chat from './chat/chat';

export default function App() {
  return (
        <>
        <BrowserRouter>
            <header className="font-bold flex flex-row flex-wrap justify-between m-4">
            <nav className="flex flex-row gap-10 items-center">
                <NavLink to="/" className="bg-gray-400 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700">Login</NavLink>
                <NavLink to="/planningBoard" className="bg-gray-400 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700">Planning Board</NavLink>
                <NavLink to="/chat" className="bg-gray-400 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700">Chat</NavLink>
            </nav>
            <div className="flex flex-row gap-5 items-center">
                <a href="https://github.com/chrishatch03/startup" className="text-blue-500 hover:text-blue-700 font-semibold bg-gray-400  py-2 px-4 rounded hover:bg-gray-700">My Github</a>
                <p className="">Christopher Hatch</p>
                <h1>MyVision: Weekly Planner</h1>
            </div>
            </header>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/planningBoard" element={<PlanningBoard />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
            <footer class="h-20 flex flex-col justify-center items-center w-full">
			<p>© 2021 MyVision</p>
		</footer>
        </BrowserRouter>
        </>
    );
}