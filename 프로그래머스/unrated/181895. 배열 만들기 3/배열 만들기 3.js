function solution(arr, intervals) {
     answer = [];
    
    //intervals[0]의 값에 맞춰 arr을 잘라 arr2에 넣기
    let arr2 = arr.slice(intervals[0][0],intervals[0][1]+1);
    //intervals[1]의 값에 맞춰 arr을 잘라 arr3에 넣기
    let arr3 = arr.slice(intervals[1][0],intervals[1][1]+1);
    
    //arr2와 arr3 합치기
    answer = arr2.concat(arr3);
    
    return answer;
}