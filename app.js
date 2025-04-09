let print = console.log;
let todo = [];

let req = prompt("Enter Your Request");

while (true){
    if(req == "quit"){
        print("Quitting app...");
        break;
    }

    if(req=="list"){
        print("------------------");
        for (let i =0 ; i<todo.length;i++){
            print(i, todo[i]);
        }
        print("------------------");
    }else if (req == "add"){
        let task = prompt("Enter the task you want to add");
        todo.push(task);
        print("task added");
    }else if (req == "delete"){
        let idx = prompt("please enter the task index you want to delete");
        todo.splice(idx,1);
        print("task deleted");
    }else{
        print("Invalid Input");
    }
    
    req = prompt("Enter Your Request");
}