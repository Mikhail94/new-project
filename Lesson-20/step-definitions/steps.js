const { Given, When, Then } = require('@wdio/cucumber-framework');      /// импортируем given, when, then из библиотеки 
const {expect} = require ('chai')


Given("I navigate to website", async () => {
    await browser.url('https://www.youtube.com/')
});

Given(/^I accept all cookies$/, async () => {
    await browser.url('https://www.youtube.com/')
});


When(/^I input "webdriverio" to search field$/, async () => {
    await $(`input#search`).waitForDisplayed();
    await $(`input#search`).setValue('webdriverio');
});

When(/^I click search button$/, async () => {
    await $(`input#search-icon-legacy`).waitForClicable();
    await $(`input#search-icon-legacy`).click(); 
});


Then(/^I expect that second link contains text "webdriverio"$/, async () => {
    await $$ (`span.style-scope.ytd-playlist-renderer`)[0].waitForDisplayed()
    expect((await $$ (`span.style-scope.ytd-playlist-renderer`)[0].getText()).toLowerCase()).to.contain('webdriverio') 
});

