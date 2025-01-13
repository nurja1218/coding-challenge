function solution(s) {
    const result = [];
    const chars = s.split(' ');
    
    for(let char of chars){
        const firstChar = char.slice(0, 1);
        const otherChars = char.slice(1);
        
        result.push(firstChar.toUpperCase() + otherChars.toLowerCase());
    }
        
    return result.join(' ');
}