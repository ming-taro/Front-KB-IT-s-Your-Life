import fs from 'node:fs';
import readline from 'node:readline';

const writePath = 'movie.txt';

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '보고 싶은 영화 입력 >> '
});

reader.prompt(); // 프롬프트 설정
reader.on("line", (movie) => {
    fs.writeFileSync(writePath, movie, { encoding: 'utf8' }); // 파일 쓰기
    reader.close(); // 입력 후 반드시 close
});