/* const print_test_3 = require('./test_3.js') */
import {print_test_3} from "./test_3.js";

var global_var = "Globalna varijabla";

export function print_test_2() {
    console.log("Message from test_2.js");
    console.log(window);
}
/* print_test_3(); */

/* module.exports = print_test_2; */