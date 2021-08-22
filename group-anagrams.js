var assert = require('assert');

describe("group_anagrams", () => {
  it('should return one group of anagrams from a list of anagrams', () => {
    assert.deepEqual(group_anagrams(["nat", "tan"]), [["nat", "tan"]])
  })
  it('should return two groups of anagrams from a list of two different anagrams', () => {
    assert.deepEqual(group_anagrams(["nat", "tin"]), [["nat"], ["tin"]])
    assert.deepEqual(group_anagrams(["nat", "tin", "nit"]), [["nat"], ["tin", "nit"]])
    assert.deepEqual(group_anagrams(["nat", "tin", "nit", "tan", "ant"]), [["nat", "tan", "ant"], ["tin", "nit"]])
  })
  it('should return three groups of anagrams from a list of three different anagrams', () => {
    assert.deepEqual(group_anagrams(["eat","tea","tan","ate","nat","bat"]), [["eat","tea", "ate"], ["tan", "nat"], ["bat"]]);
  })

})

function group_anagrams(list){
  let retList = [];
  for(let i = 0; i < list.length; i++){
    let str = list[i];
    if(str !== -1){
      let anagramGroup = [str];
      for(let j = i + 1; j < list.length; j++){
        let str2 = list[j];
        if(str.length === str2.length){
          let letterCountOfStr = {};
          let letterCountOfStr2 = {};
          for(let k = 0; k < str.length; k++){
            letterCountOfStr[str.charAt(k)] ?
            letterCountOfStr[str.charAt(k)] += 1
            : letterCountOfStr[str.charAt(k)] = 1;

            letterCountOfStr2[str2.charAt(k)] ?
            letterCountOfStr2[str2.charAt(k)] += 1
            : letterCountOfStr2[str2.charAt(k)] = 1;

          }
          if(isEqual(letterCountOfStr, letterCountOfStr2)){
            anagramGroup.push(str2)
            list[j] = -1;
          }
        }
      }
      retList.push(anagramGroup);
    }
  }
  return retList;
}

function isEqual(obj1, obj2){
  for(let item in obj1){
    if(obj2[item] === undefined || obj2[item] < 1){
      return false;
    } else {
      obj2[item] -= 1;
    }
  }
  return true;
}
