function solution(arr, k) {
    var answer = [arr.length];
    
    //k가 짝수이면
    if(k%2 == 0){
        //배열의 크기만큼 for문 돌기
        for(let i=0; i<arr.length; i++){
            //answer에 arr[i]+k 저장
            answer[i] = arr[i]+k;
        }
    //아니면
    }else {
        //배열의 크기만큼 for문 돌기
        for(let i=0; i<arr.length; i++){
            //answer에 arr[i]*k 저장
            answer[i] = arr[i]*k;
        }        
    }
    
    return answer;
}