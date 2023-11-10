class Solution {
    public int[][] solution(int[] num_list, int n) {
        int[][] answer = new int[num_list.length/n][n];
        
        //index값을 저장할 변수 선언
        int index =0;
        
        //num_list/n 만큼 for문 돌기
        for(int i=0; i<num_list.length/n; i++){
            //n 만큼 for문 돌기
            for(int k=0; k<n; k++){
                //answer[i][k]에 num_list[index] 값 담기
                answer[i][k] = num_list[index];
                //index++
                index++;
            //for문 끝                
            }
        //for문 끝            
        }
        
        return answer;
    }
}