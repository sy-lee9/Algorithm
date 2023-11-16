function solution(myStr) {
    var answer = [];
    
    answer = myStr.split(/[abc]/).filter((e) => e != "");
    
    if(answer.length < 1){
        answer[0] = "EMPTY";
    }
    
    return answer;
}