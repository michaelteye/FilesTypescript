"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8'
}).split('\n').map((row) => {
    return row.split(',');
});
//using enum
var MatchResults;
(function (MatchResults) {
    MatchResults["homeWin"] = "H";
    MatchResults["awayWin"] = "A";
    MatchResults["drew"] = "D";
    MatchResults["name"] = "Marriner";
})(MatchResults || (MatchResults = {}));
;
let manUnitedWins = 0;
for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === MatchResults.homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResults.awayWin) {
        manUnitedWins++;
    }
}
for (let team of matches) {
    if (team[1] === 'Man United' && MatchResults.name === 'Marriner') {
        console.log('okayu');
    }
    // console.log('the first team is >>>',team[1])
}
console.log(`Man United won ${manUnitedWins} games`);
console.log('the matches are >>>', matches);
