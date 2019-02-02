const sidePanel = document.querySelector('.side');
const linklisting = document.querySelector('.linklisting');

// fixes issue with some subs having threads that overlap the side panel
const fixSiteTableWidth = () => {
  const extraGap = 15;
  linklisting.setAttribute('style', (
    `max-width: ${window.innerWidth - sidePanel.offsetWidth}px !important`,
    `margin-right: ${sidePanel.offsetWidth + extraGap}px`
    )
  );
}

fixSiteTableWidth();

window.addEventListener('resize', fixSiteTableWidth);