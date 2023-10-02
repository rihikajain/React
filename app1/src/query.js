import data from "./companydata.js";

// const subjects = Object.keys(data).map((program) => ({
//     Program: program,
//     Subjects: data[program].Subjects,
//   }));
//   console.log(subjects);


// const subjects = Object.keys(data).map((program) => {
//     const programs = data[program];
//     const value = Object.keys(programs).map((indices) => {
//       console.log(indices);
//     });
//   });


// const subjects = Object.keys(data).map((program) => {
//     console.log(program);
// });

const Faculty = Object.keys(data).map((program) => ({
    Program: program,
    Faculty: data[program].Faculty,
  }));
  console.log(Faculty);