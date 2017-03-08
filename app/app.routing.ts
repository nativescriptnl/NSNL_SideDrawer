import {HomeComponent} from "./components/home/home.component";
import {ExampleComponent} from "./components/example/example.component";


import {HomeWrapperComponent} from "./components/home/home-wrapper.component";
import {MenuComponent} from "./shared/menu/menu.component";

export const AppRoutes: any = [
    {
        path: "", component: MenuComponent,
        children: [
            {
                path: "", component: HomeWrapperComponent,
                children: [
                    {path: "", component: HomeComponent},
                    {path: "example", component: ExampleComponent}
                ]
            }
        ]
    }

];

export const AppComponents: any = [
    MenuComponent,
    HomeComponent,
    HomeWrapperComponent,
    ExampleComponent
];

