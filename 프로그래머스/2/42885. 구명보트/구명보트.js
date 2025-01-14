function solution(people, limit) {
    const sortedPeople = people.sort((a, b) => a - b);
    let left = 0;
    let right = sortedPeople.length - 1;
    let carryCount = 0;
    
    while(left <= right){
        if(sortedPeople[left] + sortedPeople[right] <= limit){
            left++;
            right--;
        } else {
            right--;
        }
        carryCount++;
    }
    
    return carryCount;
}