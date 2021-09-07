/**
 * @param{string} title
 * @param{strng} author
 * @param{number} libraryId
 * returns  array of sorted tiitle, author, number
 */


 let library = [];
 function addBook(title,author,libraryId){
    let object1 = {};
    object1.title = title; 
    object1.author = author;
    object1.libraryId = libraryId;
    return library.push(object1)
 }
 addBook('Harry poter', 'fili', 510 )
 addBook('FiftyShadesOfGray', 'miki', 222 )
 addBook("TheRingOfTheYear", 'luwam', 121 )
 function title(){
     let titl = [];
     for(let tit of library){
         titl.push(tit.title)
     }
     return titl.sort();
 }
 console.log(title());
 
 function author(){
     let auto = [];
     for(let aut of library){
         auto.push(aut.author)
     }
     return auto.sort();
 }
 console.log(author());
 
 function findLibraryId(){
     let  id = [];
     for(let lib of library){
         id.push(lib.libraryId)
     }
     return id.sort();
 }
 console.log(findLibraryId());