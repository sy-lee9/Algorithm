import java.util.*;
import java.util.stream.Stream;

class Solution {
    public String solution(int age) {
        String answer = "";
        
        //나이를 배열로 변환
        int[] arr = Stream.of(String.valueOf(age).split("")).mapToInt(Integer::parseInt).toArray();
        //배열의 크기만큼 for문 돌기
        for(int i=0; i<arr.length; i++){
            //값을 가져와서 char형으로 변환 후 'a' 더해주기
            answer += String.valueOf(Character.valueOf((char) (arr[i]+'a')));
        //for문 끝            
        }
        
        return answer;
    }
}