import createHeader from './header';
import createModal from './modalAddProject';

export default function displayHeader() {
  const contentDiv = document.querySelector('#content');
  const header = createHeader();
  const modal = createModal();
  contentDiv.append(header, modal);
}
