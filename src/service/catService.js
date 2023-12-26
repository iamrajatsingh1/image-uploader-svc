const fs = require('fs');
const path = require('path');
const ROOT_DIR = path.join(__dirname, '../../');

class CatService {
    constructor() {
        this.catPics = [];
    }

    getCatPicById(id) {
        const catPic = this.catPics.find(pic => pic.id === id);
        return catPic ? path.join(ROOT_DIR, 'uploads', catPic.filename) : null;
    }

    getListOfCatPics() {
        return this.catPics;
    }

    uploadCatPic(file) {
        const newCatPic = {
            id: Date.now(),
            filename: file.filename,
        };
        this.catPics.push(newCatPic);
        return newCatPic;
    }

    deleteCatPic(id) {
        const index = this.catPics.findIndex(pic => pic.id === id);
        if (index !== -1) {
            const deletedPic = this.catPics.splice(index, 1)[0];
            const filePath = path.join(ROOT_DIR, 'uploads', deletedPic.filename);
            try {
                fs.unlinkSync(filePath);
            } catch (error) {
                // Handle error, log it or ignore if the file doesn't exist
                console.log("Error occured while deleting", error.message);
            }
        }
        return index !== -1;
    }

    updateCatPic(id, file) {
        const index = this.catPics.findIndex(pic => pic.id === id);
        if (index !== -1) {
            const currentFilename = this.catPics[index].filename;
            const filePath = path.join(ROOT_DIR, 'uploads', currentFilename);
    
            try {
                fs.unlinkSync(filePath);
            } catch (error) {
                // Handle error, log it or ignore if the file doesn't exist
                console.log("Error occured while updating", error.message);
            }
    
            const updatedPic = {
                id: id,
                filename: file.filename,
            };
    
            this.catPics[index] = updatedPic;
            return updatedPic;
        }
        return null;
    }
}

module.exports = new CatService();
