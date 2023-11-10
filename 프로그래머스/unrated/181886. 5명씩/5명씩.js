function solution(names) {
    var answer = [];
    
    //배열의 크기만큼 5씩 커지는 for문 돌기
    for(let i=0; i<names.length; i+=5){
        //해당 값을 answer에 추가
        answer.push(names[i]);
    //for문 끝        
    }
    
    return answer;
}