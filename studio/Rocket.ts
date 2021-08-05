import { Payload } from "./Payload";
import {Cargo} from "./Cargo";
import {Astronaut} from "./Astronaut";
export class Rocket{
    name:string;
    totalCapacityKg: number;
    cargoItems = [];
    astronauts = [];
    constructor(name: string, totalCapacityKg: number, cargoItems = [], astronauts = []) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = cargoItems;
        this.astronauts = astronauts;
    }
    sumMass(items: Payload[]): number { //anything that implements payload
        let total = 0;
        for(let i = 0; i < items.length; i++){
            total += items[i].massKg;
        }
        return total;
    }
    currentMassKg() :number{
        let total = 0;
        total = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return total;
    }

    canAdd(item: Payload): boolean { //this is not a collection it is a single
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        }

    }
    addCargo(cargo: Cargo): boolean {

        if (this.canAdd(cargo)){
                  this.cargoItems.push(cargo);
                  return true;
        } else {
            return false;
        }

    }
    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}