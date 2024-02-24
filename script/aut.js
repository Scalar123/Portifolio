document.addEventListener("DOMContentLoaded",() => {
    new TypeIt("#animation_name", {
        speed: 300,
        loop: true,
        }).type("＂Web Developer＂ }", {delay: 900}).move(-2, {delay: 900}).delete(14, {delay: 1000}).type("Kotlin Developer＂", {delay: 900}).delete(17, {deylay: 1000}).type("Angular＂", {delay: 900}).delete(8, {delay: 900}).type("Full-Stack＂", {delay: 900}).move(+2, {delay: 900})
    
    .go()
})