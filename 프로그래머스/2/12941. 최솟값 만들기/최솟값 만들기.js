function solution(A,B){
    let minSum = 0;
    
    const sortedA = A.sort((a, b) => a - b);
    const sortedB = B.sort((a, b) => b - a);
    
    for(let i = 0; i < A.length; i++){
        minSum += sortedA[i] * sortedB[i];
    }

    return minSum;
}