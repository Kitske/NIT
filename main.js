$(document).ready(function () {
    var LIST = $('.list-of-items');
    var HOLDER_LEFT = $('.products-holder');
    var HOLDER_BOUGHT = $('.items-bought');
    var ITEM_TEMPLATE = $('#product-template').html();
    var PREVIEW_TEMPLATE = $('.preview-template').html();

    $('.add').click(function () {
        add_item($('.input').val());
    });

    function add_item(name) {

        var bought = false;
        var fade_time = 400;
        var $segment = $(ITEM_TEMPLATE);
        var $preview = $(PREVIEW_TEMPLATE);
        $segment.find('.name').text(name);
        $preview.find('.label').text(name);

        var quantity = 1;

        function edit_text(valid) {
            var new_name
        }


        $segment.find('.delete-button').click(function () {
            $segment.slideUp(fade_time, function () {
                $segment.remove();
            });
            $preview.fadeOut(fade_time, function () {
                $preview.remove();
            });

        });

        $segment.find('#plus').click(function () {
            quantity += 1;
            $preview.find('.circular').html(quantity);
            $segment.find('.quantity-count').fadeOut(fade_time, function () {
                $segment.find('.quantity-count').html(quantity);
                $segment.find('.quantity-count').fadeIn(fade_time, function () {
                })
            });
            console.log(quantity)

        });
        $segment.find('#minus').click(function () {
            if (quantity > 1) {
                quantity -= 1;
                $preview.find('.circular').html(quantity);
                $segment.find('.quantity-count').fadeOut(fade_time, function () {
                    $segment.find('.quantity-count').html(quantity);
                    $segment.find('.quantity-count').fadeIn(fade_time, function () {
                    })
                });
            } else {
            }
            console.log(quantity)

        });

        $segment.find('.bought').click(function () {
            bought = !bought;

            $segment.fadeOut(fade_time, function () {
                if (bought) {
                    $segment.find('.plus').hide();
                    $segment.find('.minus').hide();
                    $segment.find('.delete-button').hide();
                    $segment.find('.bought').text('Не куплено');
                    $segment.find('.bought').attr('data-tooltip', 'Видалити товар зі списку куплених');

                    $preview.fadeOut(fade_time, function () {
                        $segment.find('.name').css('text-decoration', 'line-through');
                        $preview.hide().appendTo(HOLDER_BOUGHT).fadeIn(fade_time);
                    });
                    $preview.find('.label').css('text-decoration', 'line-through');

                } else {
                    $segment.find('.plus').show();
                    $segment.find('.minus').show();
                    $segment.find('.delete-button').show();
                    $segment.find('.bought').text('Куплено');
                    $segment.find('.bought').attr('data-tooltip', 'Відмітити товар як куплений');
                    $preview.fadeOut(fade_time, function () {
                        $segment.find('.name').css('text-decoration', 'none');
                        $preview.hide().appendTo(HOLDER_LEFT).fadeIn(fade_time);
                    });

                    $preview.find('.label').css('text-decoration', 'none');

                }
                $segment.fadeIn(fade_time);
            });
        });


        if (name.replace(/\s/g, '').length) {
            if (name.length > 30) {
                alert('Назва товару має бути довжиною максимум в 30 символів.\nВведена назва складається з ' + name.length + ' символів.');
            } else {
                $segment.hide().prependTo(LIST).slideDown(fade_time);
                $preview.hide().appendTo(HOLDER_LEFT).fadeIn(fade_time);
            }
        }

        $('.input').keypress(function (e) {
            if (e.which === 13) {
                add_item($('.input').val());
                return false;
            }
        }).focusout(function () {

        }).val('');

    }


    add_item('Помідори');
    add_item('Печиво');
    add_item('Сир');
});