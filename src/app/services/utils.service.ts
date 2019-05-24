export class UtilsService {

  constructor() { }

  static sortOnTime(data) {
    return data.sort((a,b) => {
      return a.time-b.time
    })
  }

  static combineUtterance(data) {
    const combineArr = [];
    for(let i=0; i<data.length; i++) {
      const mergeUtterArr = [data[i]];
      for(let j=i+1; j<data.length; j++) {
        if(data[i].speaker === data[j].speaker) {
          mergeUtterArr.push(data[j])
        } else {
          break;
        }
        i=j;
      }
      const tempObj = {
        snippetArr: mergeUtterArr,
        speaker:data[i].speaker
      }
      combineArr.push(tempObj);
    }
    return combineArr;
  }
}
