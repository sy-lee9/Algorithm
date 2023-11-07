import java.util.*;
class Solution {
    public int solution(int[] sides) {
        int answer = 0;
        
        //배열 정렬
        Arrays.sort(sides);
        
        //작은 값 두개의 합이 가장 큰 값보다 클 경우
        if(sides[0]+sides[1] > sides[2]) {
            //1
        	answer = 1;
        }else { //2
        	answer = 2;
        }
        
        return answer;
    }
}