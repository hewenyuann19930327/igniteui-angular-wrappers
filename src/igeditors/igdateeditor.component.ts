import { IgEditorBase } from "./igeditorbase";
import { Renderer, ElementRef, IterableDiffers, Optional, Component, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { NgModel } from "@angular/forms";

@Component({
	selector: "ig-date-editor",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","value","tabIndex","allowNullValue","nullValue","inputName","readOnly","validatorOptions","buttonType","listItems","listWidth","listItemHoverDuration","dropDownAttachedToBody","dropDownAnimationDuration","visibleItemsCount","includeKeys","excludeKeys","textAlign","placeHolder","selectionOnFocus","textMode","spinWrapAround","isLimitedToListValues","revertIfNotValid","preventSubmitOnEnter","dropDownOrientation","maxLength","dropDownOnReadOnly","toUpper","toLower","locale","suppressNotifications","regional","inputMask","dataMode","unfilledCharsPrompt","padChar","emptyChar","minValue","maxValue","dateDisplayFormat","dateInputFormat","spinDelta","limitSpinToCurrentField","enableUTCDates","centuryThreshold","yearShift"],
	outputs: ["rendering","rendered","mousedown","mouseup","mousemove","mouseover","mouseout","blur","focus","keydown","keypress","keyup","valueChanging","valueChanged","dropDownListOpening","dropDownListOpened","dropDownListClosing","dropDownListClosed","dropDownItemSelecting","dropDownItemSelected","textChanged"]
})
export class IgDateEditorComponent extends IgEditorBase<IgDateEditor> {
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef, @Optional() public model: NgModel) { super(el, renderer, differs, kvalDiffers, cdr, model); }

	/**
	 * Changes the the regional settings of widget element to the language specified in [options.regional](ui.igdateeditor#options:regional)
	 * Note that this method is for rare scenarios, use [regional](ui.igdateeditor#options:regional) option setter
	 */
	public changeRegional(): void {return;};

	/**
	 * Gets/Sets editor value.
	 *
	 * Note! This option doesn't use the dateInputFormat to extract the date
	 *
	 * @param newValue New editor value. Date object can be set as value. String value can be passed and the editor will use the javascript Date object constructor to create date object and will use it for the comparison. MVC date format can be used too. For example Date(/"thicks"/).
	 */
	public value(newValue?: Date): Date {return;};

	/**
	 * Gets selected date as a date object. This method can be used when dataMode is set as either displayModeText or editModeText.
	 * In such cases the value() method will not return date object and getSelectedDate() can be used to replace that functionality.
	 */
	public getSelectedDate(): Date {return;};

	/**
	 * Sets selected date. This method can be used when dataMode is set as either displayModeText or editModeText.
	 * In such cases the value() cannot accept a date object as a new value and getSelectedDate() can be used to replace that functionality.
	 *
	 * @param date
	 */
	public selectDate(date: Date): void {return;};

	/**
	 * Increases the date or time period, depending on the current cursor position.
	 *
	 * @param delta The increase delta.
	 */
	public spinUp(delta?: number): void {return;};

	/**
	 * Decreases the date or time period, depending on the current cursor position.
	 *
	 * @param delta The decrease delta.
	 */
	public spinDown(delta?: number): void {return;};

	/**
	 * Returns a reference to the spin up UI element of the editor.
	 */
	public spinUpButton(): string {return;};

	/**
	 * Returns a reference to the spin down UI element of the editor.
	 */
	public spinDownButton(): string {return;};

	/**
	 * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
	 */
	public isValid(): boolean {return;};
	public dropDownButton(): void {return;};
	public dropDownContainer(): void {return;};
	public dropDownVisible(): void {return;};
	public findListItemIndex(): void {return;};
	public getSelectedListItem(): void {return;};
	public selectedListIndex(): void {return;};
	public showDropDown(): void {return;};
	public hideDropDown(): void {return;};
}