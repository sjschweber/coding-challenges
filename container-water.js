var assert = require('assert');

describe('max_water', () => {
  it('should return one when given an array of two elements that equal one', () => {
    assert.equal(max_water([1,1]), 1);
  })
  it('should return sixteen when given an array of two elements that equal four', () => {
    assert.equal(max_water([4, 4]), 4)
  })
  it('should return nine when given an array of three elements with a largest value of 6', () => {
    assert.equal(max_water([3,2,6]), 6)
  })
  it('should return ten when given an array of three elements with a largest value of 5', () => {
    assert.equal(max_water([5,1,10,5]), 15);
  })
  it('should return 49 when given an array of nine elements with a largest value of 8', () => {
    assert.equal(max_water([1,8,6,2,5,4,8,3,7]), 49)
  })
  it('should return 16 when given an array of 5 elements with a largest value of 4', () => {
    assert.equal(max_water([4,3,2,1,4]), 16)
  })
})

function max_water(arr){
  let area = 0;
  for(let height = 0; height < arr.length; height += 1){
    let curr = arr[height];
    for(let width = arr.length; width > height; width -= 1){
      let newArea = Math.min(curr, arr[width]) * (width - height);
      if(area < newArea){
        area = newArea;
      }
    }
  }
  return area;
}
