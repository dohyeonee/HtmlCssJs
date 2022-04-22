// 설치한 express 모듈 불러오기
const express = require('express');

// 설치한 socket.io 모듈 불러오기
const socket = require('socket.io');

// Node.js 기본 내장 모듈 불러오기
const http = require('http');

// express 객체 생성
const app = express();

// express http 서버 생성
const server = http.createServer(app);

// 생성된 서버를 socket.io에 바인딩
const io = socket(server);

app.get('/', function(request, respond){
    console.log('유저가 들어옴');
    respond.send('Welcome to my Server');
})

app.get('/hi', function(request, respond) {
    console.log('/hi 쪽으로 유저가 들어옴');
    respond.send('who are u 😊?');
})

//서버를 8080 포트로  listen
server.listen(8080, function() {
    console.log('서버 실행 중..');
});