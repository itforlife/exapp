import * as express from 'express';
import { Get, Controller } from 'routing-controllers';
import { View } from '@utils/LayoutRenderer';
import LandingPage from '@pages/LandingPage';
import AccountDashboard from '@pages/AccountDashboard';
import StartCampaign from '@pages/StartCampaign';
import { labels } from '@i18n/en_EN';

@Controller()
export class PublicSiteController {
    @Get('/')
    @View(LandingPage)
    public async index(req: express.Request, res: express.Response) {
        return {    
            labels,
        };
    }
    @Get('/account-dashboard')
    @View(AccountDashboard)
    public async accountDashboard(req: express.Request, res: express.Response) {
        return {
            labels,
            settingsComponent: 'personalInformation',
        };
    }
    @Get('/start-campaign')
    @View(StartCampaign)
    public async startCampaign(req: express.Request, res: express.Response) {
        return {
            labels,
        };
    }
}
