function solution(myString, pat) {
    var answer = 0;
    
    myString = myString.toLowerCase();
    pat = pat.toLowerCase();
    
    if(myString.indexOf(pat) == -1){
        answer = 0;
    }else {
        answer = 1;
    }
    
    return answer;
}