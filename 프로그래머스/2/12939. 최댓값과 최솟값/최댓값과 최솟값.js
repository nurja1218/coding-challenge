function solution(s) {
    const nums = s.split(' ').map((num) => +num);
    const max = Math.max(...nums);
    const min = Math.min(...nums);

    return min + ' ' + max;
}

