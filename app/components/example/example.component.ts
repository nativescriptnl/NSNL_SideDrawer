import {Component, OnInit} from "@angular/core";
import {MenuComponent} from "../../shared/menu/menu.component";

@Component({
    selector: "example",
    templateUrl: "./components/example/example.component.html"
})

export class ExampleComponent implements OnInit {

    public constructor(private menuComponent: MenuComponent) {
    }

    public ngOnInit() {
    }

    toggleTheMenu(): void {
        console.log('toggleMenu');
        this.menuComponent.toggleMenu();
    }

}
