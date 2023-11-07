class Solution {
    public int solution(int[] array, int height) {
        int answer = 0;
                
        //배열의 크기만큼 for문 돌리기
        for(int i=0; i<array.length; i++){
            //배열의 값을 하나씩 가져와 height보다 더 클 경우
            if(array[i] > height){
                //answer up
                answer++;
            }
        //for문 끝            
        }  
        
        return answer;
    }
}