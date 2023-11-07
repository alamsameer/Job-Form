import React, { useState } from "react";
import Navbar from "./Navbar";
import Modal from "./CameraModal";
import styles from '../css/Apply.module.css'

const ApplyPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        college: "",
        year: "",
        aboutOpportunity: "",
        phone: "",
        resume: null,
        video: null,
    });

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("college", formData.college);
        formDataToSend.append("year", formData.year);
        formDataToSend.append("aboutOpportunity", formData.aboutOpportunity);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("resume", formData.resume);
        formDataToSend.append("video", formData.video);

        try {
            // const response = await Axios.post("/your-server-endpoint", formDataToSend);
            // console.log("Server response:", response.data);
        } catch (error) {
            console.error("Error sending form data:", error);
        }
    };

    const handleUploadVideo = (videoData) => {
        console.log("Downloaded video data:", videoData);
    };

    const handleVideoUploaded = () => {
        document.getElementById("video-upload-button").innerText = "Video Uploaded Successfully";
    };

    return (
        <div>
        <section id="apply-now" style={{ display: showModal ? "none" : "block" }}>
            <Navbar />
            <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
                Job <span style={{ color: "#20c997" }}>Application</span> Form
            </h1>
            <form >
                <label htmlFor="name">
                    Name<sup className="mandatory_field">*</sup>
                </label>
                <input
                    type="text"
                    placeholder="Your Full Name"
                    id="name"
                    required
                />
                <span id="nameError" className="error"></span>
                <br />

                <label htmlFor="email">
                    Email<sup className="mandatory_field">*</sup>
                </label>
                <input
                    type="email"
                    placeholder="Your E-mail Id"
                    id="email"
                    required
                />
                <span id="emailError" className="error"></span>
                <br />

                <label htmlFor="college">
                    College<sup className="mandatory_field">*</sup>
                </label>
                <input
                    type="text"
                    placeholder="College"
                    id="college"
                    required
                />
                <span id="collegeError" className="error"></span>
                <br />
                <label htmlFor="year">
                    Passing Year<sup className="mandatory_field">*</sup>
                </label>
                <select id="year" required>
                    <option value="">Select Year</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="other">other</option>
                </select>
                <span id="yearError" className="error"></span>
                <br />

                <label htmlFor="about-opportunity">
                    How did you get to know about this opportunity?
                    <sup className="mandatory_field">*</sup>
                </label>
                <select id="about-opportunity" name="about-opportunity" required>
                    <option value="">Select an option</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Codalien-Website">Codalien-Website</option>
                    <option value="Internshala">Internshala</option>
                    <option value="Whatsapp-Telegram">Whatsapp/Telegram</option>
                    <option value="Others">Others</option>
                </select>
                <span id="opportunityError" className="error"></span>
                <br />

                <label htmlFor="phone">
                    Phone Number<sup className="mandatory_field">*</sup>
                </label>
                <input
                    type="tel"
                    placeholder="Your Phone Number"
                    id="phone"
                    required
                />
                <span id="phoneNumberError" className="error"></span>
                <br />

                <label htmlFor="resume">Resume (max 150KB)</label>
                <input type="file" id="resume" accept="image/*,.pdf" />
                <span id="resumeError" className="error"></span>
                <br />
                <label htmlFor="resume">
                    Introductory Video<sup className="mandatory_field">*</sup>
                </label>
                <button className="btn btn-primary" onClick={openModal}>
                    Upload Video
                </button>
                <div className="my-4">
                    <div className="row">
                        <div className="col-12">
                            <input
                                type="button"
                                className="btn btn-success border-0 w-100"
                                value="Submit"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </section>

            <Modal
                show={showModal}
                onHide={closeModal}
                // onVideoUploaded={handleVideoUploaded}
                onUploadVideo={handleUploadVideo}
            />
        </div>
    );
};

export default ApplyPage;

