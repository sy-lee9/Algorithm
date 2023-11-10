function solution(my_strings, parts) {
    var answer = '';
    
    answer = parts.map(([s,e],i) => {
        return my_strings[i].slice(s,e+1);
    }).join('');
    
    return answer;
}