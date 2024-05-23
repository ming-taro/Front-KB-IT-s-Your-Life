// router 기반으로 코드를 모듈화하는 방법

const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const bcrypt = require("bcrypt");

router.get('/get_page', (req, res) => {
    res.status(200).render('get_page');
});

// express-async-handler 기반으로 비동기 처리하는 방법
const registerMember = asyncHandler(async (req, res) => {
    console.log(req);
    console.log('req.query : ' + req.query);
    let member = req.query;

    // password 암호화 + await 암호화 방법
    const hashedPassword = await bcrypt.hash(member.pw, 10);
    member.pw = hashedPassword;
    console.log(member);
    res.render('result.ejs', { member }); //  정석은 {member:member}이지만 ES6부터 생략 가능

    res.json(member);
});

router.route('/get_result').get(registerMember);

module.exports = router;