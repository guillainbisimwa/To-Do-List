import setAttributes from '../setAttributes';

export default function displayTask(taskId, taskTitle, taskDetails, taskDate, taskPriority) {
  const wrapperTask = document.createElement('div');
  wrapperTask.className = 'mt-3';

  const cardTask = document.createElement('div');
  cardTask.className = 'card bg-test shadow';

  const cardTaskBody = document.createElement('div');
  cardTaskBody.className = 'card-body';

  const cardTaskTitleWrapper = document.createElement('div');
  cardTaskTitleWrapper.className = 'd-flex justify-content-between';

  const cardTaskTitle = document.createElement('h5');
  cardTaskTitle.textContent = taskTitle;

  const wripperIcons = document.createElement('div');

  const modalEditIcon = document.createElement('a');
  setAttributes(modalEditIcon, {
    class: 'text-light c-pointer', 'data-bs-toggle': 'modal', 'data-bs-target': '#addProject',
  });

  const modalDeleteIcon = document.createElement('a');
  setAttributes(modalDeleteIcon, {
    class: 'text-light c-pointer', 'data-bs-toggle': 'modal', 'data-bs-target': '#deleteProject',
  });

  const editIcon = document.createElement('i');
  editIcon.className = 'fas fa-edit mx-3 text-info';

  const deleteIcon = document.createElement('i');
  deleteIcon.className = 'fas fa-trash mx-3 text-danger';

  const priority = document.createElement('span');
  priority.className = 'badge rounded-pill bg-danger';
  priority.innerHTML = taskPriority;

  const details = document.createElement('p');
  details.className = 'card-text';
  details.textContent = taskDetails;

  const date = document.createElement('p');
  date.className = 'card-text';

  const dateSmall = document.createElement('small');
  dateSmall.className = 'text-muted';
  dateSmall.textContent = taskDate;

  date.append(dateSmall);

  const accordionWrapper = document.createElement('div');
  setAttributes(accordionWrapper, {
    class: 'accordion accordion-flush', id: `acc${taskId}`, 'data-index': taskId,
  });

  const accordionItem = document.createElement('div');
  accordionItem.className = 'ccordion-item';

  const accordionTitle = document.createElement('h2');
  setAttributes(accordionTitle, {
    class: 'accordion-header', id: `flush-heading${taskId}`,
  });

  const accordionButton = document.createElement('button');
  setAttributes(accordionButton, {
    class: 'accordion-button collapsed', type: 'button', 'data-bs-toggle': 'collapse', 'data-bs-target': `#flush-collapse${taskId}`, 'aria-expanded': 'false', 'aria-controls': `flush-collapse${taskId}`,
  });
  accordionButton.textContent = 'See more';

  const accordionFlushCollapse = document.createElement('div');
  setAttributes(accordionFlushCollapse, {
    id: `flush-collapse${taskId}`, class: 'accordion-collapse collapse pt-3', 'aria-labelledby': `flush-heading${taskId}`, 'data-bs-parent': `acc${taskId}`,
  });

  const hereWeCanAddItems = document.createElement('div');
  hereWeCanAddItems.className = 'row';

  const addItemWrapper = document.createElement('div');
  addItemWrapper.className = 'mt-2';

  const addItemIcon = document.createElement('i');
  addItemIcon.className = 'fas fa-plus';

  const addItemText = document.createElement('a');
  addItemText.className = 'btn-link';
  addItemText.textContent = 'Add item';

  addItemWrapper.append(addItemIcon, addItemText);

  accordionFlushCollapse.append(hereWeCanAddItems, addItemWrapper);

  accordionTitle.appendChild(accordionButton);

  accordionItem.append(accordionTitle, accordionFlushCollapse);

  accordionWrapper.appendChild(accordionItem);

  modalEditIcon.appendChild(editIcon);

  modalDeleteIcon.appendChild(deleteIcon);

  wripperIcons.append(modalEditIcon, modalDeleteIcon);

  cardTaskTitleWrapper.append(cardTaskTitle, wripperIcons);

  cardTaskBody.append(cardTaskTitleWrapper, priority, details, date, accordionWrapper);

  cardTask.appendChild(cardTaskBody);

  wrapperTask.appendChild(cardTask);

  return wrapperTask;
}
