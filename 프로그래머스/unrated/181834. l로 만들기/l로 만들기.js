function solution(myString) {
    var answer = '';
    
    //myString을 배열로 변환
    let arr = myString.split('');
    
    //배열의 크기만큼 for문 돌기
    for(let i=0; i<arr.length; i++){
        //해당 값의 아스키코드 가져와서 'l'의 아스키코드보다 작을 경우
        if(arr[i].charCodeAt() < 'l'.charCodeAt()){
            //해당 값을 'l'로 변경
            arr[i] = 'l';
        }
    //for문 끝        
    }
    
    //배열을 answer에 저장
    answer = arr.join('');
    
    return answer;
}