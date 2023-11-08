function solution(n) {
    var answer = 0;
    
    //n이 홀수이면
    if(n%2 != 0){
        //n이 0보다 클 경우 while문 돌리기
        while(n>0){
            //answer에 n의 값 더하기
            answer += n;
            //n-2
            n -= 2;
        }
        
    }
    //n이 짝수이면
    if(n%2 == 0){
        //n이 0보다 클 경우 while문 돌리기돌리기
        while(n>0){
            //answer에 n의 제곱의 값 더하기
            answer += n*n;
            //n-2
            n -= 2;
        }
    }   
    
    return answer;
}