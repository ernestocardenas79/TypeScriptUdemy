/// <reference path="base-component.ts"/>
/// <reference path="../models/drag-drop.ts" />
/// <reference path="../models/project.ts" />
/// <reference path="../decorators/autobind.ts" />

namespace App {
  export class ProjectItem
    extends Component<HTMLUListElement, HTMLLIElement>
    implements Draggable
  {
    get persons() {
      if (this.project.people === 1) {
        return "1 person";
      }
      return `${this.project.people} persons`;
    }

    constructor(hostId: string, private project: Project) {
      super("single-project", hostId, false, project.id);

      this.configure();
      this.renderContent();
    }

    dragEndHandler(_: DragEvent): void {
      console.log("dragEndHandler");
    }

    @autoBind
    dragStartHandler(event: DragEvent): void {
      event.dataTransfer!.setData("text/plain", this.project.id);
      event.dataTransfer!.effectAllowed = "move";
    }

    configure(): void {
      this.element.addEventListener("dragstart", this.dragStartHandler);
      this.element.addEventListener("dragend", this.dragEndHandler);
    }

    renderContent(): void {
      this.element.querySelector("h2")!.textContent = this.project.title;
      this.element.querySelector("h3")!.textContent =
        this.persons + " assigned";
      this.element.querySelector("p")!.textContent = this.project.description;
    }
  }
}
