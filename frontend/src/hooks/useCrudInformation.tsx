import { useEffect, useState } from "react";

// This function is made to collect information from the server.
export const useCrudInformation = () =>{

  const href = window.location.href // Based on the page, get the url.
  const infoUrl = `${href}/api/info` // URL to make the petition.
  const [info, setInfo] = useState("") // State to save collected data.

  // The hook is executed when is loaded just one time.
  useEffect(() => {
    console.log(infoUrl)
    fetch(infoUrl)
    .then(response => response.json())
    .then(data => setInfo(data))
  }, [])

  return {
    infoUrl,
    info
  }

} 