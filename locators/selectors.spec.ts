import { test, expect, Browser, Page } from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test.describe('Login and core Playwright locators', () => {
    let browser: Browser;
    let page: Page;

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false, channel: 'chrome' })
        page = await browser.newPage()
        await page.goto('http:/www.saucedemo.com')
    })

    test.afterAll(async () => {
        if (page) await page.close();
        if (browser) await browser.close()
    });

    test('Core Playwright locators', async () => {
        const logo = page.getByText('Swag Labs')
        const username = page.getByPlaceholder('Username')
        const password = page.getByRole('textbox', { name: 'password' })
        const loginButton = page.getByRole('button', { name: 'Login' })
        const userInfo = page.getByTestId('login-credentials-container')

        await expect(logo).toHaveText("Swag Labs")
        await expect(loginButton).toHaveText('Login')
        await username.fill("standard_user")
        await password.fill('secret_sauce')
        await expect(userInfo).toBeVisible()
    })
})

test.describe('Login with basic CSS selectors and CSS relation selector', () => {
    let browser: Browser;
    let page: Page;

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false, channel: 'chrome' })
        page = await browser.newPage()
        await page.goto('http://www.saucedemo.com')
        //Basic CSS selectors 
        const username = page.locator('#user-name')                                // id selector
        const password = page.locator('input[name="password"]')                    // tag + attribute selector
        const loginButton = page.locator('.submit-button.btn_action')              // class selector

        //Authentication for access to /inventory.html page
        await username.fill("standard_user")
        await password.fill('secret_sauce')
        await loginButton.click()
        await page.waitForURL('**/inventory.html')
    })

    test.afterAll(async () => {
        if (page) await page.close();
        if (browser) await browser.close()
    });

    test('CSS tag selector', () => {
        const footer = page.locator('footer')                                       // CSS tag selector
        expect(footer).toBeVisible()
    })

    test('Relation CSS tests', async () => {
        // Flow:
        // Retrieving descendant element of div (using >)
        // Retrieving first div of first-level divs (using > and first-of-type)
        // Retrieving descendant element (img) of firstItem (using >) and it's 'alt' attribute value
        // Retrieving second div of firstItem (using >  and nth-child(2)
        // Retrieving descendant element (a and div) of previous element  (using a div)
        // Verifying whether alt text of product and label in description product are equals  

        const header = page.locator('div.header_secondary_container > span')
        const firstItem = page.locator('.inventory_list > div:first-of-type')
        await firstItem.waitFor({ state: 'visible' })

        const altText = await firstItem.locator('img').getAttribute('alt')

        const descr = firstItem.locator('> div:nth-child(2)')
        const descrText = await descr.locator('a').locator('div').innerText()

        expect(header).toHaveText("Products")
        expect(altText).toBe(descrText)
    })
})

test.describe('Right neighbour\'s selectors', () => {
    let browser: Browser;
    let page: Page;

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false, channel: 'chrome' })
        page = await browser.newPage()
        await page.goto('http://www.saucedemo.com')
        const username = page.locator('#user-name')
        const password = page.locator('input[name="password"]')
        const loginButton = page.locator('form input[type="submit"]')
        await username.fill("standard_user")
        await password.fill('secret_sauce')
        await loginButton.click()
        await page.waitForURL('**/inventory.html')
    })

    test.afterAll(async () => {
        if (page) await page.close();
        if (browser) await browser.close()
    });

    test('Right neighbor\'s tests', async () => {
        // Flow
        // Retrieving all divs after first inventory item (using ~)
        // Retrieving next div after first inventory item (using +)
        // Verifying results

        const last_items = page.locator('.inventory_item:nth-child(1) ~ div')             //Waiting for UI render
        await last_items.first().waitFor({ state: 'visible' })

        const second_item = page.locator('.inventory_item:nth-child(1) + div')
        const second_price = second_item.locator('xpath=./div/div[2]/div')
        await expect(last_items).toHaveCount(5)
        await expect(second_price).toContainText('9.99')
    })
})

test.describe('XPath basic selector', () => {
    let browser: Browser;
    let page: Page;

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false, channel: 'chrome' })
        page = await browser.newPage()
        await page.goto('http://www.saucedemo.com')
        const username = page.locator('#user-name')
        const password = page.locator('input[name="password"]')
        const loginButton = page.locator('form input[type="submit"]')
        await username.fill("standard_user")
        await password.fill('secret_sauce')
        await loginButton.click()
        await page.waitForURL('**/inventory.html')
    })

    test.afterAll(async () => {
        if (page) await page.close();
        if (browser) await browser.close()
    });

    test('XPath basic tests', async () => {

        const header = page.locator('xpath=/html/body/div/div/div/div[1]/div[2]/span')            // absolute way

        const inventory_list = page.locator('xpath=/html/body/div/div/div/div[2]/div/div/div')    // Waiting for eendering UI
        const firstItem = inventory_list.first()
        await firstItem.waitFor({ state: 'visible' })

        const itemDescription = page.locator('xpath=//div[@class="inventory_item_description"]')  // relative way

        const addToCartButton = itemDescription.locator('xpath=./div[2]/button')                  // relative way (from other locator)
        const firstButton = addToCartButton.first()

        const price = itemDescription.locator('xpath=./div[2]/div')
        const firstPrice = price.first()                                                          // relative way (from other locator)

        const footer = page.locator('xpath=//*[@id="page_wrapper"]/footer')                       // relative way
        const socials = footer.locator('xpath=./ul/li')                                           // relative way (from other locator - footer)

        expect(header).toHaveText("Products")
        expect(firstButton).toHaveText('Add to cart')
        expect(firstPrice).toContainText('$')
        expect(socials).toHaveCount(3)
    })
})

test.describe('XPath Axes selectors', () => {
    let browser: Browser;
    let page: Page;

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false, channel: 'chrome' })
        page = await browser.newPage()
        await page.goto('http://www.saucedemo.com')
        const username = page.locator('#user-name')
        const password = page.locator('input[name="password"]')
        const loginButton = page.locator('form input[type="submit"]')
        await username.fill("standard_user")
        await password.fill('secret_sauce')
        await loginButton.click()
        await page.waitForURL('**/inventory.html')
    })

    test.afterEach(async () => {
        if (page) await page.close();
    });

    test.afterAll(async () => {
        if (browser) await browser.close()
    });

    test('XPath Axes tests', async () => {
        // Flow:
        // 1) Retrieving div childs of inventory_list div=> e.g. inventory_items divs
        // 2) Retrieving first element of childs => e.g. first inventory item div
        // 3) Retrieving:
        //      all childs of first inventory item 
        //      all descendants of first inventory item 
        //      all descendant divs of first inventory item
        //      all descendant a of first inventory item  
        //      all ancestors of first inventory item
        //      all follow-siblings of first inventory item  
        //      all precedent-siblings of first inventory item 
        // 4) Verifying results

        const inventory_list_childs = page.locator('//div[@class = "inventory_list"]/child::div')
        await inventory_list_childs.first().waitFor({ state: 'visible' })

        const firstItem = inventory_list_childs.first()
        const firstItem_childs = firstItem.locator('xpath=./child::*')
        const firstItem_descendant = firstItem.locator('xpath=./descendant::*')
        const firstItem_descendant_divs = firstItem.locator('xpath=./descendant::div')
        const firstItem_descendant_a = firstItem.locator('xpath=./descendant::a')
        const firstItem_ancestors = firstItem.locator('xpath=./ancestor::*')
        const firstItem_foll_siblings = firstItem.locator('xpath=./following-sibling::*')
        const firstItem_prec_siblings = firstItem.locator('xpath=./preceding-sibling::*')

        await expect(inventory_list_childs).toHaveCount(6)                    // Six childs in inventory_list div
        await expect(firstItem_childs).toHaveCount(2)                         // Two childs in inventory_item div
        await expect(firstItem_descendant).toHaveCount(11)                    // Eleven descendants totally in invventory_item div
        await expect(firstItem_descendant_divs).toHaveCount(7)                // Seven 'div' descendants in inventory_item div   
        await expect(firstItem_descendant_a).toHaveCount(2)                   // Two 'a' descendants in inventory_item div   
        await expect(firstItem_descendant_divs.nth(5)).toContainText('29.99') // Sixth div descendant contain '29.99'
        await expect(firstItem_ancestors).toHaveCount(9)                      // Inventory_item div has nine ancestors 
        await expect(firstItem_foll_siblings).toHaveCount(5)                  // First inventory item among 6 has five following siblings
        await expect(firstItem_prec_siblings).toHaveCount(0)                  // First inventory item among 6 has no preceding siblings
    })
})




