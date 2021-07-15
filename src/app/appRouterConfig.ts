import { ReadComponent } from './read/read.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';


import { Routes } from '@angular/router';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'tarefas',
        component: ListComponent
    },
    {
        path: 'tarefas/:id',
        component: ReadComponent
    },
    {
        path: 'tarefas/edit/:id',
        component: EditComponent
    },
    {
        path: 'tarefas/delete/:id',
        component: DeleteComponent
    }
];
export default appRoutes;