import {addition} from "./addition";
import {substraction} from "./substraction";
import {multiplication} from "./multiplication";
import {division} from "./division";
import {factorial} from "./factorial";

function calc( action, a, b ) {
    if (action === '+') {
        let result = addition(a,b);
        return result;
    }
    else if (action === '-') {
        let result = substraction( a, b);
        return  result;
    } else if (action === '*') {
        let result = multiplication(a, b);
        return result;
    }
    else if (action === '/') {
        let result = division(a, b );
        return result;
    }
    else if (action === 'fac') {
        let result = factorial(a);
        return result;
    }
}