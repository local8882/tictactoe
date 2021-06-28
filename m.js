const chalk = require("chalk");
const prompt=require("prompt-sync")({sigint:true});
const figlet = require('figlet')
const a = console;
const b = a.log;


function hasx(string){
return string.toLowerCase().includes("x")
}

function haso(string){
    return string.toLowerCase().includes("o")
}

function handle(option){

    if(option === "1"){
        a.clear()
                figlet("Tic Tac Toe",(err,data)=>{
                    b(chalk.blue(data))
                })
        setTimeout(()=>{
            a.clear()
            var table = `
            \n|____|____|____|\n|____|____|____|\n|____|____|____|`
            b(`
            ${table}
1       2      3
4       5      6
7       8      9 
            `)
            var places = [];
            const bloccs = table.split("\n").join("").split("|")
            for(var i in bloccs){
                if(bloccs[i]==="____"){
                    places.push(bloccs[i])
                }
            }
            var match = false
            while(!match){
                var t = ["x","o"]
                for(var i = 0;i<t.length;i++){
                    b(`${t[i]}'s move.`)
                    const choice = prompt().toLowerCase()
                    const move = parseInt(choice) - 1
                    
                    if(places[move]){
                        if(places[move].includes(t[0]) || places[move].includes(t[1])){
                            b(chalk.red("That spot is taken."))
                            continue
                        }
                        places[move] = `__${t[i]}_`
                        var newc = `
|_${places[0]}__|_${places[1]}__|_${places[2]}|
|_${places[3]}__|_${places[4]}__|_${places[5]}|
|_${places[6]}__|_${places[7]}__|_${places[8]}|
1       2      3
4       5      6
7       8      9 
                        `
                        a.clear()
                        b(newc)
                        function checkifmatch(){
                            if((hasx(places[0]) && hasx(places[1]) && hasx(places[2])))return true;
                            if((hasx(places[3]) && hasx(places[4]) && hasx(places[5])))return true;
                            if((hasx(places[6]) && hasx(places[7]) && hasx(places[8])))return true;
                            if((hasx(places[0]) && hasx(places[3]) && hasx(places[6])))return true;
                            if((hasx(places[1]) && hasx(places[4]) && hasx(places[7])))return true;
                            if((hasx(places[2]) && hasx(places[5]) && hasx(places[8])))return true;
                            if((hasx(places[2]) && hasx(places[4]) && hasx(places[6])))return true;
                            if((hasx(places[0]) && hasx(places[4]) && hasx(places[8])))return true;


                            if((haso(places[0]) && haso(places[1]) && haso(places[2])))return true;
                            if((haso(places[3]) && haso(places[4]) && haso(places[5])))return true;
                            if((haso(places[6]) && haso(places[7]) && haso(places[8])))return true;
                            if((haso(places[0]) && haso(places[3]) && haso(places[6])))return true;
                            if((haso(places[1]) && haso(places[4]) && haso(places[7])))return true;
                            if((haso(places[2]) && haso(places[5]) && haso(places[8])))return true;
                            if((haso(places[2]) && haso(places[4]) && haso(places[6])))return true;
                            if((haso(places[0]) && haso(places[4]) && haso(places[8])))return true;

                        }

                        function istie(){
                            var hasval;
                            for(const place in places){
                                if(hasx(places[place]) || haso(places[place])){
                                    continue
                                } else{
                                    return false
                                }
                            }
                            return true
                        }
                        if(checkifmatch()){
                            const winner = t[i]
                            match = true
                            figlet("GG",(err,data)=>{
                                b(chalk.blue(data))
                            })
                            b(chalk.green(winner + " has won the game!"))
                            b("Press any key to continue")
                            prompt()
                            process.exit()
                        } else if(istie()){
                            match = true
                            figlet("GG",(err,data)=>{
                                b(chalk.blue(data))
                            })
                            b(chalk.green("The game has ended as a tie."))
                            b("Press any key to continue")
                            prompt()
                            process.exit()

                        }
                        
                    } else {
                        b(chalk.red("Invalid Choice."))
                        continue
                    }
                }
            }
        },1000)
    } else if(option === '2'){
        b(chalk.green("Exiting..."))
        setTimeout(()=>{process.exit()},1000)
    } else if(option === "3"){
        b(chalk.blue(`
        ------------------------------------------------
        `))
        b(chalk.yellow(            `
        Modules used: Chalk, Prompt-Sync, figlet
        Made by LocalSimp#0001 aka _Shadow_#4579
        `))
        b(chalk.red(`
        ---------- Press ENTER to continue -------------
        `))
        
        prompt();

    } else {
        b(chalk.red("Invalid Choice") + "\n" + "Exiting...");
        process.exit();
    }
}
b(`
Welcome to the weird gaem!1    
[1] Play                   
[2] Exit                   
[3] Credits                
`)
b("What would you like to do?")
const option = prompt()
handle(option)

