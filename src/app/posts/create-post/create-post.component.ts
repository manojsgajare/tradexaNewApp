import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Posts } from '../posts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

   postForm :Posts = {
    userId: 0,
    id: 0,
    title:'',
    body:'',
   };

   constructor (
    private postsService : PostsService,
    private router: Router
   ) {}

   ngOnInit(): void {}

   create() {
    this.postsService.create(this.postForm).subscribe({
      next: (data) => {
        this.router.navigate(["/posts/dashboard"])
      },
      error:(error) => {
        console.log(error);
      }
    });
   }
}
