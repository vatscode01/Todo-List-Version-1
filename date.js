module.exports.getDate = function (){
    const today = new Date();
    const options = {
        date: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long'
    };
    const date = today.toLocaleDateString("hi-IN",options);
    return date;
}

module.exports.getDay = function (){
    const today = new Date();
    const options = {
        weekday: 'long'
    };
    const date = today.toLocaleDateString("hi-IN",options);
    return date;
}

// console.log(module.exports);