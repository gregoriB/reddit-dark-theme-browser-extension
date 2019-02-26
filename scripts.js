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

const debouncedResize = debounce(() => fixSiteTableWidth(), 250);

function debounce(func, wait, immediate) {
	let timeout;
	return () => {
    const context = this,
          args    = arguments;
          later   = () => {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};

window.addEventListener('load', fixSiteTableWidth)
window.addEventListener('resize', debouncedResize);