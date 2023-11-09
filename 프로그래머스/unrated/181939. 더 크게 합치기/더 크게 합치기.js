function solution(a, b) {
    var answer = 0;
    
    //각각의 합을 담은 배열 선언(2개)
    let arr1 = [a,b];
    let arr2 = [b,a];
    
    //배열을 합쳐서 반환
    let sum1 = arr1.join("");
    let sum2 = arr2.join("");
    
    //두 값 중 큰 값을 answer에 저장
    answer = Math.max(sum1,sum2);
    
    return answer;
}