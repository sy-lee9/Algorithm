class Solution {
    public String solution(String str1, String str2) {
        String answer = "";
        
        //str1의 길이만큼 for문 돌기
        for(int i=0; i<str1.length(); i++){
            //각 문자열의 i값들을 가져와 answer에 추가
            answer += str1.charAt(i);
            answer += str2.charAt(i);
        //for문 끝
        }
        
        return answer;
    }
}