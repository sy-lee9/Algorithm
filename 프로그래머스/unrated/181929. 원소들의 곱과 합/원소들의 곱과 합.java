class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        
        int multiplication = 1;
        int addition = 0;
        
        for(int i=0; i<num_list.length; i++){
            multiplication *= num_list[i];
        }
        System.out.println(multiplication);
        for(int i=0; i<num_list.length; i++){
            addition += num_list[i];
        }
        System.out.println(addition);
        
        if(multiplication<addition*addition){
            answer = 1;
        }else {
            answer = 0;
        }
        
        return answer;
    }
}