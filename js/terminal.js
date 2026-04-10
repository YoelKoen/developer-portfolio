document.addEventListener('DOMContentLoaded', () => {
    const triggerBtn = document.querySelector('.trigger-skills');
    const terminalSection = document.getElementById('skills-terminal');
    const output = document.getElementById('skills-output');
    const typewriter = document.querySelector('.typewriter');

    // Skill data based on your core tech stack
    const skills = [
        { label: 'Python / Advanced Logic', level: '90%', color: 'green' },
        { label: 'C# / Game Mechanics', level: '85%', color: 'green' },
        { label: 'Django / Web Engines', level: '80%', color: 'yellow' },
        { label: 'Docker / MariaDB', level: '75%', color: 'cyan' },
        { label: 'HTML5 / CSS3', level: '95%', color: 'cyan' }
    ];

    if (triggerBtn) {
        triggerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 1. Show the terminal window
            terminalSection.style.display = 'block';
            terminalSection.scrollIntoView({ behavior: 'smooth' });

            // 2. Clear previous output if re-clicked
            output.innerHTML = '';

            // 3. Start the sequence
            startTerminalSequence();
        });
    }

    function startTerminalSequence() {
        // Wait for the typewriter animation to "finish" visually
        setTimeout(() => {
            renderSkills();
        }, 1500);
    }

    function renderSkills() {
        skills.forEach((skill, index) => {
            setTimeout(() => {
                const skillHtml = `
                    <div class="skill-bar ${skill.color}">
                        <div class="skill-label">
                            <span>${skill.label}</span>
                            <span>${skill.level}</span>
                        </div>
                        <div class="bar-background">
                            <div class="bar-fill" style="width: ${skill.level}"></div>
                        </div>
                    </div>
                `;
                output.insertAdjacentHTML('beforeend', skillHtml);
            }, index * 400); // Staggered entry for each bar
        });
    }
});