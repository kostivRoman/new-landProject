import  { AppPage } from '../abstractClasses';
import { Page } from '@playwright/test';

export class Main extends AppPage {
  public pagePath = '/rt';


private root = this.page.getByRole('')
 

  async expectLoaded(): Promise<void> {
    await this.page.waitForSelector('main');
  }
}