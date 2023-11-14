class Solution {
    public int solution(String my_string) {
        
        //문자열 공백 기준으로 잘라서 배열로 변환
        String[] arr = my_string.split(" ");
        
        int answer = Integer.parseInt(arr[0]);        
        
        //index 1부터 배열의 크기만큼 for문 돌기
        for(int i=1; i<arr.length; i+=2){
            //i가 "+"이면
            if("+".equals(arr[i])){
                answer += Integer.parseInt(arr[i+1]);
            }
            //index 1의 값이 -일 경우
            else {
                answer -= Integer.parseInt(arr[i+1]);                  
            }
        }
                
        return answer;
    }
}