import React from 'react';
import { teams } from '../../data/homeData';

const TeamsGrid = () => {
  const handleTeamClick = (e, teamId) => {
    e.preventDefault();
    window.location.href = `/about${teamId}`;
  };

  return (
    <>
      <h1 className="text-center text-3xl font-bold sm:text-3xl my-12 sm:my-24">
        Teams In Yuktikula
      </h1>

      <div className="w-[90%] max-w-[1200px] mx-auto my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {teams.map((team, index) => (
          <div 
            key={index} 
            className="bg-[rgba(255,255,255,0.05)] h-20 p-3 border border-[rgba(255,200,0,0.83)] rounded-xl text-center transition-all duration-300 cursor-pointer hover:scale-105 hover:z-10 hover:shadow-lg hover:border-2 group"
          >
            <a 
              href={`/about#${team.id}`}
              className="no-underline text-inherit block h-full"
              onClick={(e) => handleTeamClick(e, `#${team.id}`)}
            >
              <h3 className="text-[#face52] mb-2 transition-all duration-300">
                {team.name}
              </h3>
              <p className="opacity-0 text-[#afafe7] text-sm h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:h-auto">
                click to know more
              </p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamsGrid;