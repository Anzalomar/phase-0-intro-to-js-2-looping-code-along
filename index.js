// Code your solutions in this file
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  // Example usage:
  const names = ["Alice", "Bob", "Charlie"];
  const event = "birthday";
  console.log(writeCards(names, event));
  // Output: ["Thank you, Alice, for the wonderful birthday gift!", "Thank you, Bob, for the wonderful birthday gift!", "Thank you, Charlie, for the wonderful birthday gift!"]
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Example usage:
  countDown(5);
  // Output: 5 4 3 2 1 0
  // Test for writeCards
function testWriteCards() {
    const names = ["Alice", "Bob", "Charlie"];
    const event = "birthday";
    const expectedMessages = [
      "Thank you, Alice, for the wonderful birthday gift!",
      "Thank you, Bob, for the wonderful birthday gift!",
      "Thank you, Charlie, for the wonderful birthday gift!"
    ];
    
    const actualMessages = writeCards(names, event);
    
    if (JSON.stringify(actualMessages) === JSON.stringify(expectedMessages)) {
      console.log("writeCards() test passed!");
    } else {
      console.log("writeCards() test failed!");
    }
  }
  
  // Test for countDown
  function testCountDown() {
    const number = 5;
    const expectedOutput = [5, 4, 3, 2, 1, 0];
    const actualOutput = [];
  
    // Mock console.log to capture the output
    const originalLog = console.log;
    console.log = function(value) {
      actualOutput.push(value);
    };
  
    countDown(number);
  
    // Restore the original console.log
    console.log = originalLog;
  
    if (JSON.stringify(actualOutput) === JSON.stringify(expectedOutput)) {
      console.log("countDown() test passed!");
    } else {
      console.log("countDown() test failed!");
    }
  }
  
  // Run tests
  testWriteCards();
  testCountDown();
  