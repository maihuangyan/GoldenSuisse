import gsap from "gsap";

export default {
  addClassAnimDone: function(animEl) {
    animEl.setAttribute("data-anim-done", true);
  },
  fadeIn: function(animEl, animDelay) {
    gsap.to(animEl, 1, {
      opacity: 1,
      transform: "translate(0, 0)",
      onComplete: this.addClassAnimDone(animEl),
      delay: animDelay
    });
  },
  fadeInSimple: function(animEl, animDelay) {
    gsap.to(animEl, 1, {
      opacity: 1,
      onComplete: this.addClassAnimDone(animEl),
      delay: animDelay
    });
  },
  fadeVideo: function(animEl, animTo) {
    gsap.to(animEl, 0.7, {
      opacity: animTo,
      transform: "translate(0, 0)",
      onComplete: this.addClassAnimDone(animEl),
      delay: 0.6
    });
  },
  videoPlayButton: function(animEl) {
    let width = animEl.dataset.animSvgWidth;
    let height = animEl.dataset.animSvgHeight;
    let stroke = animEl.dataset.animSvgStroke;
    gsap.to(animEl.children[2], 0.3, {
      opacity: 1,
      attr: {
        y2: height - stroke
      },
      delay: 0.3
    });
    gsap.to(animEl.children[0], 0.6, {
      opacity: 1,
      attr: {
        x2: width - stroke,
        y2: height / 2
      },
      delay: 0.3
    });
    gsap.to(animEl.children[1], 0.3, {
      opacity: 1,
      attr: {
        x2: width - stroke,
        y2: height / 2
      },
      onComplete: this.addClassAnimDone(animEl),
      delay: 0.6
    });
  },
  flowButton: function(animEl) {
    gsap.to(animEl.children[0], 0.2, {
      display: "flex",
      onComplete: this.addClassAnimDone(animEl)
    });
  },
  backgroundSlide: function(animEl) {
    gsap.to(animEl, 0.7, {
      backgroundPosition: "50% 50%",
      onComplete: this.addClassAnimDone(animEl)
    });
  },
  circleLeft: function(animEl) {
    gsap.to(animEl, 0.7, {
      opacity: 1,
      x: "0%",
      delay: 0.3
    });
  },
  circleRight: function(animEl) {
    gsap.to(animEl, 0.7, {
      opacity: 1,
      x: "0%",
      delay: 0.3
    });
  },
  scaleCard: function(animEl) {
    gsap.to(animEl, 0.7, {
      /*transform: "scale(1) translate(-50%, -50%)",*/
      scale: 1,
      onComplete: this.addClassAnimDone(animEl),
      delay: 0.3,
      opacity: 1
    });
  },
  scalePicture: function(animEl) {
    gsap.to(animEl, 0.7, {
      transform: "scale(1)",
      onComplete: this.addClassAnimDone(animEl),
      delay: 0.3,
      opacity: 1
    });
  },
  animHeaderLogo: function() {
    let logo = document.querySelector(".header__logo").children[1];

    gsap.to(logo.children[0], 0.4, {
      attr: {
        x2: 125,
        y2: 5
      }
    });
    gsap.to(logo.children[1], 0.4, {
      attr: {
        y2: 0
      }
    });
    gsap.to(logo.children[2], 0.4, {
      attr: {
        x2: 5,
        y2: 5
      }
    });
    gsap.to(logo.children[3], 0.4, {
      attr: {
        x2: 0
      }
    });
    gsap.to(logo.children[4], 0.4, {
      attr: {
        x2: 0,
        y2: 125
      }
    });
    gsap.to(logo.children[5], 0.4, {
      attr: {
        y2: 130
      }
    });
    gsap.to(logo.children[6], 0.4, {
      attr: {
        y2: 125,
        x2: 125
      }
    });
    gsap.to(logo.children[7], 0.4, {
      attr: {
        x2: 65 - 5.5 / 2
      }
    });
    this.addClassAnimDone(logo);
  },
  animateHeader: function(path) {
    console.log('Animate Header', path);
    let logo = document.querySelector(".header__logo");

    if (logo) {
      logo = logo.children[1];
      gsap.to(logo.children[0], 0.4, {
        attr: {
          x2: 125,
          y2: 5
        }
      });
      gsap.to(logo.children[1], 0.4, {
        attr: {
          y2: 0
        }
      });
      gsap.to(logo.children[2], 0.4, {
        attr: {
          x2: 5,
          y2: 5
        }
      });
      gsap.to(logo.children[3], 0.4, {
        attr: {
          x2: 0
        }
      });
      gsap.to(logo.children[4], 0.4, {
        attr: {
          x2: 0,
          y2: 125
        }
      });
      gsap.to(logo.children[5], 0.4, {
        attr: {
          y2: 130
        }
      });
      gsap.to(logo.children[6], 0.4, {
        attr: {
          y2: 125,
          x2: 125
        }
      });
      gsap.to(logo.children[7], 0.4, {
        attr: {
          x2: 65 - 5.5 / 2
        }
      });
    }

    let title = document.querySelector(".header__title");
    if (title) {
      gsap.to(title, 0.4, {
        opacity: 1
      });
    }

    let headerMenu = document.querySelector(".header__menu");
    if (headerMenu) {
      headerMenu = headerMenu.children[0];
      gsap.to(headerMenu.children[0], 0.4, {
        attr: {
          x2: 60
        },
        delay: 0.3
      });
      gsap.to(headerMenu.children[1], 0.4, {
        attr: {
          x2: 0
        },
        delay: 0.3
      });
    }

    this.animateSmallNavbar();

    let headerButton = document.querySelector(".SmallNavbar__login");
    if (headerButton) {
      headerButton = headerButton.children[0].children[0];
      gsap.to(headerButton, 0.4, {
        display: "flex",
        delay: 0.6
      });
    }
  },
  animateSmallNavbar: function() {
    let headerNavbar = document.querySelector(".SmallNavbar__router");
    if (headerNavbar) {
      headerNavbar = headerNavbar.children;
      gsap.to(headerNavbar[0], 0.4, {
        opacity: 1,
        delay: 0.3
      });
      gsap.to(headerNavbar[1], 0.4, {
        opacity: 1,
        delay: 0.4
      });
    }
  },
  animateSubNavbarLine: function() {
    let headerSubLine = document.querySelector(".header__hr");
    if (headerSubLine) {
      gsap.to(headerSubLine, 0.7, {
        opacity: 1,
        delay: 0.6
      });
    }
  },
  destroySubnavbarLine: function() {
    let headerSubLine = document.querySelector(".header__hr");
    if (headerSubLine) {
      gsap.to(headerSubLine, 0.3, {
        opacity: 0,
        delay: 0.3
      });
    }
  },
  destroySubNavbar: function() {
    let headerSub = document.querySelector(".header__subNavbar");
    if (headerSub) {
      gsap.to(headerSub, 0.3, {
        opacity: 0,
        delay: 0
      });
    }
  },
  animateSubNavbar: function() {
    let headerSubNavbar = document.querySelector(".header__subNavbar");
    if (headerSubNavbar) {
      headerSubNavbar = headerSubNavbar.children[0].children;
      for (let i = 0; i < headerSubNavbar.length; i++) {
        gsap.to(headerSubNavbar[i], 0.7, {
          opacity: 1,
          delay: i / 10 + 0.8
        });
      }
    }
  },
  destroySubNavbar: function() {
    let headerSubNavbar = document.querySelector(".header__subNavbar");

    if (headerSubNavbar) {
      headerSubNavbar = headerSubNavbar.children[0].children;
      for (let i = 0; i < headerSubNavbar.length; i++) {
        gsap.to(headerSubNavbar[i], 0.7, {
          opacity: 0
        });
      }
    }
  },
  animateCompanyIcon: function(animEl) {
    this.addClassAnimDone(animEl);
    let el = animEl.children[0];
    let timeout = 0.8;
    gsap.to(el.children[0], timeout + 0.4, {
      attr: {
        x2: 100,
        y2: 30
      }
    });
    gsap.to(el.children[1], timeout, {
      attr: {
        y2: 0
      }
    });
    gsap.to(el.children[2], timeout + 0.25, {
      attr: {
        x2: 30,
        y2: 30
      }
    });
    gsap.to(el.children[3], timeout, {
      attr: {
        x2: 0
      }
    });
    gsap.to(el.children[4], timeout + 0.25, {
      attr: {
        x2: 30,
        y2: 100
      }
    });
    gsap.to(el.children[5], timeout, {
      attr: {
        y2: 65 + 60 + 5
      }
    });
    gsap.to(el.children[6], timeout + 0.25, {
      attr: {
        x2: 100,
        y2: 100
      }
    });
    gsap.to(el.children[7], timeout, {
      attr: {
        x2: 130
      }
    });
  },
  animContentLoader: function() {
    let logo = document.querySelector(".mainLoader__logo").children[0];
    console.log('animContentLoader', logo);
    gsap.to(logo.children[0], 0.4, {
      attr: {
        x2: 125,
        y2: 5
      }
    });
    gsap.to(logo.children[1], 0.4, {
      attr: {
        y2: 0
      }
    });
    gsap.to(logo.children[2], 0.4, {
      attr: {
        x2: 5,
        y2: 5
      }
    });
    gsap.to(logo.children[3], 0.4, {
      attr: {
        x2: 0
      }
    });
    gsap.to(logo.children[4], 0.4, {
      attr: {
        x2: 0,
        y2: 125
      }
    });
    gsap.to(logo.children[5], 0.4, {
      attr: {
        y2: 130
      }
    });
    gsap.to(logo.children[6], 0.4, {
      attr: {
        y2: 125,
        x2: 125
      }
    });
    gsap.to(logo.children[7], 0.4, {
      attr: {
        x2: 65 - 5.5 / 2
      }
    });
    this.addClassAnimDone(logo);

    let title = document.querySelector(".mainLoader__title");
    gsap.to(title, 1, {
      opacity: 1,
      transform: "translate(0, 0)",
      onComplete: this.addClassAnimDone(title),
      delay: 0.1
    });

    let subtitle = document.querySelector(".mainLoader__subtitle");
    gsap.to(subtitle, 1, {
      opacity: 1,
      transform: "translate(0, 0)",
      onComplete: this.addClassAnimDone(subtitle),
      delay: 0.2
    });
  },
  cardIn: function(animEl) {
    let circles = animEl.querySelectorAll('.card__circle');
    let card = animEl.querySelector('.card__img');
    gsap.to(circles, {
      opacity: 1,
      x: '0%',
      duration: .7
    });
    gsap.to(card, {
      opacity: 1,
      scale: 1,
      delay: .3,
      duration: .7,
      onComplete: this.addClassAnimDone(animEl),
    });
  },
  list: function (animEl) {
    let items = animEl.querySelectorAll('.list__item');
    let tl = gsap.timeline();
    tl.staggerTo(items, 1, {
      opacity: 1,
      onComplete: this.addClassAnimDone(animEl),
    }, .2)
  }
};
