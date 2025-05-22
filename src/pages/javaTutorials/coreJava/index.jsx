import React, { useState } from 'react';

const questions = [
    // Control Structures (1-10)
    {
        question: "1. What is the output of this code?\n\nint x = 5;\nif (x < 10) {\n  System.out.println(\"Less than 10\");\n} else {\n  System.out.println(\"10 or more\");\n}",
        options: {
            A: "10 or more",
            B: "Less than 10",
            C: "Error",
            D: "Nothing"
        },
        answer: "B"
    },
    {
        question: "2. Which loop is guaranteed to execute at least once?",
        options: {
            A: "for loop",
            B: "while loop",
            C: "do-while loop",
            D: "infinite loop"
        },
        answer: "C"
    },
    {
        question: "3. What does the break statement do inside a loop?",
        options: {
            A: "Skips current iteration",
            B: "Exits the loop",
            C: "Exits the program",
            D: "None of the above"
        },
        answer: "B"
    },
    {
        question: "4. Which of the following is valid syntax?",
        options: {
            A: "if x == 5:",
            B: "if (x = 5)",
            C: "if (x == 5)",
            D: "if x = 5:"
        },
        answer: "C"
    },
    {
        question: "5. What is the purpose of the continue statement?",
        options: {
            A: "Stops loop completely",
            B: "Skips the next iteration",
            C: "Skips current iteration and moves to next",
            D: "None of the above"
        },
        answer: "C"
    },
    {
        question: "6. A switch statement works with which types?",
        options: {
            A: "int, char, String (Java 7+)",
            B: "float",
            C: "double",
            D: "boolean"
        },
        answer: "A"
    },
    {
        question: "7. What will this print?\n\nfor(int i = 0; i < 3; i++) {\n  System.out.print(i + \" \");\n}",
        options: {
            A: "0 1 2",
            B: "1 2 3",
            C: "0 1 2 3",
            D: "Infinite loop"
        },
        answer: "A"
    },
    {
        question: "8. Which of the following can cause an infinite loop?",
        options: {
            A: "Missing increment in a for loop",
            B: "Using while(true) without break",
            C: "Wrong condition",
            D: "All of the above"
        },
        answer: "D"
    },
    {
        question: "9. How many times will this print?\n\nint i = 0;\nwhile (i < 3) {\n  System.out.print(i);\n  i++;\n}",
        options: {
            A: "0",
            B: "3",
            C: "4",
            D: "Infinite"
        },
        answer: "B"
    },
    {
        question: "10. Which loop is best when the number of iterations is known?",
        options: {
            A: "while",
            B: "do-while",
            C: "for",
            D: "foreach"
        },
        answer: "C"
    },
    // Arrays (11-17)
    {
        question: "11. How do you declare an array in Java?",
        options: {
            A: "int arr = new int[5];",
            B: "int[] arr = new int[5];",
            C: "array int arr[5];",
            D: "int arr[] = 5;"
        },
        answer: "B"
    },
    {
        question: "12. What is the index of the first element in an array?",
        options: {
            A: "-1",
            B: "0",
            C: "1",
            D: "Depends"
        },
        answer: "B"
    },
    {
        question: "13. What happens if you access an index out of bounds?",
        options: {
            A: "0 is returned",
            B: "null is returned",
            C: "ArrayIndexOutOfBoundsException",
            D: "Compile error"
        },
        answer: "C"
    },
    {
        question: "14. What does arr.length return?",
        options: {
            A: "Number of characters",
            B: "Size of memory",
            C: "Number of elements",
            D: "Last index"
        },
        answer: "C"
    },
    {
        question: "15. Which of the following correctly initializes an array?",
        options: {
            A: "int[] a = {1,2,3};",
            B: "int a = {1,2,3};",
            C: "int a[] = new int(3);",
            D: "int[] a = new int[];"
        },
        answer: "A"
    },
    {
        question: "16. What will this output?\n\nint[] a = {1, 2, 3};\nSystem.out.println(a[1]);",
        options: {
            A: "1",
            B: "2",
            C: "3",
            D: "Error"
        },
        answer: "B"
    },
    {
        question: "17. Which loop is used to traverse an array?",
        options: {
            A: "for",
            B: "while",
            C: "enhanced for",
            D: "All of the above"
        },
        answer: "D"
    },
    // OOP in Java (18-25)
    {
        question: "18. What does OOP stand for?",
        options: {
            A: "Object-Over Programming",
            B: "Object-Oriented Programming",
            C: "Ordered-Oriented Programming",
            D: "Object Order Process"
        },
        answer: "B"
    },
    {
        question: "19. Which is not a principle of OOP?",
        options: {
            A: "Encapsulation",
            B: "Inheritance",
            C: "Compilation",
            D: "Polymorphism"
        },
        answer: "C"
    },
    {
        question: "20. Which keyword is used to create a class object?",
        options: {
            A: "class",
            B: "new",
            C: "public",
            D: "return"
        },
        answer: "B"
    },
    {
        question: "21. What is the output?\n\nclass A {\n  void sayHi() {\n    System.out.println(\"Hi\");\n  }\n}\npublic class Test {\n  public static void main(String[] args) {\n    A a = new A();\n    a.sayHi();\n  }\n}",
        options: {
            A: "Hi",
            B: "Error",
            C: "Nothing",
            D: "Compilation fails"
        },
        answer: "A"
    },
    {
        question: "22. What is encapsulation?",
        options: {
            A: "Hiding data implementation",
            B: "Using many classes",
            C: "Inheriting from parent class",
            D: "Overloading functions"
        },
        answer: "A"
    },
    {
        question: "23. Which keyword is used to inherit from a class?",
        options: {
            A: "implements",
            B: "extends",
            C: "inherits",
            D: "override"
        },
        answer: "B"
    },
    {
        question: "24. What is polymorphism?",
        options: {
            A: "Using different forms of same method",
            B: "Using arrays",
            C: "Using loops",
            D: "Using classes"
        },
        answer: "A"
    },
    {
        question: "25. What is method overloading?",
        options: {
            A: "Reusing method names with different parameters",
            B: "Inheriting method from parent",
            C: "Having too many methods",
            D: "Multiple return types"
        },
        answer: "A"
    },
    // Programming Concepts & Design (26-30)
    {
        question: "26. What does DRY stand for?",
        options: {
            A: "Don't Repeat Yourself",
            B: "Don't Run Yourself",
            C: "Don't Rewrite Yields",
            D: "Don't Reuse Yields"
        },
        answer: "A"
    },
    {
        question: "27. What is a variable?",
        options: {
            A: "A fixed value",
            B: "A location to store data",
            C: "A loop",
            D: "A constant"
        },
        answer: "B"
    },
    {
        question: "28. What is a function?",
        options: {
            A: "A type of class",
            B: "A block of reusable code",
            C: "A loop",
            D: "A compiler"
        },
        answer: "B"
    },
    {
        question: "29. What is the purpose of a constructor in Java?",
        options: {
            A: "Destroy an object",
            B: "Build UI",
            C: "Initialize object",
            D: "Create files"
        },
        answer: "C"
    },
    {
        question: "30. Which principle is violated when a class does too many unrelated things?",
        options: {
            A: "SRP (Single Responsibility Principle)",
            B: "OCP (Open Closed Principle)",
            C: "LSP (Liskov Substitution)",
            D: "DRY"
        },
        answer: "A"
    }
];

const QuizApp = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleOptionClick = (optionKey) => {
        setSelectedOption(optionKey);
    };

    const handleNext = () => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        const next = currentQuestion + 1;
        if (next < questions.length) {
            setCurrentQuestion(next);
            setSelectedOption(null);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setSelectedOption(null);
        setShowResult(false);
    };

    return (
        <div className="max-w-xl mx-auto p-4 font-sans">
            <h1 className="text-2xl font-bold mb-4">Java Fundamentals Quiz</h1>

            {showResult ? (
                <div className="text-center">
                    <h2 className="text-xl mb-4">Your score: {score} / {questions.length}</h2>
                    <button
                        onClick={restartQuiz}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Restart Quiz
                    </button>
                </div>
            ) : (
                <div>
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold">
                            Question {currentQuestion + 1} of {questions.length}
                        </h2>
                        {/*<p className="mt-2 whitespace-pre-wrap">{questions[currentQuestion].question}</p>*/}

                        <pre className="mt-2 whitespace-pre-wrap font-mono text-sm bg-gray-100 p-3 rounded">{questions[currentQuestion].question + '\n\n'}
                        </pre>

                    </div>
                    <div className="space-y-2">
                        {Object.entries(questions[currentQuestion].options).map(([key, value]) => (
                            <div
                                key={key}
                                onClick={() => handleOptionClick(key)}
                                className={`p-3 border rounded cursor-pointer ${
                                    selectedOption === key
                                        ? 'bg-blue-100 border-blue-400'
                                        : 'border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                <span className="font-bold">{key}.</span> {value}
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={handleNext}
                        disabled={!selectedOption}
                        className={`mt-4 px-4 py-2 text-white rounded ${
                            selectedOption
                                ? 'bg-green-500 hover:bg-green-600'
                                : 'bg-gray-300 cursor-not-allowed'
                        }`}
                    >
                        {currentQuestion + 1 === questions.length ? 'Finish' : 'Next'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuizApp;