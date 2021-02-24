module.exports = function check(str, bracketsConfig) {
    bracketsConfig = bracketsConfig.flat();
    str = str.split("");
    let stack = [];
    let result = true;
    let index;

    for (let n = 0; n < str.length; n++) {
        index = bracketsConfig.indexOf(str[n]);

        if (index % 2 === 0) {
            bracketsConfig[index] != bracketsConfig[index + 1]
                ? stack.push(index + 1)
                : index;
        } else {
            if (stack.pop() !== index) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
