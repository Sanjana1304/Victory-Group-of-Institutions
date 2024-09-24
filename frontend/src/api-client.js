import api from './api/axiosConfig';

export const register = async (email,name,usertype,phone, password) => {
  try {
    const res = await api.post('/api/users/register', { email,name,usertype,phone, password },{
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

export const contactUs = async (name,email,phone,message) => {
  try {
    const res = await api.post('/api/users/contact', { name,email,phone,message },{
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

export const craftCourse = async (name,email,phone,courseTitle, courseCategory, courseDescription) => {
  try {
    const res = await api.post('/api/users/craft', { name,email,phone,courseTitle, courseCategory, courseDescription },{
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

export const support = async (email,message) => {
  try {
    const res = await api.post('/api/users/support', { email,message },{
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

export const addFeedback = async (courseId, feedback) => {
  try {
    const res = await api.put('/api/users/feedback', { courseId, feedback },{
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

export const enrollCourse = async (courseName, courseDescription, coursePrice, courseRegDate, courseDuration,coursePhoto,courseInstructor) => {
  try {
    const res = await api.post('/api/users/enroll', { courseName, courseDescription, coursePrice, courseRegDate, courseDuration,coursePhoto,courseInstructor },{
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