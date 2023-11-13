function solution(my_string) {
    var answer = [];
    
    //my_string의 길이만큼 for문 돌기
    for(let i=0; i<my_string.length; i++){
        //index i부터 문자열의 끝까지 잘라서 배열에 넣기
        answer.push(my_string.slice(i,my_string.length));
    //for문 끝        
    }
    
    //배열 정렬
    answer.sort();
    
    return answer;
}