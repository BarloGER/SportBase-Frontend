import axios from "axios";

export const createUser = async (formSubmission) => {
  try {
    const post = await axios.post(`${process.env.REACT_APP_BLOG_API}/user`, {
      firstname: formSubmission.firstname,
      lastname: formSubmission.lastname,
      username: formSubmission.userName,
      email: formSubmission.email,
      password: formSubmission.password,
      // headers: {
      //   "Content-type": "application/json; charset=UTF-8",
      // },
    });
    console.log(post);
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
