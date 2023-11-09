class Solution {
    public String solution(String my_string, int num1, int num2) {
        String answer = "";
        
        //문자열을 배열로 변환
        String[] arr = my_string.split("");
        //임의의 값을 담을 변수
        String temp = "";    
        
        //num2 index의 값을 임의로 저장
        temp = arr[num2];
        //num2 index에 num1 index값 저장    
        arr[num2] = arr[num1];        
        //저장해놓은 num1 index의 값을 /num2 index에 저장
        arr[num1] = temp;
        
        //배열의 값을 asnwer에 저장
        answer = String.join("",arr);
        
        return answer;
    }
}