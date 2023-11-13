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
        
        //list의 사이즈 만큼 배열의 크기 지정
        int[] answer = new int[list.size()];
        
        //배열의 크기만큼 for문 돌기
        for(int i=0; i<answer.length; i++){
            //list의 값을 가져와 배열에 담기
            answer[i] = list.get(i);
        }
        
        return answer;
    }
}