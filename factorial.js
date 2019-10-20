export function factorial( a )  {
    let fac = 1
    while (a != 0) {
        fac *= a;
        a--;
    }
    return fac;
}