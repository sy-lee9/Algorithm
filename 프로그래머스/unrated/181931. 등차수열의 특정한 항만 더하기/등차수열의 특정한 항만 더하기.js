function solution(a, d, included) {
    var answer = 0;
    
    //배열의 크기만큼 for문 돌기
    for(let i=0; i<included.length; i++){
        //배열의 값을 가져와서 true이면 
        if(included[i]){
            //answer += a+(d*i);
            answer += a+(d*i);
        }
    //for문 끝        
    }
    
    return answer;
}