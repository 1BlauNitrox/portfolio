let currentLanguage = 'en';

function toggleLanguage() {
    if (currentLanguage === 'de') {
        currentLanguage = 'en';
        document.getElementById("lang_de").style.display = "none";
        document.getElementById("lang_en").style.display = "flex";
    } else {
        currentLanguage = 'de';
        document.getElementById("lang_en").style.display = "none";
        document.getElementById("lang_de").style.display = "flex";
    }
    loadLanguage(currentLanguage);
}

function loadLanguage(lang) {
    fetch(`scripts/lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('project-text').textContent = data.aboutNav;
            document.getElementById('project-text').textContent = data.projectNav;
            document.getElementById('contact-text').textContent = data.contactNav;
            document.getElementById('landing-page-text').textContent = data.landingPageHeading

            document.getElementById('about-me-start-heading').textContent = data.meStartHeading
            document.getElementById('about-me-start-text').textContent = data.meStartText
            document.getElementById('about-me-now-heading').textContent = data.meNowHeading
            document.getElementById('about-me-now-text').textContent = data.meNowText
            document.getElementById('about-me-me-heading').textContent = data.meMeHeading
            document.getElementById('about-me-me-text').textContent = data.meMeText

            document.getElementById('projects-heading').textContent = data.projectsHeading
            document.getElementById('lyro-text').textContent = data.lyro
            document.getElementById('projektkurs-text').textContent = data.projektkurs
            document.getElementById('scripzy-text').textContent = data.scripzy
            document.getElementById('view-project-1').textContent = data.viewProject
            document.getElementById('view-project-2').textContent = data.viewProject
            document.getElementById('view-project-3').textContent = data.viewProject

            document.getElementById('contact-heading').textContent = data.contactHeading
            document.getElementById('message-label').textContent = data.messageLabel
            document.getElementById('agree-terms').innerHTML = data.agreeTerms;
            document.getElementById('submit-text').textContent = data.submitText

        
        })
        .catch(error => console.error('Error loading language:', error));
}

loadLanguage(currentLanguage);
