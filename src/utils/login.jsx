import axios from "axios";

export const login = async (formSubmission) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_FP_API}/user/login`,
      {
        email: formSubmission.email,
        password: formSubmission.password,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    return { data };
  } catch (error) {
    console.log(error.response);

    return { error };
  }
};
