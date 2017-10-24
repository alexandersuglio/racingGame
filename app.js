 // var anim_id;

    //saving dom objects to variables
    var road = $('#road');
    var car = $('#bronco');

    var roadLines = $('.roadLines');
    var grass = $('#gameBorder');

    // var car_1 = $('#car_1');
    // var car_2 = $('#car_2');
    // var car_3 = $('#car_3');

    // var lines = $('.line');
    var restart_div = $('#restart_div');
    var restart_btn = $('#restart');
    var score = $('#score');

    //saving some initial setup
    // var road_left = parseInt(road.css('left'));
    var road_length = parseInt(road.width());
    var road_height = parseInt(road.height());
    var car_length = parseInt(car.width());
    var car_height = parseInt(car.height());

    //some other declarations
    var game_over = false;

    var score_counter = 1;

    // var speed = 2;
    // var line_speed = 5;

    var move_right = false;
    var move_left = false;
    var move_up = false;
    var move_down = false;

    $(document).on('keydown', function(e) {
        if (game_over === false) {
            var key = e.keyCode;
            if (key === 38 && move_right === false) {
                move_right = requestAnimationFrame(right);
            } else if (key === 40 && move_left === false) {
                move_left = requestAnimationFrame(left);
            } else if (key === 37 && move_up === false) {
                //move up
                car.css('transform', 'rotate(-3deg)');
                move_up = requestAnimationFrame(up);
            } else if (key === 39 && move_down === false) {
                car.css('transform', 'rotate(3deg)');
                move_down = requestAnimationFrame(down);
            }
        }
    });

    $(document).on('keyup', function(e) {
        if (game_over === false) {
            var key = e.keyCode;
            if (key === 38) {
                cancelAnimationFrame(move_right);
                move_right = false;
            } else if (key === 40) {
                cancelAnimationFrame(move_left);
                move_left = false;
            } else if (key === 37) {
                cancelAnimationFrame(move_up);
                move_up = false;
                car.css('transform', 'rotate(0deg)');
            } else if (key === 39) {
                cancelAnimationFrame(move_down);
                move_down = false;
                car.css('transform', 'rotate(0deg)');
            }
        }
    });

    //moves car backwards
    function left() {
        if (parseInt(car.css('left')) > 0) {
            var brake = car.css('left', parseInt(car.css('left')) - 3);
            move_left = requestAnimationFrame(left);
            // roadLines.css('left', parseInt(roadLines.css('left')) + 1.5);


        }
    }

    //moves car forward
    function right() {
        if (parseInt(car.css('left')) < road_length - car_length) {
            var gas = car.css('left', parseInt(car.css('left')) + 6);
            move_right = window.requestAnimationFrame(right);
            // roadLines.css('left', parseInt(roadLines.css('left')) - 3);
        }
    }

    //moves car up
    function up() {
        if (parseInt(car.css('top')) > 0) {
            car.css('top', parseInt(car.css('top')) - 4);
            move_up = requestAnimationFrame(up);
        }
    }

    //moves car down 
    function down() {
        if (game_over === false && parseInt(car.css('top')) < road_height - car_height) {
            car.css('top', parseInt(car.css('top')) + 4);
            move_down = requestAnimationFrame(down);
        }
    }
























































 