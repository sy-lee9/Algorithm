function solution(n) {
    var answer = [];
    
    answer.push(n);
    
    //n = 1이 될 때까지 while문 반복
    while(n != 1){
        //짝수이면
        if(n%2 == 0){
            //n/2
            n /= 2;
        //홀수이면            
        }else {
            //3*x+1
            n = 3*n+1;
        }
        //n의 값 answer에 추가
        answer.push(n);
    //while문 끝        
    }
    
    return answer;
}