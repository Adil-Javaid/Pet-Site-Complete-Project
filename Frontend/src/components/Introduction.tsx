import React, { useEffect, useState } from "react";

const Introduction: React.FC = () => {
  const [paragraph, setParagraph] = useState<string>("");

  useEffect(() => {
    const fetchParagraph = async () => {
      try {
        const response = await fetch("/api/generate-introduction");
        const data = await response.json();
        setParagraph(data.paragraph);
      } catch (error) {
        console.error("Error fetching introduction:", error);
      }
    };

    fetchParagraph();
  }, []);

  return (
    <div className="Introduction">
      <p>{paragraph}</p>
    </div>
  );
};

export default Introduction;
