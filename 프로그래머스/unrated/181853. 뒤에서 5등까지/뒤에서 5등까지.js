function solution(num_list) {
    var answer = [];
    
    //num_list 정렬
    num_list.sort(function(a,b){
        return a-b;
    });
    
    //0~5까지 answer에 복사
    answer = num_list.slice(0,5);
    
    return answer;
}