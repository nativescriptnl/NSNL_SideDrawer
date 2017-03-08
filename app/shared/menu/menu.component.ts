import {Component, AfterViewInit, OnInit, ViewChild, ChangeDetectorRef} from "@angular/core";
import {SideDrawerType, RadSideDrawerComponent} from "nativescript-telerik-ui/sidedrawer/angular";

@Component({
    moduleId: module.id,
    selector: 'menu-contents',
    templateUrl: 'menu.component.html'
})

export class MenuComponent implements OnInit, AfterViewInit {

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private _drawer: SideDrawerType;

    constructor(private _changeDetectionRef: ChangeDetectorRef) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this._drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    toggleMenu(): void {
        this._drawer.toggleDrawerState();
    }

}