function solution(board, k) {
    var answer = 0;
    
    //배열의 크기만큼 for문 돌기
    for(let i=0; i<board.length; i++){
        //배열 안의 배열의 크기만큼 for문 돌기
        for(let j=0; j<board[i].length; j++){
            //배열의 값을 하나씩 가져와 k보다 작거나 같으면
            let sum = i+j;
            if(sum <= k){
                //answer에 더하기
                answer += board[i][j];
            }
        //for문 끝
        }
    //for문 끝        
    }
    
    return answer;
}