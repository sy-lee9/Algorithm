function solution(my_string, s, e) {
    var answer = '';
    
    //my_string을 배열로 변환
    let arr = my_string.split("");
    console.log(arr);
    
    //배열의 index s부터 e까지의 값을 잘라서 순서를 바꾼 배열 준비
    let sliceArr = arr.slice(s,e+1).reverse();
    console.log(sliceArr);
    
    //배열의 s부터 e까지를 뒤집은 배열로 변경
    arr.splice(s,e-s+1,sliceArr.join(""));
    answer = arr.join("");
    console.log(arr);
    console.log(answer);
    
    
    return answer;
}