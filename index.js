function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400) {
    return "This one is on me!";
  }
  else if (distance < 2000) {
    return 'That will be twenty bucks.'
  }
  else if (distance < 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  let isGo;
  city === 'NYC' ? (isGo = "Ok, sounds good.") : (isGo = "No go.");

  return isGo;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response;

  switch(tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous' :
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
      break;
  }
}