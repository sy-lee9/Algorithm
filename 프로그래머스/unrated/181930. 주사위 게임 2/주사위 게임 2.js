function solution(a, b, c) {
    var answer = 0;
    
    //세 숫자가 모두 다를 경우
    if(a != b && b != c && a != c){
        answer += a+b+c;
    }
    
    //세 숫자 모두 같을 경우
    if(a == b || b == c || c == a){
        //세 숫자 중 두 숫자만 같을 경우
        if(a != b || b != c || a != c){            
            answer += (a+b+c) * ((a ** 2) + (b ** 2) + (c ** 2));   
        }
        else{
            answer += (a+b+c) * ((a ** 2) + (b ** 2) + (c ** 2)) * ((a ** 3) + (b ** 3) + (c ** 3));             
        }       
    }
    
    
    return answer;
}