function solution(my_string, indices) {
    var answer = '';
    
    //my_string을 배열로 변환
    let arr = my_string.split("");
    
    //my_string 배열의 크기만큼 for문 돌기
    for(let i=0; i<arr.length; i++){
        //indices에 해당되는 값인지 확인할 변수 선언
        let chk = true;
        //indices 배열의 크기만큼 for문 돌기        
        for(let j=0; j<indices.length; j++){
            //배열의 값 중 i값이 있을 경우 false로 변경
            if(i == indices[j]){
                chk = false;
            }
        }
        //for문 끝
        //확인 값이 true일 경우 해당 값을 answer에 담기
        if(chk == true){
            answer += arr[i];            
        }
    //for문 끝        
    }
    
    return answer;
}