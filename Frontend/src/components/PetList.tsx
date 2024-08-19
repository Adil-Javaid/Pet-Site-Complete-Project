import React, { useEffect, useState } from "react";
import axios from "axios";
import "./petList.css";
import Heading from "./Heading";

interface Pet {
  _id: string;
  imgUrl: string;
  content: string;
  type: string;
}

const PetList: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const heading = "Categories";
  const itemsPerSlide = 3;

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get("https://petsiteprojectcomplete-i0cstd47.b4a.run/api/pets");
        setPets(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
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

    const items = document.querySelectorAll(".pet-item");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, [pets]);

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % Math.ceil(pets.length / itemsPerSlide)
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(pets.length / itemsPerSlide)) %
        Math.ceil(pets.length / itemsPerSlide)
    );
  };

  return (
    <>
      <Heading heading={heading} />
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="slider-container">
          <div className="slider">
            <div
              className="slider-wrapper"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {pets.map((pet) => (
                <div key={pet._id} className="pet-item hidden">
                  <img src={pet.imgUrl} alt="Pet" className="pet-image" />
                  <strong className="pet-type">{pet.type}</strong>
                  <p className="pet-content">{pet.content}</p>
                </div>
              ))}
            </div>
            <button className="slider-arrow left" onClick={prevSlide}>
              {"<"}
            </button>
            <button className="slider-arrow right" onClick={nextSlide}>
              {">"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PetList;
