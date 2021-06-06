export default function ioaa(ioaaClassName = ".ioaa") {
  let options = {
    root: document.querySelector("body"),
    rootMargin: "0px",
    threshold: 1.0,
  };

  var callback = function (entries, observer) {
    entries.forEach((entry) => {
      const animation = entry.target.getAttribute("data-ioaa-animation");
      if (animation === null) {
        return;
      }
      const repeat = entry.target.getAttribute("data-ioaa-repeat") == "true";

      if (entry.intersectionRatio > 0) {
        entry.target.classList.add(animation);
        if (!repeat) {
          observer.unobserve(entry.target);
        }
      } else {
        entry.target.classList.remove(animation);
      }
    });
  };

  let observer = new IntersectionObserver(callback, {});

  const elements = [...document.querySelectorAll(ioaaClassName)];

  // start observing your elements
  elements.forEach((element) => observer.observe(element));
}
