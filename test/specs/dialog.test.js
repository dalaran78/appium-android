const dialog = require('../../pageObjects/dialog.page');
const data = require('../../data/data');
const expected = require('../../data/expected');
const expect = require('chai').expect;

describe('Dialog', ()=>{
    // // Execute a block of code before every test
    beforeEach(() => {

    });

    it('Verify that the text entry dialog username & password fields are editable', async ()=>{
        await (await (dialog.appBtn)).click();
        await (await (dialog.alertDialogBtn)).click();
        await (await (dialog.textEntryDialogBtn)).click();

        await (await (dialog.userNameField)).addValue(data.inputFieldDialog.login1);
        await (await (dialog.userNameField)).clearValue();
        await (await (dialog.userNameField)).addValue(data.inputFieldDialog.login2);

        await (await (dialog.passwordField)).clearValue();
        await (await (dialog.passwordField)).addValue(data.inputFieldDialog.password);

        let text = await (await (dialog.userNameField)).getText();
        console.log(text);
        expect(text).equal(expected.inputFieldDialog.login2);

    });

        // Execute a block of code after every test
        afterEach(() => {
            driver.reset();
        });

});
