function solution(arr) {
    var answer = 0;
    
    //배열의 크기만큼 for문 돌기
    for(let i=0; i<arr.length; i++){
        //배열의 크기만큼 for문 돌기
        for(let j=0; j<arr.length; j++){
            //arr[i][j] == arr[j][i]이면
            if(arr[i][j] != arr[j][i]){
                //answer = 1 & break
                return 0;
            }
        //for문 끝
        }
    //for문 끝
    }
    
    return 1;
}