function solution(arr) {
    var answer = arr;
    
    //임의의 수를 담을 변수 선언
    let num = 0

   while(Math.pow(2,num)<arr.length) {
        num++
    }
    num =Math.pow(2,num)

    while(arr.length<num) {
        answer.push(0)
    }
    
    return answer;
}