"use client"

import { useState } from 'react';
import { IoMdBarcode } from 'react-icons/io';
import { RiCloseFill, RiShareForwardFill } from 'react-icons/ri';
import QRCode from 'react-qr-code';

const Index: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const qrCodeURL = "https://nucleus-neon.vercel.app/";

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const shareQRCode = () => {
    // Generate the shareable URL for your QR code
     // Replace with your actual QR code URL

    // Use Web Share API if available
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
    <div>
      <IoMdBarcode
        className="text-2xl cursor-pointer"
        onClick={openModal}
      />

      {isModalOpen && (
        <div className="fixed inset-0 overflow-y-auto">
          {/* Blurred background */}
          <div className="fixed inset-0 transition-opacity backdrop-blur" onClick={closeModal}></div>

          <div className="flex items-center justify-center min-h-screen">
            {/* Container for modal content */}
            <div className="blur-container relative z-10">
              <div className="border border-slate-600 rounded-lg px-6 py-2">
                <div className="flex justify-end mb-1">
                  <button className="text-3xl" onClick={closeModal}>
                    <RiCloseFill />
                  </button>
                </div>
                <div className="flex flex-col justify-center">
                  <QRCode value={qrCodeURL} size={200} />
                  <div className='flex justify-between mt-2'>
                    <p className="">Share My Profile</p>
                    <RiShareForwardFill className="text-xl cursor-pointer" onClick={shareQRCode} />
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
