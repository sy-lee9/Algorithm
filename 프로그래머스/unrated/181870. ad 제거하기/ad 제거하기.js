function solution(strArr) {
    var answer = [];
    
    //배열의 크기만큼 for문 돌기
    for(let i=0; i<strArr.length; i++){
        //배열의 값 중 "ad"을 포함하고 있지 않으면
        if(strArr[i].indexOf("ad") == -1){
            //answer에 추가
            answer.push(strArr[i]);
        }
    //for문 끝        
    }
    
    return answer;
}