import { Component } from '@angular/core';

import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [AuthorsService]
})
export class AuthorsComponent {
  title="Authors";
  authors;
  constructor(authorService: AuthorsService) {
    this.authors = authorService.findAuthors();
  }

}
