function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

/*
Write a script that, after clicking the "Start" button, 
changes the <body> background color once a second to a random value using the inline style. 
When clicking on the "Stop" button, background color change must stop.
*/
