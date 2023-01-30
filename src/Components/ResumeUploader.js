import React, { useState, useEffect } from "react";
import React, { useState } from 'react';
import React, { Component } from 'react';
import axios from "axios";
import FormData from 'form-data';
import './ResumeUploader.css'

import { useState } from 'react';

function ResumeUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  return (
    <div>
      <input type="file" onChange={handleFileSelect} />
      {selectedFile && <p>{selectedFile.name}</p>}
    </div>
  )
}
