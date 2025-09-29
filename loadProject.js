class ProjectLayout extends HTMLElement {
    async connectedCallback() {
        const title = this.getAttribute('title') || 'Title';
        const description = this.getAttribute('description') || 'Description';
        const video = this.getAttribute('video');
        const badges = JSON.parse(this.getAttribute('badges'));
        const links = JSON.parse(this.getAttribute('links'));
        
        const response = await fetch('../project.html');
        const html = await response.text();
        this.innerHTML = html;
        this.classList.add('loaded');

        this.querySelector(".title").innerHTML = title;
        this.querySelector(".description").innerHTML = description;
        this.querySelector(".video").src = video;

        for (let badge in badges) {
            let projectInfo = this.querySelector(".projectInfo");
            let badgeImg = document.createElement("img");
            badgeImg.src = "https://img.shields.io/badge/" + badge + "-" + badges[badge] + "-" + this.getColor(badge);
            badgeImg.alt = "Build Date";
            projectInfo.appendChild(badgeImg);
        }

        for (let linkName in links) {
            let linksDiv = this.querySelector(".links");
            
            let link = document.createElement("a");
            link.href = links[linkName];

            let linkImg = document.createElement("img");
            linkImg.src = this.getLinkIcon(linkName);
            link.appendChild(linkImg);

            linksDiv.appendChild(link);
        }
    }

    getLinkIcon(link) {
        console.log("link: ",link);
        link = link.toLowerCase();
        if (link == "youtube")
            return "../images/youtubeIcon.svg";
        if (link == "steam")
            return "../images/steamIcon.svg";
        if (link == "github")
            return "../images/githubIcon.svg";
        if (link == "website")
            return "../images/websiteIcon.svg";

    }

    getColor(badge) {
        switch (badge) {
            case "default":
            case "Build Date":
            case "Started":
                return "informational";
            case "Category":
                return "FF64FF";
            case "Framework":
            case "Engine":
            case "Library":
            case "API":
                return "orange";
            case "Language":
                return "brightgreen";
        }
    }
}
customElements.define('project-layout', ProjectLayout);