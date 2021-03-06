import { Feature } from "../feature";
import { ElementRef, Directive } from "@angular/core";

@Directive({
	selector: 'responsive',
	inputs: ["disabled","create","columnSettings","reactOnContainerWidthChanges","forceResponsiveGridWidth","responsiveSensitivity","responsiveModes","enableVerticalRendering","windowWidthToRenderVertically","propertiesColumnWidth","valuesColumnWidth","allowedColumnWidthPerType","singleColumnTemplate","inherit"],
	outputs: ["responsiveColumnHiding","responsiveColumnHidden","responsiveColumnShowing","responsiveColumnShown","responsiveModeChanged"]
})
export class IgGridResponsiveFeature extends Feature<IgGridResponsive> {	
	constructor(el: ElementRef) {
		super(el);
	}

	/**
	 * Destroys the responsive widget.
	 */
	public destroy(): void { return; } ;

	/**
	 * Returns the currently active responsive mode.
	 */
	public getCurrentResponsiveMode(): void { return; } ;
}