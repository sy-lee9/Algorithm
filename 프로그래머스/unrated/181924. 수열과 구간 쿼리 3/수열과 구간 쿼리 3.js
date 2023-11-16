function solution(arr, queries) {
    var answer = [];
    
    //배열의 값을 하나씩 가져와
    queries.forEach(([a,b]) => {
        //arr[a]의 값을 임시로 담은 변수 선언
        let temp = arr[a];
        
        //arr[a]에 arr[b]의 값 담기
        arr[a] = arr[b];        
        //arr[b]에 temp 값 담기
        arr[b] = temp;
    })
    
    //배열 복사
    answer = [...arr];
    
    return answer;
}