function solution(n, k) {
    var answer = [];
    
    //n만큼 for문 돌리기
    for(let i=1; i<=n; i++){
        //k로 나눴을때 나머지가 0이면
        if(i%k == 0){
            //answer에 저장
            answer.push(i);
        }
    //for문 끝        
    }
    
    return answer;
}