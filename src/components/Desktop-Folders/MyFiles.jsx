import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { XIcon, MinusIcon, PlusSmIcon } from '@heroicons/react/outline';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Desktop from '../My-Files-Folder/Desktop'; 
import Document from '../My-Files-Folder/Document'; 
import Download from '../My-Files-Folder/Download'; 
import MyMusic from '../My-Files-Folder/MyMusic'; 
import MyPicture from '../My-Files-Folder/MyPicture'; 
import MyVideo from '../My-Files-Folder/MyVideo'; 

import MyFilesIcon from '../Assets/Desktop/MyFile.png'
import DesktopIcon from '../Assets/MyFiles/DesktopIcon.png';
import DocIcon from '../Assets/MyFiles/DocumentIcon.png';
import DownIcon from '../Assets/MyFiles/DownloadIcon.png';
import MusicIcon from '../Assets/MyFiles/MusicIcon.png';
import PicIcon from '../Assets/MyFiles/PictureIcon.png';
import videoIcon from '../Assets/MyFiles/VideoIcon.png';


const MyFiles = ({ onClose }) => {

  const [openWindows, setOpenWindows] = useState({
    desktop: false,
    document: false,
    download: false,
    myMusic: false,
    myPicture: false,
    myVideo: false,
  });

  const handleOpen = (windowName) => {
    setOpenWindows((prevState) => ({
      ...prevState,
      [windowName]: true,
    }));
  };

  const handleClose = (windowName) => {
    setOpenWindows((prevState) => ({
      ...prevState,
      [windowName]: false,
    }));
  };

  const [isMaximized, setIsMaximized] = useState(false);
  
  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <>
      <Rnd
        default={{
          x: 200,
          y: 100,
          width: 850,
          height: 400,
        }}
        position={isMaximized ? { x: 5, y: 2 } : undefined}
        size={isMaximized ? { width: '99.10%', height: '93.80%' } : undefined}  
        minWidth={280}
        minHeight={400}
        bounds="parent"
        className="bg-[#202020] border-[0.2px] border-[#4b4b4b] rounded-[10px] shadow-lg"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-2 bg-[#2b2b2b] rounded-t-[10px] border-b cursor-default">
            <img className="h-[20px] w-[20px] bg-cover" src={MyFilesIcon} alt="This PC" />
            <div className="flex text-white ">My Files</div>
            <div className="flex space-x-2">
            <button className="p-2 rounded hover:bg-gray-500">
              <MinusIcon className="w-4 h-4 text-white" />
            </button>
            <button onClick={handleMaximize} className="p-2 rounded hover:bg-gray-500">
              <PlusSmIcon className="w-4 h-4 text-white" />
            </button>
            <button onClick={onClose} className="p-2 rounded hover:bg-[#eb342d]">
              <XIcon className="w-4 h-4 text-white" />
            </button>
          </div>
          </div>
          
          <PerfectScrollbar className="flex-grow p-[20px] text-white cursor-default overflow-auto">
            <div className="flex flex-wrap gap-2">
              <div className="flex flex-col items-center p-4 hover:bg-gray-500" onDoubleClick={() => handleOpen('desktop')}>
                <img className="h-[35px] w-[40px] bg-cover" src={DesktopIcon} alt="Desktop" />
                <h1 className="mt-1 mb-[15px]">Desktop</h1>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-gray-500" onDoubleClick={() => handleOpen('document')}>
                <img className="h-[35px] w-[40px] bg-cover" src={DocIcon} alt="Document" />
                <h1 className="mt-1 mb-[15px]">Document</h1>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-gray-500" onDoubleClick={() => handleOpen('download')}>
                <img className="h-[35px] w-[40px] bg-cover" src={DownIcon} alt="Download" />
                <h1 className="mt-1 mb-[15px]">Download</h1>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-gray-500" onDoubleClick={() => handleOpen('myMusic')}>
                <img className="h-[35px] w-[40px] bg-cover" src={MusicIcon} alt="My Music" />
                <h1 className="mt-1 mb-[15px]">My Music</h1>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-gray-500" onDoubleClick={() => handleOpen('myPicture')}>
                <img className="h-[35px] w-[40px] bg-cover" src={PicIcon} alt="My Picture" />
                <h1 className="mt-1 mb-[15px]">My Picture</h1>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-gray-500" onDoubleClick={() => handleOpen('myVideo')}>
                <img className="h-[35px] w-[40px] bg-cover" src={videoIcon} alt="My Video" />
                <h1 className="mt-1 mb-[15px]">My Video</h1>
              </div>
            </div>
          </PerfectScrollbar>
          
          {/* End Section */}
          <div className="p-2 bg-[#2b2b2b] rounded-b-[10px]">
            <div className="text-white">6 Items</div>
          </div>
        </div>
      </Rnd>
      {openWindows.desktop && (
        <Desktop onClose={() => handleClose('desktop')} />
      )}
      {openWindows.document && (
        <Document onClose={() => handleClose('document')} />
      )}
      {openWindows.download && (
        <Download onClose={() => handleClose('download')} />
      )}
      {openWindows.myMusic && (
        <MyMusic onClose={() => handleClose('myMusic')} />
      )}
      {openWindows.myPicture && (
        <MyPicture onClose={() => handleClose('myPicture')} />
      )}
      {openWindows.myVideo && (
        <MyVideo onClose={() => handleClose('myVideo')} />
      )}
    </>
  );
};

export default MyFiles;
