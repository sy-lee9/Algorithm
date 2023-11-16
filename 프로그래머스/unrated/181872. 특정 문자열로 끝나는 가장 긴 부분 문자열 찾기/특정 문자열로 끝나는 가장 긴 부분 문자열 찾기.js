function solution(myString, pat) {
    var answer = '';
    
    //myString의 크기부터 0까지 for문 돌기
    for(let i=myString.length; i>0; i--){
        //myString을 뒤에서 부터 i만큼 잘라낸 문자열 가져오기
        let str = myString.substring(0,i);
        
        //해당 문자열이 pat으로 끝나면
        if(str.endsWith(pat)){
            //answer에 저장 후 break
            return str;
        }
    //for문 끝        
    }
    
    return answer;
}