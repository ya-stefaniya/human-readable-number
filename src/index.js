const ones  = ['','one','two','three','four','five','six','seven','eight','nine','','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const teens = ['','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const dozens  = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']; 

module.exports = toReadable = num =>{
      if(num === 0) return 'zero';
      if (num < 10) return ones[num];
      if (num%10===0) return checkFullNumber(num);
      else if (num >= 10 && num < 20) return teens[num-10];
      else if (num >= 20 && num < 100) return getNumber(num);
      else if (num >= 100 && num < 1000) return getNumberHundred(num);
    };
    getNumber = num => {
      num = num.toString().split(''); // 23 => [2,3]
      return dozens[num[0]] +' '+ones[num[1]];
    };
    getNumberHundred = num =>{
       num = num.toString().split(''); 
       if (num[1]==='1') return ones[num[0]] +' '+ 'hundred'+' ' + teens[num[2]];
       else if (num[1]==='0') return ones[num[0]] +' '+ 'hundred'+' ' + ones[num[2]];
       else return ones[num[0]] +' '+ 'hundred'+' '+ dozens[num[1]] + ' ' + ones[num[2]];
    };
   checkFullNumber= num =>{
     num = num.toString().split('');
      if (num.length === 2) return dozens[num[0]];
      if (num.length === 3) return num[1]=='0' ? ones[num[0]] +' '+'hundred' : ones[num[0]] +' '+ 'hundred'+' '+dozens[num[1]];   
   };
