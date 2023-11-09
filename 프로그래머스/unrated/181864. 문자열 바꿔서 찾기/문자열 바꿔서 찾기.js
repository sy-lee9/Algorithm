function solution(myString, pat) {
    var answer = 0;
    
    //myString을 배열로 변환
    let arr = myString.split("");
    //배열의 크기만큼 for문 돌기
    for(let i=0; i<arr.length; i++){
        //배열의 값이 "A"이면
        if(arr[i] === "A"){
            //"B"로 변경
            arr[i] = "B";
        //아니면            
        }else {
            //"A"로 변경
            arr[i] = "A";
        }
    //for문 끝        
    }
    
    //배열을 문자열로 변환
    myString = arr.join("");
    //pat을 포함하면
    if(myString.includes(pat)){
        //1
        answer = 1;
    //아니면        
    }else {
        //0
        answer = 0;
    }
    
    return answer;
}