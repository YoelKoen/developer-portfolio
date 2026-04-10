// js/terminal.js

// Define YOUR actual skills data here
const mySkills = [
    { name: "Python Frameworks", tech: "Django, Tkinter", percent: 85, color: "green" },
    { name: "Databases/API", tech: "REST API, SQLite", percent: 70, color: "yellow" },
    { name: "Cloud & Containerization", tech: "Docker, Sphinx", percent: 60, color: "cyan" }
];

document.querySelector('.trigger-skills').addEventListener('click', function(e) {
    e.preventDefault(); // Don't jump to the anchor link immediately

    const terminalContainer = document.getElementById('skills-terminal');
    const skillsOutput = document.getElementById('skills-output');
    
    // Make the terminal visible
    terminalContainer.style.display = "block";
    skillsOutput.innerHTML = ""; // Clear old output

    // Create the bars iteratively
    mySkills.forEach((skill, index) => {
        // Create the structure for each bar
        const skillDiv = document.createElement('div');
        skillDiv.className = `skill-bar ${skill.color}`;
        skillDiv.style.animationDelay = `${(index * 0.5) + 1.5}s`; // Stagger the appearance

        skillDiv.innerHTML = `
            <div class="skill-label">${skill.name}: ${skill.tech}</div>
            <div class="bar-background">
                <div class="bar-fill" style="width: ${skill.percent}%;"></div>
                <div class="bar-percent">${skill.percent}%</div>
            </div>
        `;
        
        skillsOutput.appendChild(skillDiv);
    });

    // Add final output
    const completionMessage = document.createElement('p');
    completionMessage.className = "terminal-prompt typewriter";
    completionMessage.style.animationDelay = `${(mySkills.length * 0.5) + 2}s`;
    completionMessage.innerText = "> Status: Completed successfully✓";
    skillsOutput.appendChild(completionMessage);
});