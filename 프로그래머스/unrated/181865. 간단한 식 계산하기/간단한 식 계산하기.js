function solution(binomial) {
    var answer = 0;
    
    
    //공백을 기준으로 배열로 자르기
    let arr = binomial.split(" ");
    
    //배열의 값을 하나씩 가져와 연산하여 aswer에 저장
    if(arr[1] === "+"){
        answer = (+arr[0]+(+arr[2]));
    }else if(arr[1] === "-"){
        answer = arr[0]-arr[2];
    }else{
        answer = arr[0]*arr[2];
    }
    
    return answer;
}