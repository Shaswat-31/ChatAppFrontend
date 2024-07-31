import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackgroundSelection = () => {
  const navigate = useNavigate();

  const saveBackground = (color) => {
    localStorage.setItem('background', color);
    navigate('/');
    window.location.reload();
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-400 py-10'>
        <div className='mt-20'>
        <h2 className='text-6xl font-extrabold mb-12 text-gray-900 text-shadow-lg'>
        Choose Your Background
      </h2>
        </div>
      
      <div className='flex flex-wrap justify-center gap-8'>
        <div
          onClick={() => saveBackground('Bg1')}
          className='cursor-pointer flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl'
        >
          <img
            src='/WhiteBg.jpeg'
            alt='Light Background'
            className='w-64 h-64 object-cover rounded-lg shadow-2xl'
          />
          <p className='mt-4 text-2xl font-semibold text-gray-900'>
            Light
          </p>
        </div>
        <div
          onClick={() => saveBackground('Bg2')}
          className='cursor-pointer flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl'
        >
          <img
            src='/DarkBg.avif'
            alt='Dark Studio Background'
            className='w-64 h-64 object-cover rounded-lg shadow-2xl'
          />
          <p className='mt-4 text-2xl font-semibold text-gray-900'>
            Dark Studio
          </p>
        </div>
        <div
          onClick={() => saveBackground('Bg3')}
          className='cursor-pointer flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl'
        >
          <img
            src='/DarkBg.jpeg'
            alt='Dark Background'
            className='w-64 h-64 object-cover rounded-lg shadow-2xl'
          />
          <p className='mt-4 text-2xl font-semibold text-gray-900'>
            Dark
          </p>
        </div>
        <div
          onClick={() => saveBackground('Bg4')}
          className='cursor-pointer flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl'
        >
          <img
            src='/leaf.jpg'
            alt='Leaf Background'
            className='w-64 h-64 object-cover rounded-lg shadow-2xl'
          />
          <p className='mt-4 text-2xl font-semibold text-gray-900'>
            Leaf
          </p>
        </div>
        <div
          onClick={() => saveBackground('Bg5')}
          className='cursor-pointer flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl'
        >
          <img
            src='/mountain.jpg'
            alt='mountain Background'
            className='w-64 h-64 object-cover rounded-lg shadow-2xl'
          />
          <p className='mt-4 text-2xl font-semibold text-gray-900'>
            Mountain
          </p>
        </div>
        <div
          onClick={() => saveBackground('Bg6')}
          className='cursor-pointer flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl'
        >
          <img
            src='/Sea.jpg'
            alt='Sea Background'
            className='w-64 h-64 object-cover rounded-lg shadow-2xl'
          />
          <p className='mt-4 text-2xl font-semibold text-gray-900'>
            Sea
          </p>
        </div>
        <div
          onClick={() => saveBackground('Bg7')}
          className='cursor-pointer flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl'
        >
          <img
            src='/Fire.jpg'
            alt='Fire Background'
            className='w-64 h-64 object-cover rounded-lg shadow-2xl'
          />
          <p className='mt-4 text-2xl font-semibold text-gray-900'>
            Fire
          </p>
        </div>
        <div
          onClick={() => saveBackground('Bg8')}
          className='cursor-pointer flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl'
        >
          <img
            src='/Modern.jpg'
            alt='Modern Background'
            className='w-64 h-64 object-cover rounded-lg shadow-2xl'
          />
          <p className='mt-4 text-2xl font-semibold text-gray-900'>
            Modern
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSelection;
