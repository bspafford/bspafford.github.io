class ProjectLayout extends HTMLElement {
    async connectedCallback() {
        const title = this.getAttribute('title') || 'Title';
        const description = this.getAttribute('description') || 'Description';
        const videoSrc = this.getAttribute('video');
        const badges = JSON.parse(this.getAttribute('badges'));
        const links = JSON.parse(this.getAttribute('links'));
        
        const response = await fetch('../project.html');
        const html = await response.text();
        this.innerHTML = html;
        this.classList.add('loaded');

        const titleDiv = this.querySelector(".titleDiv");
        console.log(title);
        if (this.isPath(title)) { // image
            const titleImg = document.createElement("img");
            titleImg.className = "titleImg";
            titleImg.src = title;

            if (title.includes("sunsetMapleDrafts")) {
                titleImg.style.width = "60%";
            } else if (title.includes("idleFisher")) {
                titleImg.style.imageRendering = "pixelated";
            }


            titleDiv.appendChild(titleImg);
        } else { // normal title
            const titleText = document.createElement("h1");
            titleText.className = "title";
            titleText.innerHTML = title;
            titleDiv.appendChild(titleText);
        }

        this.querySelector(".description").innerHTML = description;

        const videoDiv = this.querySelector(".video");   
        if (videoSrc.includes("https://www.youtube.com")) { /// then embed
            const iframe = document.createElement("iframe");
            iframe.src = videoSrc;
            iframe.height = 450;
            iframe.style.aspectRatio = 16/9;
            iframe.allowFullscreen = true;
            iframe.frameBorder = false;
            videoDiv.appendChild(iframe);
        } else {
            const video = document.createElement("video");
            const source = document.createElement("source");
            video.appendChild(source);

            source.src = videoSrc;
            video.height = 450;
            video.controls = true;
            source.type = "video/mp4; codecs=hevc";
            videoDiv.appendChild(video);
        }

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

    isPath(str) {
        const pathPattern = /[\\\/]/;
        const extensionPattern = /\.\w+$/;
        return pathPattern.test(str) && extensionPattern.test(str);
    }
}
customElements.define('project-layout', ProjectLayout);