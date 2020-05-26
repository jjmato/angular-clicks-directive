import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "a, button, mat-radio-button, mat-icon, label, [(click)]"
})
export class AnalyticEventDirective {
  
  constructor() {}

  @HostListener("click", ["$event", "$event.target"])
  onClick(event: MouseEvent, targetElement: HTMLElement): void {
    console.group("shared.AnalyticEventDirective");
    console.log(event);
    console.log(targetElement);
    console.groupEnd();
  }
}
