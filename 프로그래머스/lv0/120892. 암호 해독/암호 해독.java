class Solution {
    public String solution(String cipher, int code) {
        String answer = "";
        
        char[] list = cipher.toCharArray();
		
		for (int i = code-1; i < list.length; i++) {
			answer += Character.toString(list[i]);
			i += code-1; 
		}
        
        return answer;
    }
}