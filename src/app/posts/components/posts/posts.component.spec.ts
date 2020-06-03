import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { PostsComponent } from './posts.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { CommentsService } from '../../services/comments.service';
import { ModalService } from '../../../shared/services/modal.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { PostsComponent } from './posts.component';

// describe('PostsComponent', () => {
//   let component: PostsComponent;
//   let fixture: ComponentFixture<PostsComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [PostsComponent]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(PostsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// describe('PostsComponent', () => {
//   let component: PostsComponent;
//   let fixture: ComponentFixture<PostsComponent>;

//   beforeEach(async () => {
//     TestBed.configureTestingModule({
//       declarations: [PostsComponent],
//       providers: [
//         { provide: PostsService, useValue: PostsServiceStub },
//         { provide: CommentsService, useValue: CommentsServiceStub },
//         { provide: ModalService, useValue: ModalServiceStub }
//       ],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA]
//     }).compileComponents();
//     fixture = TestBed.createComponent(PostsComponent);
//     component = fixture.debugElement.componentInstance;
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

const PostsServiceStub = jasmine.createSpyObj('postsService', ['getPosts']);
const CommentsServiceStub = {};
const ModalServiceStub = {};

const mockData = [
  {
    body:
      'et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto',
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    userId: 1,
  },
];

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  const postServiceSpy = PostsServiceStub.getPosts.and.returnValue(
    of(mockData)
  );
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: PostsService, useValue: PostsServiceStub },
        { provide: ModalService, useValue: ModalServiceStub },
        { provide: CommentsService, useValue: CommentsServiceStub },
      ],
    }).compileComponents();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have getPosts and clearPosts button', () => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    const getPostsBtnElement: HTMLElement = fixture.nativeElement.querySelector(
      '.btnGetPosts'
    );
    expect(getPostsBtnElement).toBeTruthy();

    const clearPostsBtnElement: HTMLElement = fixture.nativeElement.querySelector(
      '.btnClearPosts'
    );
    expect(clearPostsBtnElement).toBeTruthy();
  });

  it('should display posts list if you click getPosts button', () => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.debugElement.componentInstance;
    const btnGetDe = fixture.debugElement.query(By.css('.btnGetPosts'));
    btnGetDe.triggerEventHandler('click', null);
    fixture.detectChanges();
    const tableElment = fixture.nativeElement.querySelector('.posts-table');
    expect(tableElment).toBeTruthy();
    const rows = tableElment.querySelectorAll('tr');
    expect(rows.length).toBe(2);
  });
});
