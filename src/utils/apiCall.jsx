import axios from "axios";

export const API_URL = "https://explore-odisha-backend.onrender.com";
// export const API_URL = "http://localhost:5001";

export const getGoogleSignUp = async (accessToken) => {
  try {
    const user = await axios
      .get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data);

    if (user?.sub) {
      const data = {
        name: user.name,
        email: user.email,
        emailVerified: user.email_verified,
        image: user.picture,
      };
      const result = await axios.post(`${API_URL}/auth/google-signup`, data);

      console.log(result);
      return result?.data;
    }
  } catch (error) {
    const err = error?.response?.data || error?.response;
    console.log(error);
    return err;
  }
};

export const emailSignup = async (data) => {
  try {
    const result = await axios.post(`${API_URL}/auth/register`, data);
    return result?.data;
  } catch (error) {
    const err = error?.response?.data || error?.response;
    console.log(error);
    return err;
  }
};

export const getGoogleSignin = async (token) => {
  try {
    const user = await axios
      .get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
    console.log(user);
    if (user?.sub) {
      console.log("jllsdl");
      const data = {
        email: user.email,
      };
      const result = await axios.post(`${API_URL}/auth/login`, data);

      console.log(result);
      return result?.data;
    }
  } catch (error) {
    const err = error?.response?.data || error?.response;
    console.log(error);
    return err;
  }
};
export const emailLogin = async (data) => {
  try {
    const result = await axios.post(`${API_URL}/auth/login`, data);
    console.log(result);
    return result?.data;
  } catch (error) {
    const err = error?.response?.data || error?.response;
    console.log(error);
    return err;
  }
};
export const getSinglePost = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/posts/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    const err = error?.response?.data || error?.response;
    return err;
  }
};
export const getPostComments = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/posts/comments/${id}`);
    return data?.data;
  } catch (error) {
    console.log(error);
    const err = error?.response?.data || error?.response;
    return err;
  }
};

export const postComments = async (id, token, data) => {
  try {
    const result = await axios.post(`${API_URL}/posts/comment/${id}`,{desc:data}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      
    });

    return result?.data;
  } catch (error) {
    console.log(error);
    const err = error?.response?.data || error?.response;
    return err;
  }
};
export const deletePostComment = async (id, token, postId) => {
  try {
    const result = await axios.delete(
      `${API_URL}/posts/comment/${id}/${postId}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return result?.data;
  } catch (error) {
    console.log(error);
    const err = error?.response?.data || error?.response;
    return err;
  }
};
export const getWriterInfo = async (id) => {
  try {
    const {data} = await axios.get(`${API_URL}/users/get-user/${id}`);
    return data?.data;
  } catch (error) {
    console.log(error);
    const err = error?.response?.data || error?.response;
    return err;
  }
};
export const followWriter = async (id, token) => {
  try {
    const result = await axios.post(
      `${API_URL}/users/follower/${id}`,
      null,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return result?.data;
  } catch (error) {
    console.log(error);
    const err = error?.response?.data || error?.response;
    return err;
  }
};
