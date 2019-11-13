import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../model/post';
import {PostService} from '../../../service/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Input() index: number;

  constructor(private postService: PostService) { }

  ngOnInit() {}

  onLikeClick = () => this.postService.addLikeToPost(this.index);
  onDislikeClick = () => this.postService.removeLikeToPost(this.index);
  onDelete = () => this.postService.removePost(this.index);
}
