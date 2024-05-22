const fs = require('fs');
const readPath = 'me.txt';
const writePath = 'you.txt';
const writeText =
`***********************

나는 별이야
제일 빛나

***********************`

if (fs.existsSync(readPath)) { // 파일의 존재 여부 확인
    const readData = fs.readFileSync(readPath, { encoding: 'utf8' }); // 파일 읽기
    console.log("[me.txt]");
    console.log(readData + '\n');

    fs.writeFileSync(writePath, writeText, { encoding: 'utf8' }); // 파일 쓰기
    console.log("[you.txt]");
    console.log(fs.readFileSync(writePath, { encoding: 'utf8' }));
}

