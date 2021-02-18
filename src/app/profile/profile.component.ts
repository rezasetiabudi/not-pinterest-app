import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service'
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private postService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  @Output() myEvent = new EventEmitter();

  userProfile: any;
  userPosts: any;
  comments: any;
  

  ngOnInit(): void {
    this.getUserProfile();
    this.getUserPosts();
  }

  getUserProfile(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.postService.getUserData(id).subscribe((userData) => {
      this.userProfile = userData;
      console.log(this.userProfile);
    });
  }

  getUserPosts(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.postService.getUserPosts(id).subscribe((userPostsData) => {
      this.userPosts = userPostsData;
      this.userPosts = this.userPosts.data
      console.log(this.userPosts.data);
    });
  }

  getPostByTags(tag: string, id: string): void {
    this.postService.getPostTag(tag).subscribe((postTagData) => {
      this.userPosts = postTagData;
      this.userPosts = this.userPosts.data.filter(post => post.owner.id === id)
      console.log('result',this.userPosts)
    })    
  }

  getComment(postID: string): void {
    this.postService.getCommentData(postID).subscribe((commentData) => {
      this.comments = commentData;
      console.log(this.comments.data);
    });
  }
}
