const getTheTitles = function (books) {
    const titles = books.reduce((accumulator, book) => {
        accumulator.push(book["title"]);
        return accumulator;
    }, []);
    return titles;


    // 2éme version avec boucle for of
    // let titles = [];
    // for(let book of books){
    //     titles.push(book["title"]);
    // }
    // return titles;

};

// Do not edit below this line
module.exports = getTheTitles;
