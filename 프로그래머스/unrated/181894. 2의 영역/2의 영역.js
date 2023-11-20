function solution(arr) {
    var answer = [];
    
    //앞에서부터 2의 index의 값을 찾아 저장
    const index1 = arr.indexOf(2);
    //뒤에서 부터 2의 index의 값을 찾아 저장
    const index2 = arr.lastIndexOf(2);
    
    //1부터 2까지의 배열 반환
    answer = [...arr.slice(index1,index2+1)];
    
    //2가 없으면 -1 저장
    if(index1 == -1){
        answer.push(-1);
    }
    
    return answer;
}