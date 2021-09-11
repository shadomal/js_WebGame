function Sprite(x, y, largura, altura){
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.draw = function(xCanvas, yCanvas)
    {
        //Metódo para desenhar nossos sprits no jogo
        //Como a variavel Context é global pode ser acessada de qualquer local, logo nessa parte pegamos o x e y da nossa img, a largura e altura, 
        context.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
    }
}

var bg = new Sprite(16, 4, 600, 600),
spritePersonagem = new Sprite(980, 12, 75, 60),
playGame = new Sprite(699, 265, 250, 340),
loseGame = new Sprite(627, 4, 350, 120),
spriteGround = new Sprite(16, 616, 450, 200),


//Sprits dos obstaculos

obstacule_one = new Sprite(976, 126, 50, 100),
obstacule_two = new Sprite(1028, 125, 49, 100),
obstacule_three = new Sprite(1077, 130, 55, 100)