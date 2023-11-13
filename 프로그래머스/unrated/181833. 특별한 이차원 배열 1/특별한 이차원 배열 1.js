function solution(n) {
    var answer = [];
    
    //n만큼 for문 돌기
    for(let i=0; i<n; i++){
        //answer 안에 담을 배열 선언
        let arr = [];
        //n만큼 for문 돌기
        for(let j=0; j<n; j++){
            //index i에는 1 넣기
            if(i == j){
                arr[j] = 1;
            //나머지는 0 넣기
            }else {
                arr[j] = 0;                
            }
        //for문 끝  
        }
        //answer에 arr 담기
        answer.push(arr);
    //for문 끝        
    }
    
    return answer;
}