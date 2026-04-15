document.addEventListener('DOMContentLoaded', () => {
    // Select both the primary CTA button and the top navbar link
    const skillsTriggers = document.querySelectorAll('a[href="#skills-terminal"], .trigger-skills');
    const terminalSection = document.getElementById('skills-terminal');
    const output = document.getElementById('skills-output');

    // Consolidated skill data with technical specializations
    const skills = [
        { label: 'Python', tech: 'Django, Automation, Logic', color: 'green' },
        { label: 'C#', tech: 'Game Engines, .NET, Unity/Godot', color: 'green' },
        { label: 'Cloud & DB', tech: 'Docker, MariaDB, SQL', color: 'cyan' },
        { label: 'Web Stack', tech: 'HTML5, CSS3, JavaScript', color: 'yellow' }
    ];

    // Initialize triggers
    skillsTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            // Only prevent default if it's the button; let the nav link scroll naturally
            if (trigger.classList.contains('btn')) {
                e.preventDefault();
            }

            // 1. Ensure the terminal window is visible
            terminalSection.style.display = 'block';
            
            // 2. Clear previous output for a fresh animation sequence
            output.innerHTML = '';

            // 3. Scroll to the section smoothly
            terminalSection.scrollIntoView({ behavior: 'smooth' });

            // 4. Start the loading sequence
            renderSkills();
        });
    });

    /**
     * Renders the skill bars with a staggered typewriter-style delay
     */
    function renderSkills() {
        skills.forEach((skill, index) => {
            setTimeout(() => {
                const skillHtml = `
                    <div class="skill-bar ${skill.color}">
                        <div class="skill-label">
                            <span>> ${skill.label} <small>(${skill.tech})</small></span>
                        </div>
                        <div class="bar-background">
                            <div class="bar-fill" style="width: 85%"></div>
                        </div>
                    </div>
                `;
                output.insertAdjacentHTML('beforeend', skillHtml);
            }, index * 400); // 400ms stagger between bars
        });
    }
});