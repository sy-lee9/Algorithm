class Solution {
    public int solution(int angle) {
        int answer = 0;
        
        if(angle <= 90){
            if(angle == 90){
                answer = 2;
            }else {
                answer = 1;
            }
        }else if(angle > 90 && angle <= 180){
            if(angle == 180){
                answer = 4;
            }else {
                answer = 3;
            }
        }
        
        return answer;
    }
}