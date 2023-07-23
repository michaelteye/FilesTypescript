import fs from 'fs'

const matches = fs.readFileSync('football.csv',{
    encoding:'utf-8'
}).split('\n').map(
    (row:string):string[]=>{
        return row.split(',')
    }
)

//using enum
enum MatchResults{
     homeWin = 'H',
     awayWin = 'A',
     drew = 'D',
     name = 'Marriner'
};

let manUnitedWins = 0;
for(let match of matches){
    if(match[1]=== 'Man United' && match[5] === MatchResults.homeWin){
        manUnitedWins++
    }
    else if(match[2] === 'Man United' && match[5] === MatchResults.awayWin){
        manUnitedWins++;
    }

}

for(let team of matches){
    if(team[1]=== 'Man United' && MatchResults.name === 'Marriner'){
        console.log('okayu')
    }
    // console.log('the first team is >>>',team[1])
}

console.log(`Man United won ${manUnitedWins} games`)
console.log('the matches are >>>', matches);