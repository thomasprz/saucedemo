import { test, expect } from "../fixtures/base.fixture"; 
import { inventoryData } from "../assets/data/e2e/inventory.data";
import { logger } from "../helpers/logger.helper";
// Allure Data & Tags
import * as report from '../assets/data/report/allure.data.json' // * -> Pratique courante avec JSON permettant d'importer toutes les propriétés du fichier JSON sous un seul alias. 
import * as allure from 'allure-js-commons'; //Importation du module allure
import { Severity } from 'allure-js-commons'; // Criticité du test

test.describe('Inventory', {tag : [report.tags.regression]}, () => {

    test.beforeEach(async({login, inventory}, testInfo) => {
        logger.info(`Running ${testInfo.title}`);
        await allure.parentSuite(report.parent_suite.v001); 
        await allure.epic(report.epic.application);
        await allure.feature(report.feature.inventory);
        await allure.severity(Severity.CRITICAL);

        // Act
        logger.info(`Running ${testInfo.title}`);
        await login.goto(inventoryData.inventoryURL);
        await inventory.expectInventoryPage();
    })

    test.afterEach('Close the page', async ({ base }, testInfo) => {
        logger.info(`Finished ${testInfo.title} with status ${testInfo.status}`);
        await base.closePage();
     })


test.describe('Products sorting', () => {
    test('Should List by Name (A to Z)', async ({ inventory }) => {
        const sortOptions = { AZ: "az" };
        await inventory.sortByName(sortOptions.AZ);
    });
    test('Should List by Name (Z to A)', async ({inventory}) => {
        const sortOptions = {ZA : "za"}
        await inventory.sortByName(sortOptions.ZA)
    })
    test('List by Price (Low to High)', async ({inventory}) => {
        const sortOptions = {LOHI : "lohi"}
        await inventory.sortByPrice(sortOptions.LOHI)
    })
    test('List by Price (High to Low)', async ({inventory}) => {
        const sortOptions = {HILO : "hilo"}
        await inventory.sortByPrice(sortOptions.HILO)
    })
})

    test('Add to Cart and Then Remove from Cart', async ({inventory}) => {
        //Act
        await inventory.addOneProductToCart(2)
        await expect(inventory.cartCounter).toBeVisible()
        await inventory.deleteOneProduct()
        await expect(inventory.cartCounter).not.toBeVisible()
    })
})