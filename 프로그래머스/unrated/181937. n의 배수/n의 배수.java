class Solution {
    public int solution(int num, int n) {
        int answer = 0;
        
        //num을 n으로 나눴을 때 나머지가 0이면
        if(num%n == 0){         
            return 1;
        }else {
        //아니면
            return 0;
        }
    }
}