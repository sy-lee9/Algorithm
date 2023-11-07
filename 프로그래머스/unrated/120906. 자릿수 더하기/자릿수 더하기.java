class Solution {
    public int solution(int n) {
        int answer = 0;
        
        //n이 0보다 작아질때 까지 while문 돌리기
        while(n>0){
            //n을 10으로 나눈 나머지를 answer에 더하기
            answer += n%10;
            //n을 10으로 나누기
            n = n/10;
        //while문 끝            
        }
        
        return answer;
    }
}