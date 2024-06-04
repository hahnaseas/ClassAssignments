// Hahna Seaman, Wk5 Lab, 2/14/23

// creating array, I decided to do professors I have this semester
let professors = new Array(4);
professors[0] = "Sharon Hoover";
professors[1] = "Michelle Loomis";
professors[2] = "Larry Ray";
professors[3] = "Chris Gillis";

// accessing items in an array
document.write(professors[0] + professors[1] + professors[2] + professors[3]);

// sorting array alphabetically and ascending
professors.sort();

// display each value with space and commas between names while appearing on a new line 
document.write(sortedProfessors.join('\n'));
