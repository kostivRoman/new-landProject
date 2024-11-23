import { Application } from "../app";
import { Browser, Page, test as baseTest } from "@playwright/test";

/**
 * Represents a test fixture for the application.
 * @template T - The type of the application.
 */
export const test = baseTest.extend<{ app: Application }>({
	/**
	 * Initializes the test fixture.
	 * @param {BrowserContext} browser - The browser context.
	 * @param {Page} page - The page object.
	 * @param {Function} use - The function to use the application.
	 */
	// eslint-disable-next-line
	app: async (
		{ browser, page }: { browser: Browser; page: Page },
		use: (app: Application) => Promise<void>,
	) => {
		test.info().annotations.push({
			type: "Browser",
			description: `${browser.browserType().name()} ${browser.version()}`,
		});
		const app = new Application(page);
		await use(app);
	},
});



