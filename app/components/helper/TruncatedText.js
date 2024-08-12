"use client";
import React, { useState } from "react";

function TruncatedText({ text }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = text.split(" ");

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  if (words.length <= 100) {
    return (
      <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: text }} />
    );
  }

  const truncatedText = words.slice(0, 100).join(" ") + "...";

  return (
    <div>
      <p
        className="text-gray-700"
        dangerouslySetInnerHTML={{ __html: isExpanded ? text : truncatedText }}
      />
      <button
        onClick={toggleExpansion}
        className="text-blue-500 hover:underline"
      >
        {isExpanded ? "See Less" : "(আরও...)"}
      </button>
    </div>
  );
}

export default TruncatedText;
