function shout(string){
  return string.toUpperCase();
}
console.log (shout("hello"));

function whisper(string){
  return string.toLowerCase();
}
console.log (whisper("hi there"));

function logShout(string) {
  console.log (string.toUpperCase());
}

function logWhisper(string){
  console.log (string.toLowerCase());
}

function sayHiToHeadphonedRoommate (string){
  const cantHear = "I can't hear you!";
  const iCanHear = "YES INDEED!";
  const loveAnswer = "I would love to!";
  if (string.toLowerCase(string) === string){
    return cantHear;
  }
  else if (string.toUpperCase(string) === string){
    return iCanHear;
  }
  else if ("Let's have dinner together!" === string){
    return loveAnswer;
  }
}
