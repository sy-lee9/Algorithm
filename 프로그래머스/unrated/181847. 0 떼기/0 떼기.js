function solution(n_str) {
    var answer = '';
    
    //
    for(let i=0; i<n_str.length; i++){
        if(n_str.startsWith('0')){
            n_str = n_str.replace(/^0+/, ''); 
        }else {
            break; 
        }
    }
    
    answer = n_str;
    
    return answer;
}