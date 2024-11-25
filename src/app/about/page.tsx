// pages/index.tsx
import { FC } from 'react';

const Home: FC = () => {
  return ( 
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl">My Landing Page</h1>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl text-gray-800 mb-4">About hello world</h2>
          <p className="text-lg text-gray-600 mb-6">
            This is a simple landing page created with Next.js, TypeScript, and Tailwind CSS.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Landing Page. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
