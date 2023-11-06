class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = new int[2];
        
        //list의 크기 만큼 for문 돌리기
        for(int i=0; i<num_list.length; i++){
            //배열의 값이 짝수이면
            if(num_list[i]%2 == 0){                
                //answer[0]++;
                answer[0]++;
            }else { //아니면
                //answer[1]++;
                answer[1]++;
            }
            
            
        }
        return answer;
    }
}