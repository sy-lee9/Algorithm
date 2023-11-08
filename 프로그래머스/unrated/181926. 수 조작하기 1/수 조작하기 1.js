function solution(n, control) {
    var answer = n;
    
    //control을 배열로 변환
    let arr = control.split("");
    //배열의 크기만큼 for문 돌기
    for(let i=0; i<arr.length; i++){
        //배열의 값이 w면
        if(arr[i] === "w"){
            //n+1
            answer += 1;
        }
        //배열의 값이 s면
         if(arr[i] === "s"){
            //n-1
            answer -= 1;
        }
        //배열의 값이 d면
         if(arr[i] === "d"){
            //n+10
            answer += 10;
        }
        //배열의 값이 a면
         if(arr[i] === "a"){
            //n-10
            answer -= 10;
        }
    //for문 끝        
    }
    
    
    return answer;
}