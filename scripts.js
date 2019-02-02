const sidePanel = document.querySelector('.side');
const linklisting = document.querySelector('.linklisting');
const wiki = document.querySelector('.wiki-page');
const content = document.querySelector('div.content')

// fixes issue with some subs having threads that overlap the side panel
const fixSiteTableWidth = () => {
  const extraGap = 15;
  if (linklisting) {
    content.setAttribute('style', 'margin-right: 0 !important');
    linklisting.setAttribute('style', (
      `max-width: ${window.innerWidth - sidePanel.offsetWidth}px !important`,
      `margin-right: ${sidePanel.offsetWidth + extraGap}px`
      )
    );
  }
  if (wiki) {
      content.setAttribute('style', (
      `max-width: ${window.innerWidth - sidePanel.offsetWidth}px !important`,
      `margin-right: ${sidePanel.offsetWidth + extraGap}px`
      )
    );
  }
}

fixSiteTableWidth();

window.addEventListener('resize', fixSiteTableWidth);