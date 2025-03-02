// Memory Game
// © 2014 Nate Wiley
// License -- MIT

(function(){
    var Memory = {
        init: function(cards){
            this.$game = $(".game");
            this.$modal = $(".modal");
            this.$overlay = $(".modal-overlay");
            this.$restartButton = $("button.restart");
            this.cardsArray = $.merge(cards, cards);
            this.shuffleCards(this.cardsArray);
            this.setup();
        },
        // Adicione o restante do JavaScript aqui
    };

    var cards = [
        { name: "php", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png", id: 1 },
        { name: "css3", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png", id: 2 },
        // Adicione o restante dos cards aqui
    ];

    Memory.init(cards);
})();