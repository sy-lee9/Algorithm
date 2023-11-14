function solution(my_string, m, c) {
    var answer = '';
    
    //문자열을 배열로 변환
    let arr = my_string.split("");
    
    //배열의 크기만큼 for문 돌기(c부터 m만큼 커지기)
    for(let i=c-1; i<arr.length; i+=m){
        //배열의 값을 answer에 추가
        answer += arr[i];
    //for문 끝        
    }
    
    return answer;
}