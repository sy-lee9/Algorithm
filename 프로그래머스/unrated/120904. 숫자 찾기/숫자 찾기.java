class Solution {
    public int solution(int num, int k) {
        int answer = 0;
        
        String strNum = String.valueOf(num);
        if(strNum.indexOf(String.valueOf(k)) > -1){
            answer = strNum.indexOf(String.valueOf(k))+1;
        }else {
            answer = strNum.indexOf(String.valueOf(k));
        }
        
        return answer;
    }
}