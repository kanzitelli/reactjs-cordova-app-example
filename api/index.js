import InitData from './fakeInitData';
import Subject1 from './fakeSubject1';
import Subject2 from './fakeSubject2';
import Subject3 from './fakeSubject3';
import Subject4 from './fakeSubject4';
import Subject5 from './fakeSubject5';
import Subject6 from './fakeSubject6';
import Subject7 from './fakeSubject7';

const Subjects = {
  1: Subject1, 2: Subject2, 3: Subject3, 4: Subject4, 5: Subject5, 6: Subject6, 7: Subject7
};

export function getInitData() {
  // { .Left: [...], .Right: [...] }
  return InitData;
}

export function getSubjects() {
  return Subjects;
}

export function getSubject(id) {
  return Subjects[id];
}
