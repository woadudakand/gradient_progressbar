## Progress bar
This is pure JavaScript Progress bar and very Easy to customization.
## Three types of Progress bar in here
* Plain color
* Linear gradient
* Radial gradient
## installation 
### Add only a script file in your html page
`<script src='script.js'></script>`
### Add this css in your style sheet
`
svg {
     width: 300px;
     display: block;
     transform: rotate(-90deg);
     float: left;
}
svg text{
          transform: rotate(90deg);
          transform-origin: 50% 50%;
 }      
`
### Add this markup in your markup sheet
`<div id="progresbar"></div> `
### Also add this script in your script file
This script fore plain color
***
 > `<script>`
>             `progressbar('#progresbar3', {`
>                 `backStrokeColor     : '#eee',`
>                 `backFillColor       : 'none',`
>                 `backStrokeWidth     : '4',                               `
>                 `radius              : '30',               `
>                 `frontStrokeColor    : '#ffcdc2',`
>                 `frontStrokeWidth    : '6',`
>                 `frontFillColor      : 'none',`
>                 `strokeLineCap       : 'round',                `
>                 `parcent             : '50'                `
>             `});       `
> `</script>`
***
### You can change Plain color to linear gradient use this
> `gradient : 'linear',`
> `gradColor: [`
>              `{`
>                `offset: "0%",`
>                `stopColor : '#6b0404',`
>                `stopOpacity : '1'`
>              `},`
>              `{`
>                `offset: "40%",`
>                `stopColor : 'red',`
>                `stopOpacity : '1'`
>              `}`
              ]
### You can also change Plain color to radial gradient use this
> `gradient : 'radial',`
> `gradColor: [`
>              `{`
>                `offset: "0%",`
>                `stopColor : '#6b0404',`
>                `stopOpacity : '1'`
>              `},`
>              `{`
>                `offset: "40%",`
>                `stopColor : 'red',`
>                `stopOpacity : '1'`
>              `}`
              ]
