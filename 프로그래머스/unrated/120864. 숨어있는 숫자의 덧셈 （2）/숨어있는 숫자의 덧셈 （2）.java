class Solution {
    public int solution(String my_string) {
        int answer = 0;

        // 문자열을 배열로 변환
        String[] arr = my_string.split("");

        // 임시값 저장 변수
        int temp = 0;

        // 배열의 크기만큼 for문 돌기
        for (int i = 0; i < arr.length; i++) {
            // i가 숫자이면
            if (arr[i].matches("[0-9]")) {
                // temp에 현재 index i값 저장
                temp = Integer.parseInt(arr[i]);

                // 다음 index가 숫자이면
                while (i + 1 < arr.length && arr[i + 1].matches("[0-9]")) {
                    // temp에 10을 곱하고 다음 index의 값을 더함
                    temp = temp * 10 + Integer.parseInt(arr[i + 1]);
                    i++;
                }

                // answer에 temp값 저장
                answer += temp;
            }
        }

        return answer;
    }
}
