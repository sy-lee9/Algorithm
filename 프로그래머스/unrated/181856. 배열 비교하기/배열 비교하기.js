function solution(arr1, arr2) {
    var answer = 0;
    
    //배열의 크기 비교
    //arr1의 크기가 더 크면 
    if(arr1.length > arr2.length){
        //1
        answer = 1;
    //arr2의 크기가 더 크면 
    }else if(arr1.length < arr2.length){
        //-1
        answer = -1;
    //둘다 아니면
    }else{
        //arr1,arr2 배열의 합 구하기
        //각각의 합을 담을 변수 2개 선언
        let arr1Sum = 0;
        let arr2Sum = 0;
        //배열의 크기만큼 for문 돌리기
        for(i=0; i<arr1.length; i++){
            //배열의 값 더하기
            arr1Sum += arr1[i];
            arr2Sum += arr2[i];            
        //for문 끝            
        }
        //배열의 합 비교해서 arr1이 더 크면
        if(arr1Sum > arr2Sum){
            //1
            answer = 1;
        //arr2의 크기가 더 크면 
        }else if(arr1Sum < arr2Sum){
            //-1
            answer = -1;
        //둘 다 아니면
        }else {
            //0    
            answer = 0;
        }    
    }
    
    
    return answer;
}