function solution(num_list) {
    var answer = 0;
    
    //배열의 값을 하나씩 꺼내서
    num_list.forEach((num)=>{
        //배열의 값이 1보다 클 경우 while문 돌기
        while(num > 1){
            //짝수이면
            if(num%2 == 0){
                //num_list[i]/2
                num = num/2
                //answer++
                answer++
            }
            //num_list[i]가 홀수이면
            else{
                //(num_list[i]-1)/2
                num = (num-1)/2
                //answer++
                answer++
            }
        }
    })
    
    return answer;
}