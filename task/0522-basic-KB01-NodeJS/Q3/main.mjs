import fs from 'node:fs';

const moviePath = 'movie.txt';
const tourPath = 'tour.txt';

const movie = fs.readFileSync(moviePath, { encoding: 'utf8' }); // 파일 읽기
const tour = fs.readFileSync(tourPath, { encoding: 'utf8' }); // 파일 읽기

const result = 
`=============================
보고 싶은 영화는 ${movie}이고,
가고 싶은 여행지는 ${tour}
=============================`
console.log(result);

