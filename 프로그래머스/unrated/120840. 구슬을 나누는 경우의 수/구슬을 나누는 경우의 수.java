import java.math.BigInteger;

class Solution {
    
    public long solution(int balls, int share) {
        
        long answer = 1;
        
        
        int index = 1;
       
        //분모의 (n-m)!은 분자의 n!에서 (n-m)!만큼 나눠서 없앴기 때문에 share+1부터 balls까지만 for문 돌기
        for(int i=share+1; i<=balls; i++){
            //분자 n!에서 (n-m)! 만큼 빼고 나머지 값 연산
            answer *= i;
            
            //분모에서 (n-m)!을 제거했기 때문에 m!값만 연산
            answer /= index;
            
            //m!만큼 나눠주기 위해 ++
            index++;            
        }
        
        System.out.println(answer);
        return answer;
    }
    
}