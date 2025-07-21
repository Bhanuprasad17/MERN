// frontend/src/App.js
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("profileImg", file); // 👈 must match backend field name

    try {
      const res = await axios.post("http://localhost:3000/upload", formData);
      setImageUrl(`http://localhost:3000${res.data.split(": ")[1]}`);
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Profile Image</h2>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload} style={{ marginLeft: "10px" }}>
        Upload
      </button>

      {imageUrl && (
        <div style={{ marginTop: "20px" }}>
          <h4>Uploaded Image:</h4>
          <img src={imageUrl} alt="Uploaded" width={200} />
        </div>
      )}
    </div>
  );
}

export default App;
