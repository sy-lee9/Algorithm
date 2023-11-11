class Solution {    
    
    //fac 메서드
    public static int fac(int num){
        //num이 1보다 크면
        if(num > 1){
            //num*fac(num-1) 반환
            return num*fac(num-1);
        }
        //아니면 num 반환
        return num;            
    }
    
    public int solution(int n) {
        int answer = 0;
        
        //n만큼 for문 돌기
        for(int i=1; i<=n; i++){
            //fac(i)가 n보다 작으면
            if(n >= fac(i)){
                //answer = i
                answer = i;
            //아니면                
            }else {
                //break
                break;
            }
        //for문 끝            
        }
                
        return answer;
    }
}