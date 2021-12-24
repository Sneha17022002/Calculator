let screen = document.getElementById('screen');
button = document.querySelectorAll('button');
let screenValue = '';
statusi = false;
document.getElementById("onbtn").addEventListener('click', (f) => {
    buttonText = f.target.innerText;
    if (buttonText == "Power") {
        statusi = true;
        screen.value = "Power On";
        screenValue = ' ';
    }
    for (item of button) {
            item.addEventListener('click', (e) => {
            buttonText = e.target.innerText;

        if (statusi == false) {
            screen.value = "Turn on power";
        }
        else {
                if (buttonText == 'X' && statusi == true) {
                    buttonText = '*';
                    screenValue += buttonText;
                    screen.value = screenValue;
                }
                else if (buttonText == 'C' && statusi == true){
                    screenValue = " ";
                    screen.value = screenValue;
                }
                else if (buttonText == '=' && statusi == true) {
                    screen.value = eval(screenValue);
                }
                else if (buttonText == 'Enter' && statusi == true) {
                    buttonText ="="
                    screen.value = eval(screenValue);
                }
                else if (buttonText == 'BACK' && statusi == true) {
                    backspace = screen.value;
                    restNum = backspace.slice(0, -1);
                    screenValue = restNum;
                    screen.value = screenValue;
                }
                else if(statusi==true && buttonText == 'Power'){
                    statusi = false;
                    screen.value = "Power Off";
                    return;
                } 
                    
                else {
                    if (statusi == true){
                        screenValue += buttonText;
                        screen.value = screenValue;
                    }
                }
           }
        });
    }
})

