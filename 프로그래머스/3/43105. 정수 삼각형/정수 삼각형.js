function solution(triangle) {
    const maxRow = triangle.length;
    const dp = triangle.map(row => [...row]);

    // Bottom-Up 방식으로 아래에서 위로 계산
    for (let row = maxRow - 2; row >= 0; row--) {
        for (let col = 0; col <= row; col++) {
            dp[row][col] += Math.max(dp[row + 1][col], dp[row + 1][col + 1]);
        }
    }
    
    return dp[0][0];
}
