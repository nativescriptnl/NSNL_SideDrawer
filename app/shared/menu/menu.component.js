"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var MenuComponent = (function () {
    function MenuComponent(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.ngAfterViewInit = function () {
        this._drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    MenuComponent.prototype.toggleMenu = function () {
        this._drawer.toggleDrawerState();
    };
    return MenuComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], MenuComponent.prototype, "drawerComponent", void 0);
MenuComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'menu-contents',
        templateUrl: 'menu.component.html'
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUE2RjtBQUM3RixzRUFBa0c7QUFRbEcsSUFBYSxhQUFhO0lBS3RCLHVCQUFvQixtQkFBc0M7UUFBdEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtJQUMxRCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVMLG9CQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQWxCc0M7SUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFBeUIsZ0NBQXNCO3NEQUFDO0FBRnpFLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUscUJBQXFCO0tBQ3JDLENBQUM7cUNBTzJDLHdCQUFpQjtHQUxqRCxhQUFhLENBb0J6QjtBQXBCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBPbkluaXQsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1NpZGVEcmF3ZXJUeXBlLCBSYWRTaWRlRHJhd2VyQ29tcG9uZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdtZW51LWNvbnRlbnRzJyxcbiAgICB0ZW1wbGF0ZVVybDogJ21lbnUuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBfZHJhd2VyOiBTaWRlRHJhd2VyVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2RyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gICAgfVxuXG59Il19