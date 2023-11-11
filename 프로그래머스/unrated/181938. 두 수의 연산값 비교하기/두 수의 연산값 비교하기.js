function solution(a, b) {
    var answer = 0;
    
    //a와 b를 합친 값을 담을 변수 선언
    let sum1 = a+''+b;
    //2 * a * b의 값을 담을 변수 선언
    let sum2 = 2*a*b;
    
    //두 값중 큰 값을 answer에 저장
    answer = Math.max(sum1, sum2);
    
    return answer;
}