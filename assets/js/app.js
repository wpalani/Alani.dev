const projects = {
    items: [
        {
            "name" : "Noteski",
            'desc' : "Noteski allows you to take and store notes directly in your web browser using the local storage API. (React is fun!)",
            'tools' : "Design // HTML // CSS // JavaScript // ReactJS",
            'url' : "https://noteski.me/"
        },
        {
            "name" : "Oxford Tax",
            'desc' : "A WordPress webiste for Oxford Tax, a tax preparation and accounting firm located in Miami, FL.",
            'tools' : "Design // HTML // CSS // JavaScript // WordPress // Elementor",
            'url' : "http://oxfordtaxsvc.com/"
        },
        {
            "name" : "NoteTap",
            'desc' : "A note taking application, built this project to practice MYSQL and CRUD fundamentals. (please don't SQL inject me)",
            'tools' : "Design // HTML // CSS // JavaScript // PHP // MYSQL",
            'url' : "http://phpstack-526877-2249761.cloudwaysapps.com/"
        },
        {
            "name" : "ProServices.Design",
            'desc' : "Built this project to showcase Bluehost's Professional Services products to potential clients.",
            'tools' : "Design // HTML // CSS // JavaScript // PHP",
            'url' : "https://proservices.design/"
        },
        {
            "name" : "Los Pinos Surf & Turf",
            'desc' : "A seafood restaurant website for a local business, their restaurant is located in Phoenix, AZ.",
            'tools' : "Design // HTML // CSS // JavaScript // WordPress // Oxygen",
            'url' : "https://lospinossurfandturf.com/"
        },
        {
            "name" : "SBS Funding Group",
            'desc' : "A website for a friend who's a small business funding broker.",
            'tools' : "Design // HTML // CSS // JavaScript // WordPress // Oxygen",
            'url' : "https://sbsfg.com/"
        },
        {
            "name" : "American Direct Funding",
            'desc' : "A website for an online small business funding platform.",
            'tools' : "Design // HTML // CSS // JavaScript // WordPress // WP Bakery",
            'url' : "https://americandirectfunding.com/"
        },
        {
            "name" : "eStore",
            'desc' : "A step further. A basic shopping cart project to practice JavaScript DOM API fundamentals. (I used jQuery. Sue me.)",
            'tools' : "Design // HTML // CSS // JavaScript // jQuery",
            'url' : "https://aalani.bluehoststaff.com/estore/",
        },
        {
            "name" : "Phrase Hunter",
            'desc' : "A phrase hunting game, built this project to practice PHP fundamentals. (don't judge the code AKA keep it pushin')",
            'tools' : "Design // HTML // CSS // PHP",
            'url' : "http://phpstack-526877-1775622.cloudwaysapps.com/play.php"
        },
        {
            "name" : "In the Space",
            'desc' : "My first project to practice HTML and CSS fundamentals.",
            'tools' : "Design // HTML // CSS",
            'url' : "https://aalani.bluehoststaff.com/space/",
        },
    ],

    init() {
        this.build()
        this.linkProjects()
    },

    build() {
        this.items.map(item => this.render(item))
    },

    render(item) {
        const projectsContainer = document.getElementById('projects-listing')

        const project = document.createElement("div")
        project.className = "projects-listing-item"
        project.role = "link"
        project.dataset.url = item.url

        project.innerHTML = `<i class="material-icons-round">open_in_new</i>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="projects-listing-item-tools">${item.tools}</div>`

        projectsContainer.append(project)
    },

    linkProjects() {
        document.addEventListener("click", (e) => {
            
            if (e.target.className === "projects-listing-item") {
                window.open(e.target.dataset.url)
                return
            }

            if (e.target.parentElement.className === "projects-listing-item") {
                window.open(e.target.parentElement.dataset.url)
                return
            }

        })
    }
}

const init = document.addEventListener("DOMContentLoaded", projects.init())