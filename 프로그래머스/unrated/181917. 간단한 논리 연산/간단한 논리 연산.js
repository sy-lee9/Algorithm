function solution(x1, x2, x3, x4) {
    var answer = true;
    let sum1 = true;
    let sum2 = true;
    
    if(x1||x2){
        sum1 = true;
    }else {
        sum1 = false;
    }
    
    if(x3||x4){
        sum2 = true;
    }else {
        sum2 = false;
    }
    
    if(!sum1||!sum2){
        answer = false;
    }
    
    return answer;
}