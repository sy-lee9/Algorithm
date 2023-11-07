class Solution {
    public int[] solution(int money) {
        int[] answer;
        
        //구입할 수 있는 커피 수
        int coffee = 0;
        
        //money가 5,500이하일 때 까지 while문 돌리기
        while(money >= 5500){
            //coffee++
            coffee++;
            //커피값 차감
            money -= 5500;
        //while문 종료            
        }
        
        //cnt값, money 값 배열에 담기
        answer = new int[]{coffee, money};
        
        return answer;
    }
}