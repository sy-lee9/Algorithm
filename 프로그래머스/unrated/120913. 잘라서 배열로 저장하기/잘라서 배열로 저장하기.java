class Solution {
    public String[] solution(String my_str, int n) {
        
        //my_str의 길이를 반올림한 값 가져오기
		int len = (my_str.length() + n - 1) / n;
        //배열의 크기를 위의 값으로 설정
        String[] answer = new String[len];
        
        //my_str index 변수 선언
        int index1 = 0;
        //answer index 변수 선언
        int index2 = 0;
        
        //my_str의 길이만큼 while문 돌기
        while(index1 < my_str.length()){
            //answer에 index~index+n 만큼 잘라서 넣기 
            //index+n이 my_str.length()보다 클 경우 my_str.length()으로 자르기
            answer[index2] = my_str.substring(index1,Math.min(index1 + n, my_str.length()));
            
            //index1+n
            index1 += n;
            //index2+1
            index2 += 1;
        //while문 끝            
        }
        
        return answer;
    }
}