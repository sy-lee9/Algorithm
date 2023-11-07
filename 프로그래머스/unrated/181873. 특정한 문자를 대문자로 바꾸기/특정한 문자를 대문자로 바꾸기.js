function solution(my_string, alp) {
    var answer = '';
    
    //문자열을 배열로 변경
    let arr = my_string.split("");
    
    //배열의 크기만큼 for문 돌리기
    for(let i=0; i<arr.length; i++){
        //배열의 값을 가져와 alp와 동일하면
        if(arr[i] === alp){
            //대문자로 변경하여 저장
            arr[i] = arr[i].toUpperCase();
        }
    //for문 끝        
    }
    
    answer = arr.join('');
    
    return answer;
}