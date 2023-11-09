class Solution {
    public int[] solution(int n) {
        int[] answer = {};
        
        //index 값을 저장할 변수 선언
		int index = 0;
		
        //n만큼 for문 돌기
		for (int i = 1; i <= n; i++) {
            //n을 i로 나눴을 때 나머지가 0이면
			if(n%i==0) {
                //index++
				index++;
			}
		}

        //answer 배열의 값 초기화
		answer = new int[index];
		
        //index값 초기화
		index = 0;
		
        //n만큼 for문 돌기
		for (int i = 1; i <= n; i++) {
            //n을 i로 나눴을 때 나머지가 0이면
			if(n%i==0) {
                //answer에 i값 저장
				answer[index] = i;
                //index++
				index++;
			}
		}
		
        return answer;
    }
}