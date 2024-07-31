import React, { useEffect } from "react";
import "./index.scss";
import TagCloud from 'TagCloud';

const TextSphere = () => {
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "ReactJS",
      "Flask",
      "Streamlit",
      "Vanilla JavaScript",
      "SQL",
      "CSS",
      "C/C++",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "XGBoost",
    ];

    const options = {
      radius: 250,
      maxSpeed: "fast",
      initSpeed: "normal",
      keep: true,
    };

    TagCloud(container, texts, options);

    // Cleanup function to remove the TagCloud instance
    return () => {
      const tagCloudContainer = document.querySelector(container);
      if (tagCloudContainer) {
        while (tagCloudContainer.firstChild) {
          tagCloudContainer.removeChild(tagCloudContainer.firstChild);
        }
      }
    };
  }, []);

  return (
    <div className="text-sphere">
      <span className="tagcloud"></span>
    </div>
  );
};

export default TextSphere;
