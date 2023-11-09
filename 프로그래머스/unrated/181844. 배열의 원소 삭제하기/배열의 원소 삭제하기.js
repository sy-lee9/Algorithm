function solution(arr, delete_list) {
    var answer = [];
    
    answer = arr.filter((element) => !delete_list.includes(element));
    
    return answer;
}