import java.util.*;

class Solution {
    public int solution(String before, String after) {
        int answer = 0;
		
		String[] arrBe = before.split("");
		String[] arrAf = after.split("");
		
		Arrays.sort(arrBe);
		Arrays.sort(arrAf);
		
		before = String.join("",arrBe);
		after = String.join("",arrAf);
		
		if(before.equals(after)) {
			answer = 1;
		}else {
			answer = 0;
		}
		
        return answer;
    }
}