class Solution {
    public int solution(int[] array, int n) {
        
        int answer = array[0];
        
        for ( int i = 1; i < array.length; i++ ) {
            int temp = array[i];
            int fix = Math.abs( answer - n );
            int curr = Math.abs( temp - n );

            if (fix > curr || (fix == curr && answer > temp )) {
            	answer = temp;
            }
        }

        return answer;
    }
}