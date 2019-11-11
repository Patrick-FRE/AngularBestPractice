import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { PostsService } from './posts.service';
import { Post } from '../interface/postsAPI.interface';

describe('PostsService', () => {
  let postsService: PostsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsService],
      imports: [HttpClientTestingModule]
    });

    postsService = TestBed.get(PostsService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(postsService).toBeTruthy();
  });

  it(`should get the Posts data `, () => {
    const mockData: Post[] = [
      { id: 1, title: '1', body: '1' },
      { id: 2, title: '2', body: '2' }
    ];
    postsService.getPosts().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpTestingController.expectOne(
      postsService.baseUrl + '/posts'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  afterEach(() => {
    // httpTestingController.verify();
  });
});
