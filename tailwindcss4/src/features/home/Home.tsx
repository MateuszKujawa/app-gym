// src/features/home/Home.tsx
import React from 'react';
import Upcoming from './upcoming/Upcoming';
import Neargym from './nears_gyms/Neargym';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col space-y-8 items-start justify-start py-4 bg-gradient-to-b from-white via-white to-indigo-100 overflow-x-hidden">
      <h1 className="text-4xl text-zinc-900 font-dmsans font-bold px-8">
        Home
      </h1>
      <Upcoming />
      <Neargym />
    </div>
  );
};

export default Home;
