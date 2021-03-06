import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "a, button, label, [(click)]"
})
export class ClicksDirective {
  
  constructor() {}

  @HostListener("click", ["$event", "$event.target"])
  onClick(event: MouseEvent, targetElement: HTMLElement): void {
    console.log("shared.ClicksDirective");
    console.log(event);
    console.log(targetElement);
  }
}
