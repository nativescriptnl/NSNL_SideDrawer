import {Component, OnInit} from "@angular/core";
import {MenuComponent} from "../../shared/menu/menu.component";

@Component({
    selector: "home",
    templateUrl: "./components/home/home.component.html"
})

export class HomeComponent implements OnInit {

    public constructor(private menuComponent: MenuComponent) {
    }

    public ngOnInit() {
    }

    toggleTheMenu(): void {
        this.menuComponent.toggleMenu();
    }

}
