// import `.scss` files
// import './scss/styles.scss';
// import UserList class
// import { UserList as defaultExport } from './lib/user-list';
// export default UserList class
// I used `defaultExport` to state that variable name doesn't matter
// console.log('hello es');
// export default defaultExport;

function  createcircle(radius) {
    return {
        radius,
        draw:  function () {
            console.log('draw');

        }
    };
}
const circle= createcircle(1);
console.log(circle);
function Circle2(radius) {
    this.radius=radius;
    this.draw=function () {
      console.log('draw2');
    }
};
const circle2= new Circle2(2);
circle.location={x: 1};
for(let key in circle2){
    console.log('tets',key, circle2[key]);
}
const keys= Object.keys(circle2);
console.log('kkkeee', keys);
console.log(circle2);
const sw=function () {
    let state, starttime, endTime=0;
     let duration=0;
    this.start= function () {
        if(this.state!==1){
            this.state=1;
            this.startTime= new Date();
        }
        else{
            console.log('started');
        }

    };
    this.stop= function () {
        if(this.state!==2){
            this.state=2;
            this.endTime= new Date();
        }
        else{
            console.log('stopped');
        }
    }
    this.reset= function () {
        if(this.state!==3){
            this.state=3;
            this.duration= 0;
        }
        else{
            console.log('reseted');
        }
    }
}