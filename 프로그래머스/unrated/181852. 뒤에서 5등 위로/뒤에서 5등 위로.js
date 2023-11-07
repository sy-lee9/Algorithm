function solution(num_list) {
    var answer = [num_list.length-5];
    
    //index 값을 담을 변수 선언
    let index = 0;
    
    //배열 정렬
    num_list.sort(function(a,b){
        return a-b;
    })
    
    //5부터 배열의 길이까지 for문 돌리기
    for(var i=5; i<num_list.length; i++){
        //answer에 담기
        answer[index] = num_list[i];
        //index++
        index++;
    //for문 끝        
    }
    
    return answer;
}