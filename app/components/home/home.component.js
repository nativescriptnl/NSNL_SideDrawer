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
var menu_component_1 = require("../../shared/menu/menu.component");
var HomeComponent = (function () {
    function HomeComponent(menuComponent) {
        this.menuComponent = menuComponent;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.toggleTheMenu = function () {
        this.menuComponent.toggleMenu();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: "./components/home/home.component.html"
    }),
    __metadata("design:paramtypes", [menu_component_1.MenuComponent])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFnRDtBQUNoRCxtRUFBK0Q7QUFPL0QsSUFBYSxhQUFhO0lBRXRCLHVCQUEyQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUN2RCxDQUFDO0lBRU0sZ0NBQVEsR0FBZjtJQUNBLENBQUM7SUFFRCxxQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSx1Q0FBdUM7S0FDdkQsQ0FBQztxQ0FJNEMsOEJBQWE7R0FGOUMsYUFBYSxDQVl6QjtBQVpZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TWVudUNvbXBvbmVudH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tZW51L21lbnUuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImhvbWVcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXCJcbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lbnVDb21wb25lbnQ6IE1lbnVDb21wb25lbnQpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgdG9nZ2xlVGhlTWVudSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZW51Q29tcG9uZW50LnRvZ2dsZU1lbnUoKTtcbiAgICB9XG5cbn1cbiJdfQ==