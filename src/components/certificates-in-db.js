import React, { useEffect, useState } from "react";
import { getCertificatesFromDb } from "../api/get-certificates-from-db"; // Import API function

const CertificatesInDb = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    async function fetchCertificates() {
      try {
        const data = await getCertificatesFromDb("2c442884-5c3f-4034-86f8-c44cdf9529fd"); // hard-coded userId for testing
        setCertificates(data);
      } catch (error) {
        console.error("Failed to fetch CPE certificates", error);
      }
    }

    fetchCertificates();
  }, []);

  return (
    <div>
      <h2>CPE Certificates in Database:</h2>
      <ul>
        {certificates.map((cert) => (
          <li key={cert.id}>
            {cert.courseTitle} - {cert.hours} hours
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CertificatesInDb;
