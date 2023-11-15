import java.util.*;

class Solution {
    public int[] solution(String[] intStrs, int k, int s, int l) {
        
		List<Integer> numList = new ArrayList<Integer>();
		
		List<String> list = Arrays.asList(intStrs);
		
		for(int i=0; i<list.size(); i++) {
			int num = Integer.parseInt(list.get(i).substring(s, s+l));
			if(num > k) {
				numList.add(num);
			}
		}

		int[] answer = new int[numList.size()];
		for(int j=0; j<numList.size(); j++) {
			answer[j] = numList.get(j);
		}
        
        return answer;
    }
}