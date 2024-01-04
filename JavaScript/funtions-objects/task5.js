var signal = 'red';

if(signal == 'red'){
    console.log("Don't cross the road, its dangerous.");
}
else if(signal == 'yellow'){
    console.log("Wait...");
}
else if(signal == 'green'){
    console.log("You can cross the road.");
}
else{
    console.log("System error! Use your brain.")
}

switch(signal){
    case 'red':
        console.log('Red light. Stop! Do not cross the road.');
        break;
    case 'yellow':
        console.log('Yellow light. Wait...');
        break;
    case 'green':
        console.log('Green light. You can cross the road.');
        break;
    default:
        console.log("Error. Use your brain.");
}