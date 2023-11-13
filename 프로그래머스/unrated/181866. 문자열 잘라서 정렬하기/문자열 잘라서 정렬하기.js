function solution(myString) {
    var answer = [];
    
    answer = myString.split("x").sort().filter(value => value !== "");
    
    return answer;
}