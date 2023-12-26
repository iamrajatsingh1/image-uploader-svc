const { expect } = require('chai');
const path = require('path');
const catService = require('../src/service/catService');

describe('CatService', () => {
    beforeEach(() => {
        // Add sample data for testing
        catService.catPics = [
            { id: 1, filename: 'cat1.jpg' },
            { id: 2, filename: 'cat2.jpg' },
            // Add more sample data as needed
        ];
    });

    it('should return the correct path for a valid cat pic id', () => {
        const result = catService.getCatPicById(1);
        const expectedPath = path.join(__dirname, '../uploads/cat1.jpg');
        expect(result).to.equal(expectedPath);
    });

    it('should return null for an invalid cat pic id', () => {
        const result = catService.getCatPicById(999);
        expect(result).to.be.null;
    });

    it('should return the list of cat pics', () => {
        const result = catService.getListOfCatPics();
        expect(result).to.deep.equal(catService.catPics);
    });

    it('should upload a cat pic and return the new pic details', () => {
        const file = { filename: 'newcat.jpg' };
        const result = catService.uploadCatPic(file);
        const expectedPic = { id: result.id, filename: 'newcat.jpg' };
        expect(catService.catPics.some(pic => pic.id === expectedPic.id)).to.be.true;
    });
    

    it('should delete a cat pic by id', () => {
        const idToDelete = 1;
        const result = catService.deleteCatPic(idToDelete);
        expect(result).to.be.true;
        expect(catService.catPics).to.not.include({ id: 1, filename: 'cat1.jpg' });
    });

    it('should not delete a cat pic for an invalid id', () => {
        const idToDelete = 999;
        const result = catService.deleteCatPic(idToDelete);
        expect(result).to.be.false;
        expect(catService.catPics).to.deep.equal([
            { id: 1, filename: 'cat1.jpg' },
            { id: 2, filename: 'cat2.jpg' },
        ]);
    });

    it('should update a cat pic by id and return the updated pic details', () => {
        const idToUpdate = 1;
        const file = { filename: 'updatedcat.jpg' };
        const result = catService.updateCatPic(idToUpdate, file);
        const expectedUpdatedPic = { id: idToUpdate, filename: 'updatedcat.jpg' };
        expect(result).to.deep.equal(expectedUpdatedPic);
        expect(catService.catPics).to.deep.equal([
            { id: 1, filename: 'updatedcat.jpg' },
            { id: 2, filename: 'cat2.jpg' },
        ]);
    });

    it('should not update a cat pic for an invalid id', () => {
        const idToUpdate = 999;
        const file = { filename: 'updatedcat.jpg' };
        const result = catService.updateCatPic(idToUpdate, file);
        expect(result).to.be.null;
        expect(catService.catPics).to.deep.equal([
            { id: 1, filename: 'cat1.jpg' },
            { id: 2, filename: 'cat2.jpg' },
        ]);
    });
});

