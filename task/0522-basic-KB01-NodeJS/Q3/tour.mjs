import fs from 'node:fs';
import readline from 'node:readline';

const writePath = 'tour.txt';

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '가고 싶은 여행지 입력 >> '
});

reader.prompt(); // 프롬프트 설정
reader.on("line", (tour) => {
    fs.writeFileSync(writePath, tour, { encoding: 'utf8' }); // 파일 쓰기
    reader.close(); // 입력 후 반드시 close
});