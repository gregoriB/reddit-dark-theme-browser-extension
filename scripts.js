
const sidePanel = document.querySelector('.side');
const siteTable = document.querySelector('#siteTable');

const fixSiteTableWidth = () => {
  siteTable.setAttribute('style', `max-width: ${window.innerWidth - sidePanel.offsetWidth - 35}px !important`)
}

fixSiteTableWidth();

window.addEventListener('resize', fixSiteTableWidth)