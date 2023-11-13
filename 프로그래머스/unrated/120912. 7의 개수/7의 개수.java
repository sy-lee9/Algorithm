class Solution {
    public int solution(int[] array) {
        int answer = 0;
        
        //배열의 크기만큼 for문 돌기
        for(int i=0; i<array.length; i++){
            //배열의 값을 가져와 7이면
            int num = array[i];
            while(num != 0){
                if((num%10) != 0){
                    if((num%10)%7 == 0){
                        //answer++
                        answer++;
                    }                 
                }
                num /= 10;   
            }
        //for문 끝
            
        }
        
        return answer;
    }
}