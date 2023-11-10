function solution(num_list, n) {
    var answer = [num_list.length];
    
    //n번째 까지의 원소를 담은 배열
    let arr1 = num_list.slice(0,n);
    
    //n이후의 원소를 담은 배열
    let arr2 = num_list.slice(n,num_list.length);
    
    //합치기
    answer = arr2.concat(arr1);
    
    return answer;
}