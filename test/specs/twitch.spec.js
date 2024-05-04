import { $, browser, expect } from '@wdio/globals'

const validUser = "zainic_id5"
const validPass = "Qwerty0#"
const validPhone = "085156453235"


describe('001 - Twitch Register Function Test', () => {
    // it('T000 - Valid data register', async () => {
    //     await browser.url("https://twitch.tv/")

    //     await $('button[data-a-target="signup-button"]').click()

    //     await $('#signup-username').setValue(validUser)
    //     await $('#password-input').setValue(validPass)
        
    //     await $('select[data-a-target="birthday-month-select"]').selectByVisibleText("September")

    //     await $('[aria-label="Enter the day of your birth"]').setValue("11")
    //     await $('[aria-label="Enter the year of your birth"]').setValue("2001")

    //     await $('select[aria-label="Country Code"]').selectByAttribute("value", "ID")

    //     await $('#phone-input').setValue(validPhone)

    //     await $('[data-a-target="passport-signup-button"]').click()

    //     await browser.pause(5000)
    // })
    it('T001 - username less than 4 character', async () => {
        await browser.url("https://twitch.tv/")

        await $('button[data-a-target="signup-button"]').click()

        await $('#signup-username').setValue("zai")
        await $('#password-input').setValue(validPass)
        
        await $('select[data-a-target="birthday-month-select"]').selectByVisibleText("September")

        await $('[aria-label="Enter the day of your birth"]').setValue("11")
        await $('[aria-label="Enter the year of your birth"]').setValue("2001")

        await $('select[aria-label="Country Code"]').selectByAttribute("value", "ID")

        await $('#phone-input').setValue(validPhone)

        await $('[data-a-target="passport-signup-button"]').click()

        expect($('/html/body/div[3]/div/div/div/div/div/div[1]/div/div/div[2]/form/div/div[1]/div/div[3]/div/div/p'))
            .toHaveText(expect.stringContaining("Usernames must be between 4 and 25 characters"))
    })
    it('T002 - username more than 25 character', async () => {
        await browser.url("https://twitch.tv/")

        await $('button[data-a-target="signup-button"]').click()

        await $('#signup-username').setValue("this_is_very_long_username")
        await $('#password-input').setValue(validPass)
        
        await $('select[data-a-target="birthday-month-select"]').selectByVisibleText("September")

        await $('[aria-label="Enter the day of your birth"]').setValue("11")
        await $('[aria-label="Enter the year of your birth"]').setValue("2001")

        await $('select[aria-label="Country Code"]').selectByAttribute("value", "ID")

        await $('#phone-input').setValue(validPhone)

        await $('[data-a-target="passport-signup-button"]').click()

        expect($('/html/body/div[3]/div/div/div/div/div/div[1]/div/div/div[2]/form/div/div[1]/div/div[3]/div/div/p'))
            .toHaveText(expect.stringContaining("Usernames must be between 4 and 25 characters"))
    })
})

