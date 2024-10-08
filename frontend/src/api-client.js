import api from './api/axiosConfig';

export const register = async (email,name,usertype,phone, password) => {
  try {
    
    const res = await api.post('/api/users/register', { email,name,usertype,phone, password },{
        headers:{
            'Content-Type':'application/json',
        },
        withCredentials: true,
    });
    if (res.status === 200) {
      return "success";
    }
  } 
  catch (error) {
    if (error.response && error.response.status === 400) {
      // Check if it's the specific "User already exists" error
      return error.response.data.message;  // This will return "User already exists"
    }
    
    // Catch-all for any other errors
    return "Some error occurred";
    
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

export const getTestimonials = async () => {
  try {
    const res = await api.get('/api/users/testimonials',{
        headers:{
            'Content-Type':'application/json',
        },
        withCredentials: true,
    });
    return res.data;
  } catch (error) {
    return error.message;
  }
}

export const enrollCourse = async (courseName,courseCat, courseDescription, coursePrice, courseDuration,selectedLoc,selectedDate) => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
  
  const courseBody = {
    courseName: courseName,
    courseCategory: courseCat,
    courseDescription: courseDescription,
    coursePrice: coursePrice,
    courseRegDate: formattedDate,
    courseEnrollDate: selectedDate,
    courseDuration: courseDuration,
    courseInstructor: 'To be assigned',
    courseStatus: 'In Progress',
    courseType: selectedLoc,
    
  }
  try {
    const res = await api.post('/api/users/enroll', courseBody,{
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

export const getAllStudents = async () => {
  try {
    const res = await api.get('/api/admin/getAllStudents',{
        headers:{
            'Content-Type':'application/json',
        },
        withCredentials: true,
    });
    return res.data;
  } catch (error) {
    return error.message;
  }
}

export const getAllCourseRequests = async () => {
  try {
    const res = await api.get('/api/admin/getAllCourseRequests',{
        headers:{
            'Content-Type':'application/json',
        },
        withCredentials: true,
    });
    return res.data;
  } catch (error) {
    return error.message;
  }
}

export const getAllStudentSupport = async () => {
  try {
    const res = await api.get('/api/admin/getAllStudentSupport',{
        headers:{
            'Content-Type':'application/json',
        },
        withCredentials: true,
    });
    return res.data;
  } catch (error) {
    return error.message;
  }
}

export const getAllEnquiries = async () => {
  try {
    const res = await api.get('/api/admin/getAllEnquiries',{
        headers:{
            'Content-Type':'application/json',
        },
        withCredentials: true,
    });
    return res.data;
  } catch (error) {
    return error.message;
  }
}

//fee payment status change
export const markPaid = async (email,courseId) => {
  try {
    const res = await api.put('/api/admin/markPaid', { email, courseId },{
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

//assign instructor to a course using user mail and course id and instructor name
export const assignInstructor = async (email,courseId,instructor) => {
  try {
    const res = await api.put('/api/admin/assignInstructor', { email, courseId, instructor },{
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

//course status change to completed
export const markCompleted = async (email,courseId) => {
  try {
    const res = await api.put('/api/admin/markCompleted', { email, courseId },{
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

//course request retrieve using mail
export const getCourseReqByMail = async (mail) => {
  try {
    const res = await api.get(`/api/users/getCourseReqByMail/${mail}`,{
        headers:{
            'Content-Type':'application/json',
        },
        withCredentials: true,
    });
    return res.data;
  } catch (error) {
    return error.message;
  }
}

//accept course request and modify fee details
export const acceptCourseReq = async (id,shortTermFee,mediumTermFee,longTermFee) => {
  try {
    const res = await api.put('/api/admin/acceptRequest', { id,fees: [shortTermFee,mediumTermFee,longTermFee] },{
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

export const rejectCourseReq = async (id,rejectReason) => {
  try {
    const res = await api.put('/api/admin/rejectRequest', { id,rejectReason },{
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