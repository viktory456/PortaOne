'use client'

const array = ['942517', '605676', '498291', '668826', '357057', '478151', '315629', '007148', '252887', '421662', '284505', '467650', '115330', '648206', '207562', '612298', '576885', '294200', '847595', '021597', '074878', '801997', '585401', '168510', '385293', '151863', '022142', '340350', '976151', '337989', '863284', '488310', '303887', '939173', '331413', '905657', '833617', '170794', '094486', '551394', '943693', '147970', '400196', '537505', '367493', '117178', '675840', '868721', '519081', '735564', '401733', '915348', '169233', '324651', '958675', '368753', '861460', '401341', '343222', '794373', '816374', '535119', '188234', '577779', '097792', '729303', '782637', '148159', '830641', '716890', '397853', '871196', '277603', '749226', '839595', '131852', '409432', '810698', '456030', '529185', '758823', '265024', '051041', '699031', '737269', '139340', '730977', '249786', '039931', '055669', '100107', '653178', '279773', '336550', '332847', '685485', '423269', '193536', '890062', '377637', '595777', '412134', '322736', '546929', '616370', '767332', '781184', '920944', '851005', '258850', '064083', '051202', '427711', '359855', '540928', '314284', '085261', '880969', '649699', '064881', '705423', '646927', '252556', '272007', '217511', '620286', '229724', '108865', '124636', '231417', '961201', '658432', '775416', '246027', '854036', '687762', '389097', '013153', '417085', '919198', '988711', '488665']


  function readArray(arr: string[]) {

    let firstDigits =[];
    let lastDigits =[];
    let sortedArray =[arr[0]];
   
    for (let i = 0; i < arr.length; i++) {
      // const aa = arr[i].slice(0,2);
      const zz = arr[i].slice(4,6);
      // firstDigits[i] = aa
      lastDigits[i] = zz


        let j = i+1;
        // For current index i, check for pattern match
        while (j < arr.length) {
          const aa = arr[j].slice(0,2);
          if(zz === aa) {
            sortedArray.push(arr[j])
          }
            j++;
        }
        // If pattern matches at index i
        // if (j === M) {
        //     console.log(`Pattern found at index ${i}`);
        // }

    }

    // for (let i=0; i < lastDigits.length; i++) {
    //     search(lastDigits[i], firstDigits)

    // }


    // sortedArray = firstDigits.concat(lastDigits).sort((a, b) => a.localeCompare(b));
    console.log(sortedArray);


    // for (let i = 0; i < lastDigits.length; i++){
    //   const digit = Number(lastDigits[i]);
    //   for (let j=1; j < lastDigits.length-i; j++){
    //     if (digit === Number(lastDigits[j])) {
    //       console.log(`Two adjacent numbers are the same: digit- ${digit}, index- ${j}`);
    //     } else {
    //       break;
    //     }
    //   }
    // }

    // console.log(lastDigits);
  }

  readArray(array);