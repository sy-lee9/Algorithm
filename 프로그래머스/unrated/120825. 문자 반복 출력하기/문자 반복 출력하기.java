class Solution {
    public String solution(String my_string, int n) {
        String answer = "";
        
        //문자열을 배열로 변환
        String[] arr = my_string.split("");
        //배열의 크기만큼 for문 돌리기
        for(int i=0; i<arr.length; i++){
            //answer에 n만큼 문자열 반복해서 저장
            answer += arr[i].repeat(n);
        //for문 끝            
        }
        
        return answer;
    }
}