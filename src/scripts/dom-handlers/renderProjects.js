import displayProject from '../components/projectComponent';
import editProject from './editProject';

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
    // editProject();
  });
}
