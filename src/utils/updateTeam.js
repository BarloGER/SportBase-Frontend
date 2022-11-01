import axios from "axios";
export const updateTeam = async (formData) => {
  console.log(formData);
  try {
    const { data, error } = await axios.put(`${process.env.REACT_APP_FP_API}/team/${formData._id}`, {
      team: formData.team,
      sport: formData.sport,
      memberCount: formData.memberCount,
      member: formData.member,
      trainer: formData.trainer,
      logoUrl: formData.logoUrl
    });
    return { data, error };
  } catch (error) {
    console.log(error.response.data);

    return error;
  }
};