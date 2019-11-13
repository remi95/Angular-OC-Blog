import { Injectable } from '@angular/core';
import {Post} from '../model/post';
import {Subject} from 'rxjs';
import {randomDate} from '../helpers/date.helper';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[];
  postsSubject = new Subject<Post[]>();

  constructor() {
    const postExampleOne = new Post(
      'Mon post sympa',
      'Et Epigonus quidem amictu tenus philosophus, ut apparuit, prece frustra temptata, ' +
      'ulcatis lateribus mortisque metu admoto turpi confessione cogitatorum socium, quae nulla erant',
    );
    postExampleOne.createdAt = randomDate();

    const postExampleTwo = new Post(
      'Mon post vraiment pas mal',
      'Et Epigonus quidem amictu tenus philosophus, ut apparuit, prece frustra temptata, ' +
      'ulcatis lateribus mortisque metu admoto turpi confessione cogitatorum socium, quae nulla erant',
    );
    postExampleTwo.createdAt = randomDate();

    const postExampleThree = new Post(
      'Mon post incroyable',
      'Et Epigonus quidem amictu tenus philosophus, ut apparuit, prece frustra temptata, ' +
      'ulcatis lateribus mortisque metu admoto turpi confessione cogitatorum socium, quae nulla erant',
    );
    postExampleThree.createdAt = randomDate();

    this.posts = [postExampleOne, postExampleTwo, postExampleThree];
  }

  emitPosts = () => {
    this.posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    this.postsSubject.next(this.posts);
  }

  addPost = (post: Post) => {
    this.posts.push(post);
    this.emitPosts();
  }

  removePost = (postIndex: number) => {
    this.posts.splice(postIndex, 1);
    this.emitPosts();
  }

  addLikeToPost = (postIndex: number) => {
    this.posts[postIndex].loveIts += 1;
    this.emitPosts();
  }

  removeLikeToPost = (postIndex: number) => {
    this.posts[postIndex].loveIts -= 1;
    this.emitPosts();
  }
}
