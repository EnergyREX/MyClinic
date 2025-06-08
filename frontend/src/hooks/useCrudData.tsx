// This custom hook function is to ask about the data to the server.
// If credentials are correct, it will collect successfully all data, else
// will ask the user to login again.

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useCrudData() {
  // States
  const [info, setInfo] = useState('');
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  // React Route useNavigate.
  const navigate = useNavigate();

  // Gets the API URL and Pathname.
  const apiURL = import.meta.env.PUBLIC_BACKEND_URL;
  const pathname = window.location.pathname;

  // Forms URL based on .env URL.
  const getInfoURL = `${apiURL}/api${pathname}/info`;
  const getDataURL = `${apiURL}/api${pathname}`;
  const getColumnsURL = `${apiURL}/api${pathname}/columns`;

  // Function getInfo.
  function getInfo(url: string) {
    return fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: getHeaders(),
    })
      .then(res => res.json())
      .then(setInfo);
  }

  // Function getColumns
  function getColumns(url: string) {
    return fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: getHeaders(),
    })
      .then(res => {
        if (res.status === 401) {
          navigate('/login', { replace: true });
          return [];
        }
        return res.json();
      })
      .then(setColumns);
  }

  // Function getData
  function getData(url: string) {
    return fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: getHeaders(),
    })
      .then(res => {
        if (res.status === 401) {
          navigate('/login', { replace: true });
          return [];
        }
        return res.json();
      })
      .then(setData);
  }

  // Function to reload an set again the data.
  async function reloadData() {
    setIsLoadingData(true)
    try {
      await Promise.all([
      getData(getDataURL)
    ]);
    } finally {
      setIsLoadingData(false)
    }

  }

  // Function getHeaders (from table)
  function getHeaders() {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };
  }

  // Function to get all data
  async function fetchData() {
    try {
      await Promise.all([
        getInfo(getInfoURL),
        getData(getDataURL),
        getColumns(getColumnsURL),
      ]);
    } finally {
      setIsLoadingData(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []); // Only executes one time.

  return {
    info, getInfoURL,
    data, setData, getDataURL, reloadData,
    columns, getColumnsURL,
    isLoadingData,
  };
}
