function solution(num_list) {
    var answer = 0;
    
    //홀수 합을 담을 변수 선언
    let sum1 = 0;
    //짝수 합을 담을 변수 선언
    let sum2 = 0;
    
    //배열의 크기만큼 for문 돌기
    for(let i=0; i<num_list.length; i++){
        //짝수일 때 + sum2
        if(i%2 == 0){
            sum2 += num_list[i];
        }else {
            //홀수일 때 + sum1
            sum1 += num_list[i];
        }
    //for문 끝        
    }
    
    //두 값을 비교하여 큰 값을 answer에 저장
    answer = Math.max(sum1, sum2);
    
    
    return answer;
}