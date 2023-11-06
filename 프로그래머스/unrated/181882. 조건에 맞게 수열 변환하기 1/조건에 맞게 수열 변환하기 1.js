function solution(arr) {
    var answer = [arr.length-1];
    
    //arr의 크기만큼 for문 돌리기
    for(var i=0; i<arr.length; i++){
        //값을 하나씩 가져와서 50보다 크거나 같은 찍수이면
        if(arr[i] >= 50 && arr[i]%2 == 0){
            //2로 나눠서 answer[i]에 넣기
            answer[i] = arr[i]/2;
        }else if(arr[i] < 50 && arr[i]%2 == 1){ //50보다 작은 홀수면
            //2를 곱해서 answer[i]에 넣기
            answer[i] = arr[i]*2;
        }else {
             answer[i] = arr[i];
        }
        
        
    //for문 끝        
    }
    
    return answer;
}