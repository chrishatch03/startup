import React from 'react';

export default function Login() {
  return (
    <main className='container-fluid  text-center'>
      <main className="w-full h-full min-h-screen p-4 gap-4 grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-3">
			<div className="bg-[url('/adventure6.avif')] bg-cover bg-center w-full h-full ring-2 rounded-3xl flex flex-col items-center justify-start sm:justify-center lg:justify-start text-center min-h-empty md:row-span-2 dark:ring-white/10 ring-primary/5 bg-transparent shadow-xl dark:shadow-thick">
				<h1 className="text-6xl p-2 rounded-3xl bg-white bg-opacity-65 lg:bg-transparent my-6 font-medium lg:text-4xl tracking-tight text-gray-700 dark:text-gray-100 ">Weekly Planner</h1>
			</div>
			<div className="bg-[url('/adventure4.avif')] bg-cover bg-center w-full h-full ring-2 rounded-3xl p-8 min-h-empty dark:ring-white/10 ring-primary/5 bg-transparent shadow-xl dark:shadow-thick">
				<p className="bg-slate-50 bg-opacity-50 rounded-3xl h-full w-full text-gray-700 dark:text-gray-100 text-center flex flex-col justify-center p-8">"By failing to prepare, you are preparing to fail." - Benjamin Franklin</p>
			</div>
			<div className="bg-[url('/adventure2.jpg')] bg-cover bg-center w-full h-full ring-2 rounded-3xl hidden md:block min-h-empty dark:ring-white/10 ring-primary/5 bg-transparent shadow-xl dark:shadow-thick"></div>
			<div className="bg-[url('/adventure12.jpg')] bg-cover bg-center w-full h-full ring-2 rounded-3xl hidden md:block min-h-empty md:row-span-2 dark:ring-white/10 ring-primary/5 bg-transparent shadow-xl dark:shadow-thick"></div>
			<div className="w-full h-full ring-2 rounded-3xl flex flex-col items-center justify-center min-h-empty md:col-span-2 md:col-start-2 md:row-span-2 md:row-start-2 dark:ring-white/10 ring-primary/5 bg-transparent shadow-xl dark:shadow-thick bg-[url('/adventurebg.jpg')] bg-cover overflow-hidden">
				<h1 className="text-3xl mt-6 font-medium lg:text-5xl tracking-tight text-gray-700 dark:text-gray-100">Plan your Adventure!</h1>
				<div className="h-3/4 flex flex-col items-center justify-center">
					<div className="flex flex-col items-center bg-white bg-opacity-65 my-2 p-4 lg:p-8 rounded-3xl gap-2">
						<label for="username">Username:</label>
						<input type="text" id="username" name="username" required />
						<label for="password">Password:</label>
						<input type="password" id="password" name="password" required />
						<button className="bg-black py-2 px-4 rounded-3xl text-white">Sign In</button>
						<button className="bg-black py-2 px-4 rounded-3xl text-white">Sign Up</button>
					</div>
				</div>
			</div>
			<div className="bg-[url('/adventure10.jpg')] bg-cover bg-center w-full h-full ring-2 rounded-3xl p-8 min-h-empty dark:ring-white/10 ring-primary/5 bg-transparent shadow-xl dark:shadow-thick2k">
				<p className="bg-slate-50 bg-opacity-50 rounded-3xl h-full w-full text-gray-700 dark:text-gray-100 text-center flex flex-col justify-center p-8">"Good fortune is what happens when opportunity meets with planning." - Thomas Edison</p>
			</div>
			<div className="bg-[url('/adventure8.avif')] bg-cover bg-center  w-full h-full ring-2 rounded-3xl p-8 min-h-empty dark:ring-white/10 ring-primary/5 bg-transparent shadow-xl dark:shadow-thick0k">
				<p className="bg-slate-50 bg-opacity-40 rounded-3xl h-full w-full text-gray-700 dark:text-gray-100 text-center flex flex-col justify-center p-8">"Planning is bringing the future into the present so that you can do something about it now." - Alan Lakein</p>
			</div>
		</main>
    </main>
  );
}
