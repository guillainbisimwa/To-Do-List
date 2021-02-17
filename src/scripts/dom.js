import createHeader from './header';
import createModal from './modalAddProject';
import displayProject from './projectMarkup';
import displayTask from './taskMarkup';

export default function displayHeader() {
  const contentDiv = document.querySelector('#content');
  const header = createHeader();
  const modal = createModal();
  
  const project1 = displayProject('1', "Project 1");
  const project2 = displayProject('2', "Project 2");
  const project3 = displayProject('3', "Project 3");

  const task1 = displayTask( 1, "task Title 1", "Here task Details", "Nov, 2nd 2020", "high");

  const wrapperDiv = document.createElement('div');
  wrapperDiv.className = 'row';
  wrapperDiv.append(project1, project2, project3);
  
  contentDiv.append(header, modal,wrapperDiv );

}
