function progressbar (elem, obj) {
    var id = elem.split('#');
    if(obj.hasOwnProperty('parcent')) {
            var text     = obj.parcent;
    } else {
            var text     = front.attributes.percent.value;                    
    }
    if(obj.hasOwnProperty('textColor')) {
            var textcolor     = obj.textColor;
    } else {
            var textcolor     = '#000000';                    
    }       
    var elClass     = document.querySelectorAll(elem),
        gradient    = obj.gradient,        
        svg         = `<svg viewBox="0 0 100 100" class="svg"><text x="50%" y="50%" dominant-baseline="middle" fill=${textcolor} text-anchor="middle"></text><circle class="back" stroke-width="2" stroke="#efefef" fill="none" cx="50" cy="50" /><circle class="front"  percent="70" stroke-width="2" fill="none" cx="50" cy="50" r="20" stroke-linecap="round"/></svg>`;
        radial      = `<svg viewBox="0 0 100 100" class="svg"><text x="50%" y="50%" dominant-baseline="middle" fill=${textcolor} text-anchor="middle"></text><defs><radialGradient id=${id} x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="97%" style="stop-color:rgb(170, 47, 0);stop-opacity:1" /><stop offset="100%" style="stop-color:rgb(255,44,0);stop-opacity:1" /></radialGradient></defs><circle class="back"  stroke-width="2" stroke="#efefef" fill="none" cx="50" cy="50" /><circle class="front"  percent="70" stroke-width="2" fill="none" cx="50" cy="50" r="20" stroke-linecap="round"/></svg>`;
        linear      = `<svg viewBox="0 0 100 100" class="svg"><text x="50%" y="50%" dominant-baseline="middle" fill=${textcolor} text-anchor="middle"></text><defs><linearGradient id=${id} x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:rgb(255,0,255);stop-opacity:1"></stop><stop offset="50%" style="stop-color:rgb(255,0,0);stop-opacity:1" ></stop><stop offset="100%" style="stop-color:rgb(255,0,255);stop-opacity:1" ></stop></linearGradient></defs><circle class="back"  stroke-width="2" stroke="#efefef" fill="none" cx="50" cy="50" /><circle class="front"  percent="70" stroke-width="2" fill="none" cx="50" cy="50" r="20" stroke-linecap="round"/></svg>`;
        
        elClass.forEach( function(element, index) {                    
            var atId = element.attributes.id.value;
            if(obj.hasOwnProperty('gradient') && gradient === 'linear'){
                element.innerHTML = linear;
               
            } else if(obj.hasOwnProperty('gradient') && gradient === 'radial'){
                element.innerHTML = radial;
            } else {
                element.innerHTML = svg;                             
            }               
            var stop = ``;
            if (obj.hasOwnProperty('gradColor')) {

                obj.gradColor.forEach( function(element, index) {
                    stop += `<stop offset=${element.offset} style="${'stop-color:'+element.stopColor+'; stop-opacity:'+element.stopOpacity}" />`;                     
                });
                stop += ``;
                    element.querySelector('defs').children[0].innerHTML = stop;
            }
            
            var back        = element.querySelector('.back'),
                front       = element.querySelector('.front');
                if(obj.hasOwnProperty('radius')){
                var   radius = obj.radius;
                } else {
                var   radius      = front.attributes.r.value;
                }
                if(obj.hasOwnProperty('parcent')) {
                    var percent     = obj.parcent;

                } else {
                    var percent     = front.attributes.percent.value;                    
                }
            var attValue    = radius*6.3,
                percent2    = 100-percent;
                back.setAttribute('r', radius);
                obj.hasOwnProperty('backStrokeWidth')   && back.setAttribute('stroke-width', obj.backStrokeWidth);
                obj.hasOwnProperty('backStrokeColor')   && back.setAttribute('stroke', obj.backStrokeColor);
                obj.hasOwnProperty('backFillColor')     && back.setAttribute('fill', obj.backFillColor);
                obj.hasOwnProperty('frontFillColor')    && front.setAttribute('fill', obj.frontFillColor);                
                obj.hasOwnProperty('frontStrokeWidth')  && front.setAttribute('stroke-width', obj.frontStrokeWidth);
                obj.hasOwnProperty('radius')            && front.setAttribute('r', obj.radius);                
                obj.hasOwnProperty('strokeLineCap')     && front.setAttribute('stroke-linecap', obj.strokeLineCap);                

                if(obj.hasOwnProperty('gradient')){
                id          = element.querySelector('defs').children[0].attributes.id.value,
                    front.setAttribute('stroke', `url(#${id})`);
                } else {
                    front.setAttribute('stroke', `#f0d`);
                    obj.hasOwnProperty('frontStrokeColor')  && front.setAttribute('stroke', obj.frontStrokeColor);
                }              
                front.style.strokeDasharray = attValue;         
                front.style.strokeDashoffset = attValue;                
                var textEl = element.querySelectorAll('text')[0];
                var setInt = 0;
                 var forEvent = () => {
                    setTimeout(function(){
                        front.style.strokeDashoffset = attValue/100*percent2;
                        front.style.transition = '2s';
                    },500);
                    var clear = setInterval(() => { 
                    setInt++
                    if(setInt <= text){ 
                        textEl.innerHTML = setInt +"%";                
                    } else{
                        
                        }              
                    },100, clearInterval(clear));
                 }
                forEvent();                           
                window.addEventListener('scroll', () => {
                    if(this.scrollY >= element.offsetTop){
                       forEvent();
                    }                    
                });
               
        }); 
   
}