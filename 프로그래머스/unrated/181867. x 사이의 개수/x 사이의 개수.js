function solution(myString) {
    var answer = [];
    
    //myString을 x를 기준으로 배열로 변환
    let arr = myString.split("x");
    
    //배열의 크기만큼 for문 돌기
    for(let i=0; i<arr.length; i++){
        //각각의 배열의 길이를 answer에 저장
        answer.push(arr[i].length);
    //for문 끝        
    }
    
    return answer;
}