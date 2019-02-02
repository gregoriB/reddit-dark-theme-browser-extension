const sidePanel = document.querySelector('.side');
const linklisting = document.querySelector('.linklisting');

// fixes issue with some subs having threads that overlap the side panel
const fixSiteTableWidth = () => {
  linklisting.setAttribute('style', `max-width: ${window.innerWidth - sidePanel.offsetWidth - 48}px !important`);
}

fixSiteTableWidth();

window.addEventListener('resize', fixSiteTableWidth);