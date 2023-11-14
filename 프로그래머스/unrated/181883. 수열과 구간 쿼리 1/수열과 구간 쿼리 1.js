function solution(arr, queries) {
    var answer = [];
    
    //queries의 크기 만큼 for문 돌기
    for(let i=0; i<queries.length; i++){
        //queries[i][0]부터 queries[i][1]까지 for문 돌기
        for(let j=queries[i][0]; j<=queries[i][1]; j++){
            //arr[j]++
            arr[j]++;
        //for문 끝            
        }
    //for문 끝        
    }
    
    answer = [...arr];
    
    return answer;
}