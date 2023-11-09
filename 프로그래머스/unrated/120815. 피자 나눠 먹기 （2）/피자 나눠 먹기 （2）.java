class Solution {
    public int solution(int n) {
        int answer = 1;
        
        //피자 조각 수
		int slice = 6;
        
        //피자조각 수를 n으로 나누었을 때 나머지가 0이 될때까지 while문 돌기
		while (slice%n != 0) {
            //slice+6
			slice+=6;
            //answer++
			answer++;
		}
        
        return answer;
    }
}