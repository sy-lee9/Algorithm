import java.util.Arrays;

class Solution {
    public int solution(int[] numbers) {
        int answer = 0;
        
        //배열 정렬
        Arrays.sort(numbers);
        //index 0 * index1의 값 가져오기
        int sum1 = numbers[0]*numbers[1];
        //index-1 * index-2의 값 가져오기
        int sum2 = numbers[numbers.length-1]*numbers[numbers.length-2];
        
        //두 값을 비교해서 큰 값을 answer에 저장
        answer = Math.max(sum1, sum2);
        
        return answer;
    }
}