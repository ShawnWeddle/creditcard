import _ from "lodash";

export function numberGeneration(columns: number, rows: number, depth: number) {
  console.log(columns, rows);

  const numArray: number[] = [];
  for(let i=0; i<depth; i++){
    numArray[i] = i;
  }

  const firstNum = _.shuffle(numArray)[0];
  const firstRow = [firstNum];

  for(let i=1; i<columns; i++){
    const exlcudedInt = firstRow[i-1];
    const possibleNextNums = _.remove([...numArray], function(n){ 
      return n !== exlcudedInt;
    })
    firstRow[i] = _.shuffle([...possibleNextNums])[0];
  }

  const full2DArray: number[][] = [];
  full2DArray[0] = firstRow; 

  for(let i=1; i<rows; i++){
    full2DArray[i] = [];
    for(let j=0; j<columns; j++){
      const exlcudedIntAbove = full2DArray[i-1][j];
      const exlcudedIntLeft = j > 0 ? full2DArray[i][j-1] : -1;
      const possibleNextNums = _.remove([...numArray], function(n){ 
        if(exlcudedIntLeft === -1){
          return n !== exlcudedIntAbove
        } else {
          return n !== exlcudedIntAbove && n !== exlcudedIntLeft
        }
      })
      const X = _.shuffle([...possibleNextNums])[0];
      full2DArray[i][j] = X;
    }
  }
  return full2DArray.flat();
}