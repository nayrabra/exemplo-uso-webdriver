import assert from "node:assert";
import { Builder, Browser, By, Key, until } from "selenium-webdriver";

describe("Testes do Módulo de Login", function () {
  it("Deve permitir o login quando usar credenciais válidas", async () => {
    //Arrange (criar constantes com credencias e mensagens esperadas)
    const driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("https://quick-notes.club/");

    // Act  (Interagir com a aplicação fazendo o login)
    await driver.findElement(By.id("login-email")).sendKeys("nayra@test.com");
    await driver
      .findElement(By.id("login-password"))
      .sendKeys("12345678", Key.RETURN);

    // Assert (Validar que o teste passou)
    await driver.wait(
      until.elementIsVisible(driver.findElement(By.id("user-name"))),
    );
    const saudacao = await driver.findElement(By.id("user-name")).getText();
    assert.equal(saudacao, "Hi, nayra");

    await driver.findElement(By.id("new-note-btn")).click();
    await driver.findElement(By.id("note-content")).sendKeys("testando 123");
    await driver.findElement(By.id("note-tags")).sendKeys("teste");
    await driver.findElement(By.id("save-note-btn")).click();

    const noteCard = await driver.wait(until.elementLocated(By.css(".note-card-preview")));
    const textoNoteCard = await noteCard.getText();
    assert.equal(textoNoteCard, "testando 123");
    const tag = await driver.wait(until.elementLocated(By.css(".tag")));
    const textoTag = await tag.getText();
    assert.equal(textoTag, "teste");
  });
});
