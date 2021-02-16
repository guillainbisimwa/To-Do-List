import setAttributes from './dom';

export default function createModal() {
  const wrapperModal = document.createElement('div');
  setAttributes(wrapperModal, { class: 'modal fade', id: 'addProject', tabindex: '-1','aria-labelledby': 'exMl', 'aria-hidden':'true' });

  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';

  const titleHeader = document.createElement('h5');
  setAttributes(titleHeader, { class: 'modal-title', id: 'exMl' });

  const btnHeader = document.createElement('button');
  setAttributes(btnHeader, { class: 'btn-close', type: 'button', 'ta-bs-dismiss': "modal", 'aria-label': "Close" });

  const modalBody = document.createElement('div');
  modalBody.className = 'modal-body';

  const inputTitleProject = document.createElement('input');
  setAttributes(inputTitleProject, { class: 'form-control', type: 'text', placeholder: "Add the title here" });

  const modalFooter = document.createElement('div');
  modalFooter.className = 'modal-footer';

  const btnClose = document.createElement('button');
  setAttributes(btnClose, { class: 'btn btn-secondary', type: 'button', 'data-bs-dismiss': "modal" });

  const btnSave = document.createElement('button');
  setAttributes(btnSave, { class: 'btn btn-primary', type: 'button' });

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const modalDialog = document.createElement('div');
  modalDialog.className = 'modal-dialog';

  modalHeader.appendChild(titleHeader, btnHeader);

  modalBody.appendChild(inputTitleProject);

  modalFooter.append(btnClose, btnSave);

  modalContent.append(modalHeader, modalBody, modalFooter);

  modalDialog.appendChild(modalContent);

  wrapperModal.appendChild(modalDialog);

  return wrapperModal;
}
