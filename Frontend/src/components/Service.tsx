import React, { useEffect, useState } from "react";
import { fetchServices, Services } from "../Services/service";
import Heading from "./Heading";
import "./services.css";

const Service: React.FC = () => {
  const [services, setServices] = useState<Services[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getServices = async () => {
      try {
        const servicesData = await fetchServices();
        setServices(servicesData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    getServices();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Heading heading="Services" />
      <div className="main-container">
        <div className="container-service">
          {services.map((services, index) => (
            <div key={index} className="service-post">
              <h2>{services.service}</h2>
              {services.iconUrl && (
                <img src={services.iconUrl} alt={services.service} />
              )}
              <p>{services.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
