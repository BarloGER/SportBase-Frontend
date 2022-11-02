import axios from "axios";
export const createTeam = async (data) => {
  try {
    const post = await axios.post(`${process.env.REACT_APP_FP_API}/team`, {
      team: data.team,
      sport: data.sport,
      memberCount: data.memberCount,
      member: data.member,
      trainer: data.trainer,
      logoUrl: data.logoUrl
    });
    console.log(post);
  } catch (error) {
    console.log(error.response);

    return error;
  }
};