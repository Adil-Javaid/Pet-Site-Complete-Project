import axios from "axios";
import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import "./petStoreList.css";

interface PetStore {
  _id: string;
  name: string;
  availableItems: string[];
  siteLink: string;
  location: string;
  email: string;
  whatsapp: string;
}

const PetStoreList = () => {
  const [petStoreData, setPetStoreData] = useState<PetStore[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://petsiteprojectcomplete-i0cstd47.b4a.run/api/pet-store");
        setPetStoreData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const items = document.querySelectorAll(".store-card");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, [petStoreData]);

  return (
    <>
        <Heading heading="Pet Store List" />
        <div className="store-list">
          {petStoreData.map((storeData) => (
            <div key={storeData._id} className="store-card hidden">
              <h2>{storeData.name}</h2>
              <p>
                <strong>Available Items:</strong>{" "}
                {storeData.availableItems.join(", ")}
              </p>
              <p>
                <strong>Location:</strong> {storeData.location}
              </p>
              <p>
                <strong>Email:</strong> {storeData.email}
              </p>
              <p>
                <strong>WhatsApp:</strong> {storeData.whatsapp}
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href={storeData.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {storeData.siteLink}
                </a>
              </p>
            </div>
          ))}
        </div>
    </>
  );
};

export default PetStoreList;
