import React, { useState } from "react";
import "./navbar.css";
import { IonIcon } from "@ionic/react";
import { menuOutline, closeOutline } from "ionicons/icons";
import Logo from "./Logo";

interface NavbarProps {
  scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
  petListRef: React.RefObject<HTMLDivElement>;
  petStoreListRef: React.RefObject<HTMLDivElement>;
  blogRef: React.RefObject<HTMLDivElement>;
  serviceRef: React.RefObject<HTMLDivElement>;
  reviewRef: React.RefObject<HTMLDivElement>;
  aboutusRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({
  scrollToSection,
  petListRef,
  petStoreListRef,
  blogRef,
  serviceRef,
  reviewRef,
  aboutusRef,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarItems = [
    { name: "Home", ref: petListRef },
    { name: "Pet Store", ref: petStoreListRef },
    { name: "Blog", ref: blogRef },
    { name: "Services", ref: serviceRef },
    { name: "Reviews", ref: reviewRef },
    { name: "About Us", ref: aboutusRef },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Logo />
          <button className="menu-icon" onClick={toggleMenu}>
            <IonIcon icon={isMenuOpen ? closeOutline : menuOutline} />
          </button>
          <ul className={`navbar-items ${isMenuOpen ? "open" : ""}`}>
            {navbarItems.map((item, index) => (
              <li
                key={index}
                className="navbar-item"
                onClick={() => {
                  toggleMenu();
                  if (item.ref) scrollToSection(item.ref);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
