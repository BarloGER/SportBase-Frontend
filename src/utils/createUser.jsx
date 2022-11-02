import axios from "axios";

export const createUser = async (formSubmission) => {
  try {
    const { data } = await axios.post(`${process.env.REACT_APP_FP_API}/user`, {
      firstname: formSubmission.firstname,
      lastname: formSubmission.lastname,
      username: formSubmission.username,
      email: formSubmission.email,
      password: formSubmission.password,
      terms: formSubmission.terms,
    });
    return { data };
  } catch (error) {
    console.log(error.response.data);

    return { error };
  }
};
