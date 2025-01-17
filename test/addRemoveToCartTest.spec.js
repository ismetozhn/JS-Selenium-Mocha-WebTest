// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Add-RemoveToCartTest', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').usingServer('http://localhost:4444/wd/hub').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Add-RemoveToCartTest', async function() {
    await driver.get("https://demo.competethemes.com/")
    await driver.manage().window().setRect({ width: 1936, height: 1048 })
    await driver.switchTo().frame(0)
    await driver.findElement(By.css("#menu-item-343 > a")).click()
    await driver.findElement(By.css(".post-304 .attachment-woocommerce_thumbnail")).click()

    // Sepete Ekle
    await driver.findElement(By.name("add-to-cart")).click()
    await driver.findElement(By.css(".fa")).click()
    await driver.findElement(By.linkText("×")).click()

    // .cart-empty öğesinin görünür olması
     let cartEmptyElement = await driver.wait(until.elementLocated(By.css(".cart-empty")), 5000);
     await driver.wait(until.elementIsVisible(cartEmptyElement), 8000);

    await driver.wait(until.elementIsVisible(await driver.findElement(By.css(".woocommerce-info"))), 5000)

    assert(await driver.findElement(By.css(".cart-empty")).getText() == "Your cart is currently empty.")
    
    await driver.sleep(3000)
  })
})
