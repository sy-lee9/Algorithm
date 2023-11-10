function solution(my_string, index_list) {
    var answer = '';
    
    //map 사용해보기
    answer = index_list.map(i => my_string[i]).join('');
    
    return answer;
}