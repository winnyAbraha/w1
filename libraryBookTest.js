"use strict";

const assert = require("assert");  
const myExports = require("./app.js");  
const title = myExports.title;  
const author= myExports.author;
const libraryId = myExports.libraryId;
const addBook= myExports. addBook;

describe("library", function () {

    

    const titles = ['Harry poter','FiftyShadesOfGray', "The Road Ahead", "TheRingOfTheYear",];
    const authors = ['fili', 'miki', 'luwam'];
    const ids = [510, 222, 121];


    it("find titles", function () {
        assert.deepEqual( title(), titles);
    });

    it("find authors", function () {
        assert.deepEqual(author(), authors);
    });

    it("find ids", function () {
        assert.deepEqual(libraryId(), ids);
    });

    it("add book", function () {
        const newBook = {title: "My brand new Book", author: "Me ", libraryID: 1145};
        ids.unshift(1144);
        assert.deepEqual( addBook("My brand newBook",  "Me ",  1145), newBook);
        assert.deepEqual(libraryId(), ids);
    });

});