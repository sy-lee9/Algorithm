function solution(str_list, ex) {
    var answer = '';
    
    //배열의 크기만큼 for문 돌기
    for(let i=0; i<str_list.length; i++){
        //배열의 값을 가져와 ex를 포함하지 않으면
        if(str_list[i].indexOf(ex) == -1){
            //answer에 저장
            answer += str_list[i];
        }
    //for문 끝        
    }
    
    return answer;
}