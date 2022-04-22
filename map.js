const data = [
    {
        이름: 'Kim',
        중간고사점수: 55,
        기말고사점수: 65,
    },
    {
        이름: 'Lee',
        중간고사점수: 60,
        기말고사점수: 70,
    },
];
/**
 자바로 표현한다면 :
 class Data {
     String 이름;
     int 중간고사점수;
     int 기말고사점수;
 }

    Data[] datas = {
        new Data(){
            "Kim",
            55,
            65
        },
        new Data(){
            "lee",
            60,
            70
        }
    };
 */

/*
0. 자바스크립트 특징중에
1. 콜백함수를 애용 => 호출시점이 지연되어 실행되는 함수
 콜백함수는 운영체제로부터 통보를 받은 런타임이 실행합니다.
 비동기(=호출시점에 실행되는 것이 아니고 나중에 한가할 때 호출됨)

2. 익명함수 => 함수이름이 없습니다. 함수이름 대신에 function() 정의되는 경우
자바스크립트 비동기 실행 부분에 익명함수를 사용합니다.
한번만 쓰고 그 자리에서 실행 종료하므로 간단하게 관리하기 위해서 입니다.

3. 화살표 함수를 많이 사용 익명함수의 간이판 : (매개변수, =정의역) => {} = 함수의 결과 값
*/



    data.forEach( (element) =>{
        console.log([element.이름, element.중간고사점수, element.기말고사점수]);
    });

    data.map(function(element){
        console.log([element.이름, element.중간고사점수, element.기말고사점수]);
    });


const averageScore = data.map(function(element){
    return {
        이름: element.이름,
        평균점수: (element.중간고사점수 +element.기말고사점수) /2,
    };
});

console.log(averageScore);