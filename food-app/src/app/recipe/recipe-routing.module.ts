import { RouterModule, Routes } from "@angular/router";
import { AccessGuard } from "../guards/access.guard";
import { AddComponent } from "./add/add.component";
import { DetailsComponent } from "./details/details.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
    {
        path: 'recipe',
        canActivateChild: [AccessGuard],
        children: [
            {
                path: 'add',
                data: {
                  shouldLogged: true
                },
                component: AddComponent
              },
              {
                path: 'details/:id',
                data: {
                  shouldLogged: true
                },
                component: DetailsComponent
              },
              {
                path: 'edit/:id',
                data: {
                  shouldLogged: true
                },
                component: EditComponent
              }
        ]
    }
];

export const RecipeRoutingModule = RouterModule.forChild(routes);