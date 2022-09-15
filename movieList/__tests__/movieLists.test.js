const {Builder, Capabilities, By} = require('selenium-webdriver')
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('add a movie to the list', async () => {
    const inputField = await driver.findElement(By.xpath('/html/body/main/section/form/input')) //can also have findELement(By.xpath('//input'))
    await inputField.sendKeys('Thor\n')
    await driver.sleep(2000)
})

test('can strikethrough a movie', async () => {
    const movieTitle = await driver.findElement(By.xpath('/html/body/main/ul/li/span'))
    await movieTitle.click()
    await driver.sleep(2000)
})

test('delete from list', async () => {
    const deleteButton = await driver.findElement(By.xpath('/html/body/main/ul/li/button'))
    await deleteButton.click()
    await driver.sleep(2000)
})