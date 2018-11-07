$(document).ready(function() {
  $('.cta').hover(
    function() {
      TweenLite.to(this, 0.5, {
        ease: Elastic.easeOut,
        scale: 1.02,
      });
    },
    function() {
      TweenLite.to(this, 0.5, {
        ease: Elastic.easeIn,
        scale: 1,
      });
    }
  );
  $('.select').on('click', function() {
    $('.select').removeClass('active');
    $('.color-car').removeClass('selected');
    $(this).addClass('active');
    const color = $(this).data('color');
    $('.color-car[data-color=' + color + ']').addClass('selected');
    tl.fromTo(
      '.selected',
      0.5,
      { opacity: 0, ease: Power1.easeIn, scale: 1.05 },
      {
        opacity: 1,
        ease: Power1.easeIn,
        scale: 1,
      }
    );
  });

  const tl = new TimelineLite();
  CSSPlugin.defaultTransformPerspective = 400;

  tl.staggerFrom(
    '.el',
    0.5,
    {
      opacity: 0,
      delay: 0.35,
      cycle: {
        x: function(i) {
          return (i + 1) * 50;
        },
        ease: function(i) {
          return Back.easeOut;
        },
      },
    },
    0.2
  )
    .fromTo(
      '.car',
      0.8,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, ease: Back.easeOut }
    )
    .to('.car', 0.2, {
      x: 300,
    })
    .to('.frame.yellow', 0.85, { zIndex: 2, opacity: 1 })
    .staggerFrom(
      '.word',
      0.5,
      {
        opacity: 0,
        cycle: {
          scale: [1.15, 0.3],
        },
      },
      0.25
    )
    .to('.car', 0.3, {
      x: 0,
      ease: Back.easeOut,
    })
    .to('.car', 0.5, {
      rotationY: 180,
      immediateRender: false,
    })
    .to('.car', 0.75, {
      x: -300,
      ease: Power1.easeOut,
    })
    .to('.frame.red', 1, { zIndex: 3, opacity: 1 })
    .set('.car', {
      opacity: 0,
      x: 0,
    })
    .staggerFrom(
      '.word2',
      0.5,
      {
        cycle: {
          y: [100, -100],
        },
      },
      0.25
    )
    .to('.car', 0.8, { opacity: 1, scale: 1, ease: Power1.easeIn })

    .fromTo(
      '.frame.logo',
      1.2,
      { opacity: 0, y: 200 },
      { opacity: 1, y: 0, ease: Back.easeOut, zIndex: 9 },
      8.5
    )
    .to('.frame.final', 1, { opacity: 1, zIndex: 9 })
    .set(['.bottom', '.colors'], {
      opacity: 1,
      zIndex: 10,
      immediateRender: false,
    });
});
