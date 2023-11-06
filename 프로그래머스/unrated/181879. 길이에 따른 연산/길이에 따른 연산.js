function solution(num_list) {
    var answer = 0;
    
    // list의 길이가 10 이하이면
    if (num_list.length <= 10) {
        answer = 1;
        //list의 크기만큼 for문 돌리기
        for(var i=0; i<num_list.length; i++){
            // 배열의 값을 하나씩 가져와서 answer에 곱하기
            answer *= num_list[i];
        //for문 끝        
        }
    }
    //list이 길이가 11 이상이면
    if(num_list.length >= 11){
        //list의 크기만큼 for문 돌리기
        for(var i=0; i<num_list.length; i++){
            //배열의 값을 하나씩 가져와서 answer에 더하기
            answer += num_list[i];
        //for문 끝     
        }   
    }
    
    return answer;
}