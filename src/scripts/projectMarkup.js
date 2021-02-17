import setAttributes from './setAttributes';
import displayTask from './taskMarkup';

export default function displayProject(projectId, projectTitle){
    const wrapperProject = document.createElement('div');
    setAttributes(wrapperProject, {
        class: 'col-xs-12 col-sm-6 col-md-4 pt-5', id: projectId, 'data-index': projectId
    });

    const card = document.createElement('div');
    card.className = 'card shadow';

    const projectHeader = document.createElement('div');
    projectHeader.className = 'card-header text-white bg-dark d-flex justify-content-between pt-3';

    const projectHeaderTitle = document.createElement('h6');
    projectHeaderTitle.textContent = projectTitle;

    const wraperIcon = document.createElement('div');

    const modalEditIcon = document.createElement('a');
    setAttributes(modalEditIcon, {
        class: 'text-light c-pointer', 'data-bs-toggle': 'modal', 'data-bs-target':'#addProject'
    });

    const modalDeleteIcon = document.createElement('a');
    setAttributes(modalDeleteIcon, {
        class: 'text-light c-pointer', 'data-bs-toggle': 'modal', 'data-bs-target':'#deleteProject'
    });

    const editIcon = document.createElement('i');
    editIcon.className = 'fas fa-edit mx-3';

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fas fa-trash mx-3';

    const projectBody = document.createElement('div');
    projectBody.className = 'card-body';

    //Append tasks here
    const task1 = displayTask( '1', "task Title 1", "Here task Details", "Nov, 2nd 2020", "high");
    const task2 = displayTask( '2', "task Title 2", "Here SEcond task Details", "Nov, 2nd 2020", "medium");

    projectBody.appendChild(task1);

    const projectFooter = document.createElement('div');
    projectFooter.className = 'card-footer d-grid gap-2';

    const btnAddTask = document.createElement('button');
    setAttributes(btnAddTask, { class: 'btn btn-primary text-light shadow', type: 'button', id: 'save-task', 'data-bs-toggle': 'modal', 'data-bs-target':"#addTask" });
    btnAddTask.innerHTML = 'Add task';

    modalEditIcon.appendChild(editIcon);
    modalDeleteIcon.appendChild(deleteIcon);

    wraperIcon.append(modalEditIcon, modalDeleteIcon);

    projectHeader.append(projectHeaderTitle, wraperIcon);

    projectFooter.appendChild(btnAddTask);

    card.append(projectHeader, projectBody, projectFooter);

    wrapperProject.appendChild(card);

    return wrapperProject;
}