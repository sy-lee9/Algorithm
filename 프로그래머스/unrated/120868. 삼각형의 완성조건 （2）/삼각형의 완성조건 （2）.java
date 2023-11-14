class Solution {
    public int solution(int[] sides) {
        int answer = 0;
        
        //배열에서 가장 큰 값을 가져오기
        int max = Math.max(sides[0],sides[1]);
        
        //배열에서 가장 작은 값을 가져오기
        int min = Math.min(sides[0],sides[1]);
        
        
        //(큰값 - 작은값)+1부터 큰값 까지 for문 돌기
        for(int i=max-min+1; i<=max; i++){
            //answer++
            answer++;
        }
        
        //배열의 값의 합을 가져오기
        int sum = sides[0]+sides[1];
        //큰 값+1부터 배열의 합 - 1 값 까지 for문 돌기
        for(int i=max+1; i<sum; i++){
            //answer++
            answer++;            
        }
        
        return answer;
    }
}