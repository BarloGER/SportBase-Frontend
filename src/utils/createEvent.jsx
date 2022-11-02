import axios from "axios";
export const createEvent = async (data) => {
  try {
    const resp = await axios.post(`${process.env.REACT_APP_FP_API}/event`, {
      title: data.title,
      startDate: data.startDate,
      endDate: data.endDate,
      createdAt: data.createdAt,
      opponent: data.opponent,
      activePlayers: data.activePlayers,
      reservePlayers: data.reservePlayers,
      location: data.location,
      lineUp: data.lineUp
    });
  } catch (error) {
    console.log(error.response);
  }
};
