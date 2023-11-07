function solution(num_list) {
    
    //마지막 원소가 이전 원소값 보다 클 경우
    if(num_list[num_list.length-1] > num_list[num_list.length-2]){
        //마지막 원소 - 이전 원소값 마지막 인덱스에 추가
        var answer = [...num_list,(num_list[num_list.length-1]-num_list[num_list.length-2])];
    //아닐 경우         
    }else {        
        //마지막 원소값 두배하여 마지막 인덱스에 추가
        var answer = [...num_list,(num_list[num_list.length-1]*2)];
    }
    
    return answer;
}