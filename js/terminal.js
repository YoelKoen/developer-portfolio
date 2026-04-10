const mySkills = [
    { name: "Backend Development", tech: "Python, Django, MariaDB", percent: 85, color: "green" },
    { name: "Frontend Design", tech: "HTML5, CSS3, JavaScript", percent: 75, color: "yellow" },
    { name: "DevOps & Tools", tech: "Docker, Git, Sphinx", percent: 65, color: "cyan" }
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
        skillDiv.style.animationDelay = `${(index * 0.3) + 1}s`; 

        skillDiv.innerHTML = `
            <div class="skill-label">
                <span>> ${skill.name} <span style="color: #666; font-weight: normal;">[${skill.tech}]</span></span>
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
        }, (index * 300) + 1200);
    });
});