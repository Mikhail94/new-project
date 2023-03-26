When(/^I click search button$/, async () => {
    await $(`input#search-icon-legacy`).waitForClicable();
    await $(`input#search-icon-legacy`).click();