import {
  Component,
  OnInit
} from '@angular/core';
import {
  Post
} from '../post';
import {
  DataService
} from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  comments: any;
  tagList: any;

  constructor(private postService: DataService) {}

  ngOnInit(): void {
    this.getTagList();
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPostsData().subscribe((postList) => {
      this.posts = postList;
      console.log(this.posts.data);
    });
  }

  getComment(postID: string): void {
    this.postService.getCommentData(postID).subscribe((commentData) => {
      this.comments = commentData;
      console.log(this.comments.data);
    });
  }

  getTagList(): void {
    this.postService.getTagList().subscribe((tagListData) => {
      this.tagList = tagListData;
      console.log('tags', this.tagList);
    })
  }

	getPostByTags(tag: string): void {
    this.postService.getPostTag(tag).subscribe((postTagData) => {
        this.posts = postTagData;
    })
  }
  
}
