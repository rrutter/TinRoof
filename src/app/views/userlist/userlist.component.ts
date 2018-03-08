import { Component, OnInit } from '@angular/core';
import { UserService } from "../../commons/services/userservice/user.service";
import {AfterViewInit} from "@angular/core";

//if i was going to be more indepth with the user
interface user {
  name: string;
  username: string;
  id: number;
  address: any;
}

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers: [
    UserService
  ]
})
export class UserlistComponent implements OnInit {

  //list of users data
  public userList;
  public userId;

  constructor(private userService: UserService) { }

  ngOnInit()
  {
    this.grabAllUsers();
  }


  AfterViewInit()
  {
    //do fun stuff with the dom

  }

  private grabAllUsers()
  {
    //make this one a promise

    this.userService.getUsers().toPromise()
      .then(this.updateUserList.bind(this))
      .catch(this.handleError);
  }

  public showAlbums(e)
  {
    this.userId = e.target.id;
  }

  private updateUserList(userData)
  {
    this.userList = userData;
    console.log(this.userList);
  }

  private handleError(e)
  {
    //do error checking here
    console.error(e);
  }

}
