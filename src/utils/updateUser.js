import axios from "axios";

export const updateUser = async (formData) => {
  try {
    const { data, error } = await axios.put(`${process.env.REACT_APP_FP_API}/user/${formData._id}`, {
      firstname: formData.firstname,
      lastname: formData.lastname,
      username: formData.username,
      email: formData.email,
      terms: formData.terms,
      height: formData.height,
      weight: formData.weight,
      age: formData.age,
      team: formData.team,
      position: formData.position,
      inactive: formData.inactive,
      aboutMe: formData.aboutMe,
      userImage: formData.userImage,
    });
    return { data, error };
  } catch (error) {
    console.log(error.response.data);

    return error;
  }
};