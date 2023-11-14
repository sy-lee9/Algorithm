class Solution {
    public int solution(String[] spell, String[] dic) {
        int answer = 2;
        int cnt = 0;
        
        //dic의 크기만큼 for문 돌기
        for(int i=0; i<dic.length; i++){
            //spell의 크기만큼 for문 돌기
            for(int j=0; j<spell.length; j++){
                //dic의 배열 값에 spell의 값이 모두 포함되는지 확인
                if(dic[i].contains(spell[j])){
                    cnt++;
                }
            //for문 끝                
            }
            if(cnt == spell.length){
                //모두 포함될 경우 answer = 1
                answer = 1;
            }
            cnt = 0;
        //for문 끝            
        }
        
        return answer;
    }
}