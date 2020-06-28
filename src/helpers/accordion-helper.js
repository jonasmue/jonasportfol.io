const AccordionHelper = () => {
	"use strict"

	function initializeAccordion() {
		const $collapsible = $(".collapsible");
		$collapsible.off("click");
		$collapsible.on("click", function () {
			const $this = $(this);
			const collapsibleContent = $this.find(".collapsible-content");
			if ($this.hasClass("open")) {
				collapsibleContent.slideUp("fast");
				$this.removeClass("open");
			} else {
				collapsibleContent.slideDown("fast");
				$this.addClass("open");
			}
		})
	}

	return {
		initialize: initializeAccordion
	}
}

export default AccordionHelper
