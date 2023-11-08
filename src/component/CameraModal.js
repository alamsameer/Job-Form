import React, { useState, useEffect, useRef } from "react";
import { startTimer, stopTimer } from "../utility/timer";
import styles from "../css/camera.module.css"

const CameraModal = ({ show, onHide,  onUploadVideo,videoData ,formDataRef}) => {
    const [showCamera, setShowCamera] = useState(true);
    const [showInputField, setShowInputField] = useState(true);
    const [isRecording, setIsRecording] = useState(false);
    const [showPreviewVideo, setShowPreviewVideo] = useState(false);
    const [recordingButton, setRecordingButton] = useState(false);
    const [showDiscardButton, setShowDiscardButton] = useState(false);
    const [showRetakeButton, setShowRetakeButton] = useState(false);
    const [stream, setStream] = useState(false);
    
    // const [isUploaded, setIsUploaded] = useState(false);
    const [inputVideo, setInputVideo] = useState(); 
    const [recordedVideo, setRecordedVideo] = useState(videoData); 
    useEffect(() => {
        // Update recordedVideo when videoData changes
        setRecordedVideo(videoData);
    }, [videoData]);
    const mediaRecorderRef = useRef(null);
    const videoRef = useRef(null);

    const handleClose = () => {
        if (isRecording) {
            stopRecording();
        } else if (stream) {
            // closeCamera();
        }
        // Close the modal
        onHide();
    };

    const handleUpload = async () => {
        console.log("yello")
        const recordfile = document.getElementById("video_download");
        const videoError = document.getElementById("videoError");
        
        console.log(inputVideo);
        if (!recordfile && !inputVideo) {
            videoError.innerText = "please, Upload your introductory video";
        } else if (inputVideo) {
            console.log("helloer")
            const uploadedFile = inputVideo
            if (uploadedFile) {
                const videoElement = document.createElement("video");
                videoElement.src = window.URL.createObjectURL(new Blob([uploadedFile]));

                await new Promise((resolve) => {
                    videoElement.onloadedmetadata = function () {
                        const videoDuration = videoElement.duration;
                        const videoSize = uploadedFile.size;
                        console.log("Video duration: " + videoDuration + "video size:" + videoSize);
                        if (videoSize > 100 * 1024 * 1024) {
                            videoError.textContent = "Video file size should be less than 100MB.";
                            // inputVideoRef.current.value = "";
                            setInputVideo(null)
                        }
                       else if (videoDuration > 60) {
                            videoError.textContent = "Video duration should be equal or less than 1 minute.";
                            // inputVideoRef.current.value = "";
                            setInputVideo(null)
                        } else {
                            // console.log(inputVideoRef.current.value);
                            onUploadVideo(videoElement.src);
                            onHide();
                        }
                        resolve();
                    };
                });
            }else{
                console.log("No Upload File is Available")
            }
        } else {
            console.log(videoRef);
            onUploadVideo(videoRef.current.src)
            onHide();
        }
    };

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
            setShowCamera(false);
            setRecordingButton(true);
            setStream(true);
        } catch (error) {
            console.error("Error accessing the camera:", error);
        }
    };

    const toggleRecording = () => {
        if (!stream) {
            console.error("No media stream available for recording.");
            return;
        }

        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
    };

    const startRecording = async () => {
        try {
            setShowInputField(false);
            // inputVideoRef.current.value = "";
            setInputVideo(null);

            const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9,opus')
                ? 'video/webm;codecs=vp9,opus'
                : 'video/webm';

            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            const mediaRecorder = new MediaRecorder(stream, { mimeType });
            mediaRecorderRef.current = mediaRecorder;

            const recordedChunks = [];

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    recordedChunks.push(event.data);
                }
            };
            // startTimer(60);

            mediaRecorder.onstop = () => {
                const recordedBlob = new Blob(recordedChunks, { type: mimeType });
                const recordedVideoURL = URL.createObjectURL(recordedBlob);
                videoRef.current.src = recordedVideoURL;

                document.getElementById("previewVideo").src = videoRef.current.src;
                const downloadLink = document.createElement("a");
                downloadLink.id = "video_download";
                downloadLink.href = videoRef.current.src;
                downloadLink.download = "recorded_video.webm";
                downloadLink.innerText = "Download Your video";

                document.getElementById("video").appendChild(downloadLink);
            };

            mediaRecorder.start();
            // timerId = setTimeout(stopperFunction, 60500);
            setIsRecording(true);
        } catch (error) {
            console.error("Error starting recording:", error);
        }
    };

    const stopRecording = () => {
        try {
            videoRef.current.srcObject = null;
            const mediaRecorder = mediaRecorderRef.current;
            if (mediaRecorder && mediaRecorder.state === "recording") {
                mediaRecorder.stop();
            }

            // stopTimer();
            setStream(false);
            setShowPreviewVideo(true);
            setIsRecording(false);
            setShowDiscardButton(true);
            setShowRetakeButton(true);
            setRecordingButton(false);
        } catch (error) {
            console.error("Error while stopping the recording:", error);
        }
    };

    const retakeVideo = () => {
        setShowDiscardButton(false);
        setShowRetakeButton(false);
        setShowPreviewVideo(false);
        // setIsUploaded(false);
        setShowCamera(true);

        const downloadLink = document.getElementById("video_download");
        if (downloadLink) {
            downloadLink.remove();
        }
    };

    const discardVideo = () => {
        setShowInputField(true);
        setShowCamera(true);
        setShowDiscardButton(false);
        setShowRetakeButton(false);
        setShowPreviewVideo(false);
        // setIsUploaded(false);
        formDataRef.current.video = null;
        setRecordedVideo(null);

        const downloadLink = document.getElementById("video_download");
        if (downloadLink) {
            downloadLink.remove();
        }
    };
    return (
        show && (
            <div className="modal show" tabIndex="-1" role="dialog" style={{ display: "block" }}>
                <div>
                   { recordedVideo}
                </div>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Upload or Record Your Video</h5>
                            <button type="button" className="close" onClick={handleClose}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* for preview video */}
                            {
                                recordedVideo!=null && (
                                    <video className="preview_video" 
                                    id="previewVideo" 
                                       controls
                                       src={recordedVideo}
                                       playsInline>
                                   </video>
                                )
                            }
                            {/* <video className="preview_video" 
                             id="previewVideo" 
                                style={{ display: (showPreviewVideo && !isRecording) ? "block" : "none" }}
                                controls
                                playsInline>
                            </video> */}
                            {/* for video */}
                            <div id="video">
                                <label htmlFor="video">Introductory Video (MP4, max 100MB, max 1 minute):</label>
                                <br/>
                                <span id="videoError" className="error" style={{ color: "red" }}></span>
                                <br />
                                <div id="recording-instructions">
                                    <ul>
                                        <li>Self-Introduction and Educational background.</li>
                                        <li>Work experience (if any).</li>
                                        <li>Talk about personal interests or hobbies.</li>
                                        <li>Share any additional information you'd like to.</li>
                                    </ul>
                                </div>
                                {/* for video input */}
                                <input
                                    type="file"
                                    id="input_video"
                                    accept="video/mp4"
                                    style={{ display: showInputField ? "block" : "none" }}
                                    onChange={(e)=>{
                                        setInputVideo(e.target.files[0]);
                                    }}
                                    // ref={inputVideoRef}
                                />
                                {/* for discard & retake button */}
                                <div className="d-flex justify-content-between mt-3">
                                    <button
                                        id="discard-video"
                                        style={{ display: showDiscardButton ? "block" : "none" }}
                                        className="btn btn-danger text-white border-0 px-4"
                                        onClick={discardVideo}
                                    >
                                        Discard Video
                                    </button>
                                    <button
                                        id="retake-video"
                                        style={{ display: showRetakeButton ? "block" : "none" }}
                                        className="btn btn-warning text-white border-0 px-4"
                                        onClick={retakeVideo}
                                    >
                                        Retake Video
                                    </button>
                                </div>
                                {/* div............ */}
                                <div>
                                    <div>
                                        {/* for camera and  start stop recording */}
                                        <button id="startCamera" className="btn btn-primary text-white border-0 px-4"
                                            style={{ display: showCamera ? "block" : "none" }}
                                            onClick={startCamera}>
                                            Start Camera
                                        </button>
                                        <button onClick={toggleRecording} style={{ display: recordingButton ? "block" : "none" }}>
                                            {isRecording ? "Stop Recording" : "Start Recording"}
                                        </button>
                                        <video
                                            style={{ display: stream ? "block" : "none" }}
                                            className="camera_video"
                                            id="recordedVideo"
                                            autoPlay
                                            playsInline
                                            muted
                                            ref={videoRef}
                                        ></video>
                                    </div>
                                    {/* for timer */}
                                    <div id="timer" style={{ display: "none" }}>
                                        Starting
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* for close and upload button */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" onClick={handleUpload}>
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default CameraModal;
