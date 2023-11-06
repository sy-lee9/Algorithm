function solution(num_list, n) {
    var answer = [num_list.length-n];
    var arrNum = 0;
    
    //n부터 list의 길이만큼 for문 돌리기
    for(var i=n-1; i<num_list.length; i++){
        //배열의 값을 하나씩 가져와 answer에 담기
        answer[arrNum] = num_list[i];
        arrNum++;
    //for문 끝        
    }
    
    return answer;
}