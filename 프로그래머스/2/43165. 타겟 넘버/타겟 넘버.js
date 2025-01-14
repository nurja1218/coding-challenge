function solution(numbers, target) {
    let result = 0;
    
    const dfs = (index, sign, sum) => {
        let acc = sum + numbers[index] * sign;
        
        if(index + 1 === numbers.length){
            if(acc === target){
                result++;
            }
            return;
        }
        
        dfs(index + 1, 1, acc);
        dfs(index + 1, -1, acc);
    }
    
    dfs(0, 1, 0);
    dfs(0, -1, 0);
    
    return result;
}