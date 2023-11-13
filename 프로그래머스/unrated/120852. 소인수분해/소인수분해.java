import java.util.*;

class Solution {
    public int[] solution(int n) {
        //동적 할당을 위해 list 선언
        List<Integer> list = new ArrayList<Integer>();
        
        //2부터 n까지 for문 돌기
        for(int i=2; i<=n; i++){
            //n%i이 0이면
            if(n%i == 0){
                //n%i가 0이 될 때까지 i로 나눠줌 
                while(n%i == 0){
                    n /= i;
                }
                //list에 i 추가
                list.add(i);
            }
        }
        
        int[] answer = list.stream().mapToInt(i -> i).toArray();
        return answer;
    }
}