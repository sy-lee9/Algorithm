function solution(num_list, n) {
    var answer = [];
    
    //num_list의 크기만큼 n간격으로 for문 돌리기
    for(let i=0; i<num_list.length; i+=n){
        //배열의 값을 answer에 담기
        answer.push(num_list[i]);
    //for문 끝        
    }
    
    return answer;
}