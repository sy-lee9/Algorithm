function solution(arr, idx) {
    var answer = -1;
    
    //i=idx부터 배열의 크기만큼 for문 돌기
    for(let i=idx; i<arr.length; i++){
        //배열의 값이 1이면
        if(arr[i] == 1){
            //answer = i
            answer = i;
            break;
        }
    //for문 끝        
    }
    
    return answer;
}