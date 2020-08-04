$(() => {
    
    $("#pomme").draggable();
    $("#panier1").droppable({
        accept: "#pomme",
        drop: (e) => $(e.target).css("opacity", "1"),
        out: (e) => $(e.target).css("opacity", "0.5")
    });

    $("#banane").draggable();
    $("#panier2").droppable({
        accept: "#banane",
        drop: (e) => $(e.target).css("opacity", "1"),
        out: (e) => $(e.target).css("opacity", "0.5")
    });
});





