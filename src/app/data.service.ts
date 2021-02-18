import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

import {
  Observable,
  of ,
  pipe
} from 'rxjs';
import {
  catchError,
  map,
  tap
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private postUrl = 'https://dummyapi.io/data/api/post';
  private userUrl = 'https://dummyapi.io/data/api/user';
  private tagUrl = 'https://dummyapi.io/data/api/tag';

  httpOptions = {
    headers: new HttpHeaders({
      'app-id': 'YHoLGevyeDj2Du4PJBYL'
    })
  };

  constructor(
    private http: HttpClient,
  ) {}

  getPostsData(): Observable < any[] > {
    return this.http.get < any[] > (this.postUrl, this.httpOptions)
  }

  getCommentData(postId: string): Observable < any[] > {
    return this.http.get < any > (this.postUrl + `/${postId}/comment`, this.httpOptions)
  }

  getUserData(userId: string): Observable < any[] > {
    return this.http.get < any > (this.userUrl + `/${userId}`, this.httpOptions)
  }

  getUserPosts(userId: string): Observable < any[] > {
    return this.http.get < any > (this.userUrl + `/${userId}/post`, this.httpOptions)
  }

  getUserList(): Observable < any[] > {
    return this.http.get < any > (this.userUrl, this.httpOptions)
  }

  getTagList(): Observable < any[] > {
    return this.http.get < any > (this.tagUrl, this.httpOptions)
  }

  getPostTag(tag: string): Observable < any[] > {
    return this.http.get < any > (this.tagUrl + `/${tag}/post`, this.httpOptions)
  }



}
