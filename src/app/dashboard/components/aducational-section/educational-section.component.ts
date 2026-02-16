import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "educational-section",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./educational-section.component.html",
  styleUrls: ["./educational-section.component.css"],
})
export class EducationalSectionComponent {
  showDetails: boolean = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
