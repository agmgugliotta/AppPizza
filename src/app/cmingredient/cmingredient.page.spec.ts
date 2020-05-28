import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CmingredientPage } from './cmingredient.page';

describe('CmingredientPage', () => {
  let component: CmingredientPage;
  let fixture: ComponentFixture<CmingredientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmingredientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CmingredientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
