class Solution {
    public String solution(String str1, String str2) {
        String answer = "";
        
        //str1과 str2를 배열로 변환
        String[] arr1 = str1.split("");
        String[] arr2 = str2.split("");
        
        //배열의 크기만큼 for문 돌기
        for(int i=0; i<arr1.length; i++){
            //각 list의 i값들을 가져와 answer에 추가
            answer += arr1[i];
            answer += arr2[i];
        //for문 끝
        }
        
        return answer;
    }
}