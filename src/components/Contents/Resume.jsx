import React, { useState, useMemo, useCallback } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import Measure from "react-measure";
import throttle from "lodash/throttle";
import cv from "../../assets/cv.pdf";

function Resume() {
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);

  const fitHorizontal = useMemo(() => {
    const wRatio = pageWidth / wrapperWidth;
    const hRatio = pageHeight / wrapperHeight;
    if (wRatio < hRatio) {
      return false;
    }
    return true;
  }, [pageHeight, pageWidth, wrapperHeight, wrapperWidth]);

  const setWrapperDimensions = useCallback(
    throttle((w, h) => {
      setWrapperWidth(w);
      setWrapperHeight(h);
    }, 1),
    []
  );
  return (
    <Measure
      bounds
      onResize={(contentRect) =>
        setWrapperDimensions(
          contentRect.bounds.width,
          contentRect.bounds.height
        )
      }
    >
      {({ measureRef }) => (
        <div ref={measureRef} className="resume">
          <a href={cv} download>
          <button class="resume-button">Download my cv</button>
          </a>
          <Document file={cv}>
            <Page
              pageNumber={1}
              key="page"
              onLoadSuccess={(page) => {
                setPageWidth(page.width);
                setPageHeight(page.height);
              }}
              width={fitHorizontal ? wrapperWidth : null}
              height={!fitHorizontal ? wrapperHeight : null}
            />
          </Document>
        </div>
      )}
    </Measure>
  );
}

export default Resume;
