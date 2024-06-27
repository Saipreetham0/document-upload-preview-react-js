// src/DocumentUpload.js
import React, { useState } from 'react';
import './DocumentUpload.css';

const DocumentUpload = () => {
    const [previewSrc, setPreviewSrc] = useState(null);

    const previewFile = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewSrc(e.target.result);
                document.getElementById('modal').style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select a file to preview.');
        }
    };

    const closeModal = () => {
        document.getElementById('modal').style.display = 'none';
        setPreviewSrc(null);
    };

    return (
        <div className="container">
            <h1>Document Submission</h1>
            <form id="documentForm">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email id:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="tenthCertificate">10th certificate</label>
                    <input type="file" id="tenthCertificate" name="tenthCertificate" onChange={previewFile} />
                    <button type="button" onClick={() => document.getElementById('tenthCertificate').click()}>Preview</button>
                </div>
                <div className="form-group">
                    <label htmlFor="twelfthCertificate">12th Certificate</label>
                    <input type="file" id="twelfthCertificate" name="twelfthCertificate" onChange={previewFile} />
                    <button type="button" onClick={() => document.getElementById('twelfthCertificate').click()}>Preview</button>
                </div>
                <div className="form-group">
                    <label htmlFor="govtCertificate">Govt certificate</label>
                    <input type="file" id="govtCertificate" name="govtCertificate" onChange={previewFile} />
                    <button type="button" onClick={() => document.getElementById('govtCertificate').click()}>Preview</button>
                </div>
                <div className="form-group">
                    <label htmlFor="aadharCard">Aadhar card</label>
                    <input type="file" id="aadharCard" name="aadharCard" onChange={previewFile} />
                    <button type="button" onClick={() => document.getElementById('aadharCard').click()}>Preview</button>
                </div>
                <div className="form-group">
                    <label htmlFor="passportPhoto">Passport photo</label>
                    <input type="file" id="passportPhoto" name="passportPhoto" onChange={previewFile} />
                    <button type="button" onClick={() => document.getElementById('passportPhoto').click()}>Preview</button>
                </div>
                <button type="submit">Submit</button>
            </form>
            <div id="modal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    {previewSrc && <iframe src={previewSrc} frameBorder="0"></iframe>}
                </div>
            </div>
        </div>
    );
};

export default DocumentUpload;