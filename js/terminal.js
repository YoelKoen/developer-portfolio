const mySkills = [
    // Python: Very fast load (800ms)
    { name: "Python", tech: "Django, Tkinter, Automation", percent: 90, color: "green", speed: 800, delay: 0.5 }, 
    
    // C#: Takes longer to "initialize" (2000ms)
    { name: "C#", tech: "Game Logic, .NET, Mechanics", percent: 85, color: "green", speed: 2000, delay: 1.2 }, 
    
    // Cloud & Tools: Moderate speed (1500ms)
    { name: "Cloud & DevOps", tech: "Docker, MariaDB, Sphinx", percent: 70, color: "cyan", speed: 1500, delay: 2.2 },

    // Frontend: Fast snap-in (1000ms)
    { name: "Frontend", tech: "HTML5, CSS3", percent: 65, color: "yellow", speed: 1000, delay: 3.0 }
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
        
        // Rows appear at different times based on their specific delay
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

        // This starts the bar filling after the row fades in
        setTimeout(() => {
            const fill = skillDiv.querySelector('.bar-fill');
            fill.style.width = skill.percent + "%";
        }, (skill.delay * 1000) + 200);
    });
});