function gethistory() {
    return document.getElementById('historyValue').innerText;
}
function printHistory(num)  {
     document.getElementById('historyValue').innerText=num;
}

function getOutput() {
    return document.getElementById('outputValue').innerText;
}
function printOutput(num)  {
    document.getElementById('outputValue').innerText=num;
    
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=Number(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
        }
        else {
            var output=getOutput();
            var history=gethistory();
            
            if(output!="") {
                history=history+output;
                if(this.id=="equal") {
                    output=eval(history);
                    history="";
                    printOutput(output);
                    printHistory(history);
                }
                else {
                    history=history+this.id;
                    output="";
                    printOutput(output);
                    printHistory(history);
                }
            }
        }
    });
}
var number=document.getElementsByClassName('number');
for(var i=0;i<number.length;i++)  {
    number[i].addEventListener('click',function(){
        var output=Number(getOutput());
        if(output!=NaN) { // if output is a number
            output=output+this.id;
            printOutput(output);
        }
    })
}
