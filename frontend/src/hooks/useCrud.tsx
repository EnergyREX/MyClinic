import { useEffect, useState } from "react";

// This function is made to collect information from the server.
export const useCrud = () =>{

  const href = window.location.href // Based on the page, get the url.

  const handleCreation = (event) => {
    event.preventDefault();

    // Obtains from the form the all the info to be sent
    const formData = new FormData(event.target)
    let data = Object.fromEntries(formData.entries());

    fetch(`${href}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => console.log("Respuesta:", data))
    .catch(error => console.log("Error:", error))
  }

  return {
    href,
    handleCreation,
  }

} 