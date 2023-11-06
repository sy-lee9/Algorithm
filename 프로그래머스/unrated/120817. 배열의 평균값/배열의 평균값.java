class Solution {
    public double solution(int[] numbers) {
        double answer = 0;
        
        //numbers 배열의 크기만큼 for문 돌리기
        for(double num : numbers){
            //배열의 값을 하나씩 가져와서 answer에 더하기
            answer += num;
        //for문 끝            
        }
        
        //answer를 배열의 크기로 나누기
        answer = answer / numbers.length;
        
        return answer;
    }
}