import { ChangeDetectionStrategy, Component } from '@angular/core';

enum Category {
  Entertainment = 'Entertainment',
  Education = 'Education',
  Healthcare = 'Healthcare',
  WorkFromHome = 'WFH',
}

enum Genre {
  Crime = 'Crime',
  Mystery = 'Mystery',
  Drama = 'Drama',
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstComponent {
  constructor() {}

  name = 'The Book';
  description =
    'A simple book, that, as any other book, contains pages. The contents of those pages shall remain unknown to all but those who acquire The Book.';
  price = 10.99;
  isAvailable = true;
  category = Category.Entertainment;

  chapters: string[] = [
    'Introduction',
    'The Great Reveal',
    'So what is this book about?',
    'What does that even mean?',
    'To be continued',
  ];

  genres: Genre[] = [Genre.Crime, Genre.Mystery, Genre.Drama];
}
