import React, { useState } from 'react';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DownloadingIcon from '@mui/icons-material/Downloading';
import DoneIcon from '@mui/icons-material/Done';
import resumePdf from '../assets/resume.pdf'; // adjust path if needed

function ResumeDownloadButton() {
  const [status, setStatus] = useState('initial');

  const handleDownload = () => {
    setStatus('downloading');

    // Trigger actual download
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'My_Resume.pdf';
    link.click();

    // Change to "downloaded" after 1 second
    setTimeout(() => {
      setStatus('downloaded');
    }, 1000);
  };

  // Icon and text based on status
  let buttonText = 'Download Resume';
  let ButtonIcon = CloudDownloadIcon;

  if (status === 'downloading') {
    buttonText = 'Downloading...';
    ButtonIcon = DownloadingIcon;
  } else if (status === 'downloaded') {
    buttonText = 'Downloaded';
    ButtonIcon = DoneIcon;
  }

  return (
    <button onClick={handleDownload} className="resume-btn">
      <ButtonIcon style={{ marginRight: '8px' }} />
      {buttonText}
    </button>
  );
}

export default ResumeDownloadButton;
