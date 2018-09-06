import * as express from 'express';
import { Get, Post, Controller, BodyParam } from 'routing-controllers';
import { View, PartialView } from '@utils/LayoutRenderer';
import LandingPage from '@pages/LandingPage';
import AccountDashboard from '@pages/AccountDashboard';
import StartCampaign from '@pages/StartCampaign';
import { labels } from '@i18n/en_EN';
import { LogInForm } from '@partials/authentication/LogInForm';

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
    @PartialView(LogInForm)
    @Post('/login')
    public async login(
        @BodyParam('email') email: string,
        @BodyParam('password') password: string
    ) {
        const emailError = email !== 'test' ? 'Email incorrect' : '';
        const passwordError = password !== 'test' ? 'Password incorrect!' : '';
        return {
            labels,
            emailError,
            passwordError,
            email,
            password,
        };
    }
}
