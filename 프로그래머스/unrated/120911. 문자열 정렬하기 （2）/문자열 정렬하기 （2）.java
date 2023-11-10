import java.util.*;

class Solution {
    public String solution(String my_string) {
        String answer = "";
        
        //my_string을 소문자로 변경
        my_string = my_string.toLowerCase();
        
        //my_string을 배열로 변환
        String[] arr = my_string.split("");
        
        //정렬
        Arrays.sort(arr);
        
        //answer에 저장
        answer = String.join("",arr);
		
        return answer;
    }
}