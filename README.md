<div style="text-align:center">
<p style="font-size:135px;">IOAA</p>
        <p>Intersection Observer API Animation</p>
        <small>⚡ Fast animation Inteserction Observer library</small>
</div>

# IOAA - Intersection Observer API Animation

## Install

Simple install with npm or download dist file.

### NPM

```bash
npm install ioaa -s
```

### javascript

```javascript
<script type="module">import ioaa from "../dist/ioaa.min.js";</script>
```

## How to use

### HTML

```html
<div class="ioaa" data-ioaa-animation="animateLeft" data-ioaa-repeat="true">
  ...
</div>
```

| Option              | Default | Description                 |
| ------------------- | ------- | --------------------------- |
| class               | ioaa    | Class Name for animation    |
| data-ioaa-animation | null    | Your class name animation   |
| data-ioaa-repeat    | false   | True or False, not required |

### Javascript

```
<script type="module">
        import ioaa from "../src/ioaa.js";
        ioaa(); // Or ioaa('.YOU_CLASSNAME');  Default ClassName ioaa
</script>
```

### CSS

```css
.animateLeft {
  animation-name: fadeInLeft;
  animation-duration: 1s;
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
```
