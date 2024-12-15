import React, { useState } from "react";
import './ProductDescription.css';
import lineImage from '../../assets/images/line.png';


const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState("description");

  const getSummaryContent = () => {
    switch (activeTab) {
      case "description":
        return "100% Bio-washed Cotton makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.Infinite range of matte-finish HD printsInfinite range of matte-finish HD printsInfinite range of matte-finish HD printsInfinite range of matte-finish HD prints";
      case "comments":
        return "Users have shared 21 comments about this product. Feedback includes details about quality, comfort, and satisfaction.";
      case "qna":
        return "Find answers to 4 frequently asked questions about this product, covering material, care instructions, and fit.";
      default:
        return "";
    }
  };

  return (
    <div className="product-description-container">
      <div className="description-header">
        <div className="description-list">
          <li className="description-item">
          <span>
          <img src={lineImage} alt="line" className="line3" /> 
          </span>
            <h2 className="product-title">Product Description</h2>
          </li>

          <li className="description-details">
            <p
              className={`description-text ${
                activeTab === "description" ? "active-tab" : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </p>
            <p
              className={`user-comments ${
                activeTab === "comments" ? "active-tab" : ""
              }`}
              onClick={() => setActiveTab("comments")}
            >
              User comments<span className="comment-count">21</span>
            </p>
            <p
              className={`qna ${
                activeTab === "qna" ? "active-tab" : ""
              }`}
              onClick={() => setActiveTab("qna")}
            >
              Question & Answer<span className="qna-count">4</span>
            </p>
          </li>

          <li className="product-summary">
            <p className="summary-text">{getSummaryContent()}</p>
          </li>
        </div>
        
        <div className="product-details">
          <div className="product-details-grid">
            <ul className="product-specs">
              <li className="product-spec-item">
                <p className="spec-label">Fabric</p>
                <p className="spec-value">Bio-washed Cotton</p>
              </li>
              <li className="product-spec-item">
                <p className="spec-label">Pattern</p>
                <p className="spec-value">Printed</p>
              </li>
              <li className="product-spec-item">
                <p className="spec-label">Fit</p>
                <p className="spec-value">Regular-fit</p>
              </li>
            </ul>
            <ul className="product-specs">
              <li className="product-spec-item">
                <p className="spec-label">Neck</p>
                <p className="spec-value">Round Neck</p>
              </li>
              <li className="product-spec-item">
                <p className="spec-label">Sleeve</p>
                <p className="spec-value">Half-sleeves</p>
              </li>
              <li className="product-spec-item">
                <p className="spec-label">Style</p>
                <p className="spec-value">Casual Wear</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProductDescription;
