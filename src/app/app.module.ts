import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { PostsModule } from './posts/posts.module';
import { SharedModule } from './shared/shared.module';
import { MyPipePipe } from './my-pipe.pipe';

// Why do we need testing? /// We need testing to make sure some certain things happen.

// Driven:  BDD vs TDD

// unit testing | shallow testing (TestBesd) | integrating testing | e2e

// testing library: Jasmine(Behavior testing framework) and Karma(browser runtime for testing) |

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
