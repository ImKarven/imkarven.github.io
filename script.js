checkLinkThenRedirect();

async function checkLinkThenRedirect() {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const linkParemeter = parameters.get("link");
    if (!linkParemeter) return;
    const fetchData = await fetch("links.txt");
    const rawLinks = await fetchData.text();
    const lines = rawLinks.split("\n");
    for (const line of lines) {
        const component = line.split("=");
        const linkName = component[0];
        const linkUrl = component[1];
        if (linkName != linkParemeter) continue;
        if (!linkUrl) continue;
        window.location.href = linkUrl;
        return;
    }
}