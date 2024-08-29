import React, { useState } from 'react';

export default function PlanningBoard() {
	const [checklist, setChecklist] = useState([]);
	const [role, setRole] = useState([]);
	const [goal, setGoal] = useState([]);
	const [studyNow, setStudyNow] = useState([]);
	const [studyFuture, setStudyFuture] = useState([]);
	const [missStatement, setMissStatement] = useState([]);
	const [notes, setNotes] = useState([]);
	
  return (
    <main className='container-fluid  text-center'>
      <main className="w-full min-h-screen p-4 gap-4 grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-3">
            <div className="bg-[url('/adventure6.avif')] bg-cover bg-center gap-4 pl-4 pr-4 w-full min-h-full ring-2 rounded-3xl flex flex-col items-center justify-center sm:justify-center lg:justify-start text-center md:row-span-2 dark:ring-white/10 ring-primary/5 bg-transparent shadow-xl dark:shadow-thick">
                <h1 className="text-6xl mt-6 font-medium lg:text-4xl tracking-tight text-gray-700 dark:text-gray-100 w-full items-center">Weekly Planner</h1>
                <div className="flex flex-row justify-start items-center gap-5">
				<div className="bg-slate-50 p-2 rounded-full">
					<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 1024 1024" class="icon" version="1.1"><path d="M691.573 338.89c-1.282 109.275-89.055 197.047-198.33 198.331-109.292 1.282-197.065-90.984-198.325-198.331-0.809-68.918-107.758-68.998-106.948 0 1.968 167.591 137.681 303.31 305.272 305.278C660.85 646.136 796.587 503.52 798.521 338.89c0.811-68.998-106.136-68.918-106.948 0z" fill="#4A5699"/><path d="M294.918 325.158c1.283-109.272 89.051-197.047 198.325-198.33 109.292-1.283 197.068 90.983 198.33 198.33 0.812 68.919 107.759 68.998 106.948 0C796.555 157.567 660.839 21.842 493.243 19.88c-167.604-1.963-303.341 140.65-305.272 305.278-0.811 68.998 106.139 68.919 106.947 0z" fill="#C45FA0"/><path d="M222.324 959.994c0.65-74.688 29.145-144.534 80.868-197.979 53.219-54.995 126.117-84.134 201.904-84.794 74.199-0.646 145.202 29.791 197.979 80.867 54.995 53.219 84.13 126.119 84.79 201.905 0.603 68.932 107.549 68.99 106.947 0-1.857-213.527-176.184-387.865-389.716-389.721-213.551-1.854-387.885 178.986-389.721 389.721-0.601 68.991 106.349 68.933 106.949 0.001z" fill="#E5594F"/></svg>
				</div>
                    <div className="flex flex-col items-start font-bold">
                        <p>User's Name ex. "Go Getter"</p>
                        <p>User Bio Goes Here</p>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center md:items-start md:ml-10 gap-2">
                    <span className="text-lg font-bold font-sans">This Week</span>
					<div className="min-h-20 flex flex-col gap-2">
						<div>• Checklist #1</div>
						<div>• Checklist #2</div>
						<div>• Checklist #3</div>
						<div>• Checklist #4</div>
					</div>
					<form className="flex flex-row gap-2 mb-5">
						<input placeholder="••••••••" type="text" name="checklistItem" className="px-4 focus:outline-none text-white appearance-none h-8 rounded-lg w-full pl-3 pr-10 placeholder-gray-400 bg-primary/50" />
						<button type="submit" className="bg-white border border-primary dark:border-white rounded-lg px-4 py-2 text-primary h-8 flex flex-row items-center justify-center">+</button>
					</form>
                </div>
            </div>
            <div className="flex flex-col gap-2 bg-[url('/adventure4.avif')] bg-cover bg-center w-full ring-2 rounded-3xl p-8 min-h-full dark:ring-white/10 ring-primary/5 bg-transparent shadow-xl dark:shadow-thick">
				<div className="flex-grow bg-white bg-opacity-65 w-full ring-2 rounded-3xl p-8 dark:ring-white/10 ring-primary/5 shadow-xl dark:shadow-thick">
					<span className="text-lg font-bold font-sans">Roles</span>
					<div className="min-h-20 flex flex-col items-start">
						<div>• Role #1</div>
						<div>• Role #2</div>
						<div>• Role #3</div>
						<div>• Role #4</div>
					</div>
					<form className="flex flex-row gap-2 mb-5">
						<input placeholder="••••••••" type="text" name="roleItem" className="px-4 focus:outline-none text-white appearance-none h-8 rounded-lg w-full pl-3 pr-10 placeholder-gray-400 bg-primary/50" />
						<button type="submit" className="bg-white border border-primary dark:border-white rounded-lg px-4 py-2 text-primary h-8 flex flex-row items-center justify-center">+</button>
					</form>
				</div>
				<div className="flex-grow bg-white bg-opacity-65 w-full ring-2 rounded-3xl p-8 dark:ring-white/10 ring-primary/5 shadow-xl dark:shadow-thick">
					<span className="text-lg font-bold font-sans">Goals</span>
					<div className="min-h-20 flex flex-col items-start">
						<div>• Goal #1</div>
						<div>• Goal #2</div>
						<div>• Goal #3</div>
						<div>• Goal #4</div>
					</div>
					<form className="flex flex-row gap-2 mb-5">
						<input placeholder="••••••••" type="text" name="goalItem" className="px-4 focus:outline-none text-white appearance-none h-8 rounded-lg w-full pl-3 pr-10 placeholder-gray-400 bg-primary/50" />
						<button type="submit" className="bg-white border border-primary dark:border-white rounded-lg px-4 py-2 text-primary h-8 flex flex-row items-center justify-center">+</button>
					</form>
				</div>
			</div>
			<div className="bg-[url('/adventure2.jpg')] p-4 bg-cover bg-center w-full min-h-full ring-2 rounded-3xl md:block dark:ring-white/10 ring-primary/5 bg-transparent shadow-xl dark:shadow-thick">
				<p className="text-3xl font-bold">
					VISION BOARD
				  </p>
				  <div className="text-gray-500 bg-white bg-opacity-65  p-4 rounded-3xl ring-2 mb-4">
					  <p>
						Begin with the end in mind. Shape your own destiny. Remember that the
						development of your career, your family, and your faith in God is your
						individual responsibility—for which you alone will be held
						accountable.
					  </p>
					  <p>
						Elder Russell M. Nelson - Sept 1984
					  </p>
				  </div>
				  <div className="grid grid-cols-3 w-full gap-4">
					<img className="h-16 w-16 rounded-xl" src="/byu.png" alt="VisionBoard Pic"></img>
					<img className="h-16 w-16 rounded-xl" src="/lds-logo.jpeg" alt="VisionBoard Pic"></img>
					<img className="h-16 w-16 rounded-xl" src="/library.jpg" alt="VisionBoard Pic"></img>
					<img className="h-16 w-16 rounded-xl" src="/marathon.jpeg" alt="VisionBoard Pic"></img>
					<img className="h-16 w-16 rounded-xl" src="/mixing.jpg" alt="VisionBoard Pic"></img>
				  </div>
				  <div className="flex justify-center items-center w-full mt-4">
					<label className="flex flex-col items-center px-4 py-2 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
					  <span className="text-base leading-normal">Select a file</span>
					  <input type="file" className="hidden" />
					</label>
					<button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700">Add a Dream</button>
				  </div>
			</div>
			<div className="bg-[url('/adventure12.jpg')] p-4 bg-cover bg-center w-full min-h-full ring-2 rounded-3xl md:row-span-2 dark:ring-white/10 ring-primary/5 bg-transparent shadow-xl dark:shadow-thick">
				<div className="w-full flex flex-col items-center md:items-start gap-2">
					<span className="text-3xl font-bold font-sans">Stories of Jesus</span>
					<div className="w-full bg-white rounded-3xl py-4 px-8 bg-opacity-65 mb-4">
						<span className="text-xl font-bold font-sans">Study this week</span>
						<div className="min-h-20 flex flex-col gap-2 items-start">
							<div>• Study Item #1</div>
							<div>• Study Item #2</div>
							<div>• Study Item #3</div>
							<div>• Study Item #4</div>
						</div>
						<form className="flex flex-row gap-2 mb-5">
							<input placeholder="••••••••" type="text" name="studyItem" className="px-4 focus:outline-none appearance-none h-8 rounded-lg pl-3 placeholder-gray-400 bg-primary/50" />
							<button type="submit" className="bg-white border border-primary dark:border-white rounded-lg px-4 py-2 text-primary h-8 flex flex-row items-center justify-center">+</button>
						</form>

					</div>
					<div className="w-full bg-white rounded-3xl py-4 px-8 bg-opacity-65 mb-4">
						<span className="text-xl font-bold font-sans">Study in the future</span>
						<div className="min-h-20 flex flex-col gap-2 items-start">
							<div>• Study Item #1</div>
							<div>• Study Item #2</div>
							<div>• Study Item #3</div>
							<div>• Study Item #4</div>
						</div>
						<form className="flex flex-row gap-2 mb-5">
							<input placeholder="••••••••" type="text" name="futureStudyItem" className="px-4 focus:outline-none appearance-none h-8 rounded-lg pl-3 placeholder-gray-400 bg-primary/50" />
							<button type="submit" className="bg-white border border-primary dark:border-white rounded-lg px-4 py-2 text-primary h-8 flex flex-row items-center justify-center">+</button>
					</form>
					</div>
					</div>
			</div>
			<div className="w-full min-h-full ring-2 rounded-3xl flex flex-col items-center justify-center md:col-span-2 md:col-start-2 md:row-span-2 md:row-start-2 dark:ring-white/10 ring-primary/5 shadow-xl dark:shadow-thick bg-[url('/adventurebg.jpg')] bg-cover overflow-hidden">
				<div className="h-full lg:gap-0 md:items-center md:gap-12 p-8 ">
					<div className="flex flex-col justify-start h-full w-full">
					  <div className="flex w-full">
						<div>
						  <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
							MISSION STATEMENT
						  </p>
						</div>
						
					  </div>
					  <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
						A mission statement is not something you write overnight... But fundamentally, your mission statement becomes your constitution, the solid expression of your vision and values. It becomes the criterion by which you measure everything else in your life.
						<br />
						<br />
						Stephen Covey.
					  </p>
					  <hr className="border-t-2 border-gray-300 dark:border-zinc-400 my-4"/>
					  <div className="w-full flex flex-col justify-between bg-white bg-opacity-65 p-4 rounded-3xl">
						  <div className="w-full h-full flex flex-col gap-2">
							  <div className="flex flex-col gap-2 min-h-96">  
								<div className="flex flex-row justify-between">
								  Principle title Here
								  <button className="border border-red-500 rounded-full px-2 py-0.5 text-red-500 text-xs">X</button>
								</div>
								<p className="pl-4">Description of principle Here</p>
								<div className="flex flex-row justify-between">
								  Principle title Here
								  <button className="border border-red-500 rounded-full px-2 py-0.5 text-red-500 text-xs">X</button>
								</div>
								<p className="pl-4">Description of principle Here</p>
								<div className="flex flex-row justify-between">
								  Principle title Here
								  <button className="border border-red-500 rounded-full px-2 py-0.5 text-red-500 text-xs">X</button>
								</div>
								<p className="pl-4">Description of principle Here</p>
							</div>
							<form action="" className="flex flex-col gap-2">
								<input
									className="px-4 focus:outline-none text-white appearance-none h-8 rounded-lg w-full pl-3 pr-10 placeholder-gray-400 bg-primary/50"
									type="text"
									name="firstItem"
									placeholder="Principle"
								/>
								<input
									className="px-4 focus:outline-none text-white appearance-none h-8 rounded-lg w-full pl-3 pr-10 placeholder-gray-400 bg-primary/50"
									type="text"
									name="secondItem"
									placeholder="Description"
								/>
								<button
									className="border border-primary dark:border-white rounded-lg px-4 py-2 text-white h-8 flex flex-row items-center justify-center bg-black dark:bg-white dark:text-primary"
									pendingText="..."
									type="submit"
								>+</button>
							</form>
						  </div>
					  </div>
					</div>
				  </div>
			</div>
			<div class="bg-[url('/adventure10.jpg')] bg-cover bg-center w-full ring-2 rounded-3xl p-8 min-h-full dark:ring-white/10 ring-primary/5 bg-transparent shadow-xl dark:shadow-thick"></div>
            <div class="bg-[url('/adventure8.avif')] bg-cover bg-center w-full ring-2 rounded-3xl p-8 min-h-full dark:ring-white/10 ring-primary/5 bg-transparent shadow-xl dark:shadow-thick">
				<form class="w-full h-full flex flex-col justify-between p-2">
					<div class=" w-full mb-4 border border-gray-200 rounded-t-2xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
					  <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
						<p>My Notes</p>
						<div
						  id="tooltip-fullscreen"
						  role="tooltip"
						  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
						>
						  Show full screen
						  <div class="tooltip-arrow" data-popper-arrow></div>
						</div>
					  </div>
					  <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
						<label htmlFor="editor" class="sr-only">
						  Publish post
						</label>
						<textarea
						  id="editor"
						  rows="14"
						  class="block w-full h-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 outline-none"
						  placeholder="Write an article..."
						//   value={newNotes}
						  required
						></textarea>
					  </div>
					</div>
					<button
					  type="submit"
					  class="justify-center inline-flex w-full items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
					>
					  Save
					</button>
				  </form>
			</div>
        </main>
    </main>
  );
}
