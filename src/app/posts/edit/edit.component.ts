import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Posts } from '../posts';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  postForm: Posts = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.postsService.getById(id).subscribe((data) => {
      this.postForm = data;
    });
  }

  update() {
    this.postsService.update(this.postForm).subscribe({
      next: (data) => {
        this.router.navigate(['/posts/dashboard']);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
