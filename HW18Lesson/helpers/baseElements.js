class BaseElements {                              /// создали метод в котором мы ждем пока элемент будет кликабельным а потом кликаем
    static async click(webElement) {
        await webElement.waitForClickable();
        await webElement.click();
    }
}

module.exports = BaseElements;