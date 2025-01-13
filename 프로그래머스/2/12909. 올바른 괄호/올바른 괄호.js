function solution(s){
    const chars = s.split('');
    let openCount = 0;
    let closeCount = 0;
    let twin = 0;
    
    const firstChar = chars[0];
    const lastChar = chars[s.length - 1];
    
    if(firstChar !== '('){
        return false
    }
    if(lastChar !== ')'){
        return false
    }
    
    for(const c of chars){
        if(c === '('){
            openCount += 1
        }
        if(c === ')'){
            closeCount += 1
        }
        
        twin = openCount - closeCount;
        
        if(twin < 0){
            return false;
        }
    }
    
    return twin === 0;
}