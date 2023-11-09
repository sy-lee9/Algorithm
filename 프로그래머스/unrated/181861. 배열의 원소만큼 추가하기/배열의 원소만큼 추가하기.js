function solution(arr) {
    var answer = [];
    
    //배열의 크기만큼 for문 돌기
    for(let i=0; i<arr.length; i++){
        //배열의 값만큼 for문 돌기
        for(let k=0; k<arr[i]; k++){
            //배열의 값 answer에 담기
            answer.push(arr[i]);
        //for문 끝            
        }
    //for문 끝        
    }
    
    return answer;
}