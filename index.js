const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("===== Student Grade Calculator =====");

rl.question("Enter student name: ", (name) => {

    rl.question("Enter mark 1: ", (mark1) => {

        rl.question("Enter mark 2: ", (mark2) => {

            rl.question("Enter mark 3: ", (mark3) => {

                mark1 = Number(mark1);
                mark2 = Number(mark2);
                mark3 = Number(mark3);

                const average = (mark1 + mark2 + mark3) / 3;

                let grade;

                if (average >= 80) {
                    grade = "A";
                } else if (average >= 70) {
                    grade = "B";
                } else if (average >= 60) {
                    grade = "C";
                } else if (average >= 50) {
                    grade = "D";
                } else {
                    grade = "F";
                }

                const result = average >= 50 ? "PASS" : "FAIL";

                console.log("\n===== Result =====");
                console.log("Student Name :", name);
                console.log("Average      :", average.toFixed(2));
                console.log("Grade        :", grade);
                console.log("Result       :", result);

                rl.close();
            });
        });
    });
});