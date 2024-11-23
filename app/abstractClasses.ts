import { Page } from "@playwright/test";
import { step } from "./helpers/reporter";

export abstract class PageHolder {
	constructor(protected page: Page) {}
}

/**
 * Represents a base class for holding a page object.
 */

export abstract class Component {
	/**
	 * Checks if the component is loaded.
	 * @param {string} [message] - An optional message to display if the component is not loaded.
	 * @returns {Promise<void>} A promise that resolves when the component is loaded.
	 * @abstract
	 */
	abstract expectLoaded(message?: string): Promise<void>;

	/**
	 * Checks if the component is loaded.
	 * @returns {Promise<boolean>} A promise that resolves to `true` if the component is loaded, or `false` otherwise.
	 */
	@step()
	async isLoaded(): Promise<boolean> {
		try {
			await this.expectLoaded();
			return true;
		} catch {
			return false;
		}
	}
}

/**
 * Represents an abstract class for an application page.
 * This class provides common functionality for opening pages and checking notifications.
 */
/**
 * Represents an abstract class for an application page.
 */
export abstract class AppPage extends Component {
	/**
	 * Path to the page can be relative to the baseUrl defined in playwright.config.ts
	 * or absolute (on your own risk)
	 */
	public abstract pagePath: string;

	/**
	 * Opens the page in the browser and expects it to be loaded successfully.
	 * @param currentLanguage - The current language of the page.
	 * @param path - Optional path to navigate to. If not provided, the pagePath property will be used.
	 */
	constructor(protected page: Page) {
		super();
	}

	/**
	 * Opens the page in the browser and expects it to be loaded successfully.
	 * @param currentLanguage - The current language of the page.
	 * @param path - Optional path to navigate to. If not provided, the pagePath property will be used.
	 */

	@step()
	async open(path?: string) {
		await this.page.goto(path ?? this.pagePath);
		await this.expectLoaded();
	}
	@step()
	async addLocatorHandler() {
		await this.page.addLocatorHandler(this.page.locator(".textWrapper-0-4-15"), async () => {
			await this.page.getByRole("button", { name: "Ok" }).click();
		});
	}
}
