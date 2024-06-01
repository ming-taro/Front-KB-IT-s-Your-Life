const fs = require("fs");

let data = fs.readFileSync("./example.txt", "utf-8");
console.log(data);

console.log("코드 끝!");

/*
[파일데이터를 먼저 읽는 이유]
'fs.readFileSync()'를 실행하면 블로킹I/O 작업이 동기적으로 진행된다.
파일을 읽는 동안 다음 코드를 실행하지 않기 때문에
파일을 모두 읽고 데이터를 출력한 후 "코드 끝!" 메세지를 출력한다.

['fs.readFile()을 실행하는 경우]
해당 작업은 논블로킹IO로 파일 데이터를 읽어오는 작업이 비동기적으로 처리된다.
파일을 읽는 동안 다음 작업을 진행하기 때문에
"코드 끝!" 메세지가 먼저 출력된 후 파일 데이터를 출력하게 된다.
*/