class Solution {
    public int solution(int i, int j, int k) {
        int answer = 0;
        
        //i~j만큼 for문 돌기
        for(int e=i; e<=j; e++){
            //e를 배열로 변환
            String[] arr = String.valueOf(e).split("");
            
            //e의 크기만큼 for문 돌기
            for(int y=0; y<arr.length; y++){
                //배열의 값을 하나씩 가져와 k와 같으면
                if(arr[y].equals(String.valueOf(k))){
                    //answer++
                    answer++;
                }
            //for문 끝                
            }
        //for문 끝            
        }
        
        return answer;
    }
}