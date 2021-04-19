const prompt = require("prompt-sync")();

const substringIncreasing = (stringLength, string) =>
{

    let allSubLengths = [];
    let i = stringLength;
    for(i; i > 0; i--)
    {   
        let subLength = 0;

        let repeticao = 0;
        for(let j = i - 1; j >= -1; j--)
        {
            
               let strAnt;
               let nAnt;
               let str;
               let n;                                                                                             
            if(j > 0){
                 strAnt = string[j-1];
                 nAnt = strAnt.charCodeAt(0);    
            }
            else
            {
                 nAnt = 500;
            }
            if(j === -1)
            {
                 n = 1;
            }
            else
            {
                 str = string[j];
             n = str.charCodeAt(0);
            }
            repeticao++;
            if(n < nAnt || n === nAnt)
            {
                subLength++;
                allSubLengths.push(subLength);
                break;
            }
            else if(n > nAnt)
            {
                subLength++;
            }
            else if(j === 0)
            {
                allSubLengths.push(subLength);
                break;
            }
            
        }
        
    }
        return allSubLengths.reverse().join(""); 
}

const solution = () => {
let testNumber = prompt();
let answer = [];
for(let i = 0; i < testNumber; i++)
{
    let stringLength = prompt();
    let string = prompt();
    parseInt(stringLength);
    let substrings = substringIncreasing(stringLength, string);
    let caso = i + 1;
    correctStrings = substrings.split("").join(" ");
    
    let caseString = ("Case #" + caso + ": " + correctStrings);
    answer.push(caseString);
}
for(let i = 0; i < testNumber; i++)
{
    console.log(answer[i]);
}
}

solution();