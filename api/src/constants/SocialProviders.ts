

export const providers = {
    facebook: {
        url: 'https://graph.facebook.com/me',
        fields: 'email, first_name, last_name, birthday'
    },
    google: {
        url:  'https://www.googleapis.com/oauth2/v3/tokeninfo'
    }
};
