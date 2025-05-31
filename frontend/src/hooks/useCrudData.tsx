import { useState, useEffect } from "react";

export function useCrudData() {

  // States
  const [ info, setInfo ] = useState('');
  const [ data, setData ] = useState([]);
  const [ columns, setColumns ] = useState([]) 
  const [ isLoadingData, setIsLoadingData ] = useState(true);

  // Hook variables
  const apiURL = import.meta.env.PUBLIC_BACKEND_URL;
  const pathname = window.location.pathname;
  let getInfoURL = `${apiURL}/api${pathname}/info`
  let getDataURL = `${apiURL}/api${pathname}`
  let getColumnsURL = `${apiURL}/api${pathname}/columns`


  // Function to get all info
  function getInfo (url) {
    return fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => response.json())
    .then(data => setInfo(data))
  }

  function getColumns (url) {
    return fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => response.json())
    .then(data => setColumns(data))
  }

  // Function to get all data
  function getData (url) {
    return fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => response.json())
    .then(data => setData(data))
  }

  // Async function to list all data
  async function fetchData() {
    try {
      await Promise.all([getInfo(getInfoURL), getData(getDataURL), getColumns(getColumnsURL)]);
    } finally {
      setIsLoadingData(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [isLoadingData])

  return { info, getInfoURL, 
           data, setData, getDataURL,
           columns, getColumnsURL,  
           isLoadingData,
          }
}