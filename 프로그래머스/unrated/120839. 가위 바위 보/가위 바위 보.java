class Solution {
    public String solution(String rsp) {
        String answer = "";
        
        //rsp 배열로 변환
        String[] arr = rsp.split("");
        //배열의 크기만큼 for문 돌림
        for(int i=0; i<arr.length; i++){
            //배열의 값이 2일 때
            if("2".equals(arr[i])){
                //answer += 0
                answer += 0;
            //배열의 값이 0일 때
            }else if("0".equals(arr[i])){            
                //answer += 5
                answer += 5;
            //배열의 값이 5일 때
            }else if("5".equals(arr[i])){  
                //answer += 2
                answer += 2;
            }
        //for문 끝            
        }
        
        return answer;
    }
}