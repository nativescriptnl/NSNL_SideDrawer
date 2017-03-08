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
var router_1 = require("@angular/router");
var MenuComponent = (function () {
    function MenuComponent(_changeDetectionRef, _router) {
        this._changeDetectionRef = _changeDetectionRef;
        this._router = _router;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (e) {
            if (e instanceof router_1.NavigationEnd) {
                _this._drawer.closeDrawer();
            }
        });
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
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
        router_1.Router])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUE2RjtBQUM3RixzRUFBa0c7QUFDbEcsMENBQXNEO0FBUXRELElBQWEsYUFBYTtJQUt0Qix1QkFBb0IsbUJBQXNDLEVBQ3RDLE9BQWU7UUFEZix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQ3RDLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFDbkMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLHNCQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixLQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQy9CLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVMLG9CQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQXhCc0M7SUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFBeUIsZ0NBQXNCO3NEQUFDO0FBRnpFLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUscUJBQXFCO0tBQ3JDLENBQUM7cUNBTzJDLHdCQUFpQjtRQUM3QixlQUFNO0dBTjFCLGFBQWEsQ0EwQnpCO0FBMUJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7U2lkZURyYXdlclR5cGUsIFJhZFNpZGVEcmF3ZXJDb21wb25lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRW5kfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdtZW51LWNvbnRlbnRzJyxcbiAgICB0ZW1wbGF0ZVVybDogJ21lbnUuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBfZHJhd2VyOiBTaWRlRHJhd2VyVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZSA9PiB7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2RyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gICAgfVxuXG59Il19