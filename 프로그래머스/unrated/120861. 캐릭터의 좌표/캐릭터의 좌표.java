class Solution {
    public int[] solution(String[] keyinput, int[] board) {
        int[] answer = {0,0};
        
        //keyinput 배열의 크기만큼 for문 돌기
        for(int i=0; i<keyinput.length; i++){
            //배열의 값을 하나씩 가져와서  
            //answer[1]이 board[1]/2보다 작고 up이면
            if(answer[1] < board[1]/2 && "up".equals(keyinput[i])){
                //answer[1] += 1
                answer[1] += 1;
            }
            
            //answer[1]이 -board[1]/2보다 크고 down이면
            if(answer[1] > -board[1]/2 && "down".equals(keyinput[i])){
                //answer[1] -= 1
                answer[1] -= 1;
            }
        
            //answer[0]이 -board[0]/2보다 크고 left이면
            if(answer[0] > -board[0]/2 && "left".equals(keyinput[i])){
                //answer[0] -= 1
                answer[0] -= 1;
            }
            //answer[0]이 board[0]/2보다 작고 right이면
            if(answer[0] < board[0]/2 && "right".equals(keyinput[i])){
                //answer[0] += 1
                answer[0] += 1;
            }
        //for문 끝            
        }
        
        
        return answer;
    }
}