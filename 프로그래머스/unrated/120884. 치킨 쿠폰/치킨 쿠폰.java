class Solution {
    public int solution(int chicken) {
        int answer = 0;
        
        int cnt = chicken/10;
        int coupon = cnt + chicken%10;
        
        while (true) {
            answer += cnt;

            if (coupon < 10) {
                break;
            }

            cnt = coupon / 10;
            coupon = cnt + coupon % 10;
        }
        
        return answer;
    }
}