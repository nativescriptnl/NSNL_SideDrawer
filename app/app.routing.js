"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./components/home/home.component");
var example_component_1 = require("./components/example/example.component");
var home_wrapper_component_1 = require("./components/home/home-wrapper.component");
var menu_component_1 = require("./shared/menu/menu.component");
exports.AppRoutes = [
    {
        path: "", component: menu_component_1.MenuComponent,
        children: [
            {
                path: "", component: home_wrapper_component_1.HomeWrapperComponent,
                children: [
                    { path: "", component: home_component_1.HomeComponent }
                ]
            },
            {
                path: "example", component: example_component_1.ExampleComponent
            }
        ]
    }
];
exports.AppComponents = [
    menu_component_1.MenuComponent,
    home_component_1.HomeComponent,
    home_wrapper_component_1.HomeWrapperComponent,
    example_component_1.ExampleComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1FQUErRDtBQUMvRCw0RUFBd0U7QUFHeEUsbUZBQThFO0FBQzlFLCtEQUEyRDtBQUU5QyxRQUFBLFNBQVMsR0FBUTtJQUMxQjtRQUNJLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDhCQUFhO1FBQ2xDLFFBQVEsRUFBRTtZQUNOO2dCQUNJLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDZDQUFvQjtnQkFDekMsUUFBUSxFQUFFO29CQUNOLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQztpQkFDdkM7YUFDSjtZQUNEO2dCQUNJLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQjthQUMvQztTQUNKO0tBQ0o7Q0FFSixDQUFDO0FBRVcsUUFBQSxhQUFhLEdBQVE7SUFDOUIsOEJBQWE7SUFDYiw4QkFBYTtJQUNiLDZDQUFvQjtJQUNwQixvQ0FBZ0I7Q0FDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQge0V4YW1wbGVDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZXhhbXBsZS9leGFtcGxlLmNvbXBvbmVudFwiO1xuXG5cbmltcG9ydCB7SG9tZVdyYXBwZXJDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9ob21lLXdyYXBwZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge01lbnVDb21wb25lbnR9IGZyb20gXCIuL3NoYXJlZC9tZW51L21lbnUuY29tcG9uZW50XCI7XG5cbmV4cG9ydCBjb25zdCBBcHBSb3V0ZXM6IGFueSA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiXCIsIGNvbXBvbmVudDogTWVudUNvbXBvbmVudCxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVXcmFwcGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiBcImV4YW1wbGVcIiwgY29tcG9uZW50OiBFeGFtcGxlQ29tcG9uZW50XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5cbl07XG5cbmV4cG9ydCBjb25zdCBBcHBDb21wb25lbnRzOiBhbnkgPSBbXG4gICAgTWVudUNvbXBvbmVudCxcbiAgICBIb21lQ29tcG9uZW50LFxuICAgIEhvbWVXcmFwcGVyQ29tcG9uZW50LFxuICAgIEV4YW1wbGVDb21wb25lbnRcbl07XG5cbiJdfQ==