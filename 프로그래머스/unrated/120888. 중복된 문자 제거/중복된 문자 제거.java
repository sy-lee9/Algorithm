class Solution {
    public String solution(String my_string) {
        String answer = "";
        
        //my_string의 크기만큼 for문 돌기
        for(int i=0; i<my_string.length(); i++){
            //중복값이 없으면 
            if(answer.indexOf(my_string.charAt(i)) == -1){
                //해당 값 추가
                answer += my_string.charAt(i);
            }
        //for문 끝            
        }
        
        return answer;
    }
}