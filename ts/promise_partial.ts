import _ from 'lodash-es';

// 세 개의 인자를 받는 함수
function greet(greeting, name, punctuation) {
    return `${greeting} ${name}${punctuation}`;
}

// _.partial을 이용하여 일부 인자를 미리 설정
const partialGreet = _.partial(greet, _, 'John', _);

// 비동기로 인자를 반환하는 함수들 (랜덤 시간에 완료)
function getGreeting() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Greeting resolved");
            resolve('Hello');
        }, 1000); // 랜덤 시간에 "Hello" 반환
    });
}

function getPunctuation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Punctuation resolved");
            resolve('!');
        }, 200); // 랜덤 시간에 "!" 반환
    });
}

// Promise.all을 사용하여 모든 비동기 함수가 완료된 후 처리
Promise.all([getGreeting(), getPunctuation()])
    .then(([greeting, punctuation]) => {
        // 모든 비동기 함수가 완료되었을 때 실행
        const result = partialGreet(greeting, punctuation);
        console.log(result); // Output: 'Hello John!'
    })
    .catch((error) => {
        console.error('Error:', error);
    });
