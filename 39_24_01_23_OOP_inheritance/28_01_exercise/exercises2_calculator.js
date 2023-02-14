/* 
    2.
    You need to create some kind of calculator.
    The argument passed to run(instructions) will always be a 
    string containing a series of instructions.
    The instruction set of the calculator will be this:
    + (plus): Pop the last 2 values from the stack, add them, and push the result onto the stack.
    - (minus): Pop the last 2 values from the stack, subtract the lower 
        one from the topmost one, and push the result.
    * (multiple): Pop the last 2 values, multiply, and push the result.
    / (divide): Pop the last 2 values, divide the topmost one 
        by the lower one, and push the result.
    
    DUP: Duplicate (not double) the top value on the stack.
    POP: Pop the last value from the stack and discard it.
    PSH: Performed whenever a number appears as an instruction. Push the number to the stack.
    Any other instruction (for example, a letter) should result 
    in the value "Invalid instruction: [instruction]".

    Examples:
    StackCalc("") ➞ 0

    StackCalc("5 6 +") ➞ 11

    StackCalc("3 DUP +") ➞ 6

    StackCalc("6 5 5 7 * - /") ➞ 5

    StackCalc("x y +") ➞ Invalid instruction: x

    If there are no instructions, the value should remain 0.
    The return value of get value() should be the topmost value on the stack.
    Be careful with methods in this class!
*/

class StackCalc{
    constructor(instructions) {
        this.instructions = instructions;
    }




}