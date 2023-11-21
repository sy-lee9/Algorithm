import java.util.*;

class Solution {
    public int solution(String A, String B) {
        int answer = 0;
        
        //a와 b를 비교하여 같지 않는 동안 while문 돌기
        while(!A.equals(B)){
            //answer이 a의 길이보다 크면 return -1
            if(answer > A.length()){
                return -1;
            }else {
                //a문자열 한칸씩 밀기
                A = push(A);
                System.out.println(A);
                //answer++
                answer++;                
            }
        }
        
        return answer;
    }
    
    public String push (String A){
        return A.substring(A.length()-1,A.length())+A.substring(0,A.length()-1);  
    }
    
}