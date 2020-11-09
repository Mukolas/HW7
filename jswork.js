//Task5 js
//Zavdannya1 - Написав 2 теги бо 8 багато коду буде...
//
// function TagDescription(tagName,discWork,arr){
//     this.tagName=tagName;
//     this.discWork=discWork;
//     this.arr=arr;
//     this.a = function(){
//         let atributs= [
//     {
//         nameAtributs: 'accesskey',
//         diyaAtributs: 'Активация ссылки с помощью комбинации клавиш',
// },
//     {
//         nameAtributs: 'coords',
//         diyaAtributs: 'Устанавливает координаты активной области.',
// },
//     {   nameAtributs: 'download',
//         diyaAtributs: 'Предлагает скачать указанный по ссылке файл.',
// }
// ]
//         this.tagName = '<a>'
//         this.discWork ='Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.'
//         this.arr= atributs;
//         console.log(this);
//     }
//     this.div = function(){
//         let atributs= [
//     {
//         nameAtributs: 'align',
//         diyaAtributs: 'Задает выравнивание содержимого тега <div>.',
// },
//     {
//         nameAtributs: 'title',
//         diyaAtributs: 'Добавляет всплывающую подсказку к содержимому.',
// },
// ]
//         this.tagName = '<div>'
//         this.discWork ='Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.'
//         this.arr= atributs;
//         console.log(this);
//     }
    
    
// }
//     let descriprionTag = new TagDescription();
    
//     descriprionTag.a();    
//     descriprionTag.div();
//
//Zavdannya2
//
// let car={
//     model: 'Mercedes',
//     virobnick: 'Germany',
//     yearVipusku: 2000,
//     maxSpeed: 360,
//     obiemDviguna: 2
// }
// function maxsp(maxSpeed){
//     console.log('My yidemo zi shvidkistyu : '+maxSpeed+' za godynu')
// }
// function info(car){
//     console.log(car);
// }
// function increaseMaxSpeed(newSpeed){
//     let t=newSpeed+car.maxSpeed;
//     console.log(t);
// }
// function changeYear(newValue){
//     let r = car.yearVipusku=newValue;
//     console.log(r);
// }
// function addDriver(driver){
//    let o=car+driver;
//    console.log(o.car.maxSpeed);
// }
//  maxsp(car.maxSpeed);
//  info(car);
//  increaseMaxSpeed(30);
//  changeYear(2005);
//  addDriver({name:'Andriy',bornYear: 1998});
//
//Zavdannya3
//
// function Car(model,virobnyk,yearVipusku,maxSpeed,obiemDviguna){
//     this.model=model;
//     this.virobnyk=virobnyk;
//     this.yearVipusku= yearVipusku;
//     this.maxSpeed=maxSpeed;
//     this.obiemDviguna=obiemDviguna;

//     this.drive= function(){
//         console.log("My yidemo z shvydkistyu : "+this.maxSpeed +"km/god");
//     }
//     this.info= function (){
//         console.log(avtomobil);
//     }
//     this.increaseMaxSpeed=function (newSpeed){
//     let s= newSpeed+this.maxSpeed;
//     console.log(s);
//     }
//     this.changeYear=function (newValue){
//         let y= this.yearVipusku=newValue;
//         console.log(y);
//     }
//     this.addDriver= function (driver){
//         this.driver=driver;
//         console.log(driver);
//     }
   
// }
//     let avtomobil = new Car('Mercedes','Germany',2000,360,2);
//     avtomobil.drive();
//     avtomobil.info();
//     avtomobil.increaseMaxSpeed(30);
//     avtomobil.changeYear(2005);
//     avtomobil.addDriver({name:'Maxim',year:2000});
//
//Zavdannya4
//
// class Car{
//     constructor(model,virobnyk,yearVipusku,maxSpeed,obiemDviguna){
//         this.model=model;
//         this.virobnyk=virobnyk;
//         this.yearVipusku=yearVipusku;
//         this.maxSpeed=maxSpeed;
//         this.obiemDviguna=obiemDviguna;
//     }
//     drive(){
//         console.log('My yidemo z shvidkistyu : '+this.maxSpeed+' km/god');
//     }
//     info(){
//         console.log(this)
//     }
//     increaceMaxSpeed(newSpeed){
//         let nS=this.maxSpeed+newSpeed;
//         console.log(nS);
//     }
//     changeYear(newValue){
//         let nV= this.yearVipusku=newValue;
//         console.log(nV);
//     }
//     addDriver(driver){
//      this.driver=driver;
//      console.log(driver);
//     }
// }
//     let avtomobil = new Car('Chevrolet','USA',2004,240,2);
//     avtomobil.drive();
//     avtomobil.info();
//     avtomobil.increaceMaxSpeed(20);
//     avtomobil.changeYear(2010);
//     avtomobil.addDriver({name:'Eduard',yearOfBorn: 1999});
//
//Zavdannya5-6
//
// class Popelyushka{
//     constructor(imya,vik,rozmirNogi){
//         this.imya=imya;
//         this.vik=vik;
//         this.rozmirNogi=rozmirNogi;
//     }
// }
// let popelyushka1 = new Popelyushka('Anna',23,36);
// let popelyushka2 = new Popelyushka('Elizabeth',18,35);
// let popelyushka3 = new Popelyushka('Eva',22,37);
// let popelyushka4 = new Popelyushka('Roksolana',26,38);
// let popelyushka5 = new Popelyushka('Olha',20,35);
// let popelyushka6 = new Popelyushka('Kristina',28,36);
// let popelyushka7 = new Popelyushka('Iryna',24,34);
// let popelyushka8 = new Popelyushka('Wasylyna',21,35);
// let popelyushka9 = new Popelyushka('Kaya',17,36);
// let popelyushka10 = new Popelyushka('Nastya',21,38);
// let arrPopelyushki=[popelyushka1,popelyushka2,popelyushka3,popelyushka4,popelyushka5,popelyushka6,popelyushka7,popelyushka8,popelyushka9,popelyushka10];
// class Prints{
//     constructor(imya,vik,tufelka){
//         this.imya=imya;
//         this.vik=vik;
//         this.tufelka=tufelka;
//     }
// }
// let prints = new Prints('Mykola',20,37);
//-------------------5----------------------------------
// console.log(arrPopelyushki);
// for(i=0;i<arrPopelyushki.length;i++){
//  if(arrPopelyushki[i].rozmirNogi==prints.tufelka){
//      console.log('Imya popelyushki yaka maye buty z printsom : '+arrPopelyushki[i].imya);
//  }
// }
//--------------------6---------------------------------
// function poshukPopelyushki(arrPopelyushk){
//     for(i=0;i<arrPopelyushki.length;i++){
//          if(arrPopelyushki[i].rozmirNogi==prints.tufelka){
//              console.log('Imya popelyushki yaka maye buty z printsom : '+arrPopelyushki[i].imya);
// }
//     }
// }
// poshukPopelyushki(arrPopelyushki);