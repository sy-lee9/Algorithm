import java.util.*;
import java.util.stream.IntStream;

class Solution {
    public int[] solution(int[][] score) {
        int[] answer = new int[score.length];
        
        double[] avg = new double[score.length];
        
        //배열의 크기만큼 for문 돌기
        for(int i=0; i<score.length; i++){
            //배열 i의 값을 가져와 평균 값을 새로운 배열에 저장
            avg[i] = (score[i][0]+score[i][1])/2.0;     
        //for문 끝            
        }
        
        //평균값을 저장한 배열을 복사한 배열 선언 후 정렬
        Double[] cpArr = Arrays.stream(avg).boxed().toArray(Double[]::new);
        Arrays.sort(cpArr, Collections.reverseOrder());
        
        //avg 배열의 크기만큼 for문 돌기
        for(int j=0; j<avg.length; j++){
            //배열의 값을 하나씩 가져와 cpArr배열의 index를 구해 +1하여 answer에 저장  
            double num = avg[j];
            int index = IntStream.range(0, cpArr.length)
                    .filter(i -> cpArr[i] == num)
                    .findFirst()
                    .orElse(-1);
            answer[j] = index + 1;
        }
        
        return answer;
    }
}