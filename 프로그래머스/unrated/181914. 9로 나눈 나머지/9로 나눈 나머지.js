function solution(number) {
    var answer = 0;
    
    let arr = number.split("");
    
    for(let i=0; i<arr.length; i++){
        answer += parseInt(arr[i]);
    }
    
    console.log(answer);
    
    answer %= 9;
    
    return answer;
}