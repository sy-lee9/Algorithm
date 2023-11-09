class Solution {
    public int[] solution(int[] numbers, String direction) {
        int[] answer = new int[numbers.length];
		
        //오른쪽일 경우
		if(direction.equals("right")) {
            //배열의 크기만큼 for문 돌기
			for (int i = 0; i < answer.length-1; i++) {
                //index i의 값을 index i+1에 저장
				answer[i+1] = numbers[i];
			}
            //index 0에 마지막 값 저장
			answer[0] = numbers[answer.length - 1];
        //왼쪽일 경우
		}else {
            //배열의 크기만큼 for문 돌기
			for (int i = 0; i < answer.length-1; i++) {
                //index i+1의 값을 index i에 저장
				answer[i] = numbers[i+1];
			}
            //마지막 index에 index 0의 값 저장
			answer[answer.length - 1] = numbers[0];
		}
        
        return answer;
    }
}