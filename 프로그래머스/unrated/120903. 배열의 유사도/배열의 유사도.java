class Solution {
    public int solution(String[] s1, String[] s2) {
        int answer = 0;
        
        //s1의 크기만큼 for문 돌리기
        for(int i=0; i<s1.length; i++){
            //s2의 크기만큼 for문 돌리기
            for(int j=0; j<s2.length; j++){
                //s1[i]의 값을 가져와 s2의 배열과 하나씩 비교
                if(s1[i].equals(s2[j])){
                    //같은 값이 있을 경우 answer++
                    answer++;
                }
            //for문 끝
            }
        //for문 끝            
        }
        
        return answer;
    }
}