//何も用いず2d回転
(function () {
    'use strict';

    const canvas = document.getElementById('normal_canvas');
    canvas.height = 300;
    canvas.width = 300;

    const context = canvas.getContext('2d');

    const image = new Image();
    image.src = 'image/money.png';
    image.onload = () => {
        rotate();
    }

    let theta = 0;

    function rotate() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.save();

        context.translate(canvas.width / 2, canvas.height / 2);
        context.rotate(++theta * Math.PI / 180);
        context.translate(-canvas.width / 2, -canvas.height / 2);

        context.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);

        context.restore();

        setTimeout(rotate, 15);
    }
}());



//Grimoire.js を利用して2d回転
gr.registerComponent('Rotate2d', {
    attributes: {
        speed: {
            default: 1,
            converter: 'Number'
        }
    },
    $mount: function () {
        this.theta = 0;
    },
    $update: function () {
        this.theta += this.getAttribute('speed');
        this.node.setAttribute('rotation', 0 + ',' + 0 + ',' + -this.theta);
    }
});

//Grimoire.js を利用して3d回転
gr.registerComponent('Rotate3d', {
    attributes: {
        speed: {
            default: 1,
            converter: 'Number'
        }
    },
    $mount: function () {
        this.theta = 0;
    },
    $update: function () {
        this.theta += this.getAttribute('speed');
        this.node.setAttribute('rotation', 25 + ',' + -this.theta + ',' + 0);
    }
});
