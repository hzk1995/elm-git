
import {SYNC_UPDATE} from "./const"
export default {
    addGoodInCar({commit},good){
         setTimeout(() =>{
             var cars = getCar();
             commit(SYNC_UPDATE,cars)
             let isHas = cars.some(item=>{
                 if(item.vfood_id === good.vfood_id){
                     item.num++
                     return true
                 }
             })
             if(!isHas){
                 good.num = 1;
                 cars.push(good)
             }
             localStorage.cars = JSON.stringify(cars)
             commit(SYNC_UPDATE,cars)
         }, 1000);
     }
}


function  getCar(){
    return JSON.parse(localStorage.cars?localStorage.cars:'[]')
}