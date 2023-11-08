function solution(myString) {
    var answer = '';
    
    //myString을 소문자로 변환
    myString = myString.toLowerCase();
    //myString을 배열로 변환
    let arr = myString.split('');
    //배열의 크기만큼 for문 돌기
    for(let i=0; i<arr.length; i++){
        //배열의 값이 "a"이면 
        if(arr[i] === 'a'){
            //대문자로 변경
            answer += arr[i].toUpperCase();
        //아니면             
        }else {
            //소문자로 변경
            answer += arr[i].toLowerCase();
        }
    //for문 끝        
    }
    
    return answer;
}