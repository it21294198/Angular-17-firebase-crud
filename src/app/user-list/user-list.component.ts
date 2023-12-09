import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { UserUpdateComponent } from "../components/user-update/user-update.component";

@Component({
    selector: 'app-user-list',
    standalone: true,
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.css',
    imports: [UserUpdateComponent]
})
export class UserListComponent {

  users: any[] = [];
  
  constructor(private userService: UserService) {}
  
  ngOnInit():void{
    this.loadUsers();
  }
  
  async loadUsers(){
    this.users = await this.userService.getAllUsers();
    console.log(this.users);
  }
  
  async createUser() {
    const userData = { id:new Date().getTime() ,name: 'Doe', email: 'john.doe@example.com' }; // Customize based on your user schema
    await this.userService.createUser(userData);
    this.loadUsers();
  }

  async updateUser(id: any) {
    const name = null;
    await this.userService.updateUser(id,name);
    this.loadUsers();
  }

  async deleteUser(id:any) {
    await this.userService.deleteUser(id);
    this.loadUsers();
  }
}
