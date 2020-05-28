import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CMpizzaPage } from './cmpizza.page';

describe('CMpizzaPage', () => {
  let component: CMpizzaPage;
  let fixture: ComponentFixture<CMpizzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMpizzaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CMpizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
