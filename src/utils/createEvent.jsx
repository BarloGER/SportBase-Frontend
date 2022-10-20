import axios from "axios";
export const createEvent = async (formData) => {
  try {
    const resp = await axios.post(`${process.env.REACT_APP_FP_API}/event`, {
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(resp);
  } catch (error) {
    console.log(error.response);
  }
};

// export const createEvent = async (formData) => {
//   try {
//     const res = await fetch(
//       "https://sportbasebackend-pwpe.onrender.com/event",
//       {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       }
//     );
//     if (!res.ok) throw new Error("Something went wrong");
//     const post = await res.json();
//     console.log(post);
//     return { post };
//   } catch (error) {
//     return { error };
//   }
// };
