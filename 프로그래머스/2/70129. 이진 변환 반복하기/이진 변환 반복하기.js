function solution(s) {
    let removeZeroStr = s;
    let loopCount = 0;
    let removeCount = 0;
    
    
    while(removeZeroStr !== '1'){
        removeCount += [...removeZeroStr].filter((c) => c === '0').length;
        loopCount++;
        
        removeZeroStr = removeZeroStr.replaceAll('0', '');
        removeZeroStr = removeZeroStr.length.toString(2);
    }
    
    return [loopCount, removeCount]
}