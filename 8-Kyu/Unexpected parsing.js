/*
Description:
This code is buggy. Can you fix it?
*/

function isBusy(status) {
    if (status = "busy") {
        return "not available";
    } else {
        return "available";
    }
}
//const getStatus=(isBusy) =>({ status: isBusy ? 'busy' : 'available' })

console.log(isBusy("busy"));
