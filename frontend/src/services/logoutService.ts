import { replace } from "react-router-dom";


export default function logout() {
  const apiURL = import.meta.env.PUBLIC_BACKEND_URL;

  return fetch(`${apiURL}/api/auth/logout`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
  })
  .then(res => {
    if (res.status === 200) {
      localStorage.removeItem('token')
      localStorage.removeItem('user_id')
      localStorage.removeItem('role_id')
    }
  })
}