const mySkills = [
    { name: "Python", tech: "Django, Tkinter, Automation", percent: 90, color: "green" },
    { name: "C#", tech: "Game Logic, .NET, Core Mechanics", percent: 85, color: "green" },
    { name: "Web Dev", tech: "HTML5, CSS3, JavaScript", percent: 75, color: "yellow" },
    { name: "Cloud", tech: "Docker, MariaDB, Sphinx", percent: 70, color: "cyan" }
];

document.querySelector('.trigger-skills').addEventListener('click', function(e) {
    e.preventDefault();
    const terminalContainer = document.getElementById('skills-terminal');
    const skillsOutput = document.getElementById('skills-output');
    
    terminalContainer.style.display = "block";
    skillsOutput.innerHTML = ""; 

    mySkills.forEach((skill, index) => {
        const skillDiv = document.createElement('div');
        skillDiv.className = `skill-bar ${skill.color}`;
        // Slight delay for each bar to create a "loading" sequence
        skillDiv.style.animationDelay = `${(index * 0.25) + 0.8}s`; 

        skillDiv.innerHTML = `
            <div class="skill-label">
                <span>> ${skill.name} <span style="color: #666; font-size: 0.85em;">(${skill.tech})</span></span>
                <span class="bar-percent">${skill.percent}%</span>
            </div>
            <div class="bar-background">
                <div class="bar-fill" style="width: 0%;"></div>
            </div>
        `;
        
        skillsOutput.appendChild(skillDiv);

        setTimeout(() => {
            const fill = skillDiv.querySelector('.bar-fill');
            fill.style.width = skill.percent + "%";
        }, (index * 250) + 1000);
    });
});