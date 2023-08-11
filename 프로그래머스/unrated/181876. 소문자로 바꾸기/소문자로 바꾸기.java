class Solution {
    public String solution(String myString) {
        String answer = "";
		
		char[] myChars = myString.toCharArray();
		
		for (int i = 0; i < myChars.length; i++) {
			answer += Character.toString(myChars[i]).toLowerCase();
		}
        
        return answer;
    }
}