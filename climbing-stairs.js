var assert = require('assert');

/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps.
In how many distinct ways can you climb to the top?
*/

describe('climbStairs', () => {
  it('should return one when there is one way to climb to the top', () => {
    assert.equal(climbStairs(1), 1)
  })
  it('should return two when there are two ways to climb to the top', () => {
    assert.equal(climbStairs(2), 2);
  })
  it('should return three when there are three ways to climb to the top', () => {
    assert.equal(climbStairs(3), 3)
  })
  it('should return five when there are five ways to climb to the top', () => {
    assert.equal(climbStairs(4), 5)
  })
  it('should return eight when there are eight ways to climb to the top', () => {
    assert.equal(climbStairs(5), 8);
  })
})

function climbStairs(n){
  if(n === 1){
    return 1;
  }
  if(n === 2){
    return 2;
  }else{
    let prev = 1;
    let prev2 = 2;
    let numWays = 0;
    for(let i = 3; i <= n; i++){
      let sum = prev + prev2;
      numWays = sum;
      prev = prev2;
      prev2 = sum;
    }
    return numWays;
  }
}
