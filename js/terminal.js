document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('a[href="#skills-terminal"], .trigger-skills');
    const terminal = document.getElementById('skills-terminal');
    const output = document.getElementById('skills-output');

    // Expanded skills with unique levels and transition speeds
    const skills = [
        { label: 'Python Core', tech: 'Django, Automation, Logic', color: 'green', level: '92%', speed: '3s' },
        { label: 'C# Systems', tech: 'Godot, Game Engines, .NET', color: 'blue', level: '88%', speed: '1.5s' },
        { label: 'Cloud & Ops', tech: 'Docker, Linux, Deployment', color: 'purple', level: '70%', speed: '4s' },
        { label: 'Data Architecture', tech: 'MariaDB, SQL, JSON', color: 'purple', level: '82%', speed: '2.5s' },
        { label: 'Frontend Engine', tech: 'HTML5, CSS3, JavaScript', color: 'yellow', level: '96%', speed: '2s' },
        { label: 'Documentation', tech: 'Sphinx, Markdown, Technical Writing', color: 'yellow', level: '85%', speed: '3.5s' }
    ];

    const sysChecks = [
        "[ OK ] Mounting /dev/sda1 ...",
        "[ OK ] Initializing core.logic.engine ...",
        "[ OK ] Establishing connection to MariaDB ...",
        "[ OK ] Checking Docker container status ...",
        "[ OK ] User: YoelKoen authenticated"
    ];

    triggers.forEach(t => t.addEventListener('click', (e) => {
        if(t.classList.contains('btn')) e.preventDefault();
        
        terminal.style.display = 'block';
        output.innerHTML = '';
        terminal.scrollIntoView({ behavior: 'smooth' });
        
        bootSequence();
    }));

    function bootSequence() {
        // Run initial flavor text system checks
        sysChecks.forEach((check, i) => {
            setTimeout(() => {
                const line = `<p style="color: #666; font-size: 0.85rem; margin: 2px 0;">${check}</p>`;
                output.insertAdjacentHTML('beforeend', line);
            }, i * 150);
        });

        // Trigger skills rendering after boot sequence
        setTimeout(() => {
            output.insertAdjacentHTML('beforeend', '<p class="typewriter" style="margin-top: 15px;">> fetching technical_competencies ...</p>');
            renderSkills();
        }, sysChecks.length * 150 + 300);
    }

    function renderSkills() {
        skills.forEach((s, i) => {
            setTimeout(() => {
                const html = `
                    <div class="skill-bar ${s.color}" style="margin-top: 15px;">
                        <div class="skill-label"><span>> ${s.label} <small>(${s.tech})</small></span></div>
                        <div class="bar-background">
                            <div class="bar-fill" id="bar-${i}" style="width: 0%; transition-duration: ${s.speed};"></div>
                        </div>
                    </div>`;
                output.insertAdjacentHTML('beforeend', html);
                
                // Slight delay to ensure element is in DOM before animating width
                setTimeout(() => {
                    const bar = document.getElementById(`bar-${i}`);
                    if(bar) bar.style.width = s.level;
                }, 50);
            }, i * 350);
        });
    }
});