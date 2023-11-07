function solution(num_list) {
    var answer = 0;
    
    //홀수, 짝수 값을 담을 변수 선언
    let single = 0;
    let couple = 0;
    
    //배열의 크기 만큼 for문 돌리기
    for(let i=0; i<num_list.length; i++){
        //배열의 값을 가져와 2로 나누었을 때 나머지가 0이면
        if(num_list[i]%2 == 0){
            //짝수값에 10 곱하기
            couple *= 10;
            //짝수값에 더하기
            couple += num_list[i];
        //0이 아니면                     
        }else {
            //홀수값에 10 곱하기               
            single *= 10;
            //홀수값에 더하기
            single += num_list[i];            
        }
    //for문 끝        
    }
    
    //홀수갑 + 짝수값
    answer = single+couple;
    
    return answer;
}