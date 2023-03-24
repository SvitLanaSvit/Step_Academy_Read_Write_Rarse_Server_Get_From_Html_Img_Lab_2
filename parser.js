const fs = require("fs");
const EventEmmiter = require('events');
const nameEvent = "greet";

// var Parser = function(filepath) {
//     this.filepath = filepath;
// };

// Parser.prototype.parse = function(){
//     var text = fs.readFileSync(this.filepath, 'utf-8');
//     var lines = text.split('\n');
//     var wordCounts = {};

//     lines.forEach(function(line){
//         var words = line.split(' ');

//         words.forEach(function(word){
//             if(word in wordCounts){
//                 wordCounts[word]++;
//             }
//             else{
//                 wordCounts[word] = 1;
//             }
//         });
//     });

//     for(var word in wordCounts){
//         wordCounts[word] = parseInt(wordCounts[word]); 
//     }

//     //this.emit(nameEvent, this.filepath);
//     return wordCounts;
// };

class Parser extends EventEmmiter{
    constructor(filepath){
        super();
        this.filepath = filepath;
    }

    parse(){
        var text = fs.readFileSync(this.filepath, 'utf-8');
        var lines = text.split('\n');
        var wordCounts = {};

        lines.forEach(function(line){
            var words = line.split(' ');

            words.forEach(function(word){
                if(word in wordCounts){
                    wordCounts[word]++;
                }
                else{
                    wordCounts[word] = 1;
                }
            });
        });

        for(var word in wordCounts){
            wordCounts[word] = parseInt(wordCounts[word]); 
        }

        this.emit(nameEvent, this.filepath);
        return wordCounts;
    }
}

module.exports = Parser;