const mySkills = [
    // This one pops in almost instantly
    { name: "Python", tech: "Django, Tkinter, Automation", percent: 90, color: "green", speed: 800, delay: 0.5 }, 
    
    // This one takes a bit longer to "initialize"
    { name: "C#", tech: "Game Logic, .NET, Mechanics", percent: 85, color: "green", speed: 2000, delay: 1.2 }, 
    
    // Quick load
    { name: "Web Dev", tech: "HTML5, CSS3, JS", percent: 75, color: "yellow", speed: 1200, delay: 2.0 }, 
    
    // This one "struggles" to load (slowest)
    { name: "Cloud", tech: "Docker, MariaDB, Sphinx", percent: 70, color: "cyan", speed: 3000, delay: 2.8 } 
];

document.querySelector('.trigger-skills').addEventListener('click', function(e) {
    e.preventDefault();
    const terminalContainer = document.getElementById('skills-terminal');
    const skillsOutput = document.getElementById('skills-output');
    
    terminalContainer.style.display = "block";
    skillsOutput.innerHTML = ""; 

    mySkills.forEach((skill) => {
        const skillDiv = document.createElement('div');
        skillDiv.className = `skill-bar ${skill.color}`;
        
        // Use the custom delay for the row to appear
        skillDiv.style.animationDelay = `${skill.delay}s`; 

        skillDiv.innerHTML = `
            <div class="skill-label">
                <span>> ${skill.name} <span style="color: #666; font-size: 0.85em;">(${skill.tech})</span></span>
                <span class="bar-percent">${skill.percent}%</span>
            </div>
            <div class="bar-background">
                <div class="bar-fill" style="width: 0%; transition: width ${skill.speed}ms cubic-bezier(0.1, 0, 0.1, 1);"></div>
            </div>
        `;
        
        skillsOutput.appendChild(skillDiv);

        // Trigger the fill animation after the row has faded in
        setTimeout(() => {
            const fill = skillDiv.querySelector('.bar-fill');
            fill.style.width = skill.percent + "%";
        }, (skill.delay * 1000) + 200);
    });
});