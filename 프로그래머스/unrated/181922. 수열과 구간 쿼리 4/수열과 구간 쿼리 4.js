function solution(arr, queries) {
    var answer = [];
    
    //queries의 1차원 크기만큼 for문 돌기 
    for(let i=0; i<queries.length; i++){
        //s부터 e까지 for문 돌기
        for(let j=queries[i][0]; j<=queries[i][1]; j++){
            //i가 k의 배수이면 arr[i]에 1 더하기
            let num = queries[i][2];
            if(j%num == 0){
                
                arr[j] += 1;
            }
        //for문 끝            
        }
    //for문 끝        
    }
    
    answer = [...arr];
    
    return answer;
}