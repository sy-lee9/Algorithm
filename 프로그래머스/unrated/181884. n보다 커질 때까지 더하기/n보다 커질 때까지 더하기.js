function solution(numbers, n) {
    var answer = 0;
    
    //numbers의 크기만큼 for문 돌기
    for(let i=0; i<numbers.length; i++){
        //answer의 값이 n보다 크면 
        if(answer > n){
            //return answer;
            return answer;
        //아니면
        }else {
            //answer에 배열의 값 더하기
            answer += numbers[i];
        }
    //for문 끝!        
    }
    
    return answer;
}