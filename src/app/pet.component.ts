import { Component, OnInit, Input } from '@angular/core';
import { PetService } from './pet.service';
//import { In }
@Component({
    selector: 'pet-list',
    templateUrl: './pet.component.html',
    styleUrls: ['./pet.component.css'],
    providers: [
        PetService
    ]
})
export class PetComponent implements OnInit{
    @Input() pet: String; 
    
    title = 'Pets data Directory';
    pets = {};
    ownerGender: Array<String>;
    petTypeToShow: String;
    genderToShow: String = 'Male';

    constructor(private petService: PetService) { }
    
    ngOnInit(){
        this.petTypeToShow = 'Cat';//this.pet;
        this.getPets();
    }
    /**
     * Initial API call to get Pets details
     * Sets this.pets and this.owneGender to template 
     */
    getPets(){
        this.pets = this.groupByGender(this.petService.getPets());
        this.ownerGender = Object.keys(this.pets);
        // this.petService.getPets().subscribe(pets => {
        //     this.pets = this.groupByGender(pets);
        //     this.ownerGender = Object.keys(this.pets);
        // });
    }
    /**
     * Group pets data from service by Owner Gender 
     * @param petData 
     * @returns Object
     */
    groupByGender(petData){
        let _genderData = {};
        for( let owner of petData){
            if(owner.gender && Array.isArray(owner.pets) && owner.pets.length){
                if (!_genderData[owner.gender]) {
                    _genderData[owner.gender] = [];
                }
                _genderData[owner.gender] = _genderData[owner.gender].concat(this.getPetByType(owner.pets,this.petTypeToShow))
            }
        }
        return _genderData;
    }

    /**
     * Filter Pets by Type
     * @param pets: Array 
     * @param type: String ('Cat','Dog') 
     * @returns Array
     */
    getPetByType(pets,type){
        let _pets = [];
        if(!Array.isArray(pets)){
            return;
        }
        for(let pet of pets){
            if(type == pet.type){
                _pets.push(pet);
            }
        }
        return _pets;
    }
}