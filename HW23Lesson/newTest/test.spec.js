const { test } = require('@playwright/test');
const MainPage = require('../page-objects/mainPage');
const {expect} = require('chai');
const TopNavigation = require('../page-objects/components/topNavigation');
const PageAboutSection = require('../page-objects/pageAboutSection');
const BreadCrumbs = require('../page-objects/components/breadCrumbs');


test.describe('test oz.by', async function() {
    let mainPage;
    let topNavigation;
    let pageAboutSection;
    let breadCrumbs;

    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page);
        topNavigation = new TopNavigation(page);
        pageAboutSection = new PageAboutSection(page);
        breadCrumbs = new BreadCrumbs(page);
    });

        test('Go To Any Page On Section', async ({page}) => {
            await mainPage.navigate('https://playwright.dev/')
            await topNavigation.goToPage(topNavigation.docsButton);       
            const textInTheSegment = await topNavigation.getTextFromLocator(mainPage.sectionName);
            await topNavigation.goToPage(mainPage.sectionName)                   
            expect(await page.textContent(mainPage.segmentTitle)).to.equal(textInTheSegment);
            });

        test('Search result', async ({page}) => {
            await mainPage.navigate('https://playwright.dev/')
            await topNavigation.searchPageByText('test');       
            const textInTheSegment = await topNavigation.getTextFromLocator(topNavigation.searchResultInDropdown);
            await topNavigation.goToPage(topNavigation.searchResultInDropdown)
            await page.waitForTimeout(1000);      
            expect(await page.textContent(pageAboutSection.titleSegmentPage)).to.equal(textInTheSegment);
            });

        test('Go to Main Page From Any Page By Breadcrumbs', async ({page}) => {
            await mainPage.navigate('https://playwright.dev/')                
            await pageAboutSection.goToMainPage(topNavigation.docsButton, mainPage.sectionName, breadCrumbs.goToHomeButton)
            const currentUrl = page.url();      
            expect(await currentUrl).to.equal(`https://playwright.dev/`);
            });

        test('Go to the GitHub Page From PlayWrite Page', async ({page}) => {
            await mainPage.navigate('https://playwright.dev/')              
            const newPage = await topNavigation.goToTheAnotherTab(mainPage.gitHubButton);
            await newPage.waitForLoadState('networkidle');
            const currentUrl = await newPage.url();
            console.log(currentUrl)            
            expect(currentUrl).to.equal(`https://github.com/microsoft/playwright`);
            });
            
    })