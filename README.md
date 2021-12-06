# lottie-image-extract


## INSTALL

```
npm i lottie-image-extract -g
```
## USAGE 

lit-tool extract|e <target>.json

```
lit-tool e a.json
```
### before

dir
    |_ a.json (lottie)

### after
    |_ a.json.lottie.js
    |_ a.json.0.png
    |_ a.json.1.png
    |_ a.json.2.png
    ...
    |_ a.json.99.png

## CODE

before
```
    import a from 'a';
```

after
``` 
    import a from 'a.json.lottie';
```

``` vue

import {loadAnimation} from 'lottie-web';

import animationData from 'a.json.lottie';

export default {
    name: 'index',
    mounted() {

        let {container} = this.$refs;

        loadAnimation({
            container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData,
        });
    }
};

```