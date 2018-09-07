import * as express from 'express';
import { Get, Post, Controller, BodyParam } from 'routing-controllers';
import { View, PartialView } from '@utils/LayoutRenderer';
import LandingPage from '@pages/LandingPage';
import AccountDashboard from '@pages/AccountDashboard';
import StartCampaign from '@pages/StartCampaign';
import { labels } from '@i18n/en_EN';
import { PersonalInformation } from '@partials/account-dashboard/PersonalInformation';
import { ChangePassword } from '@partials/account-dashboard/ChangePassword';


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
    @Get('/account-dashboard/personal')
    @View(AccountDashboard)
    public async personalInformation(req: express.Request, res: express.Response) {
        return {
            labels,
            settingsComponent: 'personalInformation'
        };
    }
    @Get('/account-dashboard/change-password')
    @View(AccountDashboard)
    public async changePassword(req: express.Request, res: express.Response) {
        return {
            labels,
            settingsComponent: 'changePassword'
        };
    }
}
