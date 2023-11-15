const countInput = document.getElementById('countInput');
const countOutput = document.getElementById('countOutput');

let interval = null;

const startCounting = () => {
    if(interval){
        clearInterval(interval);   // Stop the previous interval from running
    }
    // When the input is empty then the last input will be taken
    // ??=if(window.localStorage.getItem('lastInput')===null){
    //        value=countInput;
    //}else{ value=window.localStorage.getItem('lastInput')};
    const value = localStorage.getItem('lastInput') ?? countInput.value;
    
    if(value === ''){
        console.error('Please enter a number');
        return;   // End the process if the input is empty
    }
    localStorage.setItem('lastInput', value);   // Get the input as value and save it as a pair to the key
    
    let numberValue = parseInt(value, 10);   // Convert input to integer number
    interval = setInterval(() => {
    //    setInterval(() => {
            // ({}) equals to ('variable', variable)
            console.log({numberValue});

            if(numberValue === 0){
                countOutput.innerHTML = 'Countdown complete!';
                localStorage.removeItem('lastInput');
                // Stop running the code block once it reaches zero
                clearInterval(interval);
                return;
            }
            // Convert value again to string as display
            countOutput.innerHTML = 'Time left '+numberValue+' s'; 
            numberValue = numberValue - 1;
        }, 1000);
   // })
};

document.getElementById('startButton').addEventListener('click', startCounting());