function solution(my_string, index_list) {
    var answer = '';
    
    //배열의 크기만큼 for문 돌기
    for(let i=0; i<index_list.length; i++){
        //배열의 값과 같은 my_string index의 값 answer에 저장
        answer += my_string.charAt(index_list[i]);
    //for문 끝        
    }
    
    return answer;
}