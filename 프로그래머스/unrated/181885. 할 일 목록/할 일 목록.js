function solution(todo_list, finished) {
    var answer = [];
    
    //배열의 크기만큼 for문 돌리기
    for(let i=0; i<todo_list.length; i++){
        //finished의 값을 가져와 false일 경우
        if(!finished[i]){
            //todo_list의 값을 answer에 저장
            answer.push(todo_list[i])
        }
    //for문 끝        
    }
    
    return answer;
}