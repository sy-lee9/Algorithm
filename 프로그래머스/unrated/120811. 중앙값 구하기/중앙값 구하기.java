class Solution {
    public int solution(int[] array) {
        int answer = 0;
        
        //배열을 순서대로 정렬(버블소트 사용해보기)
        //배열의 크기만큼 for문 돌리기
        for(int i=0; i<array.length-1; i++){
            //배열의 크기만큼 for문 돌리기
            for(int j=0; j<array.length-i-1; j++){
                //배열의 i번째 값 가져오기
                int left = array[j];
                //배열의 i+1번째 값 가져오기
                int right = array[j+1];
                //i번째 값이 i+1번째 값보다 크면
                if(left > right){
                    //i번째에 i+1값 넣기
                    array[j] = right;
                    //i+1번째의 값에 임시값 넣기
                    array[j+1] = left;
                }
            //for문 끝   
            }
        //for문 끝                     
        }
        
        //배열을 2로 나눈 값의 index 값 answer에 넣기
        answer = array[array.length/2];
        
        return answer;
    }
}