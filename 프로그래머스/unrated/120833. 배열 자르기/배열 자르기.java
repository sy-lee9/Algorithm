class Solution {
    public int[] solution(int[] numbers, int num1, int num2) {
        int[] answer = new int[num2-num1+1];
        
        //index를 저장할 변수 선언
        int index = 0;
        
        //num1부터 num2까지 for문 돌리기
        for(int i=num1; i<=num2; i++){
            //배열의 값을 하나씩 가져와 answer 배열에 넣기
            answer[index] = numbers[i];
            //index++
            index++;
        //for문 끝            
        }
        
        
        
        return answer;
    }
}