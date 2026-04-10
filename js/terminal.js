const mySkills = [
    { name: "Python", tech: "Django, Automation", percent: 90, color: "green", speed: 800, delay: 0.5 }, 
    { name: "C#", tech: "Game Logic, .NET", percent: 85, color: "green", speed: 2200, delay: 1.5 }, 
    { name: "Cloud & DevOps", tech: "Docker, MariaDB, Sphinx", percent: 70, color: "cyan", speed: 3000, delay: 2.5 },
    { name: "Web Dev", tech: "HTML5, CSS3", percent: 65, color: "yellow", speed: 1000, delay: 3.5 }
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
        skillDiv.style.animationDelay = `${skill.delay}s`; 

        skillDiv.innerHTML = `
            <div class="skill-label" style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span>> ${skill.name} <small style="color:#666">(${skill.tech})</small></span>
                <span>${skill.percent}%</span>
            </div>
            <div class="bar-background">
                <div class="bar-fill" style="width:0%; transition: width ${skill.speed}ms ease-in-out;"></div>
            </div>
        `;
        
        skillsOutput.appendChild(skillDiv);

        setTimeout(() => {
            const fill = skillDiv.querySelector('.bar-fill');
            fill.style.width = skill.percent + "%";
        }, (skill.delay * 1000) + 100);
    });
});