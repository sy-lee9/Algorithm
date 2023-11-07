class Solution {
    public int solution(int[] array, int n) {
        int answer = 0;
        
        //배열의 크기만큼 for문 돌리기
        for(int i=0; i<array.length; i++){
            //배열의 값을 하나씩 가져와 n과 일치하는지 확인
            if(array[i] == n){
                //일치할 경우 answer++
                answer++;
            }
        //for문 끝            
        }
        
        return answer;
    }
}