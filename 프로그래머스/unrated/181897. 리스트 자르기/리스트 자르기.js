function solution(n, slicer, num_list) {
    var answer = [];
    
    //n = 1
    if(n == 1){
        //0번 인덱스부터 b번 인덱스까지 answer에 저장
        answer = num_list.slice(0,slicer[1]+1);
    }
    //n = 2
    if(n == 2){
        //a번 인덱스부터 마지막 인덱스까지 answer에 저장
        answer = num_list.slice(slicer[0]);        
    }
    //n = 3
    if(n == 3){
        //a번 인덱스부터 b번 인덱스까지 answer에 저장
        answer = num_list.slice(slicer[0],slicer[1]+1);               
    }
    //n = 4
    if(n == 4){
        //a번 인덱스부터 b번 인덱스까지 c 간격으로 answer에 저장
        answer = num_list.slice(slicer[0],slicer[1]+1).filter((e,i)=>i%slicer[2]==0);           
    }
    
    return answer;
}