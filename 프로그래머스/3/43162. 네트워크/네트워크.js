function solution(n, computers) {
    let visited = new Array(n).fill(false);
    let networkCount = 0;
    
    const dfs = (node) => {
        visited[node] = true;
        
        for (let i = 0; i < n; i++) {
            if (computers[node][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            networkCount++;
            dfs(i);
        }
    }
    
    return networkCount;
}

