function solution(arr) {
    var answer = [];
    
    while(arr.length & (arr.length - 1)){
        arr.push(0);
    }
    
    answer = arr;
    
    return answer;
}