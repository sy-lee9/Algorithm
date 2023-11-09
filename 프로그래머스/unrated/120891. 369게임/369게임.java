import java.util.stream.Stream;

class Solution {
    public int solution(int order) {
        int answer = 0;
		
        //order를 배열로 변환
		int[] list = Stream.of(String.valueOf(order).split("")).mapToInt(Integer::parseInt).toArray();
		
        //배열의 크기만큼 for문 돌기
		for (int i = 0; i < list.length; i++) {
            //배열의 값이 3,6,9이면
			if(list[i] == 3 | list[i] == 6 | list[i] == 9) {
                //answer++
				answer++;
			}
		}
        
        return answer;
    }
}