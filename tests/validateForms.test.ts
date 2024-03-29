import { test, expect, Page, firefox } from "@playwright/test";
import { selectCategory } from ".././Resources/page-objects/homepage.ts";
import {
  selectedInsuranceLocator,
} from ".././Resources/locators/pageLocators.ts";
import {
  fillDataForms,
  fillDataFormsFromCSV,
  fillInsurantsData,
  nextPage,
} from ".././Resources/page-objects/forms.ts";

test.describe("Form - Enter Vehicle Data - Harcoded", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("");
  });

  // Assert correct redirect to each category form. After that, we go back to the homepage
  const categories = ["Automobile", "Truck", "Motorcycle", "Camper"];

  categories.forEach((category) => {
    test(`Select ${category} Category and Enter Vehicle Data`, async ({
      page,
    }) => {
      test.info().annotations.push({
        type: "summary",
        description: `Selecting ${category} Category and going back to the Homepage`,
      });

      //Temporary - remove after implementation
      if (
        `${category}` === "Automobile" ||
        `${category}` === "Truck" ||
        `${category}` === "Camper"
      ) {
        console.log(`Category ${category} flow Not implemented`);
      } else {
        // Code to execute if the condition is false
        await selectCategory(page, category);
        await expect(selectedInsuranceLocator(page)).toContainText(
          `${category} Insurance`
        );

        await fillDataForms[`${category}`](page, category);
        await page.screenshot({ path: `screenshots/${category}.png` });
        await nextPage(page);
      }
    });
  });
});

test.describe("Form - Enter Vehicle Data - From CSV", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("");
  });

  // Assert correct redirect to each category form.
  const categories = ["Automobile", "Truck", "Motorcycle", "Camper"];

  categories.forEach((category) => {
    test(`Select ${category} Category and Enter Vehicle Data`, async ({
      page,
    }) => {
      test.info().annotations.push({
        type: "summary",
        description: `Selecting ${category} Category and going back to the Homepage`,
      });

      //Temporary - remove after implementation
      if (`${category}` === "Truck" || `${category}` === "Camper") {
        console.log(`Category ${category} flow Not implemented`);
      } else {
        // Code to execute if the condition is false
        await selectCategory(page, category);
        await expect(selectedInsuranceLocator(page)).toContainText(
          `${category} Insurance`
        );

        await fillDataFormsFromCSV[`${category}`](page, category);
        await page.screenshot({ path: `screenshots/${category}.png` });
        await nextPage(page);
        await fillInsurantsData.Insurants(page, category);
        
      }
    });
  });
});
