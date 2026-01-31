export const getAppUrl = () => {
    const domain = window?.location?.origin;
    const protocol = window?.location?.protocol;
    const appDomain = domain?.replace("http://", "")?.replace("https://", "");
    return `${protocol}//${appDomain}`;
}