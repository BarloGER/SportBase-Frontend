import axios from "axios";

export const createUser = async (formSubmission) => {
  try {
    const post = await axios.post(`http://localhost:8080/user`, {
      userName: formSubmission.userName,
      email: formSubmission.email,
      password: formSubmission.password,
      // headers: {
      //   "Content-type": "application/json; charset=UTF-8",
      // },
    });
  } catch (error) {
    console.log(error.response.data);

    return error;
  }
};
// export const createUser = async (formSubmission) => {
//   try {
//     const res = await fetch("http://localhost:8080/user", {
//       method: "POST",
//       body: JSON.stringify(formSubmission),
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
