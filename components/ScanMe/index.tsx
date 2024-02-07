"use client"

import { useState } from 'react';
import { IoExitOutline, PiDevicesFill, FaShareFromSquare } from "@lib/icons";
import QRCode from 'react-qr-code';

const Index: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const qrCodeURL = "https://www.nucleus-dev.me/";

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const shareQRCode = () => {

    // Using Web Share API if available
    if (navigator.share) {
      navigator.share({
        title: 'Share My Profile',
        text: 'Check out my profile QR code!',
        url: qrCodeURL,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback for browsers that do not support Web Share API
      alert('Web Share API is not supported in this browser. You can manually share the QR code.');
    }
  };

  return (
    <div className='relative'>
      <PiDevicesFill
        className="text-[32px] font-bold cursor-pointer hover:text-emerald-500"
        onClick={openModal}
      />
      <span className="absolute inline-flex items-center justify-center top-1.5 left-0.5 flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1 w-1 bg-sky-500"></span>
      </span>

      {isModalOpen && (
        <div className="fixed inset-0 overflow-y-auto">
          {/* Blurred background */}
          <div className="fixed inset-0 transition-opacity backdrop-blur" onClick={closeModal}></div>

          <div className="flex items-center justify-center min-h-screen">
            {/* Container for modal content */}
            <div className="blur-container relative z-10">
              <div className="border border-slate-600 rounded-lg px-6 py-2">
                <div className="flex justify-end mb-1">
                  <button className="text-3xl hover:text-red-500" onClick={closeModal}>
                    <IoExitOutline />
                  </button>
                </div>
                <div className="flex flex-col justify-center">
                  <QRCode value={qrCodeURL} size={200} />
                  <div className='flex justify-between mt-2'>
                    <p className="">Share My Profile!</p>
                    <FaShareFromSquare className="text-xl cursor-pointer" onClick={shareQRCode} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
