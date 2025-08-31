
"use strict";

// Dynamic text and clock functionality
function updateClock() {
  const now = new Date();
  const timeElement = document.querySelector('.time-display');
  const dateElement = document.querySelector('.date-display');
  
  if (timeElement) {
    timeElement.textContent = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  }
  
  if (dateElement) {
    dateElement.textContent = now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}

function updateGreetingText() {
  const now = new Date();
  const hour = now.getHours();
  const greetingElement = document.querySelector('.greeting-message');
  const emojiElement = document.querySelector('.greeting-emoji');
  const motivationalElement = document.querySelector('.motivational-text');

  let greeting, emoji, motivational;

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
    emoji = "🌅";
    motivational = "Have a nice day, semangat! ✨";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Good Afternoon";
    emoji = "☀️";
    motivational = "Jangan lupa istirahat, semangat! 💪";
  } else {
    greeting = "Good Night";
    emoji = "🌙";
    motivational = "Sleep tight, have a nice dream! 😴";
  }

  if (greetingElement) greetingElement.textContent = greeting;
  if (emojiElement) emojiElement.textContent = emoji;
  if (motivationalElement) motivationalElement.textContent = motivational;
}

// Update text and clock when page loads and every second
document.addEventListener('DOMContentLoaded', function() {
  updateClock();
  updateGreetingText();
});
setInterval(updateClock, 1000);
setInterval(updateGreetingText, 60000);

!(function () {
  function t() {
    !(function () {
      var t, g;
      if (
        ((o = l / 2),
        (a = s / 2),
        (n = c.create()),
        (e = n.world),
        (r = d.create({
          element: document.body,
          engine: n,
          options: {
            width: l,
            height: s,
            wireframes: !1,
            background: "transparent",
            pixelRatio: 1
          }
        })),
        (i = u.create()),
        u.run(i, n),
        (n.gravity.scale = 0),
        (n.gravity.x = 0),
        (n.gravity.y = 0),
        "undefined" != typeof fetch)
      ) {
        (t = function (t, e) {
          return Array.prototype.slice.call(t.querySelectorAll(e));
        }),
          (g = function (t) {
            return fetch(t)
              .then(function (t) {
                return t.text();
              })
              .then(function (t) {
                return new window.DOMParser().parseFromString(
                  t,
                  "image/svg+xml"
                );
              });
          })(svg_terrain).then(function (n) {
            var r = t(n, "path"),
              i = r.map(function (t) {
                return v.pathToVertices(t, 30);
              }),
              l = y.fromVertices(
                256,
                200,
                i,
                {
                  isStatic: !0,
                  render: {
                    fillStyle: "transparent",
                    strokeStyle: "transparent",
                    lineWidth: 1
                  }
                },
                !0
              );
            h.add(e, l), (o = l.position.x), (a = l.position.y);
          });
        let n = null,
          r = null;
        g(svg_heart).then(function (e) {
          n ||
            ((r = t(e, "path").map(function (t) {
              return v.pathToVertices(t, 50);
            })),
            (n = y.fromVertices(
              o,
              1.5 * a,
              r,
              {
                restitution: 0,
                friction: 0,
                frictionStatic: 0,
                frictionAir: 0,
                mass: 20,
                render: {
                  lineWidth: 2
                }
              },
              !0
            )),
            M.scale(n, 0.2, 0.2));
        });
        let i = function () {
          let t = structuredClone(n);
          (t.id = f.nextId()),
            (t.position.x = o),
            (t.position.y = 1.5 * a),
            S.push(S.shift());
          let r = S[0];
          (t.render.fillStyle = r),
            (t.render.strokeStyle = r),
            t.parts.forEach(function (e, n) {
              (t.parts[n].render.fillStyle = r),
                (t.parts[n].render.strokeStyle = r);
            }),
            M.setAngle(t, Math.round(360 * Math.random()), !1),
            M.setVelocity(t, {
              x: f.random(-5, 5),
              y: f.random(-5, -1)
            }),
            h.add(e, t);
        };
        setTimeout(function () {
          let t = 0,
            e = setInterval(() => {
              i(), 2 == t && (clearInterval(e), (n = null), (r = null)), t++;
            }, 780);
        }, 220);
      } else f.warn("Fetch is not available. Could not load SVG.");
      let k = m.create(r.canvas),
        x = p.create(n, {
          mouse: k,
          constraint: {
            stiffness: 0.2,
            render: {
              visible: !1
            }
          }
        });
      h.add(e, x),
        (r.mouse = k),
        d.lookAt(r, {
          min: {
            x: 0,
            y: 0
          },
          max: {
            x: l,
            y: s
          }
        }),
        d.run(r);
    })();
  }
  let e,
    n,
    r,
    i,
    o,
    a,
    l = 512,
    s = 512,
    c = (Matter.World, Matter.Engine),
    d = Matter.Render,
    u = Matter.Runner,
    f = (Matter.Composites, Matter.Common),
    p = Matter.MouseConstraint,
    m = Matter.Mouse,
    h = Matter.Composite,
    y = (Matter.Vertices, Matter.Bodies),
    M = Matter.Body,
    v = (Matter.Events, Matter.Query, Matter.Svg),
    g = [
      "pink",
      "deeppink",
      "deeppink",
      "hotpink",
      "hotpink",
      "lightpink",
      "magenta",
      "orchid"
    ],
    S = ["mediumvioletred", "crimson", "salmon"];
  (window.onload = () => {
    t();
  }),
    setTimeout(function () {
      let t = 0,
        n = setInterval(() => {
          !(function () {
            let t = f.choose(g);
            const n = y.circle(o, a, 25, {
              restitution: 0,
              friction: 0,
              frictionStatic: 0,
              frictionAir: 0,
              mass: 10,
              render: {
                fillStyle: t,
                strokeStyle: t,
                lineWidth: 0
              }
            });
            M.setVelocity(n, {
              x: f.random(-1, 1),
              y: f.random(-1, 1)
            }),
              h.add(e, n);
          })(),
            60 == t && clearInterval(n),
            t++;
        }, 100);
    }, 2e3);
})();