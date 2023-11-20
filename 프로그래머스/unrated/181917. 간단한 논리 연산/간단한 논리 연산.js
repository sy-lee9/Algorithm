function solution(x1, x2, x3, x4) {
    var answer = true;
    let sum1 = true;
    let sum2 = true;
    
    if(x1 == true || x2 == true){
        sum1 = true;
    }else {
        sum1 = false;
    }
    
    if(x3 == true || x4 == true){
        sum2 = true;
    }else {
        sum2 = false;
    }
    
    if(sum1 == false || sum2 == false){
        answer = false;
    }
    
    return answer;
}