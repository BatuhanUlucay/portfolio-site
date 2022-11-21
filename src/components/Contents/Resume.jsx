import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import cv from "../../assets/cv.pdf";

function Resume() {

  return (
    <div className="resume">
      <Document file={cv} >
        <Page pageNumber={1} scale="1.5" className="resume-page"/>
      </Document>
    </div>
  );
}

export default Resume;
