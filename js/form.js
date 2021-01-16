class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h1');
       this.title = createElement('h1');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(300,50);
        this.title.style('font-size', '50px');
        this.title.style('color', 'violet');
        this.input.position(400,300);
        this.input.style('width', '200px');
        this.input.style('height', '50px');
        this.input.style('background', 'maroon');
        this.input.style('font-size', '30px');
        this.button.position(400,400);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'skyblue');
        this.button.style('font-size', '30px')
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '50px');
        this.reset.style('background', 'lightpink');
        this.reset.style('font-size', '30px')
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '50px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}