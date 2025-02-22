const API_URL = "http://localhost:5204"; // Update with your actual backend URL



export async function getCertificatesFromDb(userId) {
  try {
    const response = await fetch(`${API_URL}/api/certificates/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("CPE Certificates:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}