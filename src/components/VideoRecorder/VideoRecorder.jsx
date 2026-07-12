import React, { useState, useRef } from 'react';
import './VideoRecorder.css';

function VideoRecorder() {
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState(null);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const mediaRecorderRef = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 640, height: 480 },
        audio: true 
      });
      
      streamRef.current = stream;
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      let chunks = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/mp4' });
        const url = URL.createObjectURL(blob);
        setVideoURL(url);
      };

      mediaRecorder.start();
      setRecording(true);
      setPermissionDenied(false);
    } catch (error) {
      console.error("Camera access error:", error);
      setPermissionDenied(true);
      alert("Please allow camera and microphone access to record your introduction.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      setRecording(false);
      
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    }
  };

  const downloadVideo = () => {
    if (videoURL) {
      const link = document.createElement('a');
      link.href = videoURL;
      link.download = 'my-introduction.mp4';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="recorder" className="video-recorder">
      <h2>🎥 Record Your Introduction</h2>
      <p className="subtitle">Introduce yourself to recruiters in 1-2 minutes</p>
      
      <div className="controls">
        <button 
          onClick={startRecording} 
          disabled={recording || permissionDenied} 
          className="btn-start"
        >
          {recording ? '🔴 Recording...' : '▶️ Start Recording'}
        </button>
        <button 
          onClick={stopRecording} 
          disabled={!recording} 
          className="btn-stop"
        >
          ⏹️ Stop Recording
        </button>
      </div>

      {permissionDenied && (
        <div className="permission-error">
          ⚠️ Camera access denied. Please enable camera and microphone permissions in your browser.
        </div>
      )}

      {videoURL && (
        <div className="preview">
          <h3>Your Recording:</h3>
          <video src={videoURL} controls width="100%" ref={videoRef} className="video-preview" />
          <div className="video-actions">
            <button onClick={downloadVideo} className="btn-download">
              💾 Download Video
            </button>
            <button onClick={() => setVideoURL(null)} className="btn-clear">
              🗑️ Clear Recording
            </button>
          </div>
          <p className="note">💡 This recording is temporary and will be lost on page refresh.</p>
        </div>
      )}

      <div className="recording-tips">
        <h4>Tips for a Great Introduction:</h4>
        <ul>
          <li>✨ Start with your name and current role</li>
          <li>💻 Highlight your key technical skills</li>
          <li>🚀 Mention 1-2 notable projects</li>
          <li>🎯 Explain what you're looking for</li>
          <li>⏱️ Keep it under 2 minutes</li>
        </ul>
      </div>
    </section>
  );
}

export default VideoRecorder;