import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interface/postsAPI.interface';
import { Comment } from '../../interface/commentsAPI.interface';
import { CommentsService } from '../../services/comments.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  comments: Comment[] = [];

  constructor(
    private postsService: PostsService,
    private commentsService: CommentsService,
    private modalService: ModalService
  ) {}

  ngOnInit() {}

  getPosts() {
    this.postsService.getPosts().subscribe((data) => {
      console.log(data);
      this.posts = data;
    });
  }
  clearPosts() {
    this.posts = [];
  }

  showComments(id) {
    this.commentsService.getCommentsByPostId(id).subscribe((data) => {
      this.comments = data;
      this.modalService.showModal('comments-modal');
    });
  }
}
