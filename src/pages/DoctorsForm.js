import React, { useState } from "react";
import brandlogo from "../images/brandlogo.png";
import { uploadData } from "aws-amplify/storage";
import { generateClient } from "aws-amplify/api";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";

const DoctorsForm = () => {
  const client = generateClient();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    workplace: "",
    workAddress: "",
    workContact: "",
    country: "",
    city: "",
    licenseNumber: "",
    specialization: "",
    experience: "",
    status: "",
    picture: null,
    pdfFiles: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;

    // Ensure each PDF file is less than or equal to 2MB
    const pdfFiles = Array.from(files);
    const isPdfSizeValid = pdfFiles.every(
      (file) => file.size <= 2 * 1024 * 1024
    );

    if (!isPdfSizeValid) {
      alert("Please ensure each PDF file is no larger than 2MB.");
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: [...(prevData[name] || []), ...pdfFiles],
    }));
  };

  const removePdfFile = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      pdfFiles: prevData.pdfFiles.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,

      workAddress,
      workContact,
      country,
      city,
      licenseNumber,
      specialization,
      experience,
      status,
      picture,
      pdfFiles,
    } = formData;

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      workAddress === "" ||
      workContact === "" ||
      country === "" ||
      city === "" ||
      licenseNumber === "" ||
      specialization === "" ||
      experience === "" ||
      status === "" ||
      picture === null ||
      pdfFiles.length === 0
    ) {
      alert("Please fill in all details");
      setLoading(false);
      return;
    } else {
      // Call the function to send data to the backend
      try {
        await sendDataToBackend(formData);
      } catch (error) {
        setLoading(false);

        alert("Error submitting data:", error);
      }
    }
  };

  const sendDataToBackend = async (data) => {
    // if email or license number exists in the database reject it
    // Perform email existence check
    const emailCheckResponse = await client.graphql({
      query: queries.listDoctorModels,
      variables: { filter: { email: { eq: data.email } } },
    });

    const existingEmailDoctors = emailCheckResponse.data.listDoctorModels.items;

    if (existingEmailDoctors.length > 0) {
      alert("Email already exists. Please use a different email address.");
      setLoading(false);

      return;
    }

    // Perform license number existence check
    const licenseCheckResponse = await client.graphql({
      query: queries.listDoctorModels,
      variables: { filter: { license: { eq: data.licenseNumber } } },
    });

    const existingLicenseDoctors =
      licenseCheckResponse.data.listDoctorModels.items;

    if (existingLicenseDoctors.length > 0) {
      alert(
        "License number already exists. Please use a different license number."
      );
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      // Upload the picture using custom uploadData method
      const pictureKey = `pictures/${Date.now()}_${data.picture.name}`;
      const pictureUploadResult = await uploadData({
        key: pictureKey,
        data: data.picture,
        options: {
          contentType: data.picture.type,
          accessLevel: "guest",
        },
      });

      console.log("Picture upload result:", pictureUploadResult);

      // Upload each PDF file using custom uploadData method
      let pdfPromises = [];

      if (data && data.pdfFiles) {
        const pdfFilesArray = Array.isArray(data.pdfFiles)
          ? data.pdfFiles
          : [data.pdfFiles];

        // Ensure that pdfFilesArray is defined before mapping over it
        if (pdfFilesArray) {
          pdfPromises = pdfFilesArray.map(async (file) => {
            const pdfKey = `pdf-documents/${Date.now()}_${file.name}`;
            const pdfUploadResult = await uploadData({
              key: pdfKey,
              data: file,
              options: {
                contentType: file.type,
                accessLevel: "guest",
              },
            });
            console.log("PDF upload result:", pdfUploadResult);
            return pdfKey;
          });
        }
      } else {
        console.warn("No PDF files to upload or invalid format.");
      }

      // Wait for all PDF uploads to complete
      const pdfKeys = await Promise.all(pdfPromises);

      // Now you can send the rest of the form data along with the array of PDF keys to your backend API
      const doctorData = {
        firstname: data.firstName,
        lastname: data.lastName,
        email: data.email,
        workplace: data.workplace,
        workAddress: data.workAddress,
        workContact: data.workContact,
        country: data.country,
        city: data.city,
        license: data.licenseNumber,
        specialization: data.specialization,
        experience: data.experience,
        about: data.status,
        image: pictureKey, // Assigning the S3 key for the picture
        qualifications: pdfKeys, // Assigning the array of S3 keys for PDF files
      };

      const response = await client.graphql({
        query: mutations.createDoctorModel,
        variables: { input: doctorData },
      });

      const createdDoctor = response.data;

      console.log(createdDoctor);
      setFormData({});

      setLoading(false);
      alert(
        "You will be notified if the Hospiyou team accepts your application, thanks for applying!"
      );
    } catch (error) {
      setLoading(false);
      alert("Error submitting data:", error);
    }
  };

  return (
    <div className="df-container">
      <img src={brandlogo} alt="brand" className="brandpic" />
      <div className="doctor-form-container">
        <form onSubmit={handleSubmit} className="doctor-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="workplace">Work Place:</label>
            <input
              type="text"
              id="workplace"
              name="workplace"
              value={formData.workplace}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="workAddress">Work Address:</label>
            <input
              type="text"
              id="workAddress"
              name="workAddress"
              value={formData.workAddress}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="workContact">Work Contact:</label>
            <input
              type="tel"
              id="workContact"
              name="workContact"
              value={formData.workContact}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="licenseNumber">License Number:</label>
            <input
              type="text"
              id="licenseNumber"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="specialization">Specialization:</label>
            <input
              type="text"
              id="specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="experience">Years of Experience:</label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="picture">Picture:</label>
            <input
              type="file"
              id="picture"
              name="picture"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="pdf">Qualifications (CV):</label>
            <input
              type="file"
              id="pdf"
              name="pdfFiles"
              accept=".pdf"
              multiple
              onChange={handleFileChange}
            />

            <div>
              <h4>Selected PDF Files:</h4>
              <ul>
                {formData.pdfFiles.map((file, index) => (
                  <li key={index}>
                    {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                    <button onClick={() => removePdfFile(index)}>Remove</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorsForm;
