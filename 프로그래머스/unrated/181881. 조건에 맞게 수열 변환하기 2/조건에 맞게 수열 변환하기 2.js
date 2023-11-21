function solution(arr) {
    var answer = 0;
    
    //연산 전 배열을 저장할 변수
    let copyArr = arr.slice();
    //arr 배열 연산
    arr = arrX(arr);  
    console.log(copyArr);
    console.log(arr);
    
    //두 배열을 비교해서 모든 값이 같을 경우 answer 리턴
    //아닐 경우 재연산 
    while(!eq(arr,copyArr)){
        answer++;
        copyArr = arr.slice();
        arr = arrX(arr);  
    console.log(answer);
    console.log(copyArr);
    console.log(arr);
    }    
    
    return answer;
}

function arrX(arr){
    return arr.map((e,_) => e >= 50 && e%2 === 0 ? e/2 : e < 50 && e%2 !== 0 ? e*2+1 : e);
}

function eq(arr,copyArr){
    return arr.length === copyArr.length && arr.every((e,i) => e === copyArr[i]);
}