import { Component, OnInit } from '@angular/core';
import { Posts } from '../posts';
import { PostsService } from '../posts.service';

declare var window: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  allPosts: Posts[] = [];

  constructor(private postsService: PostsService) {}

  deleteModal: any;
  idToDelete: number = 0;

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }

  get() {
    this.postsService.get().subscribe((data) => {
      this.allPosts = data;
    });
  }
  openDeleteModel(id: number) {
    this.idToDelete = id;
    this.deleteModal.show();
  }
  delete() {
    this.postsService.delete(this.idToDelete).subscribe((data) => {
      this.allPosts = this.allPosts.filter((_) => _.id !== this.idToDelete);
      this.deleteModal.hide();
    });
  }
}
