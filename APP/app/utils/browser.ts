
import { Linking } from "react-native";
import InAppBrowser from "react-native-inappbrowser-reborn";

async function urlOpener(url, redirectUrl) {
    try {
        await InAppBrowser.isAvailable();

        console.log("url, redirect url: " + url + ", " + redirectUrl)

        const browserResponse = await InAppBrowser.openAuth(url, redirectUrl, {
            showTitle: false,
            enableUrlBarHiding: true,
            enableDefaultShare: false,
            ephemeralWebSession: true,
            dismissButtonStyle: 'cancel',
        });

        if (browserResponse.type == 'cancel') {
            console.log("in-app browser auth cancelled.");
        } else if (browserResponse.type == 'success' && browserResponse.url) {
            Linking.openURL(browserResponse.url);
        }

    } catch (e) {
        console.error(e)
    }
}

export default urlOpener;