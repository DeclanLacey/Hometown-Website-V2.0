const btnOne = document.getElementById("btn-1")
const btnTwo = document.getElementById("btn-2")
const btnThree = document.getElementById("btn-3")
const resultOne = document.getElementById("result-1")
const resultTwo = document.getElementById("result-2")
const resultThree = document.getElementById("result-3")

const adventureArray = [
    {
        url: "https://www.dmbotanicalgarden.com/",
        title: "The greater des moines area botanical gardens"
    },
    {
        url: "https://www.blankparkzoo.com/",
        title: "the blank park zoo"
    },
    {
        url: "https://www.adventurelandresort.com/admission/tickets/tickets?gclid=Cj0KCQjw0oyYBhDGARIsAMZEuMsIyo3NWlAsBmzlcp2ULvP4FRwj6CtO5AZnmpWUH223sRyf9XTBMMkaAmekEALw_wcB",
        title: "adventureland theme park and water park"
    },
    {
        url: "https://iowaculture.gov/history/museum",
        title: "State Historical Building"
    },
    {
        url: "https://desmoinesartcenter.org/",
        title: "des moines art center"
    },
    {
        url: "https://desmoinesartcenter.org/visit/pappajohn-sculpture-park/",
        title: "papaJohn sculpture park"
    },
    {
        url: "https://www.lhf.org/",
        title: "living history farms"
    },
    {
        url: "https://www.sciowa.org/",
        title: "science center of iowa"
    },
    {
        url: "https://www.dsm.city/business_detail_T6_R58.php",
        title: "grays lake park"
    },
    {
        url: "https://www.milb.com/iowa/ballpark",
        title: "principal park"
    },
    {
        url: "https://www.iowaeventscenter.com/wells-fargo-arena",
        title: "wells fargo arena"
    },
    {
        url: "https://www.legis.iowa.gov/resources/tourCapitol",
        title: "iowa state capitol"
    },
    {
        url: "https://www.recreation.gov/camping/gateways/161",
        title: "saylorville lake"
    },
]

const foodArray = [
    {
        url: "https://801chophouse.com/des-moines/",
        title: "801 Chophouse"
    },
    {
        url: "https://www.adongrestaurant.com/",
        title: "A Dong Restaurant"
    },
    {
        url: "http://akebono515.com/index.html",
        title: "Akebono 515"
    },
    {
        url: "https://www.albadsm.com/",
        title: "Alba Restaurant"
    },
    {
        url: "https://angrygoldfishdsm.com/",
        title: "Angry Goldfish Pub & Eatery"
    },
    {
        url: "https://bubbadsm.com/",
        title: "Bubba"
    },
    {
        url: "http://www.centrodesmoines.com/",
        title: "Centro"
    },
    {
        url: "http://cremecupcake.com/",
        title: "Crème Cupcake & Dessert "
    },
    {
        url: "https://www.flyingmango.com/",
        title: "Flying Mango"
    },
    {
        url: "https://fongspizza.com/",
        title: "Fong's Pizza"
    },
    {
        url: "http://haamacon.com/gazalismediterraneangrill/",
        title: "Gazali's Mediterranean Grill"
    },
    {
        url: "https://www.harbingerdsm.com/",
        title: "Harbinger"
    },
    {
        url: "https://hessenhaus.com/",
        title: "Hessen Haus"
    },
    {
        url: "https://thehighlifelounge.com/",
        title: "The High Life Lounge"
    },
    {
        url: "https://www.jethrosdesmoines.com/jethros-drake/",
        title: "Jethro's BBQ Drake"
    },
    {
        url: "https://www.lamiebakery.com/",
        title: "La Mie Bakery "
    },
    {
        url: "https://theoriginaljessesembers.com/",
        title: "The Original Jesse's Embers"
    },
    {
        url: "https://overthetopiowa.com/",
        title: "Over the Top"
    },
    {
        url: "https://pho515.com/",
        title: "Pho 515"
    },
]

const sleepArray = [
    {
        url: "https://suretyhotel.com/",
        title: "Surety Hotel"
    },
    {
        url: "https://www.hilton.com/en/hotels/dsmfddt-doubletree-des-moines-airport/",
        title: "DoubleTree by Hilton"
    },
    {
        url: "https://www.desluxhotel.com/?gclid=Cj0KCQjw0oyYBhDGARIsAMZEuMvOfreIwbJh1t8Xxmih2f5qMSeZmjyDVvDm1b9OQ2DkNpEWsFOZPPoaAiKpEALw_wcB&gclsrc=aw.ds",
        title: "Des Lux Hotel"
    },
    {
        url: "https://www.hilton.com/en/hotels/dsmdihh-hilton-des-moines-downtown/",
        title: "Hilton Des Moines Downtown"
    },
    {
        url: "https://www.hilton.com/en/hotels/dsmdnes-embassy-suites-des-moines-downtown/",
        title: "Embassy Suites Hotel"
    },
    {
        url: "https://www.marriott.com/en-us/hotels/dsmia-des-moines-marriott-downtown/overview/",
        title: "Des Moines Marriott Downtown"
    },
    {
        url: "https://www.marriott.com/en-us/hotels/dsmsi-sheraton-west-des-moines-hotel/overview/",
        title: "Sheraton West Des Moines Hotel"
    },
    {
        url: "https://www.marriott.com/en-us/hotels/dsmcw-courtyard-des-moines-west-jordan-creek/overview/?scid=7dfe3c6c-278e-4942-a462-670a711894d4&gclid=Cj0KCQjw0oyYBhDGARIsAMZEuMtR3_BFHkC8FmRhBln1lXW6B0psczCB1MeG1d3D2vSQUiGfLXxyne0aAlt3EALw_wcB&gclsrc=aw.ds",
        title: "Courtyard Des Moines"
    },
    {
        url: "https://www.hotelfortdesmoines.com/",
        title: "Hotel Fort Des Moines"
    },
    {
        url: "https://www.holidayinn.com/hotels/us/en/urbandale/dsmdu/hoteldetail?fromRedirect=true&qSrt=sBR&qIta=03717490&icdv=03717490&gclid=Cj0KCQjw0oyYBhDGARIsAMZEuMuacbrV3d6yuyaRyl2vq1kFR_-KcZhu2IPyX3Yj5uZUpxwuY4pOlxUaAhJPEALw_wcB",
        title: "Holiday Inn Hotel & Suites"
    },
    {
        url: "https://www.staybridge.com/hotels/us/en/des-moines/dsmsb/hoteldetail?fromRedirect=true&qSrt=sBR&qIta=03717490&icdv=03717490&gclid=Cj0KCQjw0oyYBhDGARIsAMZEuMs7pt84FJr1qthJ9efxzXk-PHthQJCGTi1XUW_j_zsdFzN_W4FgVOoaAvldEALw_wcB",
        title: "Staybridge Suites"
    },
    {
        url: "https://www.marriott.com/en-us/hotels/dsmrd-residence-inn-des-moines-downtown/overview/",
        title: "Residence Inn"
    },
    {
        url: "https://www.wyndhamhotels.com/ramada/des-moines-iowa/ramada-tropics-resort-conference-center-des-moines/overview",
        title: "Ramada by Wyndham"
    },
]

btnOne.addEventListener("click", function() {
    
    let index = Math.floor(Math.random() * adventureArray.length)
    let randomAdventure = adventureArray[index]
    
     
     resultOne.innerHTML = `<a href="${randomAdventure.url}" target="_blank"> ${randomAdventure.title} </a>`
     adventureArray.splice(index, 1);
})

btnTwo.addEventListener("click", function() {
    
    let index = Math.floor(Math.random() * foodArray.length)
    let randomFood = foodArray[index]
    
    resultTwo.innerHTML = `<a href="${randomFood.url}" target="_blank"> ${randomFood.title} </a>`
    foodArray.splice(index, 1)
    
    
})

btnThree.addEventListener("click", function() {
    
    let index = Math.floor(Math.random() * sleepArray.length)
    let randomSleep = sleepArray[index]
    
    resultThree.innerHTML = `<a href="${randomSleep.url}" target="_blank"> ${randomSleep.title} </a>`
    sleepArray.splice(index, 1)
    
    
})