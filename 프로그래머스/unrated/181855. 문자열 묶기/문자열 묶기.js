function solution(strArr) {
    var answer = 0;
    
    let arr = [];
    arr.length = 31;
    arr.fill(0);
    
    //배열의 크기만큼 for문 돌기
    for(let i=0; i<strArr.length; i++){
        //배열의 길이를 가져와서
        let num = strArr[i].length;
        //arr의 해당 길이의 index의 값 ++
        arr[num]++;
    //for문 끝        
    }
    
    //배열의 최대값 저장
    answer = Math.max.apply(null,arr);
    
    return answer;
}