import {Component, AfterViewInit, OnInit, ViewChild, ChangeDetectorRef} from "@angular/core";
import {SideDrawerType, RadSideDrawerComponent} from "nativescript-telerik-ui/sidedrawer/angular";
import {Router, NavigationEnd} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'menu-contents',
    templateUrl: 'menu.component.html'
})

export class MenuComponent implements OnInit, AfterViewInit {

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private _drawer: SideDrawerType;

    constructor(private _changeDetectionRef: ChangeDetectorRef,
                private _router: Router) {
    }

    ngOnInit(): void {
        this._router.events.subscribe(e => {
            if (e instanceof NavigationEnd) {
                this._drawer.closeDrawer();
            }
        })
    }

    ngAfterViewInit(): void {
        this._drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    toggleMenu(): void {
        this._drawer.toggleDrawerState();
    }

}