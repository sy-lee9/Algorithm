class Solution {
    public int solution(int n) {
        int answer = 0;
        
        //n만큼 for문 돌기
        for(int i=1; i<=n; i++){
            
            //약수 cnt 변수
            int cnt = 0;
            
            //i만큼 for문 돌기
            for(int k=1; k<=i; k++){
                
                //i을 k로 나누었을 때 나머지가 0이면
                if(i%k == 0){
                    //cnt++
                    cnt++;
                }                
            }
            
            //약수가 3개 이상이면
            if(cnt >= 3){
                //answer++
                answer++;
            }
            
        //for문 끝            
        }
        
        return answer;
    }
}