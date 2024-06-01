// 1. 콜백 함수를 사용해 비동기 처리하기
// const fs = require("fs");

// let files = fs.readdir("./", (err, files) => {
//     if (err) {
//         console.error(err);
//     }
//     console.log(files);
// });
// console.log("Code is done.");



// 2. 프로미스를 사용해 동기 처리하기
const fs = require("fs").promises;

fs.readdir("./")
    .then((result) => console.log(result))
    .then(() => console.log("Code is done."));