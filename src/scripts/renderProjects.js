import displayProject from './projectMarkup';

function cleanProjectsDisplay() {
  const projectsWrapper = document.querySelector('#projects-wrapper');
  projectsWrapper.innerHTML = '';
}

export default function allProjectsMarkup(projects) {
  const projectsWrapper = document.querySelector('#projects-wrapper');
  cleanProjectsDisplay();

  projects.forEach(proj => {
    const projIndex = projects.indexOf(proj);
    const markup = displayProject(projIndex, proj);
    projectsWrapper.appendChild(markup);
  });
}
