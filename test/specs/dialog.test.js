const dialog = require('../../pageObjects/dialog.page');
const data = require('../../data/data');
const expected = require('../../data/expected');
const expect = require('chai').expect;

describe('Dialog', ()=>{
    // // Execute a block of code before every test
    beforeEach(() => {

    });

    it('TC-001 | Verify that the text entry dialog username & password fields are editable', async ()=>{
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

    it('TC-002 | Verify that the app adjust when orientation is switched', async () => {
        console.log(driver.getOrientation());
        await driver.setOrientation('landscape');

        await driver.saveScreenshot('./screenshots/landscape.png');
        await (await ( dialog.appBtn)).click();

        await driver.setOrientation('portrait');
        await driver.back();
        await driver.saveScreenshot('./screenshots/portrait.png');
    });

    it.only('TC-003 | Verify isSelected, isEnabled & isDisplayed', async () => {
        await (await (dialog.viewBtn)).click();
        driver.touchAction([
            { action: 'press', x: 500, y: 1600 },
            { action: 'moveTo', x: 500, y: 300 },
            'release',
            { action: 'press', x: 500, y: 1600 },
            { action: 'moveTo', x: 500, y: 300 },
            'release',
            { action: 'press', x: 500, y: 1600 },
            { action: 'moveTo', x: 500, y: 300 },
            'release'
        ]);

        await (await (dialog.tabsBtn)).click();
        await (await (dialog.contentByIdBtn)).click();

        // let isEnabled, isSelected, isDisplayed;

        // for(i=0; i<3; i++){
        //     isEnabled = await (await (dialog.tabs[i])).isEnabled();
        //     isSelected = await (await (dialog.tabs[i])).isSelected();
        //     isDisplayed = await (await (dialog.tabs[i])).isDisplayed();

        //     console.log(`Tab ${i+1}`)
        //     console.log('isEnabled:', isEnabled);
        //     console.log('isSelected:', isSelected);
        //     console.log('isDisplayed:', isDisplayed);

        //     if(isEnabled && isSelected){
        //         console.log("Tab Details 1:", await (await (dialog.tab1Details)).isDisplayed());
        //         console.log("Tab Details 2:", await (await (dialog.tab2Details)).isDisplayed());
        //         console.log("Tab Details 3:", await (await (dialog.tab3Details)).isDisplayed());
        //     }
        // }
    });

        // Execute a block of code after every test
        afterEach(() => {
            driver.reset();
        });

});
