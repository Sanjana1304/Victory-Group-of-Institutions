import api from './api/axiosConfig';

export const register = async (email,name,usertype, password) => {
  try {
    const res = await api.post('/api/users/register', { email,name,usertype, password },{
        headers:{
            'Content-Type':'application/json',
        },
        withCredentials: true,
    });
    return "success";
  } catch (error) {
    return error.message;
  }
}

export const validateToken = async () => {
  try {
    const res = await api.get('/api/auth/validate-token',{
        headers:{
            'Content-Type':'application/json',
        },
        withCredentials: true,
    });
    return res.data;
  } 
  catch (error) {
    console.error("Token validation failed", error);
    return null;
  }
}


export const fetchUserData = async () => {
  try {
      const response = await api.get(`/api/users/getMe`,{
        withCredentials:"include"
      });
      if (response.status === 200) {
        return response.data;
      }
  } catch (error) {
      console.error('Error fetching user data:', error);
  }
};