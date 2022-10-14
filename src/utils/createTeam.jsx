import axios from "axios";
export const createTeam = async (formSubmission) => {
  try {
    const post = await axios.post(`http://localhost:8080/user`, {
      team: formSubmission.team,
      sport: formSubmission.sport,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(post);
  } catch (error) {
    console.log(error.response);

    return error;
  }
};
// export const createTeam = async (formData) => {
//   try {
//     const res = await fetch("https://sportbasebackend-pwpe.onrender.com/team", {
//       method: "POST",
//       body: JSON.stringify(formData),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//     if (!res.ok) throw new Error("Something went wrong");
//     const post = await res.json();
//     console.log(post);
//     return { post };
//   } catch (error) {
//     return { error };
//   }
// };
