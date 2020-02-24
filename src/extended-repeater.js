module.exports = function repeater(str, options) {    
    let string = '';
    if (options.separator == undefined) {
        options.separator = '+';
    }
    if (options.additionSeparator == undefined) {
        options.additionSeparator = '|';
    }
    if (typeof options.str != 'string') {
        options.str = String(options.str);
    }
    if (typeof options.addition != 'string') {
        options.addition = String(options.addition);
    }
    if (typeof options.repeatTimes != 'number') {
        options.repeatTimes = 0;
    }
    if (typeof options.additionRepeatTimes != 'number') {
        options.additionRepeatTimes = 0;
    }
    for (let i = 0; i < options.repeatTimes; i++) {
        string += str;
        for (let i = 0; i < options.additionRepeatTimes; i++) {
            string += options.addition;
            if (i != options.additionRepeatTimes - 1) {
                string += options.additionSeparator;
            }    
        }
        if (i != options.repeatTimes - 1) {
            string += options.separator;
        }
    }
    if (string == '') {
        string = str;
        if (options.addition != '') {
            string += options.addition;
        }
    }
    
    return string;
};
  