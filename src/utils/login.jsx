import axios from "axios";

export const login = async (formSubmission) => {
  try {
    const post = await axios.post(
      `${process.env.REACT_APP_BLOG_API}/user/login`,
      {
        email: formSubmission.email,
        password: formSubmission.password,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    console.log(post);
  } catch (error) {
    console.log(error.response);

    return error;
  }
};
