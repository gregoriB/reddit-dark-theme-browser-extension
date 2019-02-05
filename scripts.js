const sidePanel = document.querySelector('div.side'),
      body      = document.querySelector('body'),
      content   = document.querySelector('div.content');

const bodyDisplayType = window.getComputedStyle(body).getPropertyValue('display'),
      extraGap = 20;

// fixes issue with some subs having threads that overlap the side panel
const fixSiteTableWidth = () => {
  if (!content) return;

  content.style = `max-width: ${window.innerWidth - sidePanel.offsetWidth}px !important`;
  if (bodyDisplayType === 'flex') return;
  
  content.style.marginRight = `${sidePanel.offsetWidth + extraGap}px`;
}

fixSiteTableWidth();

window.addEventListener('resize', fixSiteTableWidth);