import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { PetComponent } from './pet.component';
import { PetService } from './pet.service';

describe('PetComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PetComponent
      ],
      imports: [
        HttpModule
      ],
      providers: [ PetService],
    }).compileComponents();
  }));

  it('should create the Pet Component', async(() => {
    const fixture = TestBed.createComponent(PetComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Pets data Directory'`, async(() => {
    const fixture = TestBed.createComponent(PetComponent);
    const pet = fixture.debugElement.componentInstance;
    expect(pet.title).toEqual('Pets data Directory');
  }));

  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(PetComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Pets data Directory');
  }));
});
