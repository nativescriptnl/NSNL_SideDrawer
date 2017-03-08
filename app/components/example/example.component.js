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
var ExampleComponent = (function () {
    function ExampleComponent(menuComponent) {
        this.menuComponent = menuComponent;
    }
    ExampleComponent.prototype.ngOnInit = function () {
    };
    ExampleComponent.prototype.toggleTheMenu = function () {
        console.log('toggleMenu');
        this.menuComponent.toggleMenu();
    };
    return ExampleComponent;
}());
ExampleComponent = __decorate([
    core_1.Component({
        selector: "example",
        templateUrl: "./components/example/example.component.html"
    }),
    __metadata("design:paramtypes", [menu_component_1.MenuComponent])
], ExampleComponent);
exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleGFtcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFnRDtBQUNoRCxtRUFBK0Q7QUFPL0QsSUFBYSxnQkFBZ0I7SUFFekIsMEJBQTJCLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ3ZELENBQUM7SUFFTSxtQ0FBUSxHQUFmO0lBQ0EsQ0FBQztJQUVELHdDQUFhLEdBQWI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVMLHVCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxnQkFBZ0I7SUFMNUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSw2Q0FBNkM7S0FDN0QsQ0FBQztxQ0FJNEMsOEJBQWE7R0FGOUMsZ0JBQWdCLENBYTVCO0FBYlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TWVudUNvbXBvbmVudH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tZW51L21lbnUuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImV4YW1wbGVcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbXBvbmVudHMvZXhhbXBsZS9leGFtcGxlLmNvbXBvbmVudC5odG1sXCJcbn0pXG5cbmV4cG9ydCBjbGFzcyBFeGFtcGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lbnVDb21wb25lbnQ6IE1lbnVDb21wb25lbnQpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgdG9nZ2xlVGhlTWVudSgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RvZ2dsZU1lbnUnKTtcbiAgICAgICAgdGhpcy5tZW51Q29tcG9uZW50LnRvZ2dsZU1lbnUoKTtcbiAgICB9XG5cbn1cbiJdfQ==