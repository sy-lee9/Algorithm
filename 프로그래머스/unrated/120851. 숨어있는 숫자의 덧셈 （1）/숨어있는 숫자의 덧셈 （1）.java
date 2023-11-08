class Solution {
    public int solution(String my_string) {
        int answer = 0;
        
        //문자열에서 문자 제거
        my_string = my_string.replaceAll("[^0-9]","");
        //숫자만 남은 문자열 배열로 변환
        String[] arr = my_string.split("");
        //배열의 크기만큼 for문 돌리기
        for(int i=0; i<arr.length; i++){
            //answer에 배열의 값 더하기
            answer += Integer.parseInt(arr[i]);
        //for문 끝            
        }
        
        return answer;
    }
}