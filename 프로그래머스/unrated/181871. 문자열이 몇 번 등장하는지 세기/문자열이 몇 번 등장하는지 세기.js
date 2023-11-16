function solution(myString, pat) {
    var answer = 0;
    
    //myString의 길이만큼 for문 돌기
    for(let i=0; i<myString.length; i++){
        //myString을 i부터 끝까지 자른 값 가져오기
        let str = myString.slice(i,myString.length);
        //잘라온 문자열이 pat으로 시작할 경우
        if(str.startsWith(pat)){
            //answer++
            answer++;
        }
    //for문 끝        
    }
    
    return answer;
}