import axios from "axios";
export const getUser = async (token) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_FP_API}/user/checkToken`,
      {
        headers: { Authorization: token },
      }
    );
    return { data };
  } catch (error) {
    return { error };
  }
};
