let re, str;
// Brackets [] - Character Sets
str = 'Gray?!';
re = /gr[ae]?y/i;      // Must be A or E
test(re, str, "Must be A or E");

re = /[^GF]ray/i;      // ^ will match anything exept G or F
test(re, str, " ^ will match anything exept G or F");

str = 'Xray?!';
re = /[^GF]ray/i;      // ^ will match anything exept G or F
test(re, str, " ^ will match anything exept G or F");

str = 'Xray?!';
re = /[A-Z]ray/i;      // match any uppercase letter from A to Z
re = /[a-z]ray/i;      // match any lowercase letter from a to z
re = /[A-Za-z]ray/i;      // match any uppercase and lowercase letters
re = /[0-9]ray/i;      // match any numbers
test(re, str, "match any uppercase letter from A to Z");

// Braces {} - Quantifiers
str = 'Hello World!';
re = /Hel{2}o/i;    // Quantifiers - Must occur exatly {n} amount of times
test(re, str, "Quantifiers - Must occur exatly {n} amount of times");

str = 'Hellllo World!';
re = /Hel{1,5}o/i;    // Quantifiers - Must occur n to m amount of times
test(re, str, "Quantifiers - Must occur n to m amount of times");

str = 'Hellllo World!';
re = /Hel{2,}o/i;    // It most ocure at least {n,} times! In other words from 2 to infinity
test(re, str, "It most ocure at least {n,} times! In other words from 2 to infinity");

// Parentheses () - Grouping
str = '3x3x3x';
re = /([0-9]x){3}/i;    // Grouping -
test(re, str, "Grouping - ");

// Log Results
function test(re, str, msg) {
    console.warn(`| --------------"${re}", "${str}"-------------- | ${msg ? msg : ""}`)
    const result = re.exec(str);
    console.log(result);

    if (re.test(str)) {
        // console.log(re.test(str)); // returns true or false
        console.log(`${str} matches ${re.source}`);
        console.log('\n');
    } else {
        console.log(`${str} does NOT match ${re.source}`);
        console.log('\n');
    }
}