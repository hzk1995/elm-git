
import {SYNC_UPDATE} from "./const"
export default {
    addGoodInCar({commit},good){
         setTimeout(() =>{
            //  console.log(1)
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
         }, 300);
     },
     reduceGoodInCar({commit},good){
        setTimeout(() =>{
            var cars = getCar();
            cars = cars.filter(item=>{
                if(item.vfood_id === good.vfood_id){
                    item.num--
                    if(item.num <= 0) return false;
                }
                return true;
            })
            localStorage.cars = JSON.stringify(cars)
            commit(SYNC_UPDATE,cars)
        }, 300);
    }
}


function  getCar(){
    return JSON.parse(localStorage.cars?localStorage.cars:'[]')
}