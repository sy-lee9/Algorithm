class Solution {
    public String solution(String letter) {
        String answer = "";
        
        //morse의 key값을 배열로 만들기
        String[] morse = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
        
        //letter를 공백을 기준으로 배열로 변환
        String[] arr = letter.split(" ");
        
        //arr의 값을 하나씩 꺼내서
        for (String word : arr) {
            //morse 배열과 비교
			for (int i = 0; i < morse.length; i++) {
                //같을 경우
				if(word.equals(morse[i])) {
                    //answer에 i+'a'값 저장
					answer += Character.toString(i+'a');
				}
            //for문 끝
			}
        //for문 끝
		}
        
        return answer;
    }
}