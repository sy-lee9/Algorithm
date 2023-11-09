class Solution {
    public int[] solution(int[] array) {
        int[] answer = new int[2];
        
        //최대값을 담을 변수 선언
        int max =  0;
        
        //배열의 크기 만큼 for문 돌기
        for(int i=0; i<array.length; i++){
            //배열의 값을 가져와 최대값 비교해서 담기
            if(array[i]>max){
                //최대값 변경
                max = array[i];
                //index 저장
                answer[1] = i;
            }
        //for문 끝            
        }
        
        //결과값 담기
        answer[0] = max;
        
        return answer;
    }
}