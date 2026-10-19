(()=>{var $l="170",Fi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fd=0,Pc=1,pd=2;var Hh=1,Jl=2,Vn=3,ui=0,Bt=1,zt=2,ci=0,hs=1,En=2,Ic=3,Lc=4,md=5,Ti=100,gd=101,_d=102,xd=103,vd=104,yd=200,Md=201,bd=202,Sd=203,Po=204,Io=205,Ed=206,wd=207,Td=208,Ad=209,Rd=210,Cd=211,Pd=212,Id=213,Ld=214,Lo=0,Do=1,Uo=2,ps=3,No=4,Oo=5,Fo=6,zo=7,Vh=0,Dd=1,Ud=2,hi=0,Nd=1,Od=2,Fd=3,Kl=4,zd=5,Bd=6,kd=7;var Gh=300,ms=301,gs=302,Bo=303,ko=304,Ia=306,Ks=1e3,Ri=1001,Ho=1002,dn=1003,Hd=1004;var Sr=1005;var Sn=1006,Ja=1007;var Ci=1008;var Yn=1009,Wh=1010,Xh=1011,js=1012,jl=1013,Pi=1014,Gn=1015,lr=1016,Ql=1017,ec=1018,_s=1020,qh=35902,Yh=1021,Zh=1022,un=1023,$h=1024,Jh=1025,us=1026,xs=1027,Kh=1028,tc=1029,jh=1030,nc=1031;var ic=1033,jr=33776,Qr=33777,ea=33778,ta=33779,Vo=35840,Go=35841,Wo=35842,Xo=35843,qo=36196,Yo=37492,Zo=37496,$o=37808,Jo=37809,Ko=37810,jo=37811,Qo=37812,el=37813,tl=37814,nl=37815,il=37816,sl=37817,rl=37818,al=37819,ol=37820,ll=37821,na=36492,cl=36494,hl=36495,Qh=36283,ul=36284,dl=36285,fl=36286;var ia=2300,pl=2301,Ka=2302,Dc=2400,Uc=2401,Nc=2402;var Vd=3200,Gd=3201;var eu=0,Wd=1,oi="",Tt="srgb",ws="srgb-linear",La="linear",et="srgb";var Xi=7680;var Oc=519,Xd=512,qd=513,Yd=514,tu=515,Zd=516,$d=517,Jd=518,Kd=519,ml=35044;var Fc="300 es",Wn=2e3,sa=2001,Zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zc=1234567,Zs=Math.PI/180,Qs=180/Math.PI;function Xn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function wt(n,e,t){return Math.max(e,Math.min(t,n))}function sc(n,e){return(n%e+e)%e}function jd(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Qd(n,e,t){return n!==e?(t-n)/(e-n):0}function $s(n,e,t){return(1-t)*n+t*e}function ef(n,e,t,i){return $s(n,e,1-Math.exp(-t*i))}function tf(n,e=1){return e-Math.abs(sc(n,e*2)-e)}function nf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function sf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function rf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function af(n,e){return n+Math.random()*(e-n)}function of(n){return n*(.5-Math.random())}function lf(n){n!==void 0&&(zc=n);let e=zc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cf(n){return n*Zs}function hf(n){return n*Qs}function uf(n){return(n&n-1)===0&&n!==0}function df(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ff(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function pf(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),f=r((e-i)/2),p=a((e-i)/2),d=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*f,l*p,o*c);break;case"YZY":n.set(l*p,o*h,l*f,o*c);break;case"ZXZ":n.set(l*f,l*p,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Je(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var nu={DEG2RAD:Zs,RAD2DEG:Qs,generateUUID:Xn,clamp:wt,euclideanModulo:sc,mapLinear:jd,inverseLerp:Qd,lerp:$s,damp:ef,pingpong:tf,smoothstep:nf,smootherstep:sf,randInt:rf,randFloat:af,randFloatSpread:of,seededRandom:lf,degToRad:cf,radToDeg:hf,isPowerOfTwo:uf,ceilPowerOfTwo:df,floorPowerOfTwo:ff,setQuaternionFromProperEuler:pf,normalize:Je,denormalize:hn},pe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Le=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],p=i[2],d=i[5],g=i[8],_=s[0],m=s[3],u=s[6],y=s[1],v=s[4],x=s[7],C=s[2],w=s[5],R=s[8];return r[0]=a*_+o*y+l*C,r[3]=a*m+o*v+l*w,r[6]=a*u+o*x+l*R,r[1]=c*_+h*y+f*C,r[4]=c*m+h*v+f*w,r[7]=c*u+h*x+f*R,r[2]=p*_+d*y+g*C,r[5]=p*m+d*v+g*w,r[8]=p*u+d*x+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,p=o*l-h*r,d=c*r-a*l,g=t*f+i*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=f*_,e[1]=(s*c-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=p*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ja.makeScale(e,t)),this}rotate(e){return this.premultiply(ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ja=new Le;function iu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ra(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mf(){let n=ra("canvas");return n.style.display="block",n}var Bc={};function qs(n){n in Bc||(Bc[n]=!0,console.warn(n))}function gf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function _f(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function xf(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var We={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===et&&(n.r=qn(n.r),n.g=qn(n.g),n.b=qn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===et&&(n.r=ds(n.r),n.g=ds(n.g),n.b=ds(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===oi?La:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ds(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var kc=[.64,.33,.3,.6,.15,.06],Hc=[.2126,.7152,.0722],Vc=[.3127,.329],Gc=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wc=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);We.define({[ws]:{primaries:kc,whitePoint:Vc,transfer:La,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:Hc,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:kc,whitePoint:Vc,transfer:et,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:Hc,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}});var qi,gl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=ra("canvas")),qi.width=e.width,qi.height=e.height;let i=qi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ra("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qn(t[i]/255)*255):t[i]=qn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vf=0,aa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qa(s[a].image)):r.push(Qa(s[a]))}else r=Qa(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var yf=0,Xt=class n extends Zn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ri,s=Ri,r=Sn,a=Ci,o=un,l=Yn,c=n.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Xn(),this.name="",this.source=new aa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ks:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case Ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ks:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case Ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Gh;Xt.DEFAULT_ANISOTROPY=1;var tt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],p=l[1],d=l[5],g=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,x=(d+1)/2,C=(u+1)/2,w=(h+p)/4,R=(f+_)/4,I=(g+m)/4;return v>x&&v>C?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=w/i,r=R/i):x>C?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=w/s,r=I/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=I/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(p-h)/y,this.w=Math.acos((c+d+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_l=class extends Zn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Xt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new aa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends _l{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},oa=class extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xl=class extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],p=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=p,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==p||c!==d||h!==g){let m=1-o,u=l*p+c*d+h*g+f*_,y=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let C=Math.sqrt(v),w=Math.atan2(C,u*y);m=Math.sin(m*w)/C,o=Math.sin(o*w)/C}let x=o*y;if(l=l*m+p*x,c=c*m+d*x,h=h*m+g*x,f=f*m+_*x,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=C,c*=C,h*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],p=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*f+l*d-c*p,e[t+1]=l*g+h*p+c*f-o*d,e[t+2]=c*g+h*d+o*p-l*f,e[t+3]=h*g-o*f-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),p=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=p*h*f+c*d*g,this._y=c*d*f-p*h*g,this._z=c*h*g+p*d*f,this._w=c*h*f-p*d*g;break;case"YXZ":this._x=p*h*f+c*d*g,this._y=c*d*f-p*h*g,this._z=c*h*g-p*d*f,this._w=c*h*f+p*d*g;break;case"ZXY":this._x=p*h*f-c*d*g,this._y=c*d*f+p*h*g,this._z=c*h*g+p*d*f,this._w=c*h*f-p*d*g;break;case"ZYX":this._x=p*h*f-c*d*g,this._y=c*d*f+p*h*g,this._z=c*h*g-p*d*f,this._w=c*h*f+p*d*g;break;case"YZX":this._x=p*h*f+c*d*g,this._y=c*d*f+p*h*g,this._z=c*h*g-p*d*f,this._w=c*h*f-p*d*g;break;case"XZY":this._x=p*h*f-c*d*g,this._y=c*d*f-p*h*g,this._z=c*h*g+p*d*f,this._w=c*h*f+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],p=i+o+f;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=a*f+this._w*p,this._x=i*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return eo.copy(this).projectOnVector(e),this.sub(eo)}reflect(e){return this.sub(eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eo=new A,Xc=new fn,Ii=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,an):an.fromBufferAttribute(r,a),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Er.copy(i.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),wr.subVectors(this.max,Fs),Yi.subVectors(e.a,Fs),Zi.subVectors(e.b,Fs),$i.subVectors(e.c,Fs),ti.subVectors(Zi,Yi),ni.subVectors($i,Zi),vi.subVectors(Yi,$i);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-vi.z,vi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,vi.z,0,-vi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-vi.y,vi.x,0];return!to(t,Yi,Zi,$i,wr)||(t=[1,0,0,0,1,0,0,0,1],!to(t,Yi,Zi,$i,wr))?!1:(Tr.crossVectors(ti,ni),t=[Tr.x,Tr.y,Tr.z],to(t,Yi,Zi,$i,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Fn=[new A,new A,new A,new A,new A,new A,new A,new A],an=new A,Er=new Ii,Yi=new A,Zi=new A,$i=new A,ti=new A,ni=new A,vi=new A,Fs=new A,wr=new A,Tr=new A,yi=new A;function to(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){yi.fromArray(n,r);let o=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),l=e.dot(yi),c=t.dot(yi),h=i.dot(yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Mf=new Ii,zs=new A,no=new A,Li=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Mf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);let t=zs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(zs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(no.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(no)),this.expandByPoint(zs.copy(e.center).sub(no))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},zn=new A,io=new A,Ar=new A,ii=new A,so=new A,Rr=new A,ro=new A,di=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){io.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(io);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ar),o=ii.dot(this.direction),l=-ii.dot(Ar),c=ii.lengthSq(),h=Math.abs(1-a*a),f,p,d,g;if(h>0)if(f=a*l-o,p=a*o-l,g=r*h,f>=0)if(p>=-g)if(p<=g){let _=1/h;f*=_,p*=_,d=f*(f+a*p+2*o)+p*(a*f+p+2*l)+c}else p=r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*l)+c;else p<=-g?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+p*(p+2*l)+c):p<=g?(f=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+c):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+p*(p+2*l)+c);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(io).addScaledVector(Ar,p),d}intersectSphere(e,t){zn.subVectors(e.center,this.origin);let i=zn.dot(this.direction),s=zn.dot(zn)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,s,r){so.subVectors(t,e),Rr.subVectors(i,e),ro.crossVectors(so,Rr);let a=this.direction.dot(ro),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ii.subVectors(this.origin,e);let l=o*this.direction.dot(Rr.crossVectors(ii,Rr));if(l<0)return null;let c=o*this.direction.dot(so.cross(ii));if(c<0||l+c>a)return null;let h=-o*ii.dot(ro);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ze=class n{constructor(e,t,i,s,r,a,o,l,c,h,f,p,d,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,f,p,d,g,_,m)}set(e,t,i,s,r,a,o,l,c,h,f,p,d,g,_,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=p,u[3]=d,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Ji.setFromMatrixColumn(e,0).length(),r=1/Ji.setFromMatrixColumn(e,1).length(),a=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=a*h,d=a*f,g=o*h,_=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=p-_*c,t[9]=-o*l,t[2]=_-p*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*h,d=l*f,g=c*h,_=c*f;t[0]=p+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=_+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*h,d=l*f,g=c*h,_=c*f;t[0]=p-_*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=_-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*h,d=a*f,g=o*h,_=o*f;t[0]=l*h,t[4]=g*c-d,t[8]=p*c+_,t[1]=l*f,t[5]=_*c+p,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-p*f,t[8]=g*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+g,t[10]=p-_*f}else if(e.order==="XZY"){let p=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=p*f+_,t[5]=a*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*h,t[10]=_*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bf,e,Sf)}lookAt(e,t,i){let s=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),si.crossVectors(i,Gt),si.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),si.crossVectors(i,Gt)),si.normalize(),Cr.crossVectors(Gt,si),s[0]=si.x,s[4]=Cr.x,s[8]=Gt.x,s[1]=si.y,s[5]=Cr.y,s[9]=Gt.y,s[2]=si.z,s[6]=Cr.z,s[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],p=i[9],d=i[13],g=i[2],_=i[6],m=i[10],u=i[14],y=i[3],v=i[7],x=i[11],C=i[15],w=s[0],R=s[4],I=s[8],E=s[12],b=s[1],P=s[5],O=s[9],F=s[13],H=s[2],$=s[6],W=s[10],Q=s[14],G=s[3],ie=s[7],he=s[11],Me=s[15];return r[0]=a*w+o*b+l*H+c*G,r[4]=a*R+o*P+l*$+c*ie,r[8]=a*I+o*O+l*W+c*he,r[12]=a*E+o*F+l*Q+c*Me,r[1]=h*w+f*b+p*H+d*G,r[5]=h*R+f*P+p*$+d*ie,r[9]=h*I+f*O+p*W+d*he,r[13]=h*E+f*F+p*Q+d*Me,r[2]=g*w+_*b+m*H+u*G,r[6]=g*R+_*P+m*$+u*ie,r[10]=g*I+_*O+m*W+u*he,r[14]=g*E+_*F+m*Q+u*Me,r[3]=y*w+v*b+x*H+C*G,r[7]=y*R+v*P+x*$+C*ie,r[11]=y*I+v*O+x*W+C*he,r[15]=y*E+v*F+x*Q+C*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],p=e[10],d=e[14],g=e[3],_=e[7],m=e[11],u=e[15];return g*(+r*l*f-s*c*f-r*o*p+i*c*p+s*o*d-i*l*d)+_*(+t*l*d-t*c*p+r*a*p-s*a*d+s*c*h-r*l*h)+m*(+t*c*f-t*o*d-r*a*f+i*a*d+r*o*h-i*c*h)+u*(-s*o*h-t*l*f+t*o*p+s*a*f-i*a*p+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],p=e[10],d=e[11],g=e[12],_=e[13],m=e[14],u=e[15],y=f*m*c-_*p*c+_*l*d-o*m*d-f*l*u+o*p*u,v=g*p*c-h*m*c-g*l*d+a*m*d+h*l*u-a*p*u,x=h*_*c-g*f*c+g*o*d-a*_*d-h*o*u+a*f*u,C=g*f*l-h*_*l-g*o*p+a*_*p+h*o*m-a*f*m,w=t*y+i*v+s*x+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return e[0]=y*R,e[1]=(_*p*r-f*m*r-_*s*d+i*m*d+f*s*u-i*p*u)*R,e[2]=(o*m*r-_*l*r+_*s*c-i*m*c-o*s*u+i*l*u)*R,e[3]=(f*l*r-o*p*r-f*s*c+i*p*c+o*s*d-i*l*d)*R,e[4]=v*R,e[5]=(h*m*r-g*p*r+g*s*d-t*m*d-h*s*u+t*p*u)*R,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*u-t*l*u)*R,e[7]=(a*p*r-h*l*r+h*s*c-t*p*c-a*s*d+t*l*d)*R,e[8]=x*R,e[9]=(g*f*r-h*_*r-g*i*d+t*_*d+h*i*u-t*f*u)*R,e[10]=(a*_*r-g*o*r+g*i*c-t*_*c-a*i*u+t*o*u)*R,e[11]=(h*o*r-a*f*r-h*i*c+t*f*c+a*i*d-t*o*d)*R,e[12]=C*R,e[13]=(h*_*s-g*f*s+g*i*p-t*_*p-h*i*m+t*f*m)*R,e[14]=(g*o*s-a*_*s-g*i*l+t*_*l+a*i*m-t*o*m)*R,e[15]=(a*f*s-h*o*s+h*i*l-t*f*l-a*i*p+t*o*p)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,p=r*c,d=r*h,g=r*f,_=a*h,m=a*f,u=o*f,y=l*c,v=l*h,x=l*f,C=i.x,w=i.y,R=i.z;return s[0]=(1-(_+u))*C,s[1]=(d+x)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(d-x)*w,s[5]=(1-(p+u))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(g+v)*R,s[9]=(m-y)*R,s[10]=(1-(p+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Ji.set(s[0],s[1],s[2]).length(),a=Ji.set(s[4],s[5],s[6]).length(),o=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],on.copy(this);let c=1/r,h=1/a,f=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,t.setFromRotationMatrix(on),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Wn){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s),d,g;if(o===Wn)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===sa)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Wn){let l=this.elements,c=1/(t-e),h=1/(i-s),f=1/(a-r),p=(t+e)*c,d=(i+s)*h,g,_;if(o===Wn)g=(a+r)*f,_=-2*f;else if(o===sa)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ji=new A,on=new Ze,bf=new A(0,0,0),Sf=new A(1,1,1),si=new A,Cr=new A,Gt=new A,qc=new Ze,Yc=new fn,wn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],p=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yc.setFromEuler(this),this.setFromQuaternion(Yc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wn.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ef=0,Zc=new A,Ki=new fn,Bn=new Ze,Pr=new A,Bs=new A,wf=new A,Tf=new fn,$c=new A(1,0,0),Jc=new A(0,1,0),Kc=new A(0,0,1),jc={type:"added"},Af={type:"removed"},ji={type:"childadded",child:null},ao={type:"childremoved",child:null},vt=class n extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new A,t=new wn,i=new fn,s=new A(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Le}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis($c,e)}rotateY(e){return this.rotateOnAxis(Jc,e)}rotateZ(e){return this.rotateOnAxis(Kc,e)}translateOnAxis(e,t){return Zc.copy(e).applyQuaternion(this.quaternion),this.position.add(Zc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($c,e)}translateY(e){return this.translateOnAxis(Jc,e)}translateZ(e){return this.translateOnAxis(Kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pr.copy(e):Pr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Bs,Pr,this.up):Bn.lookAt(Pr,Bs,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Bn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jc),ji.child=e,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Af),ao.child=e,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jc),ji.child=e,this.dispatchEvent(ji),ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,wf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Tf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),p=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};vt.DEFAULT_UP=new A(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=new A,kn=new A,oo=new A,Hn=new A,Qi=new A,es=new A,Qc=new A,lo=new A,co=new A,ho=new A,uo=new tt,fo=new tt,po=new tt,li=class n{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ln.subVectors(e,t),s.cross(ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ln.subVectors(s,t),kn.subVectors(i,t),oo.subVectors(e,t);let a=ln.dot(ln),o=ln.dot(kn),l=ln.dot(oo),c=kn.dot(kn),h=kn.dot(oo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let p=1/f,d=(c*l-o*h)*p,g=(a*h-o*l)*p;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(a,Hn.y),l.addScaledVector(o,Hn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return uo.setScalar(0),fo.setScalar(0),po.setScalar(0),uo.fromBufferAttribute(e,t),fo.fromBufferAttribute(e,i),po.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(uo,r.x),a.addScaledVector(fo,r.y),a.addScaledVector(po,r.z),a}static isFrontFacing(e,t,i,s){return ln.subVectors(i,t),kn.subVectors(e,t),ln.cross(kn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),ln.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Qi.subVectors(s,i),es.subVectors(r,i),lo.subVectors(e,i);let l=Qi.dot(lo),c=es.dot(lo);if(l<=0&&c<=0)return t.copy(i);co.subVectors(e,s);let h=Qi.dot(co),f=es.dot(co);if(h>=0&&f<=h)return t.copy(s);let p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Qi,a);ho.subVectors(e,r);let d=Qi.dot(ho),g=es.dot(ho);if(g>=0&&d<=g)return t.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(es,o);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return Qc.subVectors(r,s),o=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector(Qc,o);let u=1/(m+_+p);return a=_*u,o=p*u,t.copy(i).addScaledVector(Qi,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function mo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ce=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=i,We.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=We.workingColorSpace){if(e=sc(e,1),t=wt(t,0,1),i=wt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=mo(a,r,e+1/3),this.g=mo(a,r,e),this.b=mo(a,r,e-1/3)}return We.toWorkingColorSpace(this,s),this}setStyle(e,t=Tt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let i=su[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return We.fromWorkingColorSpace(It.copy(this),e),Math.round(wt(It.r*255,0,255))*65536+Math.round(wt(It.g*255,0,255))*256+Math.round(wt(It.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(It.copy(this),t);let i=It.r,s=It.g,r=It.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Tt){We.fromWorkingColorSpace(It.copy(this),e);let t=It.r,i=It.g,s=It.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(Ir);let i=$s(ri.h,Ir.h,t),s=$s(ri.s,Ir.s,t),r=$s(ri.l,Ir.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},It=new Ce;Ce.NAMES=su;var Rf=0,Tn=class extends Zn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Xn(),this.name="",this.blending=hs,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Po,this.blendDst=Io,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Po&&(i.blendSrc=this.blendSrc),this.blendDst!==Io&&(i.blendDst=this.blendDst),this.blendEquation!==Ti&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},An=class extends Tn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var xt=new A,Lr=new pe,At=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ml,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=hn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Je(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ml&&(e.usage=this.usage),e}};var la=class extends At{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ca=class extends At{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var nt=class extends At{constructor(e,t,i){super(new Float32Array(e),t,i)}},Cf=0,jt=new Ze,go=new vt,ts=new A,Wt=new Ii,ks=new Ii,Et=new A,pt=class n extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iu(e)?ca:la)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Le().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,i){return jt.makeTranslation(e,t,i),this.applyMatrix4(jt),this}scale(e,t,i){return jt.makeScale(e,t,i),this.applyMatrix4(jt),this}lookAt(e){return go.lookAt(e),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Wt.min,ks.min),Wt.expandByPoint(Et),Et.addVectors(Wt.max,ks.max),Wt.expandByPoint(Et)):(Wt.expandByPoint(ks.min),Wt.expandByPoint(ks.max))}Wt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Et));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Et.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(e,c),Et.add(ts)),s=Math.max(s,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new A,l[I]=new A;let c=new A,h=new A,f=new A,p=new pe,d=new pe,g=new pe,_=new A,m=new A;function u(I,E,b){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,b),p.fromBufferAttribute(r,I),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,b),h.sub(c),f.sub(c),d.sub(p),g.sub(p);let P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(P),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),o[I].add(_),o[E].add(_),o[b].add(_),l[I].add(m),l[E].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,E=y.length;I<E;++I){let b=y[I],P=b.start,O=b.count;for(let F=P,H=P+O;F<H;F+=3)u(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let v=new A,x=new A,C=new A,w=new A;function R(I){C.fromBufferAttribute(s,I),w.copy(C);let E=o[I];v.copy(E),v.sub(C.multiplyScalar(C.dot(E))).normalize(),x.crossVectors(w,E);let P=x.dot(l[I])<0?-1:1;a.setXYZW(I,v.x,v.y,v.z,P)}for(let I=0,E=y.length;I<E;++I){let b=y[I],P=b.start,O=b.count;for(let F=P,H=P+O;F<H;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);let s=new A,r=new A,a=new A,o=new A,l=new A,c=new A,h=new A,f=new A;if(e)for(let p=0,d=e.count;p<d;p+=3){let g=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,p=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let u=0;u<h;u++)p[g++]=c[d++]}return new At(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let p=c[h],d=e(p,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let p=0,d=f.length;p<d;p++)h.push(f[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},eh=new Ze,Mi=new di,Dr=new Li,th=new A,Ur=new A,Nr=new A,Or=new A,_o=new A,Fr=new A,nh=new A,zr=new A,ze=class extends vt{constructor(e=new pt,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Fr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(_o.fromBufferAttribute(f,e),a?Fr.addScaledVector(_o,h):Fr.addScaledVector(_o.sub(t),h))}t.add(Fr)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere),Dr.applyMatrix4(r),Mi.copy(e.ray).recast(e.near),!(Dr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Dr,th)===null||Mi.origin.distanceToSquared(th)>(e.far-e.near)**2))&&(eh.copy(r).invert(),Mi.copy(e.ray).applyMatrix4(eh),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){let m=p[g],u=a[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,C=v;x<C;x+=3){let w=o.getX(x),R=o.getX(x+1),I=o.getX(x+2);s=Br(this,u,e,i,c,h,f,w,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,u=_;m<u;m+=3){let y=o.getX(m),v=o.getX(m+1),x=o.getX(m+2);s=Br(this,a,e,i,c,h,f,y,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){let m=p[g],u=a[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,C=v;x<C;x+=3){let w=x,R=x+1,I=x+2;s=Br(this,u,e,i,c,h,f,w,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,u=_;m<u;m+=3){let y=m,v=m+1,x=m+2;s=Br(this,a,e,i,c,h,f,y,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Pf(n,e,t,i,s,r,a,o){let l;if(e.side===Bt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ui,o),l===null)return null;zr.copy(o),zr.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(zr);return c<t.near||c>t.far?null:{distance:c,point:zr.clone(),object:n}}function Br(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ur),n.getVertexPosition(l,Nr),n.getVertexPosition(c,Or);let h=Pf(n,e,t,i,Ur,Nr,Or,nh);if(h){let f=new A;li.getBarycoord(nh,Ur,Nr,Or,f),s&&(h.uv=li.getInterpolatedAttribute(s,o,l,c,f,new pe)),r&&(h.uv1=li.getInterpolatedAttribute(r,o,l,c,f,new pe)),a&&(h.normal=li.getInterpolatedAttribute(a,o,l,c,f,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new A,materialIndex:0};li.getNormal(Ur,Nr,Or,p.normal),h.face=p,h.barycoord=f}return h}var Di=class n extends pt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],p=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(f,2));function g(_,m,u,y,v,x,C,w,R,I,E){let b=x/R,P=C/I,O=x/2,F=C/2,H=w/2,$=R+1,W=I+1,Q=0,G=0,ie=new A;for(let he=0;he<W;he++){let Me=he*P-F;for(let Oe=0;Oe<$;Oe++){let st=Oe*b-O;ie[_]=st*y,ie[m]=Me*v,ie[u]=H,c.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[u]=w>0?1:-1,h.push(ie.x,ie.y,ie.z),f.push(Oe/R),f.push(1-he/I),Q+=1}}for(let he=0;he<I;he++)for(let Me=0;Me<R;Me++){let Oe=p+Me+$*he,st=p+Me+$*(he+1),q=p+(Me+1)+$*(he+1),ee=p+(Me+1)+$*he;l.push(Oe,st,ee),l.push(st,q,ee),G+=6}o.addGroup(d,G,E),d+=G,p+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function vs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ot(n){let e={};for(let t=0;t<n.length;t++){let i=vs(n[t]);for(let s in i)e[s]=i[s]}return e}function If(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ru(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}var Lf={clone:vs,merge:Ot},Df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends Tn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Df,this.fragmentShader=Uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=If(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ha=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ai=new A,ih=new pe,sh=new pe,Lt=class extends ha{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,ih,sh),t.subVectors(sh,ih)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ns=-90,is=1,vl=class extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Lt(ns,is,e,t);s.layers=this.layers,this.add(s);let r=new Lt(ns,is,e,t);r.layers=this.layers,this.add(r);let a=new Lt(ns,is,e,t);a.layers=this.layers,this.add(a);let o=new Lt(ns,is,e,t);o.layers=this.layers,this.add(o);let l=new Lt(ns,is,e,t);l.layers=this.layers,this.add(l);let c=new Lt(ns,is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(f,p,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ua=class extends Xt{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ms,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yl=class extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ua(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Di(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:ci});r.uniforms.tEquirect.value=t;let a=new ze(s,r),o=t.minFilter;return t.minFilter===Ci&&(t.minFilter=Sn),new vl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},xo=new A,Nf=new A,Of=new Le,cn=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=xo.subVectors(i,t).cross(Nf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(xo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Of.getNormalMatrix(e),s=this.coplanarPoint(xo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},bi=new Li,kr=new A,tr=class{constructor(e=new cn,t=new cn,i=new cn,s=new cn,r=new cn,a=new cn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wn){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],p=s[7],d=s[8],g=s[9],_=s[10],m=s[11],u=s[12],y=s[13],v=s[14],x=s[15];if(i[0].setComponents(l-r,p-c,m-d,x-u).normalize(),i[1].setComponents(l+r,p+c,m+d,x+u).normalize(),i[2].setComponents(l+a,p+h,m+g,x+y).normalize(),i[3].setComponents(l-a,p-h,m-g,x-y).normalize(),i[4].setComponents(l-o,p-f,m-_,x-v).normalize(),t===Wn)i[5].setComponents(l+o,p+f,m+_,x+v).normalize();else if(t===sa)i[5].setComponents(o,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(kr.x=s.normal.x>0?e.max.x:e.min.x,kr.y=s.normal.y>0?e.max.y:e.min.y,kr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(kr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function au(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ff(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<f.length;d++){let g=f[p],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,f[p]=_)}f.length=p+1;for(let d=0,g=f.length;d<g;d++){let _=f[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ys=class n extends pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=e/o,p=t/l,d=[],g=[],_=[],m=[];for(let u=0;u<h;u++){let y=u*p-a;for(let v=0;v<c;v++){let x=v*f-r;g.push(x,-y,0),_.push(0,0,1),m.push(v/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<o;y++){let v=y+c*u,x=y+c*(u+1),C=y+1+c*(u+1),w=y+1+c*u;d.push(v,x,w),d.push(x,C,w)}this.setIndex(d),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,op=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Np=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Op=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,om=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Em=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Im=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ng=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ag=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:zf,alphahash_pars_fragment:Bf,alphamap_fragment:kf,alphamap_pars_fragment:Hf,alphatest_fragment:Vf,alphatest_pars_fragment:Gf,aomap_fragment:Wf,aomap_pars_fragment:Xf,batching_pars_vertex:qf,batching_vertex:Yf,begin_vertex:Zf,beginnormal_vertex:$f,bsdfs:Jf,iridescence_fragment:Kf,bumpmap_pars_fragment:jf,clipping_planes_fragment:Qf,clipping_planes_pars_fragment:ep,clipping_planes_pars_vertex:tp,clipping_planes_vertex:np,color_fragment:ip,color_pars_fragment:sp,color_pars_vertex:rp,color_vertex:ap,common:op,cube_uv_reflection_fragment:lp,defaultnormal_vertex:cp,displacementmap_pars_vertex:hp,displacementmap_vertex:up,emissivemap_fragment:dp,emissivemap_pars_fragment:fp,colorspace_fragment:pp,colorspace_pars_fragment:mp,envmap_fragment:gp,envmap_common_pars_fragment:_p,envmap_pars_fragment:xp,envmap_pars_vertex:vp,envmap_physical_pars_fragment:Pp,envmap_vertex:yp,fog_vertex:Mp,fog_pars_vertex:bp,fog_fragment:Sp,fog_pars_fragment:Ep,gradientmap_pars_fragment:wp,lightmap_pars_fragment:Tp,lights_lambert_fragment:Ap,lights_lambert_pars_fragment:Rp,lights_pars_begin:Cp,lights_toon_fragment:Ip,lights_toon_pars_fragment:Lp,lights_phong_fragment:Dp,lights_phong_pars_fragment:Up,lights_physical_fragment:Np,lights_physical_pars_fragment:Op,lights_fragment_begin:Fp,lights_fragment_maps:zp,lights_fragment_end:Bp,logdepthbuf_fragment:kp,logdepthbuf_pars_fragment:Hp,logdepthbuf_pars_vertex:Vp,logdepthbuf_vertex:Gp,map_fragment:Wp,map_pars_fragment:Xp,map_particle_fragment:qp,map_particle_pars_fragment:Yp,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:$p,morphinstance_vertex:Jp,morphcolor_vertex:Kp,morphnormal_vertex:jp,morphtarget_pars_vertex:Qp,morphtarget_vertex:em,normal_fragment_begin:tm,normal_fragment_maps:nm,normal_pars_fragment:im,normal_pars_vertex:sm,normal_vertex:rm,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:om,clearcoat_normal_fragment_maps:lm,clearcoat_pars_fragment:cm,iridescence_pars_fragment:hm,opaque_fragment:um,packing:dm,premultiplied_alpha_fragment:fm,project_vertex:pm,dithering_fragment:mm,dithering_pars_fragment:gm,roughnessmap_fragment:_m,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:vm,shadowmap_pars_vertex:ym,shadowmap_vertex:Mm,shadowmask_pars_fragment:bm,skinbase_vertex:Sm,skinning_pars_vertex:Em,skinning_vertex:wm,skinnormal_vertex:Tm,specularmap_fragment:Am,specularmap_pars_fragment:Rm,tonemapping_fragment:Cm,tonemapping_pars_fragment:Pm,transmission_fragment:Im,transmission_pars_fragment:Lm,uv_pars_fragment:Dm,uv_pars_vertex:Um,uv_vertex:Nm,worldpos_vertex:Om,background_vert:Fm,background_frag:zm,backgroundCube_vert:Bm,backgroundCube_frag:km,cube_vert:Hm,cube_frag:Vm,depth_vert:Gm,depth_frag:Wm,distanceRGBA_vert:Xm,distanceRGBA_frag:qm,equirect_vert:Ym,equirect_frag:Zm,linedashed_vert:$m,linedashed_frag:Jm,meshbasic_vert:Km,meshbasic_frag:jm,meshlambert_vert:Qm,meshlambert_frag:eg,meshmatcap_vert:tg,meshmatcap_frag:ng,meshnormal_vert:ig,meshnormal_frag:sg,meshphong_vert:rg,meshphong_frag:ag,meshphysical_vert:og,meshphysical_frag:lg,meshtoon_vert:cg,meshtoon_frag:hg,points_vert:ug,points_frag:dg,shadow_vert:fg,shadow_frag:pg,sprite_vert:mg,sprite_frag:gg},te={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},bn={basic:{uniforms:Ot([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Ot([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Ot([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Ot([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Ot([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Ot([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Ot([te.points,te.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Ot([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Ot([te.common,te.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Ot([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Ot([te.sprite,te.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Ot([te.common,te.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Ot([te.lights,te.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};bn.physical={uniforms:Ot([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var Hr={r:0,b:0,g:0},Si=new wn,_g=new Ze;function xg(n,e,t,i,s,r,a){let o=new Ce(0),l=r===!0?0:1,c,h,f=null,p=0,d=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1,x=g(y);x===null?u(o,l):x&&x.isColor&&(u(x,1),v=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,v){let x=g(v);x&&(x.isCubeTexture||x.mapping===Ia)?(h===void 0&&(h=new ze(new Di(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:vs(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Si.copy(v.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_g.makeRotationFromEuler(Si)),h.material.toneMapped=We.getTransfer(x.colorSpace)!==et,(f!==x||p!==x.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=x,p=x.version,d=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ze(new ys(2,2),new Rn({name:"BackgroundMaterial",uniforms:vs(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=We.getTransfer(x.colorSpace)!==et,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||p!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,p=x.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function u(y,v){y.getRGB(Hr,ru(n)),i.buffers.color.setClear(Hr.r,Hr.g,Hr.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,u(o,l)},render:_,addToRenderList:m}}function vg(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null),r=s,a=!1;function o(b,P,O,F,H){let $=!1,W=f(F,O,P);r!==W&&(r=W,c(r.object)),$=d(b,F,O,H),$&&g(b,F,O,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,x(b,P,O,F),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function f(b,P,O){let F=O.wireframe===!0,H=i[b.id];H===void 0&&(H={},i[b.id]=H);let $=H[P.id];$===void 0&&($={},H[P.id]=$);let W=$[F];return W===void 0&&(W=p(l()),$[F]=W),W}function p(b){let P=[],O=[],F=[];for(let H=0;H<t;H++)P[H]=0,O[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:F,object:b,attributes:{},index:null}}function d(b,P,O,F){let H=r.attributes,$=P.attributes,W=0,Q=O.getAttributes();for(let G in Q)if(Q[G].location>=0){let he=H[G],Me=$[G];if(Me===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(Me=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(Me=b.instanceColor)),he===void 0||he.attribute!==Me||Me&&he.data!==Me.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function g(b,P,O,F){let H={},$=P.attributes,W=0,Q=O.getAttributes();for(let G in Q)if(Q[G].location>=0){let he=$[G];he===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(he=b.instanceColor));let Me={};Me.attribute=he,he&&he.data&&(Me.data=he.data),H[G]=Me,W++}r.attributes=H,r.attributesNum=W,r.index=F}function _(){let b=r.newAttributes;for(let P=0,O=b.length;P<O;P++)b[P]=0}function m(b){u(b,0)}function u(b,P){let O=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;O[b]=1,F[b]===0&&(n.enableVertexAttribArray(b),F[b]=1),H[b]!==P&&(n.vertexAttribDivisor(b,P),H[b]=P)}function y(){let b=r.newAttributes,P=r.enabledAttributes;for(let O=0,F=P.length;O<F;O++)P[O]!==b[O]&&(n.disableVertexAttribArray(O),P[O]=0)}function v(b,P,O,F,H,$,W){W===!0?n.vertexAttribIPointer(b,P,O,H,$):n.vertexAttribPointer(b,P,O,F,H,$)}function x(b,P,O,F){_();let H=F.attributes,$=O.getAttributes(),W=P.defaultAttributeValues;for(let Q in $){let G=$[Q];if(G.location>=0){let ie=H[Q];if(ie===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor)),ie!==void 0){let he=ie.normalized,Me=ie.itemSize,Oe=e.get(ie);if(Oe===void 0)continue;let st=Oe.buffer,q=Oe.type,ee=Oe.bytesPerElement,xe=q===n.INT||q===n.UNSIGNED_INT||ie.gpuType===jl;if(ie.isInterleavedBufferAttribute){let se=ie.data,we=se.stride,Re=ie.offset;if(se.isInstancedInterleavedBuffer){for(let Fe=0;Fe<G.locationSize;Fe++)u(G.location+Fe,se.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Fe=0;Fe<G.locationSize;Fe++)m(G.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,st);for(let Fe=0;Fe<G.locationSize;Fe++)v(G.location+Fe,Me/G.locationSize,q,he,we*ee,(Re+Me/G.locationSize*Fe)*ee,xe)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<G.locationSize;se++)u(G.location+se,ie.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<G.locationSize;se++)m(G.location+se);n.bindBuffer(n.ARRAY_BUFFER,st);for(let se=0;se<G.locationSize;se++)v(G.location+se,Me/G.locationSize,q,he,Me*ee,Me/G.locationSize*se*ee,xe)}}else if(W!==void 0){let he=W[Q];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(G.location,he);break;case 3:n.vertexAttrib3fv(G.location,he);break;case 4:n.vertexAttrib4fv(G.location,he);break;default:n.vertexAttrib1fv(G.location,he)}}}}y()}function C(){I();for(let b in i){let P=i[b];for(let O in P){let F=P[O];for(let H in F)h(F[H].object),delete F[H];delete P[O]}delete i[b]}}function w(b){if(i[b.id]===void 0)return;let P=i[b.id];for(let O in P){let F=P[O];for(let H in F)h(F[H].object),delete F[H];delete P[O]}delete i[b.id]}function R(b){for(let P in i){let O=i[P];if(O[b.id]===void 0)continue;let F=O[b.id];for(let H in F)h(F[H].object),delete F[H];delete O[b.id]}}function I(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function yg(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),t.update(h,i,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];t.update(d,i,1)}function l(c,h,f,p){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,p,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*p[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Mg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==un&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let I=R===lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Yn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Gn&&!I)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:C,maxSamples:w}}function bg(n){let e=this,t=null,i=0,s=!1,r=!1,a=new cn,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let d=f.length!==0||p||i!==0||s;return s=p,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,d){let g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,u=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,v=y*4,x=u.clippingState||null;l.value=x,x=h(g,p,v,d);for(let C=0;C!==v;++C)x[C]=t[C];u.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,p,d,g){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let u=d+_*4,y=p.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,x=d;v!==_;++v,x+=4)a.copy(f[v]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Sg(n){let e=new WeakMap;function t(a,o){return o===Bo?a.mapping=ms:o===ko&&(a.mapping=gs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Bo||o===ko)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new yl(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var da=class extends ha{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},cs=4,rh=[.125,.215,.35,.446,.526,.582],Ai=20,vo=new da,ah=new Ce,yo=null,Mo=0,bo=0,So=!1,wi=(1+Math.sqrt(5))/2,ss=1/wi,oh=[new A(-wi,ss,0),new A(wi,ss,0),new A(-ss,0,wi),new A(ss,0,wi),new A(0,wi,-ss),new A(0,wi,ss),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],fa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){yo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yo,Mo,bo),this._renderer.xr.enabled=So,e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:lr,format:un,colorSpace:ws,depthBuffer:!1},s=lh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lh(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eg(r)),this._blurMaterial=wg(r,e,t)}return s}_compileMaterial(e){let t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,vo)}_sceneToCubeUV(e,t,i,s){let o=new Lt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(ah),h.toneMapping=hi,h.autoClear=!1;let d=new An({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new ze(new Di,d),_=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(ah),_=!0);for(let u=0;u<6;u++){let y=u%3;y===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):y===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));let v=this._cubeSize;Vr(s,y*v,u>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ms||e.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ze(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Vr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,vo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=oh[(s-r-1)%oh.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new ze(this._lodPlanes[s],c),p=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ai-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ai;m>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);let u=[],y=0;for(let R=0;R<Ai;++R){let I=R/_,E=Math.exp(-I*I/2);u.push(E),R===0?y+=E:R<m&&(y+=2*E)}for(let R=0;R<u.length;R++)u[R]=u[R]/y;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-i;let x=this._sizeLods[s],C=3*x*(s>v-cs?s-v+cs:0),w=4*(this._cubeSize-x);Vr(t,C,w,3*x,2*x),l.setRenderTarget(t),l.render(f,vo)}};function Eg(n){let e=[],t=[],i=[],s=n,r=n-cs+1+rh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-cs?l=rh[a-n+cs-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,_=3,m=2,u=1,y=new Float32Array(_*g*d),v=new Float32Array(m*g*d),x=new Float32Array(u*g*d);for(let w=0;w<d;w++){let R=w%3*2/3-1,I=w>2?0:-1,E=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];y.set(E,_*g*w),v.set(p,m*g*w);let b=[w,w,w,w,w,w];x.set(b,u*g*w)}let C=new pt;C.setAttribute("position",new At(y,_)),C.setAttribute("uv",new At(v,m)),C.setAttribute("faceIndex",new At(x,u)),e.push(C),s>cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function lh(n,e,t){let i=new $n(n,e,t);return i.texture.mapping=Ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function wg(n,e,t){let i=new Float32Array(Ai),s=new A(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ch(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function hh(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Bo||l===ko,h=l===ms||l===gs;if(c||h){let f=e.get(o),p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new fa(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new fa(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Ag(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&qs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Rg(n,e,t,i){let s={},r=new WeakMap;function a(f){let p=f.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);for(let g in p.morphAttributes){let _=p.morphAttributes[g];for(let m=0,u=_.length;m<u;m++)e.remove(_[m])}p.removeEventListener("dispose",a),delete s[p.id];let d=r.get(p);d&&(e.remove(d),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(f){let p=f.attributes;for(let g in p)e.update(p[g],n.ARRAY_BUFFER);let d=f.morphAttributes;for(let g in d){let _=d[g];for(let m=0,u=_.length;m<u;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(f){let p=[],d=f.index,g=f.attributes.position,_=0;if(d!==null){let y=d.array;_=d.version;for(let v=0,x=y.length;v<x;v+=3){let C=y[v+0],w=y[v+1],R=y[v+2];p.push(C,w,w,R,R,C)}}else if(g!==void 0){let y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){let C=v+0,w=v+1,R=v+2;p.push(C,w,w,R,R,C)}}else return;let m=new(iu(p)?ca:la)(p,1);m.version=_;let u=r.get(f);u&&e.remove(u),r.set(f,m)}function h(f){let p=r.get(f);if(p){let d=f.index;d!==null&&p.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Cg(n,e,t){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){n.drawElements(i,d,r,p*a),t.update(d,i,1)}function c(p,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,p*a,g),t.update(d,i,g))}function h(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,p,0,g);let m=0;for(let u=0;u<g;u++)m+=d[u];t.update(m,i,1)}function f(p,d,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)c(p[u]/a,d[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,p,0,_,0,g);let u=0;for(let y=0;y<g;y++)u+=d[y]*_[y];t.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Pg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ig(n,e,t){let i=new WeakMap,s=new tt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,p=i.get(o);if(p===void 0||p.count!==f){let E=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",E)};p!==void 0&&p.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],v=0;d===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=o.attributes.position.count*v,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let w=new Float32Array(x*C*4*f),R=new oa(w,x,C,f);R.type=Gn,R.needsUpdate=!0;let I=v*4;for(let b=0;b<f;b++){let P=m[b],O=u[b],F=y[b],H=x*C*4*b;for(let $=0;$<P.count;$++){let W=$*I;d===!0&&(s.fromBufferAttribute(P,$),w[H+W+0]=s.x,w[H+W+1]=s.y,w[H+W+2]=s.z,w[H+W+3]=0),g===!0&&(s.fromBufferAttribute(O,$),w[H+W+4]=s.x,w[H+W+5]=s.y,w[H+W+6]=s.z,w[H+W+7]=0),_===!0&&(s.fromBufferAttribute(F,$),w[H+W+8]=s.x,w[H+W+9]=s.y,w[H+W+10]=s.z,w[H+W+11]=F.itemSize===4?s.w:1)}}p={count:f,texture:R,size:new pe(x,C)},i.set(o,p),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function Lg(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var pa=class extends Xt{constructor(e,t,i,s,r,a,o,l,c,h=us){if(h!==us&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===us&&(i=Pi),i===void 0&&h===xs&&(i=_s),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ou=new Xt,uh=new pa(1,1),lu=new oa,cu=new xl,hu=new ua,dh=[],fh=[],ph=new Float32Array(16),mh=new Float32Array(9),gh=new Float32Array(4);function Ts(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=dh[s];if(r===void 0&&(r=new Float32Array(s),dh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Da(n,e){let t=fh[e];t===void 0&&(t=new Int32Array(e),fh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Dg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ug(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function Ng(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function Og(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function Fg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,i))return;gh.set(i),n.uniformMatrix2fv(this.addr,!1,gh),Mt(t,i)}}function zg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,i))return;mh.set(i),n.uniformMatrix3fv(this.addr,!1,mh),Mt(t,i)}}function Bg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,i))return;ph.set(i),n.uniformMatrix4fv(this.addr,!1,ph),Mt(t,i)}}function kg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Hg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function Vg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function Gg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function Wg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Xg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function qg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function Yg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function Zg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(uh.compareFunction=tu,r=uh):r=ou,t.setTexture2D(e||r,s)}function $g(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||cu,s)}function Jg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||hu,s)}function Kg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||lu,s)}function jg(n){switch(n){case 5126:return Dg;case 35664:return Ug;case 35665:return Ng;case 35666:return Og;case 35674:return Fg;case 35675:return zg;case 35676:return Bg;case 5124:case 35670:return kg;case 35667:case 35671:return Hg;case 35668:case 35672:return Vg;case 35669:case 35673:return Gg;case 5125:return Wg;case 36294:return Xg;case 36295:return qg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return Kg}}function Qg(n,e){n.uniform1fv(this.addr,e)}function e0(n,e){let t=Ts(e,this.size,2);n.uniform2fv(this.addr,t)}function t0(n,e){let t=Ts(e,this.size,3);n.uniform3fv(this.addr,t)}function n0(n,e){let t=Ts(e,this.size,4);n.uniform4fv(this.addr,t)}function i0(n,e){let t=Ts(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function s0(n,e){let t=Ts(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function r0(n,e){let t=Ts(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function a0(n,e){n.uniform1iv(this.addr,e)}function o0(n,e){n.uniform2iv(this.addr,e)}function l0(n,e){n.uniform3iv(this.addr,e)}function c0(n,e){n.uniform4iv(this.addr,e)}function h0(n,e){n.uniform1uiv(this.addr,e)}function u0(n,e){n.uniform2uiv(this.addr,e)}function d0(n,e){n.uniform3uiv(this.addr,e)}function f0(n,e){n.uniform4uiv(this.addr,e)}function p0(n,e,t){let i=this.cache,s=e.length,r=Da(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||ou,r[a])}function m0(n,e,t){let i=this.cache,s=e.length,r=Da(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||cu,r[a])}function g0(n,e,t){let i=this.cache,s=e.length,r=Da(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||hu,r[a])}function _0(n,e,t){let i=this.cache,s=e.length,r=Da(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||lu,r[a])}function x0(n){switch(n){case 5126:return Qg;case 35664:return e0;case 35665:return t0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return u0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return _0}}var Ml=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=jg(t.type)}},bl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=x0(t.type)}},Sl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Eo=/(\w+)(\])?(\[|\.)?/g;function _h(n,e){n.seq.push(e),n.map[e.id]=e}function v0(n,e,t){let i=n.name,s=i.length;for(Eo.lastIndex=0;;){let r=Eo.exec(i),a=Eo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_h(t,c===void 0?new Ml(o,n,e):new bl(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Sl(o),_h(t,f)),t=f}}}var fs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);v0(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function xh(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var y0=37297,M0=0;function b0(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var vh=new Le;function S0(n){We._getMatrix(vh,We.workingColorSpace,n);let e=`mat3( ${vh.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(n)){case La:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function yh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+b0(n.getShaderSource(e),a)}else return s}function E0(n,e){let t=S0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function w0(n,e){let t;switch(e){case Nd:t="Linear";break;case Od:t="Reinhard";break;case Fd:t="Cineon";break;case Kl:t="ACESFilmic";break;case Bd:t="AgX";break;case kd:t="Neutral";break;case zd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Gr=new A;function T0(){We.getLuminanceCoefficients(Gr);let n=Gr.x.toFixed(4),e=Gr.y.toFixed(4),t=Gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function R0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function C0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ys(n){return n!==""}function Mh(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var P0=/^[ \t]*#include +<([\w\d./]+)>/gm;function El(n){return n.replace(P0,L0)}var I0=new Map;function L0(n,e){let t=Ue[e];if(t===void 0){let i=I0.get(e);if(i!==void 0)t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return El(t)}var D0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sh(n){return n.replace(D0,U0)}function U0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function N0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Jl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function O0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case Ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function F0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function z0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vh:e="ENVMAP_BLENDING_MULTIPLY";break;case Dd:e="ENVMAP_BLENDING_MIX";break;case Ud:e="ENVMAP_BLENDING_ADD";break}return e}function B0(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function k0(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=N0(t),c=O0(t),h=F0(t),f=z0(t),p=B0(t),d=A0(t),g=R0(r),_=s.createProgram(),m,u,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ys).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ys).join(`
`),u.length>0&&(u+=`
`)):(m=[Eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),u=[Eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?Ue.tonemapping_pars_fragment:"",t.toneMapping!==hi?w0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,E0("linearToOutputTexel",t.outputColorSpace),T0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),a=El(a),a=Mh(a,t),a=bh(a,t),o=El(o),o=Mh(o,t),o=bh(o,t),a=Sh(a),o=Sh(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let v=y+m+a,x=y+u+o,C=xh(s,s.VERTEX_SHADER,v),w=xh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,C),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(P){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(C).trim(),H=s.getShaderInfoLog(w).trim(),$=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,w);else{let Q=yh(s,C,"vertex"),G=yh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+Q+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||H==="")&&(W=!1);W&&(P.diagnostics={runnable:$,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:u}})}s.deleteShader(C),s.deleteShader(w),I=new fs(s,_),E=C0(s,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,y0)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}var H0=0,wl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Tl(e),t.set(e,i)),i}},Tl=class{constructor(e){this.id=H0++,this.code=e,this.usedTimes=0}};function V0(n,e,t,i,s,r,a){let o=new er,l=new wl,c=new Set,h=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,P,O,F){let H=O.fog,$=F.geometry,W=E.isMeshStandardMaterial?O.environment:null,Q=(E.isMeshStandardMaterial?t:e).get(E.envMap||W),G=Q&&Q.mapping===Ia?Q.image.height:null,ie=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let he=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Me=he!==void 0?he.length:0,Oe=0;$.morphAttributes.position!==void 0&&(Oe=1),$.morphAttributes.normal!==void 0&&(Oe=2),$.morphAttributes.color!==void 0&&(Oe=3);let st,q,ee,xe;if(ie){let $e=bn[ie];st=$e.vertexShader,q=$e.fragmentShader}else st=E.vertexShader,q=E.fragmentShader,l.update(E),ee=l.getVertexShaderID(E),xe=l.getFragmentShaderID(E);let se=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),Re=F.isInstancedMesh===!0,Fe=F.isBatchedMesh===!0,dt=!!E.map,Ve=!!E.matcap,mt=!!Q,N=!!E.aoMap,Jt=!!E.lightMap,Be=!!E.bumpMap,ke=!!E.normalMap,Se=!!E.displacementMap,ot=!!E.emissiveMap,be=!!E.metalnessMap,T=!!E.roughnessMap,M=E.anisotropy>0,z=E.clearcoat>0,Y=E.dispersion>0,J=E.iridescence>0,X=E.sheen>0,ve=E.transmission>0,re=M&&!!E.anisotropyMap,ue=z&&!!E.clearcoatMap,Ge=z&&!!E.clearcoatNormalMap,K=z&&!!E.clearcoatRoughnessMap,de=J&&!!E.iridescenceMap,Ee=J&&!!E.iridescenceThicknessMap,Te=X&&!!E.sheenColorMap,fe=X&&!!E.sheenRoughnessMap,He=!!E.specularMap,De=!!E.specularColorMap,rt=!!E.specularIntensityMap,L=ve&&!!E.transmissionMap,ne=ve&&!!E.thicknessMap,V=!!E.gradientMap,Z=!!E.alphaMap,le=E.alphaTest>0,ae=!!E.alphaHash,Pe=!!E.extensions,ft=hi;E.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ft=n.toneMapping);let Ct={shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:st,fragmentShader:q,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Fe,batchingColor:Fe&&F._colorsTexture!==null,instancing:Re,instancingColor:Re&&F.instanceColor!==null,instancingMorph:Re&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ws,alphaToCoverage:!!E.alphaToCoverage,map:dt,matcap:Ve,envMap:mt,envMapMode:mt&&Q.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:Jt,bumpMap:Be,normalMap:ke,displacementMap:p&&Se,emissiveMap:ot,normalMapObjectSpace:ke&&E.normalMapType===Wd,normalMapTangentSpace:ke&&E.normalMapType===eu,metalnessMap:be,roughnessMap:T,anisotropy:M,anisotropyMap:re,clearcoat:z,clearcoatMap:ue,clearcoatNormalMap:Ge,clearcoatRoughnessMap:K,dispersion:Y,iridescence:J,iridescenceMap:de,iridescenceThicknessMap:Ee,sheen:X,sheenColorMap:Te,sheenRoughnessMap:fe,specularMap:He,specularColorMap:De,specularIntensityMap:rt,transmission:ve,transmissionMap:L,thicknessMap:ne,gradientMap:V,opaque:E.transparent===!1&&E.blending===hs&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:le,alphaHash:ae,combine:E.combine,mapUv:dt&&_(E.map.channel),aoMapUv:N&&_(E.aoMap.channel),lightMapUv:Jt&&_(E.lightMap.channel),bumpMapUv:Be&&_(E.bumpMap.channel),normalMapUv:ke&&_(E.normalMap.channel),displacementMapUv:Se&&_(E.displacementMap.channel),emissiveMapUv:ot&&_(E.emissiveMap.channel),metalnessMapUv:be&&_(E.metalnessMap.channel),roughnessMapUv:T&&_(E.roughnessMap.channel),anisotropyMapUv:re&&_(E.anisotropyMap.channel),clearcoatMapUv:ue&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(E.sheenRoughnessMap.channel),specularMapUv:He&&_(E.specularMap.channel),specularColorMapUv:De&&_(E.specularColorMap.channel),specularIntensityMapUv:rt&&_(E.specularIntensityMap.channel),transmissionMapUv:L&&_(E.transmissionMap.channel),thicknessMapUv:ne&&_(E.thicknessMap.channel),alphaMapUv:Z&&_(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ke||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!$.attributes.uv&&(dt||Z),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:we,skinning:F.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Oe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ft,decodeVideoTexture:dt&&E.map.isVideoTexture===!0&&We.getTransfer(E.map.colorSpace)===et,decodeVideoTextureEmissive:ot&&E.emissiveMap.isVideoTexture===!0&&We.getTransfer(E.emissiveMap.colorSpace)===et,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===zt,flipSided:E.side===Bt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Pe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&E.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function u(E){let b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(let P in E.defines)b.push(P),b.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(y(b,E),v(b,E),b.push(n.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function y(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function v(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){let b=g[E.type],P;if(b){let O=bn[b];P=Lf.clone(O.uniforms)}else P=E.uniforms;return P}function C(E,b){let P;for(let O=0,F=h.length;O<F;O++){let H=h[O];if(H.cacheKey===b){P=H,++P.usedTimes;break}}return P===void 0&&(P=new k0(n,b,E,r),h.push(P)),P}function w(E){if(--E.usedTimes===0){let b=h.indexOf(E);h[b]=h[h.length-1],h.pop(),E.destroy()}}function R(E){l.remove(E)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:x,acquireProgram:C,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:I}}function G0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function W0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function wh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Th(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f,p,d,g,_,m){let u=n[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=d,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=_,u.group=m),e++,u}function o(f,p,d,g,_,m){let u=a(f,p,d,g,_,m);d.transmission>0?i.push(u):d.transparent===!0?s.push(u):t.push(u)}function l(f,p,d,g,_,m){let u=a(f,p,d,g,_,m);d.transmission>0?i.unshift(u):d.transparent===!0?s.unshift(u):t.unshift(u)}function c(f,p){t.length>1&&t.sort(f||W0),i.length>1&&i.sort(p||wh),s.length>1&&s.sort(p||wh)}function h(){for(let f=e,p=n.length;f<p;f++){let d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function X0(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Th,n.set(i,[a])):s>=r.length?(a=new Th,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function q0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ce};break;case"SpotLight":t={position:new A,direction:new A,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new A,halfWidth:new A,halfHeight:new A};break}return n[e.id]=t,t}}}function Y0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Z0=0;function $0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function J0(n){let e=new q0,t=Y0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new A);let s=new A,r=new Ze,a=new Ze;function o(c){let h=0,f=0,p=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,g=0,_=0,m=0,u=0,y=0,v=0,x=0,C=0,w=0,R=0;c.sort($0);for(let E=0,b=c.length;E<b;E++){let P=c[E],O=P.color,F=P.intensity,H=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*F,f+=O.g*F,p+=O.b*F;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],F);R++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,G=t.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=$,i.directionalShadowMatrix[d]=P.shadow.matrix,y++}i.directional[d]=W,d++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(O).multiplyScalar(F),W.distance=H,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[_]=W;let Q=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,Q.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[_]=Q.matrix,P.castShadow){let G=t.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=$,x++}_++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(O).multiplyScalar(F),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=W,m++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let Q=P.shadow,G=t.get(P);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=P.shadow.matrix,v++}i.point[g]=W,g++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(F),W.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[u]=W,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=p;let I=i.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==u||I.numDirectionalShadows!==y||I.numPointShadows!==v||I.numSpotShadows!==x||I.numSpotMaps!==C||I.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=u,I.numDirectionalShadows=y,I.numPointShadows=v,I.numSpotShadows=x,I.numSpotMaps=C,I.numLightProbes=R,i.version=Z0++)}function l(c,h){let f=0,p=0,d=0,g=0,_=0,m=h.matrixWorldInverse;for(let u=0,y=c.length;u<y;u++){let v=c[u];if(v.isDirectionalLight){let x=i.directional[f];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(v.isSpotLight){let x=i.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(v.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let x=i.point[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),p++}else if(v.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Ah(n){let e=new J0(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function K0(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Ah(n),e.set(s,[o])):r>=a.length?(o=new Ah(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Al=class extends Tn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Rl=class extends Tn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},j0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function e_(n,e,t){let i=new tr,s=new pe,r=new pe,a=new tt,o=new Al({depthPacking:Gd}),l=new Rl,c={},h=t.maxTextureSize,f={[ui]:Bt,[Bt]:ui,[zt]:zt},p=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:j0,fragmentShader:Q0}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let g=new pt;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ze(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh;let u=this.type;this.render=function(w,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let E=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),O=n.state;O.setBlending(ci),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let F=u!==Vn&&this.type===Vn,H=u===Vn&&this.type!==Vn;for(let $=0,W=w.length;$<W;$++){let Q=w[$],G=Q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ie=G.getFrameExtents();if(s.multiply(ie),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,G.mapSize.y=r.y)),G.map===null||F===!0||H===!0){let Me=this.type!==Vn?{minFilter:dn,magFilter:dn}:{};G.map!==null&&G.map.dispose(),G.map=new $n(s.x,s.y,Me),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();let he=G.getViewportCount();for(let Me=0;Me<he;Me++){let Oe=G.getViewport(Me);a.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),O.viewport(a),G.updateMatrices(Q,Me),i=G.getFrustum(),x(R,I,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===Vn&&y(G,I),G.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(E,b,P)};function y(w,R){let I=e.update(_);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new $n(s.x,s.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,I,p,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,I,d,_,null)}function v(w,R,I,E){let b=null,P=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)b=P;else if(b=I.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let O=b.uuid,F=R.uuid,H=c[O];H===void 0&&(H={},c[O]=H);let $=H[F];$===void 0&&($=b.clone(),H[F]=$,R.addEventListener("dispose",C)),b=$}if(b.visible=R.visible,b.wireframe=R.wireframe,E===Vn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:f[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let O=n.properties.get(b);O.light=I}return b}function x(w,R,I,E,b){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Vn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);let F=e.update(w),H=w.material;if(Array.isArray(H)){let $=F.groups;for(let W=0,Q=$.length;W<Q;W++){let G=$[W],ie=H[G.materialIndex];if(ie&&ie.visible){let he=v(w,ie,E,b);w.onBeforeShadow(n,w,R,I,F,he,G),n.renderBufferDirect(I,null,F,he,w,G),w.onAfterShadow(n,w,R,I,F,he,G)}}}else if(H.visible){let $=v(w,H,E,b);w.onBeforeShadow(n,w,R,I,F,$,null),n.renderBufferDirect(I,null,F,$,w,null),w.onAfterShadow(n,w,R,I,F,$,null)}}let O=w.children;for(let F=0,H=O.length;F<H;F++)x(O[F],R,I,E,b)}function C(w){w.target.removeEventListener("dispose",C);for(let I in c){let E=c[I],b=w.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}var t_={[Lo]:Do,[Uo]:Fo,[No]:zo,[ps]:Oo,[Do]:Lo,[Fo]:Uo,[zo]:No,[Oo]:ps};function n_(n,e){function t(){let L=!1,ne=new tt,V=null,Z=new tt(0,0,0,0);return{setMask:function(le){V!==le&&!L&&(n.colorMask(le,le,le,le),V=le)},setLocked:function(le){L=le},setClear:function(le,ae,Pe,ft,Ct){Ct===!0&&(le*=ft,ae*=ft,Pe*=ft),ne.set(le,ae,Pe,ft),Z.equals(ne)===!1&&(n.clearColor(le,ae,Pe,ft),Z.copy(ne))},reset:function(){L=!1,V=null,Z.set(-1,0,0,0)}}}function i(){let L=!1,ne=!1,V=null,Z=null,le=null;return{setReversed:function(ae){if(ne!==ae){let Pe=e.get("EXT_clip_control");ne?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT);let ft=le;le=null,this.setClear(ft)}ne=ae},getReversed:function(){return ne},setTest:function(ae){ae?se(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(ae){V!==ae&&!L&&(n.depthMask(ae),V=ae)},setFunc:function(ae){if(ne&&(ae=t_[ae]),Z!==ae){switch(ae){case Lo:n.depthFunc(n.NEVER);break;case Do:n.depthFunc(n.ALWAYS);break;case Uo:n.depthFunc(n.LESS);break;case ps:n.depthFunc(n.LEQUAL);break;case No:n.depthFunc(n.EQUAL);break;case Oo:n.depthFunc(n.GEQUAL);break;case Fo:n.depthFunc(n.GREATER);break;case zo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=ae}},setLocked:function(ae){L=ae},setClear:function(ae){le!==ae&&(ne&&(ae=1-ae),n.clearDepth(ae),le=ae)},reset:function(){L=!1,V=null,Z=null,le=null,ne=!1}}}function s(){let L=!1,ne=null,V=null,Z=null,le=null,ae=null,Pe=null,ft=null,Ct=null;return{setTest:function($e){L||($e?se(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function($e){ne!==$e&&!L&&(n.stencilMask($e),ne=$e)},setFunc:function($e,sn,Nn){(V!==$e||Z!==sn||le!==Nn)&&(n.stencilFunc($e,sn,Nn),V=$e,Z=sn,le=Nn)},setOp:function($e,sn,Nn){(ae!==$e||Pe!==sn||ft!==Nn)&&(n.stencilOp($e,sn,Nn),ae=$e,Pe=sn,ft=Nn)},setLocked:function($e){L=$e},setClear:function($e){Ct!==$e&&(n.clearStencil($e),Ct=$e)},reset:function(){L=!1,ne=null,V=null,Z=null,le=null,ae=null,Pe=null,ft=null,Ct=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},p=new WeakMap,d=[],g=null,_=!1,m=null,u=null,y=null,v=null,x=null,C=null,w=null,R=new Ce(0,0,0),I=0,E=!1,b=null,P=null,O=null,F=null,H=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,Q=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=Q>=2);let ie=null,he={},Me=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),st=new tt().fromArray(Me),q=new tt().fromArray(Oe);function ee(L,ne,V,Z){let le=new Uint8Array(4),ae=n.createTexture();n.bindTexture(L,ae),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<V;Pe++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(ne+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return ae}let xe={};xe[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(n.DEPTH_TEST),a.setFunc(ps),Be(!1),ke(Pc),se(n.CULL_FACE),N(ci);function se(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function we(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Re(L,ne){return f[L]!==ne?(n.bindFramebuffer(L,ne),f[L]=ne,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ne),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function Fe(L,ne){let V=d,Z=!1;if(L){V=p.get(ne),V===void 0&&(V=[],p.set(ne,V));let le=L.textures;if(V.length!==le.length||V[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Pe=le.length;ae<Pe;ae++)V[ae]=n.COLOR_ATTACHMENT0+ae;V.length=le.length,Z=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,Z=!0);Z&&n.drawBuffers(V)}function dt(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let Ve={[Ti]:n.FUNC_ADD,[gd]:n.FUNC_SUBTRACT,[_d]:n.FUNC_REVERSE_SUBTRACT};Ve[xd]=n.MIN,Ve[vd]=n.MAX;let mt={[yd]:n.ZERO,[Md]:n.ONE,[bd]:n.SRC_COLOR,[Po]:n.SRC_ALPHA,[Rd]:n.SRC_ALPHA_SATURATE,[Td]:n.DST_COLOR,[Ed]:n.DST_ALPHA,[Sd]:n.ONE_MINUS_SRC_COLOR,[Io]:n.ONE_MINUS_SRC_ALPHA,[Ad]:n.ONE_MINUS_DST_COLOR,[wd]:n.ONE_MINUS_DST_ALPHA,[Cd]:n.CONSTANT_COLOR,[Pd]:n.ONE_MINUS_CONSTANT_COLOR,[Id]:n.CONSTANT_ALPHA,[Ld]:n.ONE_MINUS_CONSTANT_ALPHA};function N(L,ne,V,Z,le,ae,Pe,ft,Ct,$e){if(L===ci){_===!0&&(we(n.BLEND),_=!1);return}if(_===!1&&(se(n.BLEND),_=!0),L!==md){if(L!==m||$e!==E){if((u!==Ti||x!==Ti)&&(n.blendEquation(n.FUNC_ADD),u=Ti,x=Ti),$e)switch(L){case hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case En:n.blendFunc(n.ONE,n.ONE);break;case Ic:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case En:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ic:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,v=null,C=null,w=null,R.set(0,0,0),I=0,m=L,E=$e}return}le=le||ne,ae=ae||V,Pe=Pe||Z,(ne!==u||le!==x)&&(n.blendEquationSeparate(Ve[ne],Ve[le]),u=ne,x=le),(V!==y||Z!==v||ae!==C||Pe!==w)&&(n.blendFuncSeparate(mt[V],mt[Z],mt[ae],mt[Pe]),y=V,v=Z,C=ae,w=Pe),(ft.equals(R)===!1||Ct!==I)&&(n.blendColor(ft.r,ft.g,ft.b,Ct),R.copy(ft),I=Ct),m=L,E=!1}function Jt(L,ne){L.side===zt?we(n.CULL_FACE):se(n.CULL_FACE);let V=L.side===Bt;ne&&(V=!V),Be(V),L.blending===hs&&L.transparent===!1?N(ci):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let Z=L.stencilWrite;o.setTest(Z),Z&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ot(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(L){b!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),b=L)}function ke(L){L!==fd?(se(n.CULL_FACE),L!==P&&(L===Pc?n.cullFace(n.BACK):L===pd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),P=L}function Se(L){L!==O&&(W&&n.lineWidth(L),O=L)}function ot(L,ne,V){L?(se(n.POLYGON_OFFSET_FILL),(F!==ne||H!==V)&&(n.polygonOffset(ne,V),F=ne,H=V)):we(n.POLYGON_OFFSET_FILL)}function be(L){L?se(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function T(L){L===void 0&&(L=n.TEXTURE0+$-1),ie!==L&&(n.activeTexture(L),ie=L)}function M(L,ne,V){V===void 0&&(ie===null?V=n.TEXTURE0+$-1:V=ie);let Z=he[V];Z===void 0&&(Z={type:void 0,texture:void 0},he[V]=Z),(Z.type!==L||Z.texture!==ne)&&(ie!==V&&(n.activeTexture(V),ie=V),n.bindTexture(L,ne||xe[L]),Z.type=L,Z.texture=ne)}function z(){let L=he[ie];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(L){st.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),st.copy(L))}function fe(L){q.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function He(L,ne){let V=c.get(ne);V===void 0&&(V=new WeakMap,c.set(ne,V));let Z=V.get(L);Z===void 0&&(Z=n.getUniformBlockIndex(ne,L.name),V.set(L,Z))}function De(L,ne){let Z=c.get(ne).get(L);l.get(ne)!==Z&&(n.uniformBlockBinding(ne,Z,L.__bindingPointIndex),l.set(ne,Z))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ie=null,he={},f={},p=new WeakMap,d=[],g=null,_=!1,m=null,u=null,y=null,v=null,x=null,C=null,w=null,R=new Ce(0,0,0),I=0,E=!1,b=null,P=null,O=null,F=null,H=null,st.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:we,bindFramebuffer:Re,drawBuffers:Fe,useProgram:dt,setBlending:N,setMaterial:Jt,setFlipSided:Be,setCullFace:ke,setLineWidth:Se,setPolygonOffset:ot,setScissorTest:be,activeTexture:T,bindTexture:M,unbindTexture:z,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:de,texImage3D:Ee,updateUBOMapping:He,uniformBlockBinding:De,texStorage2D:Ge,texStorage3D:K,texSubImage2D:X,texSubImage3D:ve,compressedTexSubImage2D:re,compressedTexSubImage3D:ue,scissor:Te,viewport:fe,reset:rt}}function Rh(n,e,t,i){let s=i_(i);switch(t){case Yh:return n*e;case $h:return n*e;case Jh:return n*e*2;case Kh:return n*e/s.components*s.byteLength;case tc:return n*e/s.components*s.byteLength;case jh:return n*e*2/s.components*s.byteLength;case nc:return n*e*2/s.components*s.byteLength;case Zh:return n*e*3/s.components*s.byteLength;case un:return n*e*4/s.components*s.byteLength;case ic:return n*e*4/s.components*s.byteLength;case jr:case Qr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ea:case ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Go:case Xo:return Math.max(n,16)*Math.max(e,8)/4;case Vo:case Wo:return Math.max(n,8)*Math.max(e,8)/2;case qo:case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case jo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ol:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ll:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case na:case cl:case hl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Qh:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*8;case dl:case fl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function i_(n){switch(n){case Yn:case Wh:return{byteLength:1,components:1};case js:case Xh:case lr:return{byteLength:2,components:1};case Ql:case ec:return{byteLength:2,components:4};case Pi:case jl:case Gn:return{byteLength:4,components:1};case qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function s_(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,h=new WeakMap,f,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return d?new OffscreenCanvas(T,M):ra("canvas")}function _(T,M,z){let Y=1,J=be(T);if((J.width>z||J.height>z)&&(Y=z/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let X=Math.floor(Y*J.width),ve=Math.floor(Y*J.height);f===void 0&&(f=g(X,ve));let re=M?g(X,ve):f;return re.width=X,re.height=ve,re.getContext("2d").drawImage(T,0,0,X,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+ve+")."),re}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){n.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(T,M,z,Y,J=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=M;if(M===n.RED&&(z===n.FLOAT&&(X=n.R32F),z===n.HALF_FLOAT&&(X=n.R16F),z===n.UNSIGNED_BYTE&&(X=n.R8)),M===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.R8UI),z===n.UNSIGNED_SHORT&&(X=n.R16UI),z===n.UNSIGNED_INT&&(X=n.R32UI),z===n.BYTE&&(X=n.R8I),z===n.SHORT&&(X=n.R16I),z===n.INT&&(X=n.R32I)),M===n.RG&&(z===n.FLOAT&&(X=n.RG32F),z===n.HALF_FLOAT&&(X=n.RG16F),z===n.UNSIGNED_BYTE&&(X=n.RG8)),M===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.RG8UI),z===n.UNSIGNED_SHORT&&(X=n.RG16UI),z===n.UNSIGNED_INT&&(X=n.RG32UI),z===n.BYTE&&(X=n.RG8I),z===n.SHORT&&(X=n.RG16I),z===n.INT&&(X=n.RG32I)),M===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.RGB8UI),z===n.UNSIGNED_SHORT&&(X=n.RGB16UI),z===n.UNSIGNED_INT&&(X=n.RGB32UI),z===n.BYTE&&(X=n.RGB8I),z===n.SHORT&&(X=n.RGB16I),z===n.INT&&(X=n.RGB32I)),M===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),z===n.UNSIGNED_INT&&(X=n.RGBA32UI),z===n.BYTE&&(X=n.RGBA8I),z===n.SHORT&&(X=n.RGBA16I),z===n.INT&&(X=n.RGBA32I)),M===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),M===n.RGBA){let ve=J?La:We.getTransfer(Y);z===n.FLOAT&&(X=n.RGBA32F),z===n.HALF_FLOAT&&(X=n.RGBA16F),z===n.UNSIGNED_BYTE&&(X=ve===et?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(T,M){let z;return T?M===null||M===Pi||M===_s?z=n.DEPTH24_STENCIL8:M===Gn?z=n.DEPTH32F_STENCIL8:M===js&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Pi||M===_s?z=n.DEPTH_COMPONENT24:M===Gn?z=n.DEPTH_COMPONENT32F:M===js&&(z=n.DEPTH_COMPONENT16),z}function C(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==dn&&T.minFilter!==Sn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function w(T){let M=T.target;M.removeEventListener("dispose",w),I(M),M.isVideoTexture&&h.delete(M)}function R(T){let M=T.target;M.removeEventListener("dispose",R),b(M)}function I(T){let M=i.get(T);if(M.__webglInit===void 0)return;let z=T.source,Y=p.get(z);if(Y){let J=Y[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(T),Object.keys(Y).length===0&&p.delete(z)}i.remove(T)}function E(T){let M=i.get(T);n.deleteTexture(M.__webglTexture);let z=T.source,Y=p.get(z);delete Y[M.__cacheKey],a.memory.textures--}function b(T){let M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let J=0;J<M.__webglFramebuffer[Y].length;J++)n.deleteFramebuffer(M.__webglFramebuffer[Y][J]);else n.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)n.deleteFramebuffer(M.__webglFramebuffer[Y]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=T.textures;for(let Y=0,J=z.length;Y<J;Y++){let X=i.get(z[Y]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(z[Y])}i.remove(T)}let P=0;function O(){P=0}function F(){let T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function H(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function $(T,M){let z=i.get(T);if(T.isVideoTexture&&Se(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){let Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,T,M);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+M)}function W(T,M){let z=i.get(T);if(T.version>0&&z.__version!==T.version){q(z,T,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+M)}function Q(T,M){let z=i.get(T);if(T.version>0&&z.__version!==T.version){q(z,T,M);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+M)}function G(T,M){let z=i.get(T);if(T.version>0&&z.__version!==T.version){ee(z,T,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+M)}let ie={[Ks]:n.REPEAT,[Ri]:n.CLAMP_TO_EDGE,[Ho]:n.MIRRORED_REPEAT},he={[dn]:n.NEAREST,[Hd]:n.NEAREST_MIPMAP_NEAREST,[Sr]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Ja]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},Me={[Xd]:n.NEVER,[Kd]:n.ALWAYS,[qd]:n.LESS,[tu]:n.LEQUAL,[Yd]:n.EQUAL,[Jd]:n.GEQUAL,[Zd]:n.GREATER,[$d]:n.NOTEQUAL};function Oe(T,M){if(M.type===Gn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Sn||M.magFilter===Ja||M.magFilter===Sr||M.magFilter===Ci||M.minFilter===Sn||M.minFilter===Ja||M.minFilter===Sr||M.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ie[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ie[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ie[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,he[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,he[M.minFilter]),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===dn||M.minFilter!==Sr&&M.minFilter!==Ci||M.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function st(T,M){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",w));let Y=M.source,J=p.get(Y);J===void 0&&(J={},p.set(Y,J));let X=H(M);if(X!==T.__cacheKey){J[X]===void 0&&(J[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[X].usedTimes++;let ve=J[T.__cacheKey];ve!==void 0&&(J[T.__cacheKey].usedTimes--,ve.usedTimes===0&&E(M)),T.__cacheKey=X,T.__webglTexture=J[X].texture}return z}function q(T,M,z){let Y=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=n.TEXTURE_3D);let J=st(T,M),X=M.source;t.bindTexture(Y,T.__webglTexture,n.TEXTURE0+z);let ve=i.get(X);if(X.version!==ve.__version||J===!0){t.activeTexture(n.TEXTURE0+z);let re=We.getPrimaries(We.workingColorSpace),ue=M.colorSpace===oi?null:We.getPrimaries(M.colorSpace),Ge=M.colorSpace===oi||re===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let K=_(M.image,!1,s.maxTextureSize);K=ot(M,K);let de=r.convert(M.format,M.colorSpace),Ee=r.convert(M.type),Te=v(M.internalFormat,de,Ee,M.colorSpace,M.isVideoTexture);Oe(Y,M);let fe,He=M.mipmaps,De=M.isVideoTexture!==!0,rt=ve.__version===void 0||J===!0,L=X.dataReady,ne=C(M,K);if(M.isDepthTexture)Te=x(M.format===xs,M.type),rt&&(De?t.texStorage2D(n.TEXTURE_2D,1,Te,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,Te,K.width,K.height,0,de,Ee,null));else if(M.isDataTexture)if(He.length>0){De&&rt&&t.texStorage2D(n.TEXTURE_2D,ne,Te,He[0].width,He[0].height);for(let V=0,Z=He.length;V<Z;V++)fe=He[V],De?L&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,fe.width,fe.height,de,Ee,fe.data):t.texImage2D(n.TEXTURE_2D,V,Te,fe.width,fe.height,0,de,Ee,fe.data);M.generateMipmaps=!1}else De?(rt&&t.texStorage2D(n.TEXTURE_2D,ne,Te,K.width,K.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,K.width,K.height,de,Ee,K.data)):t.texImage2D(n.TEXTURE_2D,0,Te,K.width,K.height,0,de,Ee,K.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){De&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,Te,He[0].width,He[0].height,K.depth);for(let V=0,Z=He.length;V<Z;V++)if(fe=He[V],M.format!==un)if(de!==null)if(De){if(L)if(M.layerUpdates.size>0){let le=Rh(fe.width,fe.height,M.format,M.type);for(let ae of M.layerUpdates){let Pe=fe.data.subarray(ae*le/fe.data.BYTES_PER_ELEMENT,(ae+1)*le/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,ae,fe.width,fe.height,1,de,Pe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,fe.width,fe.height,K.depth,de,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Te,fe.width,fe.height,K.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,fe.width,fe.height,K.depth,de,Ee,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,Te,fe.width,fe.height,K.depth,0,de,Ee,fe.data)}else{De&&rt&&t.texStorage2D(n.TEXTURE_2D,ne,Te,He[0].width,He[0].height);for(let V=0,Z=He.length;V<Z;V++)fe=He[V],M.format!==un?de!==null?De?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,V,Te,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?L&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,fe.width,fe.height,de,Ee,fe.data):t.texImage2D(n.TEXTURE_2D,V,Te,fe.width,fe.height,0,de,Ee,fe.data)}else if(M.isDataArrayTexture)if(De){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,Te,K.width,K.height,K.depth),L)if(M.layerUpdates.size>0){let V=Rh(K.width,K.height,M.format,M.type);for(let Z of M.layerUpdates){let le=K.data.subarray(Z*V/K.data.BYTES_PER_ELEMENT,(Z+1)*V/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,K.width,K.height,1,de,Ee,le)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,de,Ee,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,K.width,K.height,K.depth,0,de,Ee,K.data);else if(M.isData3DTexture)De?(rt&&t.texStorage3D(n.TEXTURE_3D,ne,Te,K.width,K.height,K.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,de,Ee,K.data)):t.texImage3D(n.TEXTURE_3D,0,Te,K.width,K.height,K.depth,0,de,Ee,K.data);else if(M.isFramebufferTexture){if(rt)if(De)t.texStorage2D(n.TEXTURE_2D,ne,Te,K.width,K.height);else{let V=K.width,Z=K.height;for(let le=0;le<ne;le++)t.texImage2D(n.TEXTURE_2D,le,Te,V,Z,0,de,Ee,null),V>>=1,Z>>=1}}else if(He.length>0){if(De&&rt){let V=be(He[0]);t.texStorage2D(n.TEXTURE_2D,ne,Te,V.width,V.height)}for(let V=0,Z=He.length;V<Z;V++)fe=He[V],De?L&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,de,Ee,fe):t.texImage2D(n.TEXTURE_2D,V,Te,de,Ee,fe);M.generateMipmaps=!1}else if(De){if(rt){let V=be(K);t.texStorage2D(n.TEXTURE_2D,ne,Te,V.width,V.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Ee,K)}else t.texImage2D(n.TEXTURE_2D,0,Te,de,Ee,K);m(M)&&u(Y),ve.__version=X.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ee(T,M,z){if(M.image.length!==6)return;let Y=st(T,M),J=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+z);let X=i.get(J);if(J.version!==X.__version||Y===!0){t.activeTexture(n.TEXTURE0+z);let ve=We.getPrimaries(We.workingColorSpace),re=M.colorSpace===oi?null:We.getPrimaries(M.colorSpace),ue=M.colorSpace===oi||ve===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Ge=M.isCompressedTexture||M.image[0].isCompressedTexture,K=M.image[0]&&M.image[0].isDataTexture,de=[];for(let Z=0;Z<6;Z++)!Ge&&!K?de[Z]=_(M.image[Z],!0,s.maxCubemapSize):de[Z]=K?M.image[Z].image:M.image[Z],de[Z]=ot(M,de[Z]);let Ee=de[0],Te=r.convert(M.format,M.colorSpace),fe=r.convert(M.type),He=v(M.internalFormat,Te,fe,M.colorSpace),De=M.isVideoTexture!==!0,rt=X.__version===void 0||Y===!0,L=J.dataReady,ne=C(M,Ee);Oe(n.TEXTURE_CUBE_MAP,M);let V;if(Ge){De&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,He,Ee.width,Ee.height);for(let Z=0;Z<6;Z++){V=de[Z].mipmaps;for(let le=0;le<V.length;le++){let ae=V[le];M.format!==un?Te!==null?De?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,ae.width,ae.height,Te,ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,He,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,ae.width,ae.height,Te,fe,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,He,ae.width,ae.height,0,Te,fe,ae.data)}}}else{if(V=M.mipmaps,De&&rt){V.length>0&&ne++;let Z=be(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,He,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(K){De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,de[Z].width,de[Z].height,Te,fe,de[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,de[Z].width,de[Z].height,0,Te,fe,de[Z].data);for(let le=0;le<V.length;le++){let Pe=V[le].image[Z].image;De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Pe.width,Pe.height,Te,fe,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,He,Pe.width,Pe.height,0,Te,fe,Pe.data)}}else{De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Te,fe,de[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,Te,fe,de[Z]);for(let le=0;le<V.length;le++){let ae=V[le];De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Te,fe,ae.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,He,Te,fe,ae.image[Z])}}}m(M)&&u(n.TEXTURE_CUBE_MAP),X.__version=J.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function xe(T,M,z,Y,J,X){let ve=r.convert(z.format,z.colorSpace),re=r.convert(z.type),ue=v(z.internalFormat,ve,re,z.colorSpace),Ge=i.get(M),K=i.get(z);if(K.__renderTarget=M,!Ge.__hasExternalTextures){let de=Math.max(1,M.width>>X),Ee=Math.max(1,M.height>>X);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,X,ue,de,Ee,M.depth,0,ve,re,null):t.texImage2D(J,X,ue,de,Ee,0,ve,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ke(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,J,K.__webglTexture,0,Be(M)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,J,K.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(T,M,z){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer){let Y=M.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,X=x(M.stencilBuffer,J),ve=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=Be(M);ke(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,X,M.width,M.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,X,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,X,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,T)}else{let Y=M.textures;for(let J=0;J<Y.length;J++){let X=Y[J],ve=r.convert(X.format,X.colorSpace),re=r.convert(X.type),ue=v(X.internalFormat,ve,re,X.colorSpace),Ge=Be(M);z&&ke(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,ue,M.width,M.height):ke(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge,ue,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ue,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=i.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);let J=Y.__webglTexture,X=Be(M);if(M.depthTexture.format===us)ke(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(M.depthTexture.format===xs)ke(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Re(T){let M=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let Y=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){let J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=Y}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");we(M.__webglFramebuffer,T)}else if(z){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=n.createRenderbuffer(),se(M.__webglDepthbuffer[Y],T,!1);else{let J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,X)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),se(M.__webglDepthbuffer,T,!1);else{let Y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(T,M,z){let Y=i.get(T);M!==void 0&&xe(Y.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Re(T)}function dt(T){let M=T.texture,z=i.get(T),Y=i.get(M);T.addEventListener("dispose",R);let J=T.textures,X=T.isWebGLCubeRenderTarget===!0,ve=J.length>1;if(ve||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=M.version,a.memory.textures++),X){z.__webglFramebuffer=[];for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[re]=[];for(let ue=0;ue<M.mipmaps.length;ue++)z.__webglFramebuffer[re][ue]=n.createFramebuffer()}else z.__webglFramebuffer[re]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let re=0;re<M.mipmaps.length;re++)z.__webglFramebuffer[re]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ve)for(let re=0,ue=J.length;re<ue;re++){let Ge=i.get(J[re]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&ke(T)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let re=0;re<J.length;re++){let ue=J[re];z.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[re]);let Ge=r.convert(ue.format,ue.colorSpace),K=r.convert(ue.type),de=v(ue.internalFormat,Ge,K,ue.colorSpace,T.isXRRenderTarget===!0),Ee=Be(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,de,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,z.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),se(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,M);for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)xe(z.__webglFramebuffer[re][ue],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ue);else xe(z.__webglFramebuffer[re],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(M)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let re=0,ue=J.length;re<ue;re++){let Ge=J[re],K=i.get(Ge);t.bindTexture(n.TEXTURE_2D,K.__webglTexture),Oe(n.TEXTURE_2D,Ge),xe(z.__webglFramebuffer,T,Ge,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),m(Ge)&&u(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(re=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),Oe(re,M),M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)xe(z.__webglFramebuffer[ue],T,M,n.COLOR_ATTACHMENT0,re,ue);else xe(z.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,re,0);m(M)&&u(re),t.unbindTexture()}T.depthBuffer&&Re(T)}function Ve(T){let M=T.textures;for(let z=0,Y=M.length;z<Y;z++){let J=M[z];if(m(J)){let X=y(T),ve=i.get(J).__webglTexture;t.bindTexture(X,ve),u(X),t.unbindTexture()}}}let mt=[],N=[];function Jt(T){if(T.samples>0){if(ke(T)===!1){let M=T.textures,z=T.width,Y=T.height,J=n.COLOR_BUFFER_BIT,X=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(T),re=M.length>1;if(re)for(let ue=0;ue<M.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ue=0;ue<M.length;ue++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);let Ge=i.get(M[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ge,0)}n.blitFramebuffer(0,0,z,Y,0,0,z,Y,J,n.NEAREST),l===!0&&(mt.length=0,N.length=0,mt.push(n.COLOR_ATTACHMENT0+ue),T.depthBuffer&&T.resolveDepthBuffer===!1&&(mt.push(X),N.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let ue=0;ue<M.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);let Ge=i.get(M[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let M=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Be(T){return Math.min(s.maxSamples,T.samples)}function ke(T){let M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Se(T){let M=a.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function ot(T,M){let z=T.colorSpace,Y=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==ws&&z!==oi&&(We.getTransfer(z)===et?(Y!==un||J!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function be(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=G,this.rebindTextures=Fe,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ke}function r_(n,e){function t(i,s=oi){let r,a=We.getTransfer(s);if(i===Yn)return n.UNSIGNED_BYTE;if(i===Ql)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ec)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wh)return n.BYTE;if(i===Xh)return n.SHORT;if(i===js)return n.UNSIGNED_SHORT;if(i===jl)return n.INT;if(i===Pi)return n.UNSIGNED_INT;if(i===Gn)return n.FLOAT;if(i===lr)return n.HALF_FLOAT;if(i===Yh)return n.ALPHA;if(i===Zh)return n.RGB;if(i===un)return n.RGBA;if(i===$h)return n.LUMINANCE;if(i===Jh)return n.LUMINANCE_ALPHA;if(i===us)return n.DEPTH_COMPONENT;if(i===xs)return n.DEPTH_STENCIL;if(i===Kh)return n.RED;if(i===tc)return n.RED_INTEGER;if(i===jh)return n.RG;if(i===nc)return n.RG_INTEGER;if(i===ic)return n.RGBA_INTEGER;if(i===jr||i===Qr||i===ea||i===ta)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vo||i===Go||i===Wo||i===Xo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qo||i===Yo||i===Zo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===qo||i===Yo)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Zo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$o||i===Jo||i===Ko||i===jo||i===Qo||i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===al||i===ol||i===ll)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$o)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ko)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===el)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===il)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===al)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ol)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ll)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===na||i===cl||i===hl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===na)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qh||i===ul||i===dl||i===fl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===na)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Cl=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ke=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},a_={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(a_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ke;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},o_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new Xt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Rn({vertexShader:o_,fragmentShader:l_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new ys(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Il=class extends Zn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,p=null,d=null,g=null,_=new Pl,m=t.getContextAttributes(),u=null,y=null,v=[],x=[],C=new pe,w=null,R=new Lt;R.viewport=new tt;let I=new Lt;I.viewport=new tt;let E=[R,I],b=new Cl,P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=v[q];return ee===void 0&&(ee=new Js,v[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=v[q];return ee===void 0&&(ee=new Js,v[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=v[q];return ee===void 0&&(ee=new Js,v[q]=ee),ee.getHandSpace()};function F(q){let ee=x.indexOf(q.inputSource);if(ee===-1)return;let xe=v[ee];xe!==void 0&&(xe.update(q.inputSource,q.frame,c||a),xe.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",$);for(let q=0;q<v.length;q++){let ee=x[q];ee!==null&&(x[q]=null,v[q].disconnect(ee))}P=null,O=null,_.reset(),e.setRenderTarget(u),d=null,p=null,f=null,s=null,y=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(u=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){let ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new $n(d.framebufferWidth,d.framebufferHeight,{format:un,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,xe=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?xs:us,xe=m.stencil?_s:Pi);let we={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(we),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new $n(p.textureWidth,p.textureHeight,{format:un,type:Yn,depthTexture:new pa(p.textureWidth,p.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),st.setContext(s),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(q){for(let ee=0;ee<q.removed.length;ee++){let xe=q.removed[ee],se=x.indexOf(xe);se>=0&&(x[se]=null,v[se].disconnect(xe))}for(let ee=0;ee<q.added.length;ee++){let xe=q.added[ee],se=x.indexOf(xe);if(se===-1){for(let Re=0;Re<v.length;Re++)if(Re>=x.length){x.push(xe),se=Re;break}else if(x[Re]===null){x[Re]=xe,se=Re;break}if(se===-1)break}let we=v[se];we&&we.connect(xe)}}let W=new A,Q=new A;function G(q,ee,xe){W.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(xe.matrixWorld);let se=W.distanceTo(Q),we=ee.projectionMatrix.elements,Re=xe.projectionMatrix.elements,Fe=we[14]/(we[10]-1),dt=we[14]/(we[10]+1),Ve=(we[9]+1)/we[5],mt=(we[9]-1)/we[5],N=(we[8]-1)/we[0],Jt=(Re[8]+1)/Re[0],Be=Fe*N,ke=Fe*Jt,Se=se/(-N+Jt),ot=Se*-N;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ot),q.translateZ(Se),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),we[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let be=Fe+Se,T=dt+Se,M=Be-ot,z=ke+(se-ot),Y=Ve*dt/T*be,J=mt*dt/T*be;q.projectionMatrix.makePerspective(M,z,Y,J,be,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ee=q.near,xe=q.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),b.near=I.near=R.near=ee,b.far=I.far=R.far=xe,(P!==b.near||O!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,O=b.far),R.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,b.layers.mask=R.layers.mask|I.layers.mask;let se=q.parent,we=b.cameras;ie(b,se);for(let Re=0;Re<we.length;Re++)ie(we[Re],se);we.length===2?G(b,R,I):b.projectionMatrix.copy(R.projectionMatrix),he(q,b,se)};function he(q,ee,xe){xe===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(xe.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Qs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let Me=null;function Oe(q,ee){if(h=ee.getViewerPose(c||a),g=ee,h!==null){let xe=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let se=!1;xe.length!==b.cameras.length&&(b.cameras.length=0,se=!0);for(let Re=0;Re<xe.length;Re++){let Fe=xe[Re],dt=null;if(d!==null)dt=d.getViewport(Fe);else{let mt=f.getViewSubImage(p,Fe);dt=mt.viewport,Re===0&&(e.setRenderTargetTextures(y,mt.colorTexture,p.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(y))}let Ve=E[Re];Ve===void 0&&(Ve=new Lt,Ve.layers.enable(Re),Ve.viewport=new tt,E[Re]=Ve),Ve.matrix.fromArray(Fe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Fe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(dt.x,dt.y,dt.width,dt.height),Re===0&&(b.matrix.copy(Ve.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),se===!0&&b.cameras.push(Ve)}let we=s.enabledFeatures;if(we&&we.includes("depth-sensing")){let Re=f.getDepthInformation(xe[0]);Re&&Re.isValid&&Re.texture&&_.init(e,Re,s.renderState)}}for(let xe=0;xe<v.length;xe++){let se=x[xe],we=v[xe];se!==null&&we!==void 0&&we.update(se,ee,c||a)}Me&&Me(q,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let st=new au;st.setAnimationLoop(Oe),this.setAnimationLoop=function(q){Me=q},this.dispose=function(){}}},Ei=new wn,c_=new Ze;function h_(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,ru(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,y,v,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),p(m,u),u.isMeshPhysicalMaterial&&d(m,u,x)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),_(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,y,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Bt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Bt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let y=e.get(u),v=y.envMap,x=y.envMapRotation;v&&(m.envMap.value=v,Ei.copy(x),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(c_.makeRotationFromEuler(Ei)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,y,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*y,m.scale.value=v*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function d(m,u,y){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Bt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){let y=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function u_(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let x=v.program;i.uniformBlockBinding(y,x)}function c(y,v){let x=s[y.id];x===void 0&&(g(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",m));let C=v.program;i.updateUBOMapping(y,C);let w=e.render.frame;r[y.id]!==w&&(p(y),r[y.id]=w)}function h(y){let v=f();y.__bindingPointIndex=v;let x=n.createBuffer(),C=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,x),x}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){let v=s[y.id],x=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let w=0,R=x.length;w<R;w++){let I=Array.isArray(x[w])?x[w]:[x[w]];for(let E=0,b=I.length;E<b;E++){let P=I[E];if(d(P,w,E,C)===!0){let O=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],H=0;for(let $=0;$<F.length;$++){let W=F[$],Q=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,O+H,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,H),H+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,v,x,C){let w=y.value,R=v+"_"+x;if(C[R]===void 0)return typeof w=="number"||typeof w=="boolean"?C[R]=w:C[R]=w.clone(),!0;{let I=C[R];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return C[R]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(y){let v=y.uniforms,x=0,C=16;for(let R=0,I=v.length;R<I;R++){let E=Array.isArray(v[R])?v[R]:[v[R]];for(let b=0,P=E.length;b<P;b++){let O=E[b],F=Array.isArray(O.value)?O.value:[O.value];for(let H=0,$=F.length;H<$;H++){let W=F[H],Q=_(W),G=x%C,ie=G%Q.boundary,he=G+ie;x+=ie,he!==0&&C-he<Q.storage&&(x+=C-he),O.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=Q.storage}}}let w=x%C;return w>0&&(x+=C-w),y.__size=x,y.__cache={},this}function _(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var ma=class{constructor(e={}){let{canvas:t=mf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,u=null,y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=hi,this.toneMappingExposure=1;let x=this,C=!1,w=0,R=0,I=null,E=-1,b=null,P=new tt,O=new tt,F=null,H=new Ce(0),$=0,W=t.width,Q=t.height,G=1,ie=null,he=null,Me=new tt(0,0,W,Q),Oe=new tt(0,0,W,Q),st=!1,q=new tr,ee=!1,xe=!1,se=new Ze,we=new Ze,Re=new A,Fe=new tt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function mt(){return I===null?G:1}let N=i;function Jt(S,D){return t.getContext(S,D)}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$l}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ae,!1),N===null){let D="webgl2";if(N=Jt(D,S),N===null)throw Jt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Be,ke,Se,ot,be,T,M,z,Y,J,X,ve,re,ue,Ge,K,de,Ee,Te,fe,He,De,rt,L;function ne(){Be=new Ag(N),Be.init(),De=new r_(N,Be),ke=new Mg(N,Be,e,De),Se=new n_(N,Be),ke.reverseDepthBuffer&&p&&Se.buffers.depth.setReversed(!0),ot=new Pg(N),be=new G0,T=new s_(N,Be,Se,be,ke,De,ot),M=new Sg(x),z=new Tg(x),Y=new Ff(N),rt=new vg(N,Y),J=new Rg(N,Y,ot,rt),X=new Lg(N,J,Y,ot),Te=new Ig(N,ke,T),K=new bg(be),ve=new V0(x,M,z,Be,ke,rt,K),re=new h_(x,be),ue=new X0,Ge=new K0(Be),Ee=new xg(x,M,z,Se,X,d,l),de=new e_(x,X,ke),L=new u_(N,ot,ke,Se),fe=new yg(N,Be,ot),He=new Cg(N,Be,ot),ot.programs=ve.programs,x.capabilities=ke,x.extensions=Be,x.properties=be,x.renderLists=ue,x.shadowMap=de,x.state=Se,x.info=ot}ne();let V=new Il(x,N);this.xr=V,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=Be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(W,Q,!1))},this.getSize=function(S){return S.set(W,Q)},this.setSize=function(S,D,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,Q=D,t.width=Math.floor(S*G),t.height=Math.floor(D*G),B===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(W*G,Q*G).floor()},this.setDrawingBufferSize=function(S,D,B){W=S,Q=D,G=B,t.width=Math.floor(S*B),t.height=Math.floor(D*B),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(Me)},this.setViewport=function(S,D,B,k){S.isVector4?Me.set(S.x,S.y,S.z,S.w):Me.set(S,D,B,k),Se.viewport(P.copy(Me).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(Oe)},this.setScissor=function(S,D,B,k){S.isVector4?Oe.set(S.x,S.y,S.z,S.w):Oe.set(S,D,B,k),Se.scissor(O.copy(Oe).multiplyScalar(G).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(S){Se.setScissorTest(st=S)},this.setOpaqueSort=function(S){ie=S},this.setTransparentSort=function(S){he=S},this.getClearColor=function(S){return S.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(S=!0,D=!0,B=!0){let k=0;if(S){let U=!1;if(I!==null){let j=I.texture.format;U=j===ic||j===nc||j===tc}if(U){let j=I.texture.type,oe=j===Yn||j===Pi||j===js||j===_s||j===Ql||j===ec,me=Ee.getClearColor(),ge=Ee.getClearAlpha(),Ae=me.r,Ie=me.g,_e=me.b;oe?(g[0]=Ae,g[1]=Ie,g[2]=_e,g[3]=ge,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Ae,_[1]=Ie,_[2]=_e,_[3]=ge,N.clearBufferiv(N.COLOR,0,_))}else k|=N.COLOR_BUFFER_BIT}D&&(k|=N.DEPTH_BUFFER_BIT),B&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ue.dispose(),Ge.dispose(),be.dispose(),M.dispose(),z.dispose(),X.dispose(),rt.dispose(),L.dispose(),ve.dispose(),V.dispose(),V.removeEventListener("sessionstart",bc),V.removeEventListener("sessionend",Sc),xi.stop()};function Z(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let S=ot.autoReset,D=de.enabled,B=de.autoUpdate,k=de.needsUpdate,U=de.type;ne(),ot.autoReset=S,de.enabled=D,de.autoUpdate=B,de.needsUpdate=k,de.type=U}function ae(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Pe(S){let D=S.target;D.removeEventListener("dispose",Pe),ft(D)}function ft(S){Ct(S),be.remove(S)}function Ct(S){let D=be.get(S).programs;D!==void 0&&(D.forEach(function(B){ve.releaseProgram(B)}),S.isShaderMaterial&&ve.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,B,k,U,j){D===null&&(D=dt);let oe=U.isMesh&&U.matrixWorld.determinant()<0,me=hd(S,D,B,k,U);Se.setMaterial(k,oe);let ge=B.index,Ae=1;if(k.wireframe===!0){if(ge=J.getWireframeAttribute(B),ge===void 0)return;Ae=2}let Ie=B.drawRange,_e=B.attributes.position,Xe=Ie.start*Ae,at=(Ie.start+Ie.count)*Ae;j!==null&&(Xe=Math.max(Xe,j.start*Ae),at=Math.min(at,(j.start+j.count)*Ae)),ge!==null?(Xe=Math.max(Xe,0),at=Math.min(at,ge.count)):_e!=null&&(Xe=Math.max(Xe,0),at=Math.min(at,_e.count));let lt=at-Xe;if(lt<0||lt===1/0)return;rt.setup(U,k,me,B,ge);let Ft,qe=fe;if(ge!==null&&(Ft=Y.get(ge),qe=He,qe.setIndex(Ft)),U.isMesh)k.wireframe===!0?(Se.setLineWidth(k.wireframeLinewidth*mt()),qe.setMode(N.LINES)):qe.setMode(N.TRIANGLES);else if(U.isLine){let ye=k.linewidth;ye===void 0&&(ye=1),Se.setLineWidth(ye*mt()),U.isLineSegments?qe.setMode(N.LINES):U.isLineLoop?qe.setMode(N.LINE_LOOP):qe.setMode(N.LINE_STRIP)}else U.isPoints?qe.setMode(N.POINTS):U.isSprite&&qe.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)qe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let ye=U._multiDrawStarts,On=U._multiDrawCounts,Ye=U._multiDrawCount,rn=ge?Y.get(ge).bytesPerElement:1,Wi=be.get(k).currentProgram.getUniforms();for(let Vt=0;Vt<Ye;Vt++)Wi.setValue(N,"_gl_DrawID",Vt),qe.render(ye[Vt]/rn,On[Vt])}else if(U.isInstancedMesh)qe.renderInstances(Xe,lt,U.count);else if(B.isInstancedBufferGeometry){let ye=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,On=Math.min(B.instanceCount,ye);qe.renderInstances(Xe,lt,On)}else qe.render(Xe,lt)};function $e(S,D,B){S.transparent===!0&&S.side===zt&&S.forceSinglePass===!1?(S.side=Bt,S.needsUpdate=!0,br(S,D,B),S.side=ui,S.needsUpdate=!0,br(S,D,B),S.side=zt):br(S,D,B)}this.compile=function(S,D,B=null){B===null&&(B=S),u=Ge.get(B),u.init(D),v.push(u),B.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),S!==B&&S.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();let k=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let j=U.material;if(j)if(Array.isArray(j))for(let oe=0;oe<j.length;oe++){let me=j[oe];$e(me,B,U),k.add(me)}else $e(j,B,U),k.add(j)}),v.pop(),u=null,k},this.compileAsync=function(S,D,B=null){let k=this.compile(S,D,B);return new Promise(U=>{function j(){if(k.forEach(function(oe){be.get(oe).currentProgram.isReady()&&k.delete(oe)}),k.size===0){U(S);return}setTimeout(j,10)}Be.get("KHR_parallel_shader_compile")!==null?j():setTimeout(j,10)})};let sn=null;function Nn(S){sn&&sn(S)}function bc(){xi.stop()}function Sc(){xi.start()}let xi=new au;xi.setAnimationLoop(Nn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(S){sn=S,V.setAnimationLoop(S),S===null?xi.stop():xi.start()},V.addEventListener("sessionstart",bc),V.addEventListener("sessionend",Sc),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(D),D=V.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,D,I),u=Ge.get(S,v.length),u.init(D),v.push(u),we.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(we),xe=this.localClippingEnabled,ee=K.init(this.clippingPlanes,xe),m=ue.get(S,y.length),m.init(),y.push(m),V.enabled===!0&&V.isPresenting===!0){let j=x.xr.getDepthSensingMesh();j!==null&&$a(j,D,-1/0,x.sortObjects)}$a(S,D,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ie,he),Ve=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Ve&&Ee.addToRenderList(m,S),this.info.render.frame++,ee===!0&&K.beginShadows();let B=u.state.shadowsArray;de.render(B,S,D),ee===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,U=m.transmissive;if(u.setupLights(),D.isArrayCamera){let j=D.cameras;if(U.length>0)for(let oe=0,me=j.length;oe<me;oe++){let ge=j[oe];wc(k,U,S,ge)}Ve&&Ee.render(S);for(let oe=0,me=j.length;oe<me;oe++){let ge=j[oe];Ec(m,S,ge,ge.viewport)}}else U.length>0&&wc(k,U,S,D),Ve&&Ee.render(S),Ec(m,S,D);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(x,S,D),rt.resetDefaultState(),E=-1,b=null,v.pop(),v.length>0?(u=v[v.length-1],ee===!0&&K.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function $a(S,D,B,k){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)u.pushLight(S),S.castShadow&&u.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){k&&Fe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(we);let oe=X.update(S),me=S.material;me.visible&&m.push(S,oe,me,B,Fe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||q.intersectsObject(S))){let oe=X.update(S),me=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Fe.copy(S.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Fe.copy(oe.boundingSphere.center)),Fe.applyMatrix4(S.matrixWorld).applyMatrix4(we)),Array.isArray(me)){let ge=oe.groups;for(let Ae=0,Ie=ge.length;Ae<Ie;Ae++){let _e=ge[Ae],Xe=me[_e.materialIndex];Xe&&Xe.visible&&m.push(S,oe,Xe,B,Fe.z,_e)}}else me.visible&&m.push(S,oe,me,B,Fe.z,null)}}let j=S.children;for(let oe=0,me=j.length;oe<me;oe++)$a(j[oe],D,B,k)}function Ec(S,D,B,k){let U=S.opaque,j=S.transmissive,oe=S.transparent;u.setupLightsView(B),ee===!0&&K.setGlobalState(x.clippingPlanes,B),k&&Se.viewport(P.copy(k)),U.length>0&&Mr(U,D,B),j.length>0&&Mr(j,D,B),oe.length>0&&Mr(oe,D,B),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function wc(S,D,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[k.id]===void 0&&(u.state.transmissionRenderTarget[k.id]=new $n(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?lr:Yn,minFilter:Ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));let j=u.state.transmissionRenderTarget[k.id],oe=k.viewport||P;j.setSize(oe.z,oe.w);let me=x.getRenderTarget();x.setRenderTarget(j),x.getClearColor(H),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),Ve&&Ee.render(B);let ge=x.toneMapping;x.toneMapping=hi;let Ae=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),u.setupLightsView(k),ee===!0&&K.setGlobalState(x.clippingPlanes,k),Mr(S,B,k),T.updateMultisampleRenderTarget(j),T.updateRenderTargetMipmap(j),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let _e=0,Xe=D.length;_e<Xe;_e++){let at=D[_e],lt=at.object,Ft=at.geometry,qe=at.material,ye=at.group;if(qe.side===zt&&lt.layers.test(k.layers)){let On=qe.side;qe.side=Bt,qe.needsUpdate=!0,Tc(lt,B,k,Ft,qe,ye),qe.side=On,qe.needsUpdate=!0,Ie=!0}}Ie===!0&&(T.updateMultisampleRenderTarget(j),T.updateRenderTargetMipmap(j))}x.setRenderTarget(me),x.setClearColor(H,$),Ae!==void 0&&(k.viewport=Ae),x.toneMapping=ge}function Mr(S,D,B){let k=D.isScene===!0?D.overrideMaterial:null;for(let U=0,j=S.length;U<j;U++){let oe=S[U],me=oe.object,ge=oe.geometry,Ae=k===null?oe.material:k,Ie=oe.group;me.layers.test(B.layers)&&Tc(me,D,B,ge,Ae,Ie)}}function Tc(S,D,B,k,U,j){S.onBeforeRender(x,D,B,k,U,j),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(x,D,B,k,S,j),U.transparent===!0&&U.side===zt&&U.forceSinglePass===!1?(U.side=Bt,U.needsUpdate=!0,x.renderBufferDirect(B,D,k,U,S,j),U.side=ui,U.needsUpdate=!0,x.renderBufferDirect(B,D,k,U,S,j),U.side=zt):x.renderBufferDirect(B,D,k,U,S,j),S.onAfterRender(x,D,B,k,U,j)}function br(S,D,B){D.isScene!==!0&&(D=dt);let k=be.get(S),U=u.state.lights,j=u.state.shadowsArray,oe=U.state.version,me=ve.getParameters(S,U.state,j,D,B),ge=ve.getProgramCacheKey(me),Ae=k.programs;k.environment=S.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(S.isMeshStandardMaterial?z:M).get(S.envMap||k.environment),k.envMapRotation=k.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Ae===void 0&&(S.addEventListener("dispose",Pe),Ae=new Map,k.programs=Ae);let Ie=Ae.get(ge);if(Ie!==void 0){if(k.currentProgram===Ie&&k.lightsStateVersion===oe)return Rc(S,me),Ie}else me.uniforms=ve.getUniforms(S),S.onBeforeCompile(me,x),Ie=ve.acquireProgram(me,ge),Ae.set(ge,Ie),k.uniforms=me.uniforms;let _e=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(_e.clippingPlanes=K.uniform),Rc(S,me),k.needsLights=dd(S),k.lightsStateVersion=oe,k.needsLights&&(_e.ambientLightColor.value=U.state.ambient,_e.lightProbe.value=U.state.probe,_e.directionalLights.value=U.state.directional,_e.directionalLightShadows.value=U.state.directionalShadow,_e.spotLights.value=U.state.spot,_e.spotLightShadows.value=U.state.spotShadow,_e.rectAreaLights.value=U.state.rectArea,_e.ltc_1.value=U.state.rectAreaLTC1,_e.ltc_2.value=U.state.rectAreaLTC2,_e.pointLights.value=U.state.point,_e.pointLightShadows.value=U.state.pointShadow,_e.hemisphereLights.value=U.state.hemi,_e.directionalShadowMap.value=U.state.directionalShadowMap,_e.directionalShadowMatrix.value=U.state.directionalShadowMatrix,_e.spotShadowMap.value=U.state.spotShadowMap,_e.spotLightMatrix.value=U.state.spotLightMatrix,_e.spotLightMap.value=U.state.spotLightMap,_e.pointShadowMap.value=U.state.pointShadowMap,_e.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Ie,k.uniformsList=null,Ie}function Ac(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=fs.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Rc(S,D){let B=be.get(S);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function hd(S,D,B,k,U){D.isScene!==!0&&(D=dt),T.resetTextureUnits();let j=D.fog,oe=k.isMeshStandardMaterial?D.environment:null,me=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ws,ge=(k.isMeshStandardMaterial?z:M).get(k.envMap||oe),Ae=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ie=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),_e=!!B.morphAttributes.position,Xe=!!B.morphAttributes.normal,at=!!B.morphAttributes.color,lt=hi;k.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(lt=x.toneMapping);let Ft=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,qe=Ft!==void 0?Ft.length:0,ye=be.get(k),On=u.state.lights;if(ee===!0&&(xe===!0||S!==b)){let Kt=S===b&&k.id===E;K.setState(k,S,Kt)}let Ye=!1;k.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==On.state.version||ye.outputColorSpace!==me||U.isBatchedMesh&&ye.batching===!1||!U.isBatchedMesh&&ye.batching===!0||U.isBatchedMesh&&ye.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ye.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ye.instancing===!1||!U.isInstancedMesh&&ye.instancing===!0||U.isSkinnedMesh&&ye.skinning===!1||!U.isSkinnedMesh&&ye.skinning===!0||U.isInstancedMesh&&ye.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ye.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ye.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ye.instancingMorph===!1&&U.morphTexture!==null||ye.envMap!==ge||k.fog===!0&&ye.fog!==j||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==K.numPlanes||ye.numIntersection!==K.numIntersection)||ye.vertexAlphas!==Ae||ye.vertexTangents!==Ie||ye.morphTargets!==_e||ye.morphNormals!==Xe||ye.morphColors!==at||ye.toneMapping!==lt||ye.morphTargetsCount!==qe)&&(Ye=!0):(Ye=!0,ye.__version=k.version);let rn=ye.currentProgram;Ye===!0&&(rn=br(k,D,U));let Wi=!1,Vt=!1,Ns=!1,ct=rn.getUniforms(),Mn=ye.uniforms;if(Se.useProgram(rn.program)&&(Wi=!0,Vt=!0,Ns=!0),k.id!==E&&(E=k.id,Vt=!0),Wi||b!==S){Se.buffers.depth.getReversed()?(se.copy(S.projectionMatrix),_f(se),xf(se),ct.setValue(N,"projectionMatrix",se)):ct.setValue(N,"projectionMatrix",S.projectionMatrix),ct.setValue(N,"viewMatrix",S.matrixWorldInverse);let Qn=ct.map.cameraPosition;Qn!==void 0&&Qn.setValue(N,Re.setFromMatrixPosition(S.matrixWorld)),ke.logarithmicDepthBuffer&&ct.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ct.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,Vt=!0,Ns=!0)}if(U.isSkinnedMesh){ct.setOptional(N,U,"bindMatrix"),ct.setOptional(N,U,"bindMatrixInverse");let Kt=U.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),ct.setValue(N,"boneTexture",Kt.boneTexture,T))}U.isBatchedMesh&&(ct.setOptional(N,U,"batchingTexture"),ct.setValue(N,"batchingTexture",U._matricesTexture,T),ct.setOptional(N,U,"batchingIdTexture"),ct.setValue(N,"batchingIdTexture",U._indirectTexture,T),ct.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&ct.setValue(N,"batchingColorTexture",U._colorsTexture,T));let Os=B.morphAttributes;if((Os.position!==void 0||Os.normal!==void 0||Os.color!==void 0)&&Te.update(U,B,rn),(Vt||ye.receiveShadow!==U.receiveShadow)&&(ye.receiveShadow=U.receiveShadow,ct.setValue(N,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Mn.envMap.value=ge,Mn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(Mn.envMapIntensity.value=D.environmentIntensity),Vt&&(ct.setValue(N,"toneMappingExposure",x.toneMappingExposure),ye.needsLights&&ud(Mn,Ns),j&&k.fog===!0&&re.refreshFogUniforms(Mn,j),re.refreshMaterialUniforms(Mn,k,G,Q,u.state.transmissionRenderTarget[S.id]),fs.upload(N,Ac(ye),Mn,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(fs.upload(N,Ac(ye),Mn,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ct.setValue(N,"center",U.center),ct.setValue(N,"modelViewMatrix",U.modelViewMatrix),ct.setValue(N,"normalMatrix",U.normalMatrix),ct.setValue(N,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Kt=k.uniformsGroups;for(let Qn=0,ei=Kt.length;Qn<ei;Qn++){let Cc=Kt[Qn];L.update(Cc,rn),L.bind(Cc,rn)}}return rn}function ud(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function dd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,D,B){be.get(S.texture).__webglTexture=D,be.get(S.depthTexture).__webglTexture=B;let k=be.get(S);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){let B=be.get(S);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,B=0){I=S,w=D,R=B;let k=!0,U=null,j=!1,oe=!1;if(S){let ge=be.get(S);if(ge.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(N.FRAMEBUFFER,null),k=!1;else if(ge.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(ge.__hasExternalTextures)T.rebindTextures(S,be.get(S.texture).__webglTexture,be.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let _e=S.depthTexture;if(ge.__boundDepthTexture!==_e){if(_e!==null&&be.has(_e)&&(S.width!==_e.image.width||S.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}let Ae=S.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(oe=!0);let Ie=be.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ie[D])?U=Ie[D][B]:U=Ie[D],j=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?U=be.get(S).__webglMultisampledFramebuffer:Array.isArray(Ie)?U=Ie[B]:U=Ie,P.copy(S.viewport),O.copy(S.scissor),F=S.scissorTest}else P.copy(Me).multiplyScalar(G).floor(),O.copy(Oe).multiplyScalar(G).floor(),F=st;if(Se.bindFramebuffer(N.FRAMEBUFFER,U)&&k&&Se.drawBuffers(S,U),Se.viewport(P),Se.scissor(O),Se.setScissorTest(F),j){let ge=be.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,ge.__webglTexture,B)}else if(oe){let ge=be.get(S.texture),Ae=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ge.__webglTexture,B||0,Ae)}E=-1},this.readRenderTargetPixels=function(S,D,B,k,U,j,oe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&oe!==void 0&&(me=me[oe]),me){Se.bindFramebuffer(N.FRAMEBUFFER,me);try{let ge=S.texture,Ae=ge.format,Ie=ge.type;if(!ke.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-k&&B>=0&&B<=S.height-U&&N.readPixels(D,B,k,U,De.convert(Ae),De.convert(Ie),j)}finally{let ge=I!==null?be.get(I).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(S,D,B,k,U,j,oe){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&oe!==void 0&&(me=me[oe]),me){let ge=S.texture,Ae=ge.format,Ie=ge.type;if(!ke.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-k&&B>=0&&B<=S.height-U){Se.bindFramebuffer(N.FRAMEBUFFER,me);let _e=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.bufferData(N.PIXEL_PACK_BUFFER,j.byteLength,N.STREAM_READ),N.readPixels(D,B,k,U,De.convert(Ae),De.convert(Ie),0);let Xe=I!==null?be.get(I).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,Xe);let at=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await gf(N,at,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,j),N.deleteBuffer(_e),N.deleteSync(at),j}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,D=null,B=0){S.isTexture!==!0&&(qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);let k=Math.pow(2,-B),U=Math.floor(S.image.width*k),j=Math.floor(S.image.height*k),oe=D!==null?D.x:0,me=D!==null?D.y:0;T.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,oe,me,U,j),Se.unbindTexture()},this.copyTextureToTexture=function(S,D,B=null,k=null,U=0){S.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1],D=arguments[2],U=arguments[3]||0,B=null);let j,oe,me,ge,Ae,Ie,_e,Xe,at,lt=S.isCompressedTexture?S.mipmaps[U]:S.image;B!==null?(j=B.max.x-B.min.x,oe=B.max.y-B.min.y,me=B.isBox3?B.max.z-B.min.z:1,ge=B.min.x,Ae=B.min.y,Ie=B.isBox3?B.min.z:0):(j=lt.width,oe=lt.height,me=lt.depth||1,ge=0,Ae=0,Ie=0),k!==null?(_e=k.x,Xe=k.y,at=k.z):(_e=0,Xe=0,at=0);let Ft=De.convert(D.format),qe=De.convert(D.type),ye;D.isData3DTexture?(T.setTexture3D(D,0),ye=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(T.setTexture2DArray(D,0),ye=N.TEXTURE_2D_ARRAY):(T.setTexture2D(D,0),ye=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let On=N.getParameter(N.UNPACK_ROW_LENGTH),Ye=N.getParameter(N.UNPACK_IMAGE_HEIGHT),rn=N.getParameter(N.UNPACK_SKIP_PIXELS),Wi=N.getParameter(N.UNPACK_SKIP_ROWS),Vt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,lt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,lt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ge),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ae),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ie);let Ns=S.isDataArrayTexture||S.isData3DTexture,ct=D.isDataArrayTexture||D.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Mn=be.get(S),Os=be.get(D),Kt=be.get(Mn.__renderTarget),Qn=be.get(Os.__renderTarget);Se.bindFramebuffer(N.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let ei=0;ei<me;ei++)Ns&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.get(S).__webglTexture,U,Ie+ei),S.isDepthTexture?(ct&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.get(D).__webglTexture,U,at+ei),N.blitFramebuffer(ge,Ae,j,oe,_e,Xe,j,oe,N.DEPTH_BUFFER_BIT,N.NEAREST)):ct?N.copyTexSubImage3D(ye,U,_e,Xe,at+ei,ge,Ae,j,oe):N.copyTexSubImage2D(ye,U,_e,Xe,at+ei,ge,Ae,j,oe);Se.bindFramebuffer(N.READ_FRAMEBUFFER,null),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ct?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(ye,U,_e,Xe,at,j,oe,me,Ft,qe,lt.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(ye,U,_e,Xe,at,j,oe,me,Ft,lt.data):N.texSubImage3D(ye,U,_e,Xe,at,j,oe,me,Ft,qe,lt):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,_e,Xe,j,oe,Ft,qe,lt.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,_e,Xe,lt.width,lt.height,Ft,lt.data):N.texSubImage2D(N.TEXTURE_2D,U,_e,Xe,j,oe,Ft,qe,lt);N.pixelStorei(N.UNPACK_ROW_LENGTH,On),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ye),N.pixelStorei(N.UNPACK_SKIP_PIXELS,rn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Wi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Vt),U===0&&D.generateMipmaps&&N.generateMipmap(ye),Se.unbindTexture()},this.copyTextureToTexture3D=function(S,D,B=null,k=null,U=0){return S.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,S=arguments[2],D=arguments[3],U=arguments[4]||0),qs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,D,B,k,U)},this.initRenderTarget=function(S){be.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),Se.unbindTexture()},this.resetState=function(){w=0,R=0,I=null,Se.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}};var ga=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ll=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ml,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Nt=new A,_a=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=hn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Je(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qt=class extends Tn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rs,Hs=new A,as=new A,os=new A,ls=new pe,Vs=new pe,uu=new Ze,Wr=new A,Gs=new A,Xr=new A,Ch=new pe,wo=new pe,Ph=new pe,en=class extends vt{constructor(e=new Qt){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ll(t,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new _a(i,3,0,!1)),rs.setAttribute("uv",new _a(i,2,3,!1))}this.geometry=rs,this.material=e,this.center=new pe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),uu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-os.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;qr(Wr.set(-.5,-.5,0),os,a,as,s,r),qr(Gs.set(.5,-.5,0),os,a,as,s,r),qr(Xr.set(.5,.5,0),os,a,as,s,r),Ch.set(0,0),wo.set(1,0),Ph.set(1,1);let o=e.ray.intersectTriangle(Wr,Gs,Xr,!1,Hs);if(o===null&&(qr(Gs.set(-.5,.5,0),os,a,as,s,r),wo.set(0,1),o=e.ray.intersectTriangle(Wr,Xr,Gs,!1,Hs),o===null))return;let l=e.ray.origin.distanceTo(Hs);l<e.near||l>e.far||t.push({distance:l,point:Hs.clone(),uv:li.getInterpolation(Hs,Wr,Gs,Xr,Ch,wo,Ph,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function qr(n,e,t,i,s,r){ls.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Vs.x=r*ls.x-s*ls.y,Vs.y=s*ls.x+r*ls.y):Vs.copy(ls),n.copy(e),n.x+=Vs.x,n.y+=Vs.y,n.applyMatrix4(uu)}var Ms=class extends Tn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xa=new A,va=new A,Ih=new Ze,Ws=new di,Yr=new Li,To=new A,Lh=new A,bs=class extends vt{constructor(e=new pt,t=new Ms){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)xa.fromBufferAttribute(t,s-1),va.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=xa.distanceTo(va);e.setAttribute("lineDistance",new nt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=r,e.ray.intersectsSphere(Yr)===!1)return;Ih.copy(s).invert(),Ws.copy(e.ray).applyMatrix4(Ih);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){let u=h.getX(_),y=h.getX(_+1),v=Zr(this,e,Ws,l,u,y);v&&t.push(v)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(d),u=Zr(this,e,Ws,l,_,m);u&&t.push(u)}}else{let d=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){let u=Zr(this,e,Ws,l,_,_+1);u&&t.push(u)}if(this.isLineLoop){let _=Zr(this,e,Ws,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zr(n,e,t,i,s,r){let a=n.geometry.attributes.position;if(xa.fromBufferAttribute(a,s),va.fromBufferAttribute(a,r),t.distanceSqToSegment(xa,va,To,Lh)>i)return;To.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(To);if(!(l<e.near||l>e.far))return{distance:l,point:Lh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var nr=class extends Tn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dh=new Ze,Dl=new di,$r=new Li,Jr=new A,ya=class extends vt{constructor(e=new pt,t=new nr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,e.ray.intersectsSphere($r)===!1)return;Dh.copy(s).invert(),Dl.copy(e.ray).applyMatrix4(Dh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){let p=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=p,_=d;g<_;g++){let m=c.getX(g);Jr.fromBufferAttribute(f,m),Uh(Jr,m,l,s,e,t,this)}}else{let p=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=p,_=d;g<_;g++)Jr.fromBufferAttribute(f,g),Uh(Jr,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Uh(n,e,t,i,s,r,a){let o=Dl.distanceSqToPoint(n);if(o<t){let l=new A;Dl.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var fi=class extends Xt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ul=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],p=i[s+1]-h,d=(a-h)/p;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new pe:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new A,s=[],r=[],a=[],o=new A,l=new Ze;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new A)}r[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),p<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(wt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(wt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function d_(n,e){let t=1-n;return t*t*e}function f_(n,e){return 2*(1-n)*n*e}function p_(n,e){return n*n*e}function Ao(n,e,t,i){return d_(n,e)+f_(n,t)+p_(n,i)}var ir=class extends Ul{constructor(e=new A,t=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ao(e,s.x,r.x,a.x),Ao(e,s.y,r.y,a.y),Ao(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var sr=class n extends pt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new A,h=new pe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,p=3;f<=t;f++,p+=3){let d=i+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ui=class n extends pt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],p=[],d=[],g=0,_=[],m=i/2,u=0;y(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new nt(f,3)),this.setAttribute("normal",new nt(p,3)),this.setAttribute("uv",new nt(d,2));function y(){let x=new A,C=new A,w=0,R=(t-e)/i;for(let I=0;I<=r;I++){let E=[],b=I/r,P=b*(t-e)+e;for(let O=0;O<=s;O++){let F=O/s,H=F*l+o,$=Math.sin(H),W=Math.cos(H);C.x=P*$,C.y=-b*i+m,C.z=P*W,f.push(C.x,C.y,C.z),x.set($,R,W).normalize(),p.push(x.x,x.y,x.z),d.push(F,1-b),E.push(g++)}_.push(E)}for(let I=0;I<s;I++)for(let E=0;E<r;E++){let b=_[E][I],P=_[E+1][I],O=_[E+1][I+1],F=_[E][I+1];(e>0||E!==0)&&(h.push(b,P,F),w+=3),(t>0||E!==r-1)&&(h.push(P,O,F),w+=3)}c.addGroup(u,w,0),u+=w}function v(x){let C=g,w=new pe,R=new A,I=0,E=x===!0?e:t,b=x===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,m*b,0),p.push(0,b,0),d.push(.5,.5),g++;let P=g;for(let O=0;O<=s;O++){let H=O/s*l+o,$=Math.cos(H),W=Math.sin(H);R.x=E*W,R.y=m*b,R.z=E*$,f.push(R.x,R.y,R.z),p.push(0,b,0),w.x=$*.5+.5,w.y=W*.5*b+.5,d.push(w.x,w.y),g++}for(let O=0;O<s;O++){let F=C+O,H=P+O;x===!0?h.push(H,H+1,F):h.push(H+1,H,F),I+=3}c.addGroup(u,I,x===!0?1:2),u+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ma=class n extends Ui{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Nl=class n extends pt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let v=new A,x=new A,C=new A;for(let w=0;w<t.length;w+=3)d(t[w+0],v),d(t[w+1],x),d(t[w+2],C),l(v,x,C,y)}function l(y,v,x,C){let w=C+1,R=[];for(let I=0;I<=w;I++){R[I]=[];let E=y.clone().lerp(x,I/w),b=v.clone().lerp(x,I/w),P=w-I;for(let O=0;O<=P;O++)O===0&&I===w?R[I][O]=E:R[I][O]=E.clone().lerp(b,O/P)}for(let I=0;I<w;I++)for(let E=0;E<2*(w-I)-1;E++){let b=Math.floor(E/2);E%2===0?(p(R[I][b+1]),p(R[I+1][b]),p(R[I][b])):(p(R[I][b+1]),p(R[I+1][b+1]),p(R[I+1][b]))}}function c(y){let v=new A;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(y),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){let y=new A;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let x=m(y)/2/Math.PI+.5,C=u(y)/Math.PI+.5;a.push(x,1-C)}g(),f()}function f(){for(let y=0;y<a.length;y+=6){let v=a[y+0],x=a[y+2],C=a[y+4],w=Math.max(v,x,C),R=Math.min(v,x,C);w>.9&&R<.1&&(v<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function p(y){r.push(y.x,y.y,y.z)}function d(y,v){let x=y*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function g(){let y=new A,v=new A,x=new A,C=new A,w=new pe,R=new pe,I=new pe;for(let E=0,b=0;E<r.length;E+=9,b+=6){y.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),w.set(a[b+0],a[b+1]),R.set(a[b+2],a[b+3]),I.set(a[b+4],a[b+5]),C.copy(y).add(v).add(x).divideScalar(3);let P=m(C);_(w,b+0,y,P),_(R,b+2,v,P),_(I,b+4,x,P)}}function _(y,v,x,C){C<0&&y.x===1&&(a[v]=y.x-1),x.x===0&&x.z===0&&(a[v]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function u(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var ba=class n extends Nl{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Ss=class n extends pt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],f=e,p=(t-e)/s,d=new A,g=new pe;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let u=r+m/i*a;d.x=f*Math.cos(u),d.y=f*Math.sin(u),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}f+=p}for(let _=0;_<s;_++){let m=_*(i+1);for(let u=0;u<i;u++){let y=u+m,v=y,x=y+i+1,C=y+i+2,w=y+1;o.push(v,x,w),o.push(x,C,w)}}this.setIndex(o),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var qt=class n extends pt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new A,p=new A,d=[],g=[],_=[],m=[];for(let u=0;u<=i;u++){let y=[],v=u/i,x=0;u===0&&a===0?x=.5/t:u===i&&l===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){let w=C/t;f.x=-e*Math.cos(s+w*r)*Math.sin(a+v*o),f.y=e*Math.cos(a+v*o),f.z=e*Math.sin(s+w*r)*Math.sin(a+v*o),g.push(f.x,f.y,f.z),p.copy(f).normalize(),_.push(p.x,p.y,p.z),m.push(w+x,1-v),y.push(c++)}h.push(y)}for(let u=0;u<i;u++)for(let y=0;y<t;y++){let v=h[u][y+1],x=h[u][y],C=h[u+1][y],w=h[u+1][y+1];(u!==0||a>0)&&d.push(v,x,w),(u!==i-1||l<Math.PI)&&d.push(x,C,w)}this.setIndex(d),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var rr=class n extends pt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new A,f=new A,p=new A;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let _=g/s*r,m=d/i*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(f,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,u=(s+1)*(d-1)+g,y=(s+1)*d+g;a.push(_,m,y),a.push(m,u,y)}this.setIndex(a),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Dt=class extends Tn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eu,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Sa=class extends Ms{static get type(){return"LineDashedMaterial"}constructor(e){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Kr(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function m_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Es=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ol=class extends Es{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dc,endingEnd:Dc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Uc:r=e,o=2*t-i;break;case Nc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Uc:a=e,l=2*i-t;break;case Nc:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,u=-p*m+2*p*_-p*g,y=(1+p)*m+(-1.5-2*p)*_+(-.5+p)*g+1,v=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let C=0;C!==o;++C)r[C]=u*a[h+C]+y*a[c+C]+v*a[l+C]+x*a[f+C];return r}},Fl=class extends Es{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),f=1-h;for(let p=0;p!==o;++p)r[p]=a[c+p]*f+a[l+p]*h;return r}},zl=class extends Es{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},pn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Kr(t,this.TimeBufferType),this.values=Kr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Kr(e.times,Array),values:Kr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ol(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ia:t=this.InterpolantFactoryMethodDiscrete;break;case pl:t=this.InterpolantFactoryMethodLinear;break;case Ka:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ia;case this.InterpolantFactoryMethodLinear:return pl;case this.InterpolantFactoryMethodSmooth:return Ka}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&m_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ka,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*i,p=f-i,d=f+i;for(let g=0;g!==i;++g){let _=t[f+g];if(_!==t[p+g]||_!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*i,p=a*i;for(let d=0;d!==i;++d)t[p+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=pl;var Ni=class extends pn{constructor(e,t,i){super(e,t,i)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=ia;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends pn{};Bl.prototype.ValueTypeName="color";var kl=class extends pn{};kl.prototype.ValueTypeName="number";var Hl=class extends Es{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)fn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ea=class extends pn{InterpolantFactoryMethodLinear(e){return new Hl(this.times,this.values,this.getValueSize(),e)}};Ea.prototype.ValueTypeName="quaternion";Ea.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends pn{constructor(e,t,i){super(e,t,i)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=ia;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends pn{};Vl.prototype.ValueTypeName="vector";var Gl=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=c.length;f<p;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},g_=new Gl,Wl=class{constructor(e){this.manager=e!==void 0?e:g_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Wl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ar=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},wa=class extends ar{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ro=new Ze,Nh=new A,Oh=new A,Ta=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tr,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nh),Oh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oh),t.updateMatrixWorld(),Ro.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ro),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ro)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Fh=new Ze,Xs=new A,Co=new A,Xl=class extends Ta{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Xs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Xs),Co.copy(i.position),Co.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Co),i.updateMatrixWorld(),s.makeTranslation(-Xs.x,-Xs.y,-Xs.z),Fh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh)}},Cn=class extends ar{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Xl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ql=class extends Ta{constructor(){super(new da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Aa=class extends ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new ql}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ra=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=zh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function zh(){return performance.now()}var ac="\\[\\]\\.:\\/",__=new RegExp("["+ac+"]","g"),oc="[^"+ac+"]",x_="[^"+ac.replace("\\.","")+"]",v_=/((?:WC+[\/:])*)/.source.replace("WC",oc),y_=/(WCOD+)?/.source.replace("WCOD",x_),M_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oc),b_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oc),S_=new RegExp("^"+v_+y_+M_+b_+"$"),E_=["material","materials","bones","map"],Yl=class{constructor(e,t,i){let s=i||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ht=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(__,"")}static parseTrackName(e){let t=S_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);E_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=Yl;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lx=new Float32Array(1);var Bh=new Ze,Ca=class{constructor(e,t,i=0,s=1/0){this.ray=new di(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bh),this}intersectObject(e,t=!0,i=[]){return Zl(e,this,i,t),i.sort(kh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Zl(e[s],this,i,t);return i.sort(kh),i}};function kh(n,e){return n.distance-e.distance}function Zl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Zl(r[a],e,t,!0)}}var or=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Pa=class extends Zn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$l);var du={type:"change"},cc={type:"start"},pu={type:"end"},Ua=new di,fu=new cn,w_=Math.cos(70*nu.DEG2RAD),bt=new A,kt=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},lc=1e-6,Na=class extends Pa{constructor(e,t=null){super(e,t),this.state=it.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fi.ROTATE,MIDDLE:Fi.DOLLY,RIGHT:Fi.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new fn,this._lastTargetPosition=new A,this._quat=new fn().setFromUnitVectors(e.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new or,this._sphericalDelta=new or,this._scale=1,this._panOffset=new A,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new A,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=A_.bind(this),this._onPointerDown=T_.bind(this),this._onPointerUp=R_.bind(this),this._onContextMenu=N_.bind(this),this._onMouseWheel=I_.bind(this),this._onKeyDown=L_.bind(this),this._onTouchStart=D_.bind(this),this._onTouchMove=U_.bind(this),this._onMouseDown=C_.bind(this),this._onMouseMove=P_.bind(this),this._interceptControlDown=O_.bind(this),this._interceptControlUp=F_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(du),this.update(),this.state=it.NONE}update(e=null){let t=this.object.position;bt.copy(t).sub(this.target),bt.applyQuaternion(this._quat),this._spherical.setFromVector3(bt),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=kt:i>Math.PI&&(i-=kt),s<-Math.PI?s+=kt:s>Math.PI&&(s-=kt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(bt.setFromSpherical(this._spherical),bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=bt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new A(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ua.origin.copy(this.object.position),Ua.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ua.direction))<w_?this.object.lookAt(this.target):(fu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ua.intersectPlane(fu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>lc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>lc||this._lastTargetPosition.distanceToSquared(this.target)>lc?(this.dispatchEvent(du),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?kt/60*this.autoRotateSpeed*e:kt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){bt.setFromMatrixColumn(t,0),bt.multiplyScalar(-e),this._panOffset.add(bt)}_panUp(e,t){this.screenSpacePanning===!0?bt.setFromMatrixColumn(t,1):(bt.setFromMatrixColumn(t,0),bt.crossVectors(this.object.up,bt)),bt.multiplyScalar(e),this._panOffset.add(bt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;bt.copy(s).sub(this.target);let r=bt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function T_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function A_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function R_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pu),this.state=it.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function C_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Fi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=it.DOLLY;break;case Fi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=it.ROTATE}break;case Fi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(cc)}function P_(n){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function I_(n){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(n.preventDefault(),this.dispatchEvent(cc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(pu))}function L_(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function D_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case zi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=it.TOUCH_ROTATE;break;case zi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=it.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(cc)}function U_(n){switch(this._trackPointer(n),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=it.NONE}}function N_(n){this.enabled!==!1&&n.preventDefault()}function O_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function F_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Rs=class extends vt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new pe(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}},As=new A,mu=new Ze,gu=new Ze,_u=new A,xu=new A,Oa=class{constructor(e={}){let t=this,i,s,r,a,o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:s}},this.render=function(g,_){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),mu.copy(_.matrixWorldInverse),gu.multiplyMatrices(_.projectionMatrix,mu),h(g,g,_),d(g)},this.setSize=function(g,_){i=g,s=_,r=i/2,a=s/2,l.style.width=g+"px",l.style.height=_+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let _=0,m=g.children.length;_<m;_++)c(g.children[_])}function h(g,_,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){As.setFromMatrixPosition(g.matrixWorld),As.applyMatrix4(gu);let u=As.z>=-1&&As.z<=1&&g.layers.test(m.layers)===!0,y=g.element;y.style.display=u===!0?"":"none",u===!0&&(g.onBeforeRender(t,_,m),y.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(As.x*r+r)+"px,"+(-As.y*a+a)+"px)",y.parentNode!==l&&l.appendChild(y),g.onAfterRender(t,_,m));let v={distanceToCameraSquared:f(m,g)};o.objects.set(g,v)}for(let u=0,y=g.children.length;u<y;u++)h(g.children[u],_,m)}function f(g,_){return _u.setFromMatrixPosition(g.matrixWorld),xu.setFromMatrixPosition(_.matrixWorld),_u.distanceToSquared(xu)}function p(g){let _=[];return g.traverseVisible(function(m){m.isCSS2DObject&&_.push(m)}),_}function d(g){let _=p(g).sort(function(u,y){if(u.renderOrder!==y.renderOrder)return y.renderOrder-u.renderOrder;let v=o.objects.get(u).distanceToCameraSquared,x=o.objects.get(y).distanceToCameraSquared;return v-x}),m=_.length;for(let u=0,y=_.length;u<y;u++)_[u].element.style.zIndex=m-u}}};var vu={x:460,y:1e3},St=(n,e)=>({x:(n-vu.x)/50,z:(e-vu.y)/50}),yu=n=>n/50,mn={blue:8300524,teal:6278591,yellow:15320170,orange:14847596,tile:14147304,deck:9680110},Mu=[{id:"sala",label:"Sala",rect:[205,675,715,880],color:mn.blue},{id:"terraza",label:"Terraza",rect:[465,470,595,675],color:mn.deck,outdoor:!0},{id:"patio",label:"Pasillo Patio",rect:[130,885,385,945],color:mn.yellow},{id:"bano",label:"Ba\xF1o",rect:[130,945,385,1085],color:mn.tile,tiles:!0},{id:"cocina",label:"Cocina",rect:[510,880,800,1085],color:mn.teal},{id:"invitados",label:"Cuarto Invitados",rect:[120,1085,385,1300],color:mn.yellow},{id:"trabajo",label:"Cuarto Trabajo",rect:[460,1085,720,1300],color:mn.blue},{id:"ninos",label:"Cuarto Ni\xF1os",rect:[120,1300,385,1510],color:mn.blue},{id:"padres",label:"Cuarto Padres",rect:[460,1300,800,1510],color:mn.teal}],hc=[{rect:[385,880,460,1375],color:mn.orange},{rect:[460,880,510,975],color:mn.orange}],bu=[["h",880,388,507],["h",675,480,580],["v",385,885,945],["v",130,892,938],["h",945,285,345],["v",510,895,970],["v",385,1105,1162],["v",460,1100,1158],["v",385,1315,1365],["v",460,1315,1365]],Su=[["v",460,975,1085],["h",1375,385,460]],pi=[440,905],Eu={sala:[],terraza:[[530,700],[530,650]],cocina:[[440,860],pi,[480,935],[545,935]],patio:[[440,860],pi,[420,915],[355,915]],bano:[[440,860],pi,[420,915],[315,915],[315,935]],pasillo:[[440,860],pi,[422,1e3]],invitados:[[440,860],pi,[422,1132],[350,1132]],trabajo:[[440,860],pi,[422,1130],[495,1130]],ninos:[[440,860],pi,[422,1340],[350,1340]],padres:[[440,860],pi,[422,1340],[495,1340]]},wu=[430,742],Tu={echo:[262,770],router:[575,855],tv:[330,690],sofa:[330,830],fridge:[772,905],washer:[175,915],ac:[792,1395],motionSensor:[372,958],toilet:[180,1050],flushSensor:[180,1072]};var Pn=1.05,uc=.12,Fa=.08,dc=new Map;function mi(n,e={}){let t=`${n}-${JSON.stringify(e)}`;return dc.has(t)||dc.set(t,new Dt({color:n,roughness:.85,...e})),dc.get(t)}function ce(n,e,t,i,s,r,a,o){let l=new ze(new Di(n,e,t),o?.material??mi(i,o));return l.position.set(s,r,a),l.castShadow=!0,l.receiveShadow=!0,l}function Ut(n,e,t,i,s,r,a,o=24,l){let c=new ze(new Ui(n,e,t,o),mi(i,l));return c.position.set(s,r,a),c.castShadow=!0,c.receiveShadow=!0,c}var fc=([n,e,t,i])=>{let s=St(n,e),r=St(t,i);return{minX:s.x,minZ:s.z,maxX:r.x,maxZ:r.z,cx:(s.x+r.x)/2,cz:(s.z+r.z)/2,w:r.x-s.x,d:r.z-s.z}};function z_(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.fillStyle="#e4eaf1",e.fillRect(0,0,128,128),e.strokeStyle="#b9c4d2",e.lineWidth=3;for(let i=0;i<=128;i+=32)e.beginPath(),e.moveTo(i,0),e.lineTo(i,128),e.stroke(),e.beginPath(),e.moveTo(0,i),e.lineTo(128,i),e.stroke();let t=new fi(n);return t.wrapS=t.wrapT=Ks,t.colorSpace=Tt,t}function B_(n,e,t,i){let s=[[t,i]];for(let[r,a,o,l]of bu)r!==n||Math.abs(a-e)>3||(s=s.flatMap(([c,h])=>{if(l<=c||o>=h)return[[c,h]];let f=[];return o>c&&f.push([c,o]),l<h&&f.push([l,h]),f}));return s.filter(([r,a])=>a-r>4)}function k_(n,e,t,i,s,r){let a=yu(i-t)+uc;if(n==="h"){let l=St((t+i)/2,e);return ce(a,s,uc,r,l.x,s/2,l.z)}let o=St(e,(t+i)/2);return ce(uc,s,a,r,o.x,s/2,o.z)}function cr(n,e,t,i,s,r=Pn,a=16183267){for(let[o,l]of B_(e,t,i,s))n.add(k_(e,t,o,l,r,a))}function Au(n,e,t){let i=document.createElement("div");i.className="room-label",i.textContent=n;let s=new Rs(i);return s.position.set(e,.12,t),s}function Ru(){let n=new Ke,e={},t=ce(17.5,.5,23.5,2893138,0,-.29,-.6);t.castShadow=!1,n.add(t);let i=ce(16.6,.06,22.6,4881754,0,-.02,-.6);i.castShadow=!1,n.add(i);let s=z_();for(let r of Mu){let a=fc(r.rect),o;if(r.tiles){let v=s.clone();v.repeat.set(a.w/.5,a.d/.5),v.needsUpdate=!0,o=new Dt({map:v,roughness:.4})}let l=ce(a.w,Fa,a.d,r.color,a.cx,Fa/2,a.cz,o?{material:o}:void 0);l.castShadow=!1,l.userData.room=r.id,n.add(l);let[c,h,f,p]=r.rect,d=r.outdoor?.32:Pn,g=r.outdoor?14275268:16183267;cr(n,"h",h,c,f,d,g),cr(n,"h",p,c,f,d,g),cr(n,"v",c,h,p,d,g),cr(n,"v",f,h,p,d,g);let _=new Dt({color:16774364,emissive:16762746,emissiveIntensity:0,roughness:.3}),m=new ze(new qt(.13,20,14),_);m.position.set(a.cx,Pn+.45,a.cz),m.userData.pick=`light:${r.id}`,n.add(m);let u=new en(new Qt({map:Jn(),color:16762746,transparent:!0,opacity:0,depthWrite:!1,blending:En}));u.scale.set(1.4,1.4,1),u.position.copy(m.position),n.add(u);let y=new Cn(16762746,0,Math.max(a.w,a.d)*1.6,1.4);y.position.set(a.cx,Pn*.95,a.cz),n.add(y),n.add(Au(r.label,a.cx,a.cz)),e[r.id]={...r,bounds:a,bulb:m,halo:u,light:y,on:!1,color:16762746,level:0}}for(let r of hc){let a=fc(r.rect),o=ce(a.w,Fa,a.d,r.color,a.cx,Fa/2+.002,a.cz);o.castShadow=!1,n.add(o)}{let r=fc(hc[0].rect),a=new Dt({color:16774364,emissive:16762746,emissiveIntensity:0,roughness:.3}),o=new ze(new qt(.11,20,14),a);o.position.set(r.cx,Pn+.45,r.cz),o.userData.pick="light:pasillo";let l=new en(new Qt({map:Jn(),color:16762746,transparent:!0,opacity:0,depthWrite:!1,blending:En}));l.scale.set(1.2,1.2,1),l.position.copy(o.position);let c=new Cn(16762746,0,r.d*1.1,1.4);c.position.set(r.cx,Pn*.95,r.cz),n.add(o,l,c,Au("Pasillo",r.cx,r.cz+1.6)),e.pasillo={id:"pasillo",label:"Pasillo",bounds:r,bulb:o,halo:l,light:c,on:!1,color:16762746,level:0}}for(let[r,a,o,l]of Su)cr(n,r,a,o,l);return H_(n),{group:n,rooms:e}}var za;function Jn(){if(za)return za;let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),za=new fi(n),za}var ut=(n,e)=>St(n,e);function H_(n){let r=ut(330,835);n.add(ce(1.9,.3,.6,5991352,r.x,.23,r.z+.1)),n.add(ce(1.9,.35,.18,5991352,r.x,.4,r.z+.36)),r=ut(330,765),n.add(ce(1,.04,.6,15327699,r.x,.1,r.z+.2)),n.add(ce(.8,.2,.4,12159582,r.x,.18,r.z+.2)),r=ut(225,700),n.add(Ut(.16,.12,.3,12937802,r.x,.23,r.z)),n.add(Ut(.01,.28,.6,4168538,r.x,.65,r.z,8)),r=ut(262,770),n.add(Ut(.22,.22,.42,12159582,r.x,.27,r.z)),r=ut(575,860),n.add(ce(.7,.36,.3,12159582,r.x,.26,r.z-.05)),r=ut(640,740),n.add(ce(1.1,.06,.8,12159582,r.x,.5,r.z));for(let[o,l]of[[-.35,-.25],[.35,-.25],[-.35,.25],[.35,.25]])n.add(ce(.05,.47,.05,12159582,r.x+o*1.3,.27,r.z+l*1.3));r=ut(500,520),n.add(ce(.4,.25,.4,15786176,r.x,.2,r.z)),r=ut(560,520),n.add(ce(.4,.25,.4,15786176,r.x,.2,r.z)),r=ut(530,610),n.add(Ut(.15,.12,.25,12937802,r.x,.2,r.z)),n.add(new ze(new ba(.3,0),mi(4168538))),n.children[n.children.length-1].position.set(r.x,.55,r.z),r=ut(650,892),n.add(ce(4.6,.6,.45,15921906,r.x-.55,.38,r.z+.08)),n.add(ce(4.6,.05,.5,4013906,r.x-.55,.7,r.z+.08)),r=ut(640,1010),n.add(ce(1.8,.6,.7,15921906,r.x,.38,r.z)),n.add(ce(1.9,.05,.8,12755835,r.x,.7,r.z)),r=ut(600,895),n.add(ce(.5,.02,.35,3027266,r.x,.735,r.z+.1)),r=ut(260,1072),n.add(ce(.6,.6,.35,15921906,r.x,.38,r.z-.04)),r=ut(345,1045),n.add(ce(.9,.06,.9,15397887,r.x-.1,.11,r.z-.25)),r=ut(210,1200),Ba(n,r.x,r.z,1.4,1.9,15909198),r=ut(160,1120),n.add(ce(.4,.4,.4,12159582,r.x,.24,r.z)),r=ut(600,1110),n.add(ce(1.6,.06,.65,12159582,r.x,.62,r.z+.1));for(let o of[-.75,.75])n.add(ce(.06,.6,.6,12159582,r.x+o,.32,r.z+.1));n.add(ce(.7,.42,.04,3027266,r.x,.92,r.z-.05));let a=ce(.64,.36,.01,7332863,r.x,.92,r.z-.025,{emissive:3837904,emissiveIntensity:.9});a.castShadow=!1,n.add(a),n.add(ce(.5,.02,.18,14540253,r.x,.66,r.z+.25)),r=ut(600,1165),n.add(Ut(.22,.22,.08,3027266,r.x,.45,r.z)),n.add(Ut(.03,.03,.4,3027266,r.x,.22,r.z)),r=ut(175,1420),Ba(n,r.x,r.z,.9,1.8,5213695),r=ut(320,1420),Ba(n,r.x,r.z,.9,1.8,16743112),r=ut(250,1330),n.add(ce(.7,.35,.4,16765503,r.x,.22,r.z)),r=ut(250,1470),n.add(Ut(.6,.6,.02,10906623,r.x,.09,r.z,32)),r=ut(640,1430),Ba(n,r.x,r.z,1.9,2,15327699);for(let o of[-1.25,1.25])n.add(ce(.4,.4,.4,12159582,r.x+o,.24,r.z-.7));r=ut(520,1480),n.add(ce(1.6,1,.5,14271137,r.x+.6,.54,r.z))}function Ba(n,e,t,i,s,r){n.add(ce(i,.3,s,12159582,e,.19,t)),n.add(ce(i-.06,.12,s-.35,r,e,.4,t+.15)),n.add(ce(i-.2,.1,.3,16777215,e,.39,t-s/2+.22)),n.add(ce(i,.55,.08,12159582,e,.32,t-s/2+.02))}var Kn=n=>St(...Tu[n]),In=(n,e,t)=>n+(e-n)*t;function gn(n,e){return n.traverse(t=>{t.userData.pick=e}),n}function V_(){let n=document.createElement("canvas");n.width=256,n.height=144;let e=new fi(n);e.colorSpace=Tt;let t=n.getContext("2d");return{tex:e,draw:(s,r)=>{if(!r){t.fillStyle="#10131c",t.fillRect(0,0,256,144),e.needsUpdate=!0;return}let a=t.createLinearGradient(0,0,0,144);a.addColorStop(0,"#5ec8ff"),a.addColorStop(1,"#c9f1ff"),t.fillStyle=a,t.fillRect(0,0,256,144),t.fillStyle="#ffd23f",t.beginPath(),t.arc(200,34+Math.sin(s*2)*6,18,0,Math.PI*2),t.fill(),t.fillStyle="#3ddc84",t.beginPath(),t.moveTo(0,144);for(let c=0;c<=256;c+=8)t.lineTo(c,108+Math.sin(c/30+s*3)*8);t.lineTo(256,144),t.fill();let o=30+s*70%200,l=96-Math.abs(Math.sin(s*5))*40;t.fillStyle="#ff4d4d",t.beginPath(),t.arc(o,l,12,0,Math.PI*2),t.fill(),t.fillStyle="#fff",t.beginPath(),t.arc(o+4,l-3,3.5,0,Math.PI*2),t.fill(),e.needsUpdate=!0}}}function G_(){let n=Kn("echo"),e=new Ke;e.position.set(n.x,.48,n.z),e.add(Ut(.17,.18,.16,2765648,0,.08,0,32)),e.add(Ut(.16,.16,.012,1778230,0,.165,0,32));let t=new Dt({color:3135231,emissive:3135231,emissiveIntensity:.15}),i=new ze(new rr(.15,.018,10,40),t);i.rotation.x=Math.PI/2,i.position.y=.17,e.add(i);let s=new en(new Qt({map:Jn(),color:3135231,transparent:!0,opacity:0,depthWrite:!1,blending:En}));s.scale.set(1.3,1.3,1),s.position.y=.2,e.add(s);let r=new Cn(3135231,0,2.5,1.5);return r.position.y=.4,e.add(r),{group:gn(e,"echo"),ringMat:t,glow:s,light:r,state:"idle"}}function W_(){let n=Kn("router"),e=new Ke;e.position.set(n.x,.44,n.z-.05),e.add(ce(.42,.08,.24,16053494,0,.04,0));for(let i of[-.15,.15]){let s=ce(.025,.32,.025,2829107,i,.22,-.08);s.rotation.z=i*1.2,e.add(s)}let t=new Dt({color:4054148,emissive:4054148,emissiveIntensity:1});for(let i=0;i<3;i++){let s=new ze(new qt(.014,8,6),t);s.position.set(-.08+i*.08,.06,.121),e.add(s)}return{group:gn(e,"router"),ledMat:t}}function X_(){let n=Kn("tv"),e=new Ke;e.position.set(n.x,0,n.z+.12),e.add(ce(1.5,.3,.35,9071180,0,.23,0)),e.add(ce(1.36,.8,.05,1119e3,0,.88,-.06));let{tex:t,draw:i}=V_(),s=new An({map:t,toneMapped:!1}),r=new ze(new ys(1.28,.72),s);r.position.set(0,.88,-.03),e.add(r);let a=new Cn(8377087,0,3,1.5);return a.position.set(0,.9,.5),e.add(a),i(0,!1),{group:gn(e,"tv"),draw:i,light:a,on:!1}}function q_(){let n=Kn("fridge"),e=new Ke;e.position.set(n.x,0,n.z+.15),e.add(ce(.7,1.45,.65,14673130,0,.78,0,{metalness:.3,roughness:.4}));let t=new Ke;t.position.set(-.35,0,.33);let i=ce(.7,1.43,.06,15659509,.35,.78,.03,{metalness:.3,roughness:.35});t.add(i);let s=ce(.2,.12,.01,1778230,.5,1.15,.065,{emissive:3135231,emissiveIntensity:.6});t.add(s),t.add(ce(.03,.5,.04,10134445,.62,.9,.08)),e.add(t);let r=new Cn(14677759,0,1.6,1.5);return r.position.set(0,.9,.4),e.add(r),{group:gn(e,"fridge"),pivot:t,panel:s,inner:r,open:!1,openedAt:0,warned:!1}}function Y_(){let n=Kn("washer"),e=new Ke;e.position.set(n.x,0,n.z),e.rotation.y=Math.PI/2;let t=new Ke;t.add(ce(.6,.8,.55,16053494,0,.45,0)),t.add(ce(.6,.12,.02,14672872,0,.78,.28));let i=new ze(new rr(.18,.035,10,32),mi(12107980,{metalness:.5}));i.position.set(0,.42,.285),t.add(i);let s=document.createElement("canvas");s.width=s.height=64;let r=s.getContext("2d");r.fillStyle="#3a6fd8",r.fillRect(0,0,64,64),r.fillStyle="#ffffff";for(let c=0;c<6;c++)r.beginPath(),r.arc(32+Math.cos(c)*18,32+Math.sin(c)*18,6,0,7),r.fill();r.fillStyle="#ffd23f",r.fillRect(14,26,18,12);let a=new fi(s);a.colorSpace=Tt;let o=new ze(new sr(.165,32),new Dt({map:a,roughness:.3}));o.position.set(0,.42,.281),t.add(o);let l=ce(.05,.03,.01,4054148,.2,.78,.29,{emissive:4054148,emissiveIntensity:0});return t.add(l),e.add(t),{group:gn(e,"washer"),body:t,drum:o,led:l,on:!1}}function Z_(){let n=new Ke,e=St(700,893);n.position.set(e.x,.725,e.z+.05),n.add(ce(.55,.32,.38,3027266,0,.16,0));let t=ce(.34,.22,.01,1119e3,-.06,.16,.191,{emissive:16756810,emissiveIntensity:0});n.add(t);let i=ce(.1,.04,.01,1119e3,.2,.24,.191,{emissive:4054148,emissiveIntensity:.8});n.add(i);let s=new Cn(16756810,0,1.2,1.5);s.position.set(0,.2,.4),n.add(s);let r=new Ke;e=St(560,893),r.position.set(e.x,.725,e.z+.05),r.add(ce(.22,.34,.24,9055790,0,.17,-.02)),r.add(ce(.22,.04,.3,2829107,0,.36,.01));let a=Ut(.045,.04,.08,16777215,0,.06,.07,16);r.add(a);let o=ce(.04,.02,.01,4054148,.06,.28,.101,{emissive:4054148,emissiveIntensity:0});r.add(o);let l=new en(new Qt({map:Jn(),color:16777215,transparent:!0,opacity:0,depthWrite:!1}));l.scale.set(.18,.3,1),l.position.set(0,.2,.07),r.add(l);let c=new Ke;e=St(620,905),c.position.set(e.x,0,e.z+.08),c.add(ce(.58,.58,.02,13225686,0,.37,0,{metalness:.5,roughness:.35}));let h=ce(.12,.02,.01,3135231,0,.62,.011,{emissive:3135231,emissiveIntensity:0});return c.add(h),{microwave:{group:gn(n,"microwave"),mwWindow:t,mwLight:s,on:!1},coffee:{group:gn(r,"coffee"),coffeeLed:o,steam:l,on:!1},dishwasher:{group:gn(c,"dishwasher"),dishLed:h,on:!1}}}function $_(){let n=Kn("ac"),e=new Ke;e.position.set(n.x-.08,.82,n.z),e.rotation.y=-Math.PI/2,e.add(ce(1.2,.3,.22,16250873,0,0,0));let t=ce(.9,.03,.06,14869994,0,-.12,.09);e.add(t);let i=ce(.04,.02,.01,4054148,.4,.06,.101,{emissive:4054148,emissiveIntensity:0});e.add(i);let s=80,r=new pt,a=new Float32Array(s*3),o=new Float32Array(s);for(let c=0;c<s;c++)o[c]=Math.random();r.setAttribute("position",new At(a,3));let l=new ya(r,new nr({color:9430783,size:.13,transparent:!0,opacity:0,depthWrite:!1,map:Jn()}));return e.add(l),{group:gn(e,"ac"),flap:t,led:i,air:l,life:o,on:!1,level:0}}function J_(){let n=Kn("toilet"),e=new Ke;e.position.set(n.x,0,n.z),e.add(ce(.36,.42,.18,16777215,0,.38,.12)),e.add(Ut(.2,.15,.32,16777215,0,.22,-.12,24));let t=new ze(new sr(.15,24),new Dt({color:9425919,emissive:2785232,emissiveIntensity:.1,transparent:!0,opacity:.9}));t.rotation.x=-Math.PI/2,t.position.set(0,.385,-.12),e.add(t);let i=new ze(new Ss(.03,.14,24,1,0,Math.PI*1.3),new An({color:16777215,transparent:!0,opacity:0,side:zt}));i.rotation.x=-Math.PI/2,i.position.set(0,.39,-.12),e.add(i);let s=new Dt({color:3135231,emissive:3135231,emissiveIntensity:.4}),r=new ze(new Ui(.05,.05,.02,20),s);r.position.set(0,.6,.12),e.add(r),gn(e,"toilet"),r.userData.pick="flush";let a=new Ke;a.add(ce(.12,.04,.16,15844251,0,0,0));for(let g=0;g<4;g++)a.add(ce(.022,.03,.08,15844251,-.045+g*.03,0,-.11));a.position.set(n.x+.5,.95,n.z+.12),a.visible=!1;let o=Kn("motionSensor"),l=new Ke;l.position.set(o.x,Pn-.12,o.z);let c=new ze(new qt(.07,16,10,0,Math.PI*2,0,Math.PI/2),mi(16777215));c.rotation.x=Math.PI,l.add(c);let h=new Dt({color:16731469,emissive:16731469,emissiveIntensity:.3}),f=new ze(new qt(.015,8,6),h);f.position.y=-.065,l.add(f);let p=new An({color:16743034,transparent:!0,opacity:0,depthWrite:!1,side:zt}),d=new ze(new Ma(1.6,Pn-.12,32,1,!0),p);return d.position.set(-.9,-(Pn-.12)/2,.6),l.add(d),gn(l,"motion"),{toilet:e,water:t,swirl:i,sensorLedMat:s,hand:a,motion:l,motionLedMat:h,coneMat:p}}function K_(){let n=new Ke;n.add(Ut(.13,.15,.42,16751164,0,.62,0,16)),n.add(ce(.1,.38,.1,3885711,-.07,.2,0)),n.add(ce(.1,.38,.1,3885711,.07,.2,0));let t=new ze(new qt(.13,18,14),mi(15844251));t.position.y=.97,t.castShadow=!0,n.add(t);let i=new ze(new qt(.135,18,10,0,Math.PI*2,0,Math.PI/2),mi(3810324));return i.position.y=.99,n.add(i),n.visible=!1,n}function Cu(n,e){let t=G_(),i=W_(),s=X_(),r=q_(),a=Y_(),o=$_(),l=J_(),c=K_(),h=Z_();n.add(h.microwave.group,h.coffee.group,h.dishwasher.group),n.add(t.group,i.group,s.group,r.group,a.group,o.group,l.toilet,l.hand,l.motion,c);let f=(y,v=.5)=>{let x=new A;return y.getWorldPosition(x),x.y+=v,x},p={echo:()=>f(t.group,.3),router:()=>f(i.group,.35),tv:()=>f(s.group,.9),fridge:()=>f(r.group,1.2),washer:()=>f(a.group,.6),ac:()=>f(o.group,.1),microwave:()=>f(h.microwave.group,.2),coffee:()=>f(h.coffee.group,.2),dishwasher:()=>f(h.dishwasher.group,.4),light:y=>e[y].bulb.position.clone()},d={phase:"empty",t:0,presence:!1,lastSeen:-1,flushT:-1,handT:-1,path:[],onEvent:()=>{}},g=St(315,915),_=St(315,975),m=St(240,1015),u={echo:t,tv:s,fridge:r,washer:a,ac:o,bath:l,person:c,anchors:p,setAlexa(y){t.state=y},setTv(y){s.on=y},setWasher(y){a.on=y},setAc(y){o.on=y},kitchen:h,setKitchen(y,v){h[y].on=v},toggleFridge(y){return r.open=!r.open,r.openedAt=y,r.warned=!1,r.open},personEnter(){return d.phase!=="empty"?!1:(d.phase="entering",d.path=[g,_,m].map(y=>new A(y.x,.05,y.z)),c.position.copy(d.path[0]),c.visible=!0,!0)},waveHand(){return d.handT>=0?!1:(d.handT=0,l.hand.visible=!0,!0)},bathroom:d,update(y,v){let x={idle:.15,listening:2.2,thinking:1.2,speaking:1.6}[t.state]??.15,C=t.state==="speaking"?.6+Math.sin(v*10)*.4:t.state==="thinking"?.7+Math.sin(v*16)*.3:1;t.ringMat.emissiveIntensity=In(t.ringMat.emissiveIntensity,x*C,.2),t.glow.material.opacity=In(t.glow.material.opacity,t.state==="idle"?0:.8*C,.2),t.light.intensity=In(t.light.intensity,t.state==="idle"?0:1.2*C,.2),i.ledMat.emissiveIntensity=.6+(Math.sin(v*9)>.2?.8:0),(s.on||s.wasOn)&&(s.draw(v,s.on),s.wasOn=s.on),s.light.intensity=In(s.light.intensity,s.on?1.6+Math.sin(v*3)*.3:0,.15);let w=r.open?-1.6:0;r.pivot.rotation.y=In(r.pivot.rotation.y,w,.12),r.inner.intensity=In(r.inner.intensity,r.open?1.4:0,.2),r.panel.material.emissive.setHex(r.open&&v-r.openedAt>4&&Math.sin(v*12)>0?16731469:3135231),r.open&&!r.warned&&v-r.openedAt>4&&(r.warned=!0,d.onEvent("fridge-open")),a.on?(a.drum.rotation.z-=y*9,a.body.position.x=Math.sin(v*50)*.008):a.body.position.x=0,a.led.material.emissiveIntensity=a.on?1.2:0;let R=h.microwave.on;if(h.microwave.mwWindow.material.emissiveIntensity=In(h.microwave.mwWindow.material.emissiveIntensity,R?1.6:0,.15),h.microwave.mwLight.intensity=In(h.microwave.mwLight.intensity,R?1:0,.15),h.coffee.coffeeLed.material.emissiveIntensity=h.coffee.on?1.4:0,h.coffee.steam.material.opacity=h.coffee.on?.35+Math.sin(v*4)*.2:0,h.coffee.steam.position.y=.2+v*.3%.15,h.dishwasher.dishLed.material.emissiveIntensity=h.dishwasher.on?1.2+Math.sin(v*3)*.4:0,o.level=In(o.level,o.on?1:0,.05),o.flap.rotation.x=o.level*.7,o.led.material.emissiveIntensity=o.on?1.2:0,o.air.material.opacity=o.level*.85,o.level>.01){let O=o.air.geometry.attributes.position;for(let F=0;F<o.life.length;F++){o.life[F]+=y*.5,o.life[F]>1&&(o.life[F]=0);let H=o.life[F],$=F*37%100/100-.5;O.setXYZ(F,$*.9*(1+H),-.15-H*.55,.1+H*1.6)}O.needsUpdate=!0}let I=1.1;if((d.phase==="entering"||d.phase==="leaving")&&d.path.length){let O=d.path[0],F=O.clone().sub(c.position),H=I*y;F.length()<=H?(c.position.copy(O),d.path.shift(),d.path.length||(d.phase==="entering"?(d.phase="inside",d.t=0):(d.phase="empty",c.visible=!1))):(c.position.addScaledVector(F.normalize(),H),c.rotation.y=Math.atan2(F.x,F.z),c.position.y=.05+Math.abs(Math.sin(v*12))*.03)}d.phase==="inside"&&(d.t+=y,d.t>12&&u.personLeave());let E=e.bano.bounds,b=c.visible&&c.position.x>E.minX&&c.position.x<E.maxX&&c.position.z>E.minZ+.1&&c.position.z<E.maxZ;b?(d.presence||d.onEvent("motion-on"),d.presence=!0,d.lastSeen=v):d.presence&&v-d.lastSeen>3&&(d.presence=!1,d.onEvent("motion-off"));let P=b&&Math.sin(v*6)>0;if(l.motionLedMat.emissiveIntensity=P?2:.3,l.coneMat.opacity=In(l.coneMat.opacity,b?.14:0,.15),d.handT>=0){d.handT+=y;let O=d.handT,F=Kn("toilet");l.hand.position.set(F.x+.45-Math.min(O,.6)*.75,.82,F.z+.12+Math.sin(O*10)*.04),l.sensorLedMat.emissiveIntensity=O>.5&&O<1.4?3:.4,O>.7&&d.flushT<0&&(d.flushT=0,d.onEvent("flush")),O>1.4&&(l.hand.visible=!1,d.handT=-1)}if(d.flushT>=0){d.flushT+=y;let O=d.flushT;l.swirl.rotation.z-=y*12,l.swirl.material.opacity=O<2.2?.9:Math.max(0,.9-(O-2.2)*2),l.water.material.emissiveIntensity=O<2.2?.8:.1,l.water.scale.setScalar(1-Math.sin(Math.min(O,2.5)/2.5*Math.PI)*.3),O>2.8&&(d.flushT=-1,l.water.scale.setScalar(1),d.phase==="inside"&&setTimeout(()=>u.personLeave(),600))}},personLeave(){d.phase==="inside"&&(d.phase="leaving",d.path=[_,g,St(420,915)].map(y=>new A(y.x,.05,y.z)))}};return u}var j_=1.6,Q_=2.4,ex=.55,Pu=6e3,Iu=([n,e])=>{let t=St(n,e);return new A(t.x,0,t.z)};function tx(n){let t=[],i=n.minX+.35,s=n.maxX-.35,r=!1;for(let a=n.minZ+.35;a<=n.maxZ-.35+.001;a+=ex)t.push(new A(r?s:i,0,a),new A(r?i:s,0,a)),r=!r;return t}function Lu(n,e){let t=Iu(wu),i=new Ke;i.position.copy(t).add(new A(0,0,-.32)),i.add(ce(.5,.3,.16,2303535,0,.23,0)),i.add(ce(.5,.02,.4,3093311,0,.09,.14));let s=ce(.08,.02,.01,4054148,0,.32,.081,{emissive:4054148,emissiveIntensity:1});i.add(s),i.traverse(x=>{x.userData.pick="robot"}),n.add(i);let r=new Ke;r.add(Ut(.2,.2,.09,15527923,0,.13,0,32)),r.add(Ut(.06,.06,.04,2830138,0,.195,-.06,20));let a=new Dt({color:3135231,emissive:3135231,emissiveIntensity:.5}),o=new ze(new qt(.018,8,6),a);o.position.set(0,.18,.12),r.add(o);let l=ce(.12,.01,.02,5593702,.13,.09,.13);r.add(l),r.scale.setScalar(1.45),r.position.copy(t),r.position.y=0,r.traverse(x=>{x.userData.pick="robot"}),n.add(r);let c=new pt,h=new Float32Array(Pu*3);c.setAttribute("position",new At(h,3)),c.setDrawRange(0,0);let f=new Ms({color:16777215,transparent:!0,opacity:.75}),p=new bs(c,f);p.frustumCulled=!1,n.add(p);let d=0,g=!1,_={mode:"docked",queue:[],room:null,onEvent:()=>{},blockedT:0},m=x=>{d>=Pu||(h.set([x.x,.095,x.z],d*3),d++,c.setDrawRange(0,d),c.attributes.position.needsUpdate=!0)},u=x=>(Eu[x]??[]).map(Iu),y=()=>[..._.room?u(_.room).reverse():[],t.clone().add(new A(0,0,.25)),t.clone()];return{state:_,body:r,clean(x){let C=_.mode==="docked"?[]:y().slice(0,-2);if(_.room=x,d=0,g=!1,f.opacity=.75,c.setDrawRange(0,0),x==="bano"){_.mode="going",_.queue=[...C,t.clone().add(new A(0,0,.3)),...u("bano")].map(O=>({p:O,phase:"go"})),_.queue[_.queue.length-1].phase="blocked";return}_.mode="going";let w=[...C,t.clone().add(new A(0,0,.3)),...u(x)].map(O=>({p:O,phase:"go"})),R=tx(e[x].bounds).map(O=>({p:O,phase:"clean"})),I=w.length?w[w.length-1].p:r.position,E=R[0].p.distanceTo(I);R[R.length-1].p.distanceTo(I)<E&&R.reverse();let P=w.length?[{p:w[w.length-1].p.clone(),phase:"clean"}]:[];_.queue=[...w,...R,...P,{p:null,phase:"done"}]},dock(){return _.mode==="docked"?!1:(_.mode="returning",_.queue=y().map(x=>({p:x,phase:"home"})),!0)},update(x,C){if(a.emissiveIntensity=_.mode==="docked"?.4+Math.sin(C*2)*.3:1.4,a.emissive.setHex(_.mode==="blocked"?16731469:3135231),s.material.emissiveIntensity=_.mode==="docked"?1.2:.2,l.rotation.y+=_.mode==="cleaning"?x*30:0,g&&(f.opacity=Math.max(0,f.opacity-x*.15)),_.mode==="blocked"){_.blockedT+=x,r.position.y=Math.abs(Math.sin(_.blockedT*18))*.03*Math.max(0,1-_.blockedT),_.blockedT>1.6&&(r.position.y=0,_.mode="returning",_.queue=y().map(O=>({p:O,phase:"home"})),_.onEvent("blocked-returning"));return}let w=_.queue[0];if(!w)return;if(w.phase==="done"){_.queue.shift(),_.onEvent("clean-done",_.room),_.mode="returning",_.queue=y().map(O=>({p:O,phase:"home"})),g=!0;return}let R=w.phase==="clean";R&&_.mode!=="cleaning"&&(_.mode="cleaning",_.onEvent("clean-start",_.room));let I=R?Q_:j_,E=w.p.clone().sub(r.position);E.y=0;let b=E.length(),P=I*x;if(b>.001){let F=Math.atan2(E.x,E.z)-r.rotation.y;for(;F>Math.PI;)F-=Math.PI*2;for(;F<-Math.PI;)F+=Math.PI*2;r.rotation.y+=F*Math.min(1,x*10)}b<=P?(r.position.set(w.p.x,0,w.p.z),_.queue.shift(),w.phase==="blocked"?(_.mode="blocked",_.blockedT=0,_.onEvent("blocked","bano")):w.phase==="home"&&_.queue.length===0&&(_.mode="docked",_.room=null,g=!0,_.onEvent("docked"))):r.position.addScaledVector(E.normalize(),P),R&&m(r.position)}}}function Du(n,e,t){let i=[],s=()=>new An({color:3135231,transparent:!0,opacity:0,side:zt,depthWrite:!1});for(let l=0;l<4;l++){let c=new ze(new Ss(.96,1,64),s());c.rotation.x=-Math.PI/2,c.position.copy(e),c.position.y=1.2,c.userData.phase=l/4,n.add(c),i.push(c)}let r=new Ke,a=new Sa({color:7332863,dashSize:.18,gapSize:.12,transparent:!0,opacity:0});for(let l of t){let c=e.clone().lerp(l,.5);c.y=Math.max(e.y,l.y)+1.4;let h=new ir(e,c,l),f=new pt().setFromPoints(h.getPoints(40)),p=new bs(f,a);p.computeLineDistances(),r.add(p)}n.add(r);let o=!1;return{setStrong(l){o=l},update(l,c){for(let h of i){let f=(c*.35+h.userData.phase)%1,p=.3+f*(o?11:8);h.scale.set(p,p,p),h.material.opacity=(1-f)*(o?.45:.14)}a.opacity+=((o?.85:0)-a.opacity)*.1,a.dashOffset=-c*.6}}}function Uu(n){let e=[],t=new Qt({map:Jn(),color:8384767,transparent:!0,depthWrite:!1,blending:En});function i(s,r,a){let o=s.clone().lerp(r,.5);return o.y=Math.max(s.y,r.y)+a,new ir(s.clone(),o,r.clone())}return{send(s,r=1.4){return new Promise(a=>{let o=[];for(let h=0;h<s.length-1;h++)o.push(i(s[h],s[h+1],1.6));let l=new en(t.clone());l.scale.set(.7,.7,1);let c=Array.from({length:10},(h,f)=>{let p=new en(t.clone()),d=1-f/10;return p.scale.set(.45*d,.45*d,1),p.material.opacity=.6*d,n.add(p),p});n.add(l),e.push({curves:o,head:l,tail:c,t:0,duration:r,resolve:a,legs:o.length})})},update(s){for(let r=e.length-1;r>=0;r--){let a=e[r];a.t+=s/a.duration;let o=l=>{let c=Math.min(Math.max(l,0),.9999)*a.legs,h=Math.floor(c);return a.curves[h].getPoint(c-h)};a.head.position.copy(o(a.t)),a.tail.forEach((l,c)=>l.position.copy(o(a.t-(c+1)*.018))),a.t>=1&&(n.remove(a.head),a.tail.forEach(l=>n.remove(l)),e.splice(r,1),a.resolve())}}}}function Nu(n){let e=[];return{at(t,i=8384767){let s=new en(new Qt({map:Jn(),color:i,transparent:!0,depthWrite:!1,blending:En}));s.position.copy(t),n.add(s),e.push({s,t:0})},update(t){for(let i=e.length-1;i>=0;i--){let s=e[i];s.t+=t*1.6;let r=.4+s.t*2.4;s.s.scale.set(r,r,1),s.s.material.opacity=Math.max(0,1-s.t),s.t>=1&&(n.remove(s.s),e.splice(i,1))}}}}var Cs={sala:{name:"la sala"},cocina:{name:"la cocina"},patio:{name:"el pasillo del patio"},pasillo:{name:"el pasillo"},bano:{name:"el ba\xF1o"},invitados:{name:"el cuarto de invitados"},trabajo:{name:"el cuarto de trabajo"},ninos:{name:"el cuarto de los ni\xF1os"},padres:{name:"el cuarto de los padres"},terraza:{name:"la terraza"}},ka={azul:5213695,rojo:16731469,verde:4054148,amarillo:16765503,morado:10906623,rosa:16743112,naranja:16751164,celeste:7332863,blanco:16773590},Fu=["alexa","alexia","apaga","apagar","apaguen","enciende","encender","enciendan","prende","prender","pon","ponla","cambia","luz","luces","cuarto","habitaci\xF3n","dormitorio","sala","cocina","pasillo","patio","ba\xF1o","ni\xF1os","padres","invitados","trabajo","oficina","terraza","todas","todo","toda","casa","robot","robotito","aspiradora","limpia","limpiar","manda","env\xEDa","vuelve","regresa","base","tele","televisi\xF3n","lavadora","aire","acondicionado","piensas","piensa","hola","gracias","qui\xE9n","eres","buenas","noches","d\xEDas","c\xF3mo","funcionas","t\xFA","a","la","el","de","del","las","los","en","al","y","por","favor","color","que","se",...Object.keys(ka)],Ou=["enciende","encender","enciendan","prende","prender"],hr=["apaga","apagar","apaguen"],nx=["pon","ponla","cambia"],ix=["robot","robotito","aspiradora"],sx=["limpia","limpiar","manda","env\xEDa"],rx=["vuelve","regresa"],ax=n=>n.toLowerCase().replace(/[¿?¡!.,]/g," ").split(/\s+/).filter(Boolean),Yt=(n,e)=>n.some(t=>e.includes(t));function ox(n){return n.includes("patio")?"patio":n.includes("ni\xF1os")?"ninos":n.includes("padres")?"padres":n.includes("invitados")?"invitados":n.includes("trabajo")||n.includes("oficina")?"trabajo":n.includes("sala")?"sala":n.includes("cocina")?"cocina":n.includes("ba\xF1o")?"bano":n.includes("terraza")?"terraza":n.includes("pasillo")?"pasillo":["cuarto","habitaci\xF3n","dormitorio"].some(e=>n.includes(e))?"ninos":null}function lx(n){return Object.keys(ka).find(e=>n.includes(e))??null}var cx=n=>n.includes("todas")||n.includes("todo")||n.includes("toda")&&n.includes("casa");function zu(n){let e=ax(n),t=e.includes("alexa")||e.includes("alexia"),i=ox(e),s=a=>({...a,wake:t});if(e.length===0)return s({type:"empty"});if(Yt(e,ix)||Yt(e,["limpia","limpiar"])&&i)return Yt(e,rx)||e.includes("base")&&!i?s({type:"robot.dock"}):i?s({type:"robot.clean",room:i}):Yt(e,sx)?s({type:"robot.clean",room:"sala"}):s({type:"robot.dock"});if(e.includes("tele")||e.includes("televisi\xF3n"))return s({type:"device",device:"tv",on:!Yt(e,hr)});if(e.includes("lavadora"))return s({type:"device",device:"washer",on:!Yt(e,hr)});if(e.includes("aire"))return s({type:"device",device:"ac",on:!Yt(e,hr)});let r=lx(e);if(r&&(Yt(e,nx)||Yt(e,["luz","luces"])||i))return s({type:"light.color",room:i??"sala",color:r});if(e.includes("buenas")&&e.includes("noches"))return s({type:"scene.night"});if(e.includes("buenas")&&e.includes("d\xEDas"))return s({type:"scene.morning"});if(Yt(e,Ou)||Yt(e,hr)){let a=Yt(e,Ou)&&!Yt(e,hr);return cx(e)||e.includes("luces")&&!i?s({type:"light.all",on:a}):s(i?{type:"light",room:i,on:a}:{type:"light",room:"sala",on:a})}return e.includes("piensas")||e.includes("piensa")?s({type:"talk.think"}):e.includes("funcionas")||e.includes("qui\xE9n")&&e.includes("eres")?s({type:"talk.whoami"}):e.includes("hola")?s({type:"talk.hello"}):e.includes("gracias")?s({type:"talk.thanks"}):t&&e.every(a=>a==="alexa"||a==="alexia")?s({type:"wake"}):s({type:"unknown"})}var ur=n=>`de ${Cs[n].name}`.replace(/^de el /,"del ");var je={lightOn:n=>`Listo, encend\xED la luz ${ur(n)}.`,lightOff:n=>`Listo, apagu\xE9 la luz ${ur(n)}.`,lightAlreadyOn:n=>`La luz ${ur(n)} ya estaba encendida.`,lightAlreadyOff:n=>`La luz ${ur(n)} ya estaba apagada.`,lightColor:(n,e)=>`Puse la luz ${ur(n)} en ${e}.`,allOn:()=>"Encend\xED todas las luces de la casa.",allOff:()=>"Apagu\xE9 todas las luces de la casa.",robotClean:n=>`Enviando el robot a limpiar ${Cs[n].name}.`,robotTryBath:()=>"Voy a intentar llevar el robot al ba\xF1o.",robotBlocked:()=>"\xA1Uy! El robot no puede entrar al ba\xF1o porque hay un escal\xF3n. Vuelve a su base.",robotDock:()=>"El robot vuelve a su base para cargarse.",robotAlreadyDocked:()=>"El robot ya est\xE1 en su base, carg\xE1ndose.",robotDone:n=>`El robot termin\xF3 de limpiar ${Cs[n].name}.`,tvOn:()=>"Encend\xED la tele.",tvOff:()=>"Apagu\xE9 la tele. Recuerda: en espera tambi\xE9n gasta energ\xEDa.",washerOn:()=>"Encend\xED la lavadora con agua fr\xEDa. \xA1As\xED ahorramos energ\xEDa!",washerOff:()=>"Apagu\xE9 la lavadora.",acOn:()=>"Encend\xED el aire del cuarto de los padres a 24 grados.",acOff:()=>"Apagu\xE9 el aire acondicionado.",night:()=>"Buenas noches. Apagu\xE9 las luces y la tele, y el robot est\xE1 en su base.",morning:()=>"\xA1Buenos d\xEDas! Encend\xED las luces de la sala y de la cocina.",think:()=>"No. Yo no pienso como las personas. Solo sigo las instrucciones que me programaron.",whoami:()=>"Soy un asistente de voz. Escucho tu orden, la convierto en datos y la env\xEDo por el WiFi al aparato correcto.",hello:()=>"\xA1Hola! Soy Alexa. \xBFQu\xE9 quieres que haga en la casa?",thanks:()=>"\xA1De nada!",wake:()=>"\xBFS\xED? Te escucho.",unknown:()=>"No entend\xED esa orden. Prueba con: \xABAlexa, enciende la luz de la sala\xBB.",empty:()=>"No escuch\xE9 nada. Mant\xE9n presionado el anillo mientras hablas."};var Bu={echo:{title:"Asistente de voz (Alexa)",body:"Escucha tu voz, entiende la orden y la env\xEDa por el WiFi al aparato correcto.",fact:"No piensa: solo sigue las instrucciones que le programaron las personas."},router:{title:"Router WiFi",body:"Reparte la conexi\xF3n por toda la casa. Por \xE9l viajan las \xF3rdenes de Alexa hasta cada aparato.",fact:"Usa una contrase\xF1a larga para que nadie extra\xF1o entre a tu red."},tv:{title:"Televisor inteligente",body:"Tiene una computadora completa: se conecta a internet, usa aplicaciones y reproduce videos.",fact:"En \xABespera\xBB tambi\xE9n gasta energ\xEDa. Mejor apagarlo del todo."},fridge:{title:"Refrigerador",body:"Su computadora regula la temperatura y avisa si la puerta queda abierta.",fact:"\xC1brelo y espera unos segundos: ver\xE1s el aviso.",action:"Abrir o cerrar la puerta"},washer:{title:"Lavadora",body:"Su chip controla el tiempo, la cantidad de agua y la temperatura seg\xFAn el tipo de ropa.",fact:"Con carga completa y agua fr\xEDa se gasta menos agua y electricidad."},ac:{title:"Aire acondicionado",body:"Un sistema computarizado mantiene la temperatura ideal en el cuarto de los padres.",fact:"Ni muy fr\xEDo ni muy caliente: as\xED ahorra energ\xEDa."},robot:{title:"Robot aspiradora",body:"Usa sensores y un mapa de la casa para limpiar solo. \xA1Este plano sali\xF3 de su mapa!",fact:"No puede subir escalones. Por eso no entra al ba\xF1o."},motion:{title:"Sensor de movimiento",body:"Detecta cuando alguien entra al ba\xF1o y enciende la luz sin tocar nada.",fact:"Si no detecta a nadie, apaga la luz sola y ahorra energ\xEDa.",action:"Hacer que alguien entre"},flush:{title:"Descarga sin contacto",body:"Un sensor detecta la mano y descarga la taza del ba\xF1o sin tocarla.",fact:"Es m\xE1s higi\xE9nico: no hay bot\xF3n que tocar.",action:"Pasar la mano por el sensor"},toilet:{title:"Inodoro con sensor",body:"Tiene un sensor sin contacto encima del tanque. Pasa la mano y se descarga solo.",fact:"Funciona con un peque\xF1o chip, igual que otros aparatos de la casa.",action:"Pasar la mano por el sensor"},light:{title:"Foco inteligente",body:"Es un foco LED conectado al WiFi. Se enciende, se apaga y cambia de color con la voz o el celular.",fact:"Un LED de 9 W alumbra casi igual que un foco com\xFAn de 60 W.",action:"Encender o apagar"}};var ku={voice:"Paulina",files:{"Listo, encend\xED la luz de la sala.":"voces/77c977a420b0.m4a","Listo, encend\xED la luz de la cocina.":"voces/87146bd808ec.m4a","Listo, encend\xED la luz del pasillo del patio.":"voces/121acef863db.m4a","Listo, encend\xED la luz del pasillo.":"voces/74347049e8a3.m4a","Listo, encend\xED la luz del ba\xF1o.":"voces/783ae2305545.m4a","Listo, encend\xED la luz del cuarto de invitados.":"voces/608e119b56fb.m4a","Listo, encend\xED la luz del cuarto de trabajo.":"voces/104ff605a298.m4a","Listo, encend\xED la luz del cuarto de los ni\xF1os.":"voces/1667626d16b5.m4a","Listo, encend\xED la luz del cuarto de los padres.":"voces/4f8161400457.m4a","Listo, encend\xED la luz de la terraza.":"voces/86b121460d4f.m4a","Listo, apagu\xE9 la luz de la sala.":"voces/3b94e527fd97.m4a","Listo, apagu\xE9 la luz de la cocina.":"voces/2ffc732851f6.m4a","Listo, apagu\xE9 la luz del pasillo del patio.":"voces/0ba40e6e9687.m4a","Listo, apagu\xE9 la luz del pasillo.":"voces/f4b3ba76bb52.m4a","Listo, apagu\xE9 la luz del ba\xF1o.":"voces/73442296e057.m4a","Listo, apagu\xE9 la luz del cuarto de invitados.":"voces/4f51305074b2.m4a","Listo, apagu\xE9 la luz del cuarto de trabajo.":"voces/6ca9dc36aaff.m4a","Listo, apagu\xE9 la luz del cuarto de los ni\xF1os.":"voces/58c8ac78801a.m4a","Listo, apagu\xE9 la luz del cuarto de los padres.":"voces/8cf2d870da25.m4a","Listo, apagu\xE9 la luz de la terraza.":"voces/8a659f0ffbfd.m4a","La luz de la sala ya estaba encendida.":"voces/9c9c4edb6491.m4a","La luz de la cocina ya estaba encendida.":"voces/87a653224403.m4a","La luz del pasillo del patio ya estaba encendida.":"voces/d71ab4fe5ddf.m4a","La luz del pasillo ya estaba encendida.":"voces/5cf159129383.m4a","La luz del ba\xF1o ya estaba encendida.":"voces/2419e61e67f6.m4a","La luz del cuarto de invitados ya estaba encendida.":"voces/48cc1185d7c3.m4a","La luz del cuarto de trabajo ya estaba encendida.":"voces/150d2b387fbd.m4a","La luz del cuarto de los ni\xF1os ya estaba encendida.":"voces/2fbdeb8cb371.m4a","La luz del cuarto de los padres ya estaba encendida.":"voces/ee1f5764827c.m4a","La luz de la terraza ya estaba encendida.":"voces/0d5680a374dd.m4a","La luz de la sala ya estaba apagada.":"voces/2fcf0542416b.m4a","La luz de la cocina ya estaba apagada.":"voces/ec08d506f206.m4a","La luz del pasillo del patio ya estaba apagada.":"voces/d9e0fd9a11dc.m4a","La luz del pasillo ya estaba apagada.":"voces/63654e4955b4.m4a","La luz del ba\xF1o ya estaba apagada.":"voces/0ccb9a3ea80b.m4a","La luz del cuarto de invitados ya estaba apagada.":"voces/9ec81d9c93db.m4a","La luz del cuarto de trabajo ya estaba apagada.":"voces/429c0ffc6777.m4a","La luz del cuarto de los ni\xF1os ya estaba apagada.":"voces/9dfebd3642c0.m4a","La luz del cuarto de los padres ya estaba apagada.":"voces/b4ba9fb25996.m4a","La luz de la terraza ya estaba apagada.":"voces/80b42e7dd577.m4a","Puse la luz de la sala en azul.":"voces/9a7e6a17ae2d.m4a","Puse la luz de la sala en rojo.":"voces/0f02c38b7dd3.m4a","Puse la luz de la sala en verde.":"voces/cd26d5ecf135.m4a","Puse la luz de la sala en amarillo.":"voces/8d64a3fc99ab.m4a","Puse la luz de la sala en morado.":"voces/01756e34623e.m4a","Puse la luz de la sala en rosa.":"voces/a6a9ed77d53d.m4a","Puse la luz de la sala en naranja.":"voces/f4542a542a57.m4a","Puse la luz de la sala en celeste.":"voces/62e2ce616b99.m4a","Puse la luz de la sala en blanco.":"voces/d014400b774e.m4a","Puse la luz de la cocina en azul.":"voces/b6555a2fc5b5.m4a","Puse la luz de la cocina en rojo.":"voces/a4f9a6ba96c4.m4a","Puse la luz de la cocina en verde.":"voces/f6ba3c97663c.m4a","Puse la luz de la cocina en amarillo.":"voces/640527dd6ec3.m4a","Puse la luz de la cocina en morado.":"voces/5361fa1c4938.m4a","Puse la luz de la cocina en rosa.":"voces/59dfe56c41a8.m4a","Puse la luz de la cocina en naranja.":"voces/47dc76361adc.m4a","Puse la luz de la cocina en celeste.":"voces/bd28fa28615b.m4a","Puse la luz de la cocina en blanco.":"voces/fd5991ae00eb.m4a","Puse la luz del pasillo del patio en azul.":"voces/14c817f0607b.m4a","Puse la luz del pasillo del patio en rojo.":"voces/220fbc779c9e.m4a","Puse la luz del pasillo del patio en verde.":"voces/fc48d000423e.m4a","Puse la luz del pasillo del patio en amarillo.":"voces/c8895412187e.m4a","Puse la luz del pasillo del patio en morado.":"voces/100dbfecce38.m4a","Puse la luz del pasillo del patio en rosa.":"voces/5f0784ea9b44.m4a","Puse la luz del pasillo del patio en naranja.":"voces/dac7a310e562.m4a","Puse la luz del pasillo del patio en celeste.":"voces/1046497d613c.m4a","Puse la luz del pasillo del patio en blanco.":"voces/ef1934ea5455.m4a","Puse la luz del pasillo en azul.":"voces/a06b5248eb6c.m4a","Puse la luz del pasillo en rojo.":"voces/4415b3eb9bbb.m4a","Puse la luz del pasillo en verde.":"voces/13006d28bffd.m4a","Puse la luz del pasillo en amarillo.":"voces/99e8a71a6e16.m4a","Puse la luz del pasillo en morado.":"voces/71c52bca9726.m4a","Puse la luz del pasillo en rosa.":"voces/79532119c083.m4a","Puse la luz del pasillo en naranja.":"voces/ef8918984383.m4a","Puse la luz del pasillo en celeste.":"voces/34adf0e1da99.m4a","Puse la luz del pasillo en blanco.":"voces/36b865cb9240.m4a","Puse la luz del ba\xF1o en azul.":"voces/8ebb00bde36d.m4a","Puse la luz del ba\xF1o en rojo.":"voces/f8cc4494f29c.m4a","Puse la luz del ba\xF1o en verde.":"voces/748716dfca6b.m4a","Puse la luz del ba\xF1o en amarillo.":"voces/7285cbceb579.m4a","Puse la luz del ba\xF1o en morado.":"voces/d9ab88c1ba1e.m4a","Puse la luz del ba\xF1o en rosa.":"voces/cfa6cdd84e36.m4a","Puse la luz del ba\xF1o en naranja.":"voces/e0524d8d0694.m4a","Puse la luz del ba\xF1o en celeste.":"voces/fe49f7f49fe6.m4a","Puse la luz del ba\xF1o en blanco.":"voces/73db85b92380.m4a","Puse la luz del cuarto de invitados en azul.":"voces/abe02b51bf84.m4a","Puse la luz del cuarto de invitados en rojo.":"voces/6eba1a84e9f1.m4a","Puse la luz del cuarto de invitados en verde.":"voces/66e4b28e3ac3.m4a","Puse la luz del cuarto de invitados en amarillo.":"voces/dcc35ca6855a.m4a","Puse la luz del cuarto de invitados en morado.":"voces/cc146ddc1fd7.m4a","Puse la luz del cuarto de invitados en rosa.":"voces/3aa645a2ad5c.m4a","Puse la luz del cuarto de invitados en naranja.":"voces/381a305f8b6a.m4a","Puse la luz del cuarto de invitados en celeste.":"voces/8af59c6dcc55.m4a","Puse la luz del cuarto de invitados en blanco.":"voces/3e7e14ba0474.m4a","Puse la luz del cuarto de trabajo en azul.":"voces/2b511d286d72.m4a","Puse la luz del cuarto de trabajo en rojo.":"voces/d38aa27763a8.m4a","Puse la luz del cuarto de trabajo en verde.":"voces/012f76d4ef41.m4a","Puse la luz del cuarto de trabajo en amarillo.":"voces/a6c432bd5371.m4a","Puse la luz del cuarto de trabajo en morado.":"voces/59ab1182f5f9.m4a","Puse la luz del cuarto de trabajo en rosa.":"voces/547887d5c061.m4a","Puse la luz del cuarto de trabajo en naranja.":"voces/a34042367feb.m4a","Puse la luz del cuarto de trabajo en celeste.":"voces/e62a582dd5ea.m4a","Puse la luz del cuarto de trabajo en blanco.":"voces/a3705ea8d72f.m4a","Puse la luz del cuarto de los ni\xF1os en azul.":"voces/c4ec9baee6a1.m4a","Puse la luz del cuarto de los ni\xF1os en rojo.":"voces/f251d5f764a0.m4a","Puse la luz del cuarto de los ni\xF1os en verde.":"voces/3f554f5596f0.m4a","Puse la luz del cuarto de los ni\xF1os en amarillo.":"voces/b5fcfb61c89d.m4a","Puse la luz del cuarto de los ni\xF1os en morado.":"voces/ea4a5f0d274e.m4a","Puse la luz del cuarto de los ni\xF1os en rosa.":"voces/f96e6741922a.m4a","Puse la luz del cuarto de los ni\xF1os en naranja.":"voces/8691a8db4a8e.m4a","Puse la luz del cuarto de los ni\xF1os en celeste.":"voces/361b64a4f4ff.m4a","Puse la luz del cuarto de los ni\xF1os en blanco.":"voces/3d4940ab769d.m4a","Puse la luz del cuarto de los padres en azul.":"voces/94e8b7c0dff3.m4a","Puse la luz del cuarto de los padres en rojo.":"voces/5f48b3f9ae0e.m4a","Puse la luz del cuarto de los padres en verde.":"voces/cd2305892a1f.m4a","Puse la luz del cuarto de los padres en amarillo.":"voces/1285a06b2e7d.m4a","Puse la luz del cuarto de los padres en morado.":"voces/e607e3af12cd.m4a","Puse la luz del cuarto de los padres en rosa.":"voces/5e95d0a885d9.m4a","Puse la luz del cuarto de los padres en naranja.":"voces/e9ec7462465a.m4a","Puse la luz del cuarto de los padres en celeste.":"voces/3063ebdc09bd.m4a","Puse la luz del cuarto de los padres en blanco.":"voces/e4dcd0d5677f.m4a","Puse la luz de la terraza en azul.":"voces/028d0707815b.m4a","Puse la luz de la terraza en rojo.":"voces/ac8deb701d52.m4a","Puse la luz de la terraza en verde.":"voces/be54a719b306.m4a","Puse la luz de la terraza en amarillo.":"voces/ec5f018e0efd.m4a","Puse la luz de la terraza en morado.":"voces/23d55d067824.m4a","Puse la luz de la terraza en rosa.":"voces/dc2817a5270e.m4a","Puse la luz de la terraza en naranja.":"voces/3924ba012af3.m4a","Puse la luz de la terraza en celeste.":"voces/7ba30296f296.m4a","Puse la luz de la terraza en blanco.":"voces/a8623fbaf4d1.m4a","Encend\xED todas las luces de la casa.":"voces/364f4e5fda93.m4a","Apagu\xE9 todas las luces de la casa.":"voces/6a74e6f31509.m4a","Enviando el robot a limpiar la sala.":"voces/64bb98101e4d.m4a","Enviando el robot a limpiar la cocina.":"voces/a5a9c6a2e17d.m4a","Enviando el robot a limpiar el pasillo del patio.":"voces/79f642c6a919.m4a","Enviando el robot a limpiar el pasillo.":"voces/f8d6bbf07f17.m4a","Enviando el robot a limpiar el ba\xF1o.":"voces/eb9db5b6dcd4.m4a","Enviando el robot a limpiar el cuarto de invitados.":"voces/64cbff5bc3d9.m4a","Enviando el robot a limpiar el cuarto de trabajo.":"voces/3e007f6025a1.m4a","Enviando el robot a limpiar el cuarto de los ni\xF1os.":"voces/edca008354b9.m4a","Enviando el robot a limpiar el cuarto de los padres.":"voces/dd9d3fd19a98.m4a","Enviando el robot a limpiar la terraza.":"voces/7f8651a1a2b3.m4a","Voy a intentar llevar el robot al ba\xF1o.":"voces/07efe5e54a4b.m4a","\xA1Uy! El robot no puede entrar al ba\xF1o porque hay un escal\xF3n. Vuelve a su base.":"voces/2d672c09a345.m4a","El robot vuelve a su base para cargarse.":"voces/a9e6733a865e.m4a","El robot ya est\xE1 en su base, carg\xE1ndose.":"voces/e84cf868149d.m4a","El robot termin\xF3 de limpiar la sala.":"voces/6c2798b2fd27.m4a","El robot termin\xF3 de limpiar la cocina.":"voces/191aceb629b3.m4a","El robot termin\xF3 de limpiar el pasillo del patio.":"voces/92fb2be19df6.m4a","El robot termin\xF3 de limpiar el pasillo.":"voces/5d6812294c35.m4a","El robot termin\xF3 de limpiar el ba\xF1o.":"voces/e6d377d8a31d.m4a","El robot termin\xF3 de limpiar el cuarto de invitados.":"voces/a807821eccd8.m4a","El robot termin\xF3 de limpiar el cuarto de trabajo.":"voces/a69351484dea.m4a","El robot termin\xF3 de limpiar el cuarto de los ni\xF1os.":"voces/c66b70498bc3.m4a","El robot termin\xF3 de limpiar el cuarto de los padres.":"voces/09d36bb06ed2.m4a","El robot termin\xF3 de limpiar la terraza.":"voces/46475e19ae61.m4a","Encend\xED la tele.":"voces/765a658ee6e6.m4a","Apagu\xE9 la tele. Recuerda: en espera tambi\xE9n gasta energ\xEDa.":"voces/3f7a0d99645c.m4a","Encend\xED la lavadora con agua fr\xEDa. \xA1As\xED ahorramos energ\xEDa!":"voces/e4974c28d4ea.m4a","Apagu\xE9 la lavadora.":"voces/0fbb3bc27fc4.m4a","Encend\xED el aire del cuarto de los padres a 24 grados.":"voces/d32e3e8e222a.m4a","Apagu\xE9 el aire acondicionado.":"voces/2880c4ea0b72.m4a","Buenas noches. Apagu\xE9 las luces y la tele, y el robot est\xE1 en su base.":"voces/d7be7c32e31c.m4a","\xA1Buenos d\xEDas! Encend\xED las luces de la sala y de la cocina.":"voces/e6f4d8580a39.m4a","No. Yo no pienso como las personas. Solo sigo las instrucciones que me programaron.":"voces/4b36ebc5e00e.m4a","Soy un asistente de voz. Escucho tu orden, la convierto en datos y la env\xEDo por el WiFi al aparato correcto.":"voces/8a6adf95bc3f.m4a","\xA1Hola! Soy Alexa. \xBFQu\xE9 quieres que haga en la casa?":"voces/ebba2c1db4dd.m4a","\xA1De nada!":"voces/92a2fc164a8c.m4a","\xBFS\xED? Te escucho.":"voces/2693981589ff.m4a","No entend\xED esa orden. Prueba con: \xABAlexa, enciende la luz de la sala\xBB.":"voces/09eb6c4c0364.m4a","No escuch\xE9 nada. Mant\xE9n presionado el anillo mientras hablas.":"voces/d984d5135089.m4a"}};var ux,Ps=()=>ux??=new AudioContext;function _n(n,e,t,i="sine",s=.18){let r=Ps(),a=r.createOscillator(),o=r.createGain();a.type=i,a.frequency.value=n,o.gain.setValueAtTime(0,r.currentTime+e),o.gain.linearRampToValueAtTime(s,r.currentTime+e+.02),o.gain.exponentialRampToValueAtTime(1e-4,r.currentTime+e+t),a.connect(o).connect(r.destination),a.start(r.currentTime+e),a.stop(r.currentTime+e+t+.05)}var Rt={listen(){_n(660,0,.12),_n(990,.08,.16)},stop(){_n(880,0,.1),_n(560,.07,.14)},ok(){_n(784,0,.12,"triangle"),_n(1175,.1,.2,"triangle")},error(){_n(330,0,.18,"square",.06),_n(247,.15,.25,"square",.06)},beep(){_n(1400,0,.08,"square",.05),_n(1400,.14,.08,"square",.05)},click(){_n(1200,0,.04,"triangle",.08)},flush(){let n=Ps(),e=n.sampleRate*2.4,t=n.createBuffer(1,e,n.sampleRate),i=t.getChannelData(0);for(let o=0;o<e;o++)i[o]=(Math.random()*2-1)*Math.sin(o/e*Math.PI);let s=n.createBufferSource();s.buffer=t;let r=n.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(600,n.currentTime),r.frequency.linearRampToValueAtTime(1800,n.currentTime+.8),r.frequency.linearRampToValueAtTime(400,n.currentTime+2.4);let a=n.createGain();a.gain.value=.35,s.connect(r).connect(a).connect(n.destination),s.start()},unlock(){let n=Ps();if(n.resume(),n.__unlocked)return;n.__unlocked=!0;let e=n.createBufferSource();e.buffer=n.createBuffer(1,1,22050),e.connect(n.destination),e.start()}},dr=null;function mc(){let e=speechSynthesis.getVoices().filter(r=>r.lang.toLowerCase().startsWith("es")).filter(r=>r.localService),t=r=>/premium/i.test(r.name)?2:/enhanced|mejorada/i.test(r.name)?1:0,i=["Paulina","M\xF3nica","Monica","Marisol","Helena","Sabina","Laura"],s=r=>t(r)*100-(i.findIndex(a=>r.name.includes(a))+1||50);return dr=[...e].sort((r,a)=>s(a)-s(r))[0]??null,dr}typeof speechSynthesis<"u"&&(speechSynthesis.onvoiceschanged=mc,mc());var Ha=null,Va=null,pc=new Map,dx=n=>(pc.has(n)||pc.set(n,fetch(n).then(e=>e.arrayBuffer()).then(e=>Ps().decodeAudioData(e))),pc.get(n));function fx(n,{onStart:e,end:t}){let i=Ps(),s=!1,r=null,a=null;Ha={pause(){s=!0,clearTimeout(a);try{r?.stop()}catch{}}},dx(n).then(o=>{if(!s){if(i.state!=="running")throw new Error("audio locked");r=i.createBufferSource(),r.buffer=o,r.connect(i.destination),r.onended=()=>{clearTimeout(a),t()},r.start(),a=setTimeout(t,o.duration*1e3+1500),e?.()}}).catch(()=>{s||px(n,{onStart:e,end:t})})}function px(n,{onStart:e,end:t}){let i=new Audio(n);Ha=i,i.onplay=()=>e?.(),i.onended=t,i.onerror=t,i.play().catch(t)}function Hu(n,{onStart:e,onEnd:t}={}){mx();let i=ku.files[n];if(i){let o=!1,l=()=>{o||(o=!0,t?.())};Va=l,typeof AudioContext<"u"&&Ps().resume?.(),fx(i,{onStart:e,end:l}),window.__casaLastSpeech={text:n,source:"recorded",file:i};return}window.__casaLastSpeech={text:n,source:"tts"};let s=!1,r=()=>{s||(s=!0,t?.())};if(Va=r,t=r,typeof speechSynthesis>"u"||!(dr??mc())){e?.(),setTimeout(()=>t?.(),Math.min(4e3,600+n.length*45));return}speechSynthesis.cancel();let a=new SpeechSynthesisUtterance(n);a.voice=dr,a.lang=dr.lang,a.rate=1.05,a.pitch=1.05,a.onstart=()=>e?.(),a.onend=()=>t?.(),a.onerror=()=>t?.(),speechSynthesis.speak(a)}function mx(){Ha?.pause(),Ha=null,typeof speechSynthesis<"u"&&speechSynthesis.cancel();let n=Va;Va=null,n?.()}var gx=new URL("model/vosk-es.tar.gz",location.href.split("#")[0]).href;function Vu({grammar:n,onPartial:e,onResult:t,onStatus:i}){let s=null,r=null,a=null,o="off",l=[],c=null;async function h(){if(typeof Vosk>"u")throw new Error("vosk-missing");if(location.protocol==="file:")throw new Error("file-protocol");i("loading"),s=await Vosk.createModel(gx),i("ready")}async function f(){if(a)return;let d=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0,channelCount:1}}),g=new AudioContext;r=new s.KaldiRecognizer(g.sampleRate,JSON.stringify([...n,"[unk]"])),r.on("partialresult",u=>{let y=u.result.partial;console.debug("[voz] parcial:",y),y&&o!=="off"&&e(p(y))}),r.on("result",u=>{let y=u.result.text?.trim();if(console.debug("[voz] resultado:",y),o==="handsfree"){y&&t(y,"handsfree");return}if(y&&l.push(y),c){let v=c;c=null,v()}});let _=g.createMediaStreamSource(d),m=g.createScriptProcessor(4096,1,1);m.onaudioprocess=u=>{o!=="off"&&(r.acceptWaveform(u.inputBuffer),location.hash.includes("debug")&&console.debug("[voz] audio",Math.max(...u.inputBuffer.getChannelData(0)).toFixed(3)))},_.connect(m),m.connect(g.destination),a={stream:d,context:g,processor:m}}let p=(d="")=>[...l,d].filter(Boolean).join(" ");return{load:h,get ready(){return!!s},async startPush(){await f(),await a.context.resume(),l=[],o="push"},stopPush(){return o!=="push"?Promise.resolve(""):new Promise(d=>{let g=()=>{o="off";let _=p();l=[],d(_)};c=g,r.retrieveFinalResult(),setTimeout(()=>{c===g&&(c=null,g())},1200)})},async setHandsFree(d){d?(await f(),await a.context.resume(),o="handsfree"):o==="handsfree"&&(o="off")}}}var _x={chip:'<svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="1" class="fill"/><path d="M9 2v3M12 2v3M15 2v3M9 19v3M12 19v3M15 19v3M2 9h3M2 12h3M2 15h3M19 9h3M19 12h3M19 15h3"/></svg>',lock:'<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><circle cx="12" cy="16" r="1.4" class="fill"/></svg>',eye:'<svg viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3" class="fill"/></svg>',clock:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',alert:'<svg viewBox="0 0 24 24"><path d="M12 3l10 18H2z"/><path d="M12 10v5"/><circle cx="12" cy="18" r="0.8" class="fill"/></svg>',people:'<svg viewBox="0 0 24 24"><circle cx="8" cy="8" r="3"/><circle cx="16.5" cy="9" r="2.5"/><path d="M2.5 20c0-3.5 2.5-6 5.5-6s5.5 2.5 5.5 6M13.5 20c.2-3 1.5-5 3-5s3.5 2 3.5 5"/></svg>',wifi:'<svg viewBox="0 0 24 24"><path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1.2" class="fill"/></svg>',leaf:'<svg viewBox="0 0 24 24"><path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15z"/><path d="M5 19c4-4 7-6 10-8"/></svg>',voice:'<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>'};function Gu(n){let e=new Map;return{show(t,i,{icon:s="chip",text:r="",kind:a="chip",delay:o=0}={}){this.hide(t);let l=document.createElement("div"),c=document.createElement("div");c.className=["callout",...a.split(" ").map(f=>`callout--${f}`)].join(" "),c.style.animationDelay=`${o}ms`,c.innerHTML=`<span class="callout-icon">${_x[s]??""}</span>${r?`<span class="callout-text">${r}</span>`:""}`,l.appendChild(c);let h=new Rs(l);h.position.copy(i),h.position.y+=.35,n.add(h),e.set(t,h)},hide(t){let i=e.get(t);i&&(i.element.remove(),n.remove(i),e.delete(t))},clear(){for(let t of[...e.keys()])this.hide(t)}}}var fr=[{id:"portada",name:"Portada"},{id:"intro",name:"Introducci\xF3n"},{id:"electro",name:"Electrodom\xE9sticos"},{id:"casa",name:"Casa inteligente"},{id:"energia",name:"Energ\xEDa"},{id:"riesgos",name:"Riesgos"},{id:"demo",name:"Demostraci\xF3n"},{id:"piensan",name:"\xBFPiensan?"},{id:"fin",name:"Conclusiones"}],Zt=["sala","cocina","ninos","pasillo"],Ln=["sala","cocina","patio","pasillo","bano","invitados","trabajo","ninos","padres","terraza"],qu=(n,e,t=.6)=>{let i=St(n,e);return new A(i.x,t,i.z)},Wu=()=>qu(600,1105,.95),Xu=()=>qu(640,740,.6),xx='Hoy en d\xEDa, la mayor\xEDa de los electrodom\xE9sticos modernos tienen un "chip" o microprocesador que funciona como una peque\xF1a computadora. Estos son algunos ejemplos:',vx="La tecnolog\xEDa en casa tambi\xE9n nos ayuda a cuidar el planeta. Aqu\xED hay algunas formas de ahorrar energ\xEDa:",yx="Aunque la tecnolog\xEDa nos facilita la vida, tambi\xE9n tiene riesgos que debemos conocer:",Is=[{section:"portada",cover:!0,enter(n){n.base({lights:Ln,labels:!1}),n.fly(n.poses.cover,.01),n.build(),n.orbit(!0)}},{section:"intro",title:"Introducci\xF3n",paragraphs:["En la actualidad, la tecnolog\xEDa ha llegado a casi todos los rincones de nuestra vida, y nuestro hogar no es la excepci\xF3n. Ya no solo usamos computadoras de escritorio o laptops; ahora, muchos de los aparatos que usamos a diario, como la lavadora o el refrigerador, tienen peque\xF1as computadoras incorporadas para funcionar mejor."],enter(n){n.base({lights:[]}),n.fly(n.poses.overview,1.6),["washer","fridge","tv","microwave","ac","router","echo"].forEach((t,i)=>n.later(900+i*450,()=>n.callouts.show(t,n.anchors[t](),{icon:"chip",kind:"chip"}))),Ln.forEach((t,i)=>n.later(600+i*280,()=>n.setLight(t,!0)))}},{section:"intro",title:"Introducci\xF3n",paragraphs:["En la actualidad, la tecnolog\xEDa ha llegado a casi todos los rincones de nuestra vida, y nuestro hogar no es la excepci\xF3n. Ya no solo usamos computadoras de escritorio o laptops; ahora, muchos de los aparatos que usamos a diario, como la lavadora o el refrigerador, tienen peque\xF1as computadoras incorporadas para funcionar mejor.",'Este trabajo tiene como objetivo investigar c\xF3mo la tecnolog\xEDa se ha integrado en nuestras casas, qu\xE9 es exactamente una "casa inteligente", c\xF3mo podemos usar estos avances para ahorrar energ\xEDa y, muy importante, cu\xE1les son los riesgos que debemos conocer para usar la tecnolog\xEDa de forma segura. Finalmente, responderemos a una pregunta muy interesante: <mark>\xBFrealmente piensan las cosas?</mark>'],enter(n){n.base({lights:Zt}),n.fly(n.poses.overview,1.2),n.orbit(!0,.35)}},...[{d:"washer",name:"Lavadoras y secadoras",text:"Tienen computadoras que controlan el tiempo, la cantidad de agua y la temperatura seg\xFAn el tipo de ropa.",example:"Para la ropa delicada se elige un programa suave.",off:[-1,3.8,.9],run:n=>n.devices.setWasher(!0)},{d:"fridge",name:"Refrigeradores",text:"Los modelos m\xE1s nuevos tienen pantallas t\xE1ctiles y computadoras que regulan la temperatura y avisan si la puerta queda abierta.",example:"El aviso recuerda cerrarla para no gastar energ\xEDa de m\xE1s.",off:[-1.6,2.4,3.4],run:n=>{n.devices.fridge.open=!0,n.devices.fridge.openedAt=n.now()-3,n.devices.fridge.warned=!0}},{d:"microwave",name:"Hornos microondas",text:"Usan una computadora para controlar el tiempo y la potencia de cocci\xF3n.",example:"Con el bot\xF3n de descongelar ajusta la potencia sola.",off:[-1.2,1.6,2.6],run:n=>n.devices.setKitchen("microwave",!0)},{d:"tv",name:"Televisores inteligentes (Smart TV)",text:"Tienen computadoras completas que permiten conectarse a internet, usar aplicaciones y reproducir videos.",example:"Puedes ver una serie sin necesidad de otro aparato.",off:[-1.2,2.2,3.8],run:n=>n.devices.setTv(!0)},{d:"ac",name:"Aires acondicionados",text:"Incorporan sistemas computarizados para mantener la temperatura ideal y ahorrar energ\xEDa.",example:"Reducen la potencia cuando no hay nadie en el cuarto.",off:[-3.8,2.2,.4],run:n=>n.devices.setAc(!0)},{d:"coffee",name:"Cafeteras y lavavajillas",text:"Tambi\xE9n tienen sistemas programables para preparar caf\xE9 o lavar platos de forma autom\xE1tica.",example:"La cafetera puede empezar a preparar caf\xE9 a una hora fijada.",off:[-1.4,1.8,2.8],run:n=>{n.devices.setKitchen("coffee",!0),n.devices.setKitchen("dishwasher",!0),n.callouts.show("dishwasher",n.anchors.dishwasher(),{icon:"chip",kind:"chip",delay:500})}}].map((n,e,t)=>({section:"electro",title:"\xBFQu\xE9 electrodom\xE9sticos tienen una computadora incorporada?",lead:xx,item:{name:n.name,text:n.text,example:n.example},counter:[e+1,t.length],enter(i){i.base({lights:Ln}),t.slice(0,e).forEach(s=>i.callouts.show(s.d,i.anchors[s.d](),{icon:"chip",kind:"chip quiet"})),i.look(i.anchors[n.d](),n.off),i.later(700,()=>{i.callouts.show(n.d,i.anchors[n.d](),{icon:"chip",text:"chip",kind:"chip"}),n.run(i)})}})),{section:"casa",title:"\xBFQu\xE9 es una casa inteligente?",item:{text:"Una casa inteligente es una vivienda donde los aparatos, luces, puertas y sistemas de seguridad est\xE1n conectados a internet y se pueden controlar de forma remota.",example:"Un sensor de movimiento enciende la luz del pasillo cuando alguien pasa.",note:"En nuestra casa, el sensor de movimiento est\xE1 en el ba\xF1o."},enter(n){n.base({lights:Zt,wifi:!0}),n.fly(n.poses.overview,1.2),n.callouts.show("router",n.anchors.router(),{icon:"wifi",text:"WiFi",kind:"info"}),n.later(2600,()=>{n.fly(n.poses.bano,1.2),n.personEnter()})}},{section:"casa",title:"\xBFC\xF3mo funciona?",item:{text:"Se pueden manejar desde un tel\xE9fono celular, una tablet o incluso con la voz (usando asistentes como Alexa o Google Home).",example:"Al decir \u201Cenciende la luz de la sala\u201D, el asistente env\xEDa la orden al foco."},enter(n){n.base({lights:["cocina","pasillo"]}),n.fly(n.poses.sala,1.2),n.later(1300,()=>n.callouts.show("echo",n.anchors.echo(),{icon:"voice",text:"\xABEnciende la luz de la sala\xBB",kind:"info"})),n.later(2300,()=>n.alexaOrder("sala"))}},{section:"casa",title:"\xBFPara qu\xE9 sirve?",item:{text:"Sirve para hacer la vida m\xE1s c\xF3moda, aumentar la seguridad y ahorrar energ\xEDa.",example:"Puedes apagar las luces desde tu celular si olvidaste apagarlas, o encender el aire acondicionado antes de llegar a casa."},enter(n){n.base({lights:Zt,wifi:!0}),n.fly(n.poses.overview,1.2),n.later(800,()=>n.callouts.show("echo",n.anchors.echo(),{icon:"voice",text:"Comodidad",kind:"info"})),n.later(1300,()=>n.callouts.show("router",n.anchors.router(),{icon:"lock",text:"Seguridad",kind:"info"})),n.later(1800,()=>{n.callouts.show("ac",n.anchors.ac(),{icon:"leaf",text:"Ahorro",kind:"info"}),n.devices.setAc(!0)})}},...[{name:"Apagar y desconectar",text:"Apagar las luces y desconectar los aparatos electr\xF3nicos que no estemos usando.",example:"El televisor en \u201Cespera\u201D tambi\xE9n gasta energ\xEDa.",meter:82,enter(n){n.base({lights:Ln}),n.devices.setTv(!0),n.fly(n.poses.overview,1.2),["terraza","padres","invitados","trabajo","patio","bano"].forEach((e,t)=>n.later(900+t*350,()=>n.setLight(e,!1))),n.later(3200,()=>{n.devices.setTv(!1),n.callouts.show("tv",n.anchors.tv(),{icon:"leaf",text:"Apagada",kind:"good"})})}},{name:"Bombillas LED",text:"Usar bombillas LED, que consumen mucha menos energ\xEDa que las bombillas tradicionales.",example:"Una LED de 9 W da casi la misma luz que una tradicional de 60 W.",meter:70,led:!0,enter(n){n.base({lights:Zt}),n.look(n.anchors.light("sala"),[-3.4,1.8,2.2]),n.later(900,()=>n.callouts.show("bulb",n.anchors.light("sala"),{icon:"leaf",text:"LED 9 W",kind:"good"}))}},{name:"El refrigerador",text:"No abrir la puerta del refrigerador innecesariamente y asegurarse de que cierre bien.",example:"As\xED el fr\xEDo se mantiene dentro y el motor trabaja menos.",meter:62,enter(n){n.base({lights:Ln}),n.look(n.anchors.fridge(),[-1.6,2.4,3.4]),n.later(600,()=>{n.devices.fridge.open=!0,n.devices.fridge.openedAt=n.now(),n.devices.fridge.warned=!0}),n.later(2600,()=>{n.devices.fridge.open=!1,n.callouts.show("fridge",n.anchors.fridge(),{icon:"leaf",text:"Cerrada",kind:"good"})})}},{name:"La lavadora",text:"Usar la lavadora con carga completa y en programas de agua fr\xEDa.",example:"As\xED se gasta menos agua y electricidad en cada carga.",meter:55,enter(n){n.base({lights:Ln}),n.look(n.anchors.washer(),[-1,3.8,.9]),n.later(700,()=>{n.devices.setWasher(!0),n.callouts.show("washer",n.anchors.washer(),{icon:"leaf",text:"Agua fr\xEDa",kind:"good"})})}},{name:"Luz natural",text:"Aprovechar la luz natural del d\xEDa para no encender l\xE1mparas.",example:"Abrir las cortinas de la sala durante el d\xEDa.",meter:47,enter(n){n.base({lights:Ln}),n.fly(n.poses.overview,1.2),n.later(900,()=>n.setDay(!0)),Ln.forEach((e,t)=>n.later(1400+t*120,()=>n.setLight(e,!1)))}},{name:"Temperatura adecuada",text:"Programar el aire acondicionado o la calefacci\xF3n a temperaturas adecuadas (ni muy fr\xEDas ni muy calientes).",example:"Bajar un grado la calefacci\xF3n en invierno puede ahorrar energ\xEDa.",meter:40,enter(n){n.base({lights:Zt}),n.look(n.anchors.ac(),[-3.8,2.2,.4]),n.later(700,()=>{n.devices.setAc(!0),n.callouts.show("ac",n.anchors.ac(),{icon:"leaf",text:"24 \xB0C",kind:"good"})})}}].map((n,e,t)=>({section:"energia",title:"\xBFC\xF3mo ayudar a ahorrar la energ\xEDa?",lead:vx,item:{name:n.name,text:n.text,example:n.example},counter:[e+1,t.length],meter:{from:e===0?100:t[e-1].meter,to:n.meter},led:n.led,enter:n.enter})),...[{name:"Riesgos de seguridad",text:'Si no protegemos bien nuestra red WiFi, personas extra\xF1as podr\xEDan "hackear" nuestras c\xE1maras o computadoras.',example:"Conviene usar una contrase\xF1a larga y distinta para cada cuenta.",enter(n){n.base({lights:Zt,wifi:!0}),n.look(n.anchors.router(),[-3.2,2.6,2.2]),n.later(800,()=>n.callouts.show("router",n.anchors.router(),{icon:"lock",text:"Contrase\xF1a larga",kind:"risk"}))}},{name:"P\xE9rdida de privacidad",text:"Los aparatos inteligentes guardan datos sobre lo que hacemos. Debemos tener cuidado con la informaci\xF3n que compartimos.",example:"Revisa los permisos de una app antes de instalarla.",enter(n){n.base({lights:Zt}),n.look(n.anchors.echo(),[-3,2.4,2.4]),n.later(700,()=>n.callouts.show("echo",n.anchors.echo(),{icon:"eye",text:"Guarda datos",kind:"risk"})),n.later(1200,()=>n.callouts.show("tv",n.anchors.tv(),{icon:"eye",text:"Guarda datos",kind:"risk"}))}},{name:"Adicci\xF3n y distracci\xF3n",text:"Pasar demasiado tiempo frente a pantallas (celular, videojuegos, TV) puede afectar nuestras relaciones familiares, el estudio y nuestra salud.",example:"Conviene dejar el celular fuera del cuarto a la hora de dormir.",enter(n){n.base({lights:Zt}),n.devices.setTv(!0),n.fly(n.poses.sala,1.2),n.later(800,()=>n.callouts.show("tv",n.anchors.tv(),{icon:"clock",text:"Tiempo de pantalla",kind:"risk"}))}},{name:"Ciberacoso",text:"Es un riesgo en el que personas pueden molestar o amenazar a trav\xE9s de internet.",example:"Si ocurre, guarda las pruebas y avisa a un adulto de confianza.",enter(n){n.base({lights:[...Zt,"trabajo"]}),n.look(Wu(),[-2.6,2,2.4]),n.later(800,()=>n.callouts.show("pc",Wu(),{icon:"alert",text:"Avisa a un adulto",kind:"risk"}))}},{name:"Aislamiento",text:"A veces, las personas se encierran en su cuarto con la tecnolog\xEDa y dejan de convivir con los dem\xE1s.",example:"Una comida familiar sin pantallas ayuda a convivir.",enter(n){n.base({lights:Zt}),n.look(Xu(),[-3.2,2.6,2.6]),n.later(800,()=>n.callouts.show("dining",Xu(),{icon:"people",text:"Comida sin pantallas",kind:"good"}))}}].map((n,e,t)=>({section:"riesgos",title:"\xBFQu\xE9 riesgos puede traer tanta tecnolog\xEDa en casa?",lead:yx,item:{name:n.name,text:n.text,example:n.example},counter:[e+1,t.length],enter:n.enter})),{section:"demo",demo:!0,enter(n){n.base({lights:Zt}),n.fly(n.poses.overview,1.2)}},{section:"piensan",title:"\xBFPiensan las cosas?",ask:!0,item:{text:"Pregunt\xE9mosle a Alexa:",quote:"\xABAlexa, \xBFt\xFA piensas?\xBB"},enter(n){n.base({lights:Zt}),n.look(n.anchors.echo(),[-2.8,2,2]),n.later(900,()=>n.callouts.show("echo",n.anchors.echo(),{icon:"voice",text:"\xBFT\xFA piensas?",kind:"info"}))}},{section:"piensan",title:"\xBFPiensan las cosas?",paragraphs:["Esta es una pregunta muy interesante. La respuesta es no, <mark>las cosas no piensan como los humanos.</mark>",'Las computadoras y los electrodom\xE9sticos inteligentes solo siguen instrucciones (programas) que los humanos les han dado. No tienen sentimientos, ni conciencia, ni imaginaci\xF3n. Pueden hacer c\xE1lculos muy r\xE1pido y aprender patrones (como la Inteligencia Artificial), pero no "piensan" ni toman decisiones propias basadas en emociones. Ellos solo procesan datos y ejecutan \xF3rdenes. Por ejemplo, una app que avisa del clima solo calcula con datos y f\xF3rmulas que una persona program\xF3.'],enter(n){n.base({lights:Zt}),n.look(n.anchors.echo(),[-3.4,2.6,2.6]),["echo","tv","fridge","washer","router"].forEach((e,t)=>n.later(600+t*300,()=>n.callouts.show(e,n.anchors[e](),{icon:"chip",text:"sigue instrucciones",kind:"chip quiet"})))}},...["Despu\xE9s de realizar este trabajo, podemos concluir que la tecnolog\xEDa se ha convertido en una parte fundamental de nuestro hogar. Los electrodom\xE9sticos con computadoras incorporadas y las casas inteligentes nos hacen la vida m\xE1s f\xE1cil, c\xF3moda y nos ayudan a ahorrar energ\xEDa.","Sin embargo, es muy importante usarla con responsabilidad. Debemos estar conscientes de los riesgos, como la p\xE9rdida de privacidad o el exceso de tiempo frente a las pantallas, y tomar medidas para protegernos.","Finalmente, queda claro que, aunque las m\xE1quinas hagan tareas incre\xEDbles, ellas no piensan por s\xED solas; son herramientas creadas por el ser humano para ayudarnos. <mark>El verdadero pensamiento, la creatividad y los sentimientos son caracter\xEDsticas \xFAnicas de las personas.</mark>"].map((n,e,t)=>({section:"fin",title:"Conclusiones",paragraphs:t.slice(0,e+1),enter(i){i.base({lights:Ln}),i.fly(i.poses.overview,1.4),i.orbit(!0,.25)}})),{section:"fin",thanks:!0,enter(n){n.base({lights:Ln,labels:!1}),n.fly(n.poses.cover,1.6),n.orbit(!0,.6)}}];var Yu="Thailis \xB7 Alessandro \xB7 Jesus \xB7 Dyan \xB7 Abigail",gi=n=>n.replace(/&/g,"&amp;").replace(/</g,"&lt;"),Mx=n=>gi(n).replace(/&lt;(\/?)mark>/g,"<$1mark>");function Zu(n){let e=document.body,t=document.querySelector("#story"),i=t.querySelector(".story-card"),s=t.querySelector(".story-cover"),r=t.querySelector(".story-dots"),a=-1,o=[],l=null;function c(){let v=n.buildables.map(x=>({o:x,y:x.userData.buildY??=x.position.y}));v.sort((x,C)=>h(x.o)-h(C.o)),v.forEach((x,C)=>{x.delay=.3+C/v.length*2.2,x.o.position.y=x.y+7,x.o.visible=!1}),l={items:v,t:0}}function h(v){let x=new A;return v.getWorldPosition(x),x.z*-1+x.x*.15}function f(){if(l){for(let v of l.items)v.o.position.y=v.y,v.o.visible=!0;l=null}}let p={...n,base({lights:v=[],labels:x=!0,wifi:C=!1}={}){o.forEach(clearTimeout),o=[],f(),n.callouts.clear();for(let w of Object.keys(n.rooms))n.setLight(w,v.includes(w),n.LAMP);n.devices.setTv(!1),n.devices.setWasher(!1),n.devices.setAc(!1),["microwave","coffee","dishwasher"].forEach(w=>n.devices.setKitchen(w,!1)),Object.assign(n.devices.fridge,{open:!1,warned:!0}),n.setWifi(C),n.setDay(!1),n.controls.autoRotate=!1,n.robot.state.mode!=="docked"&&n.robot.dock(),e.classList.toggle("hide-labels",!x)},later(v,x){o.push(setTimeout(x,v))},fly(v,x=1.3){n.goTo(v,x)},look(v,x,C=1.4){let w=new A(...x).multiplyScalar(1.75);n.goTo({pos:v.clone().add(w),target:v.clone()},C)},orbit(v,x=.5){n.controls.autoRotate=v,n.controls.autoRotateSpeed=x},build:c,alexaOrder(v){n.runOrder(`enciende la luz de ${n.roomName(v)}`)}};r.innerHTML=fr.map(v=>`<button type="button" class="story-dot" data-section="${v.id}"><span>${v.name}</span></button>`).join(""),r.addEventListener("click",v=>{let x=v.target.closest("[data-section]")?.dataset.section;x&&_(Is.findIndex(C=>C.section===x))});function d(v){let x=fr.find(w=>w.id===v.section),C=[];C.push(`<p class="story-eyebrow">${x.name}${v.counter?`<span>${v.counter[0]} de ${v.counter[1]}</span>`:""}</p>`),v.title&&C.push(`<h2>${gi(v.title)}</h2>`),v.lead&&C.push(`<p class="story-lead">${gi(v.lead)}</p>`);for(let w of v.paragraphs??[])C.push(`<p class="story-text">${Mx(w)}</p>`);if(v.item){let w=v.item;C.push('<div class="story-item">'),w.name&&C.push(`<h3>${gi(w.name)}</h3>`),C.push(`<p class="story-text">${gi(w.text)}</p>`),w.quote&&C.push(`<p class="story-quote">${gi(w.quote)}</p>`),w.example&&C.push(`<p class="story-example"><b>Por ejemplo:</b> ${gi(w.example)}</p>`),w.note&&C.push(`<p class="story-note">${gi(w.note)}</p>`),C.push("</div>")}if(v.meter&&C.push(`<div class="story-meter"><p>Consumo de energ\xEDa <small>(ejemplo)</small></p><div class="meter-track"><div class="meter-fill" style="width:${v.meter.from}%"></div></div><b class="meter-value">${v.meter.from}%</b></div>`),v.led&&C.push('<div class="story-led"><div><span>LED</span><i style="--w:15%"></i><b>9 W</b></div><div><span>Tradicional</span><i style="--w:100%"></i><b>60 W</b></div></div>'),v.ask&&C.push('<p class="story-hint">Mant\xE9n presionado el anillo de Alexa (o la barra espaciadora) y preg\xFAntale.</p>'),i.innerHTML=C.join(""),i.classList.remove("is-in"),i.offsetWidth,i.classList.add("is-in"),v.meter){let w=i.querySelector(".meter-fill"),R=i.querySelector(".meter-value");setTimeout(()=>{w.style.width=`${v.meter.to}%`,R.textContent=`${v.meter.to}%`},900)}}function g(v){s.innerHTML=v.thanks?`<p class="cover-eyebrow">La Inform\xE1tica en el Hogar</p><h1>\xA1Gracias!</h1><p class="cover-crew">${Yu}</p><p class="cover-grade">6to A</p>`:`<p class="cover-eyebrow">Proyecto escolar \xB7 6to A</p><h1>La Inform\xE1tica <span>en el Hogar</span></h1><p class="cover-crew">${Yu}</p><p class="cover-hint">Presiona \u2192 para empezar</p><p class="cover-version">versi\xF3n 19/10, 18:31</p>`,s.classList.remove("is-in"),s.offsetWidth,s.classList.add("is-in")}function _(v){if(v<0||v>=Is.length||v===a)return;a=v;let x=Is[v];e.classList.toggle("mode-story",!x.demo),e.classList.toggle("mode-demo",!!x.demo),e.classList.toggle("show-talk",!!x.ask);let C=!!(x.cover||x.thanks);e.classList.toggle("story-full",C),i.hidden=C||!!x.demo,s.hidden=!C,C?g(x):x.demo||d(x),r.querySelectorAll(".story-dot").forEach(w=>{let R=fr.findIndex(E=>E.id===w.dataset.section),I=fr.findIndex(E=>E.id===x.section);w.classList.toggle("is-active",R===I),w.classList.toggle("is-done",R<I)}),n.onModeChange(),x.enter(p),window.__casaStep={index:v,section:x.section}}let m=()=>_(a+1),u=()=>_(a-1);t.querySelector(".story-next").addEventListener("click",m),t.querySelector(".story-prev").addEventListener("click",u),document.querySelector("#story-resume").addEventListener("click",m),window.addEventListener("keydown",v=>{if(v.target.closest?.("input, textarea"))return;let x=e.classList.contains("mode-demo")||e.classList.contains("show-talk"),C=!!v.target.closest?.("button");if(v.code==="Space"&&!x){v.preventDefault(),v.stopImmediatePropagation(),v.repeat||m();return}v.repeat||((["ArrowRight","PageDown"].includes(v.key)||v.key==="Enter"&&!C)&&(v.preventDefault(),m()),["ArrowLeft","PageUp"].includes(v.key)&&(v.preventDefault(),u()))},!0);let y=null;return i.addEventListener("touchstart",v=>{if(v.touches.length!==1||v.target.closest("button")){y=null;return}y={x:v.touches[0].clientX,y:v.touches[0].clientY}},{passive:!0}),i.addEventListener("touchend",v=>{if(!y)return;let x=v.changedTouches[0].clientX-y.x,C=v.changedTouches[0].clientY-y.y;y=null,!(Math.abs(x)<50||Math.abs(x)<Math.abs(C)*1.5)&&(x<0?m():u())}),{go:_,next:m,prev:u,get index(){return a},demoIndex:Is.findIndex(v=>v.demo),get active(){return a>=0&&!Is[a].demo},update(v){if(!l)return;l.t+=v;let x=0;for(let C of l.items){let w=Math.min(1,Math.max(0,(l.t-C.delay)/.55));w>0&&(C.o.visible=!0);let R=1-Math.pow(1-w,3);C.o.position.y=C.y+(1-R)*7,w<1&&x++}x||(l=null)}}}function $u({canReload:n=()=>!1}={}){let e=document.querySelector("#offline"),t=location.protocol==="https:"||location.hostname==="127.0.0.1"||location.hostname==="localhost";if(!("serviceWorker"in navigator)||!t)return;let i=navigator.serviceWorker,s=!!i.controller;i.register("sw.js").then(f=>f.update()).catch(f=>console.error("[offline]",f)),document.addEventListener("visibilitychange",async()=>{document.visibilityState!=="visible"||!navigator.onLine||(await i.getRegistration())?.update().catch(()=>{})});let r=null,a=!1,o=!1,l=(f,p,d)=>{e.hidden=!1,e.dataset.state=f,e.textContent=p,clearTimeout(r),d&&(r=setTimeout(()=>{e.hidden=!0},d))};i.addEventListener("controllerchange",()=>{if(s){if(n()){location.reload();return}a=!0,l("ready","Versi\xF3n nueva guardada. Cierra y vuelve a abrir la app.")}});let c=null;i.addEventListener("message",f=>{if(f.data?.type!=="offline-status"||a)return;let{have:p,total:d}=f.data;c==="installing"?p<d&&l("saving",`${s?"Guardando versi\xF3n nueva":"Guardando para usar sin internet"}\u2026 ${Math.round(p/d*100)}%`):p>=d&&!o&&(o=!0,l("ready","Lista para usar sin internet",6e3))});let h=async()=>{let f=await i.getRegistration(),p=f?.installing??f?.waiting??f?.active;c=f?.installing?"installing":"active",p?.postMessage("status")};setInterval(h,1500),h()}var gt=n=>document.querySelector(n),gc=n=>new Promise(e=>setTimeout(e,n)),_c=(n,e,t)=>n+(e-n)*t,mr=16762746,Xa=gt("#stage"),Ht=new ma({antialias:!0,alpha:!0});Ht.setPixelRatio(Math.min(window.devicePixelRatio,2));Ht.shadowMap.enabled=!0;Ht.shadowMap.type=Jl;Ht.toneMapping=Kl;Ht.toneMappingExposure=1.05;Xa.appendChild(Ht.domElement);var qa=new Oa;qa.domElement.className="labels";Xa.appendChild(qa.domElement);var nn=new ga,yn=new Lt(36,1,.1,200),xr={maqueta:{pos:new A(-21.5,19.5,2.2),target:new A(.6,0,-.2)},arriba:{pos:new A(0,40,1.4),target:new A(0,0,.3)},bano:{pos:new A(-10.5,8.5,3.2),target:new A(-3.6,0,.1)}};yn.position.copy(xr.maqueta.pos);var Un=new Na(yn,Ht.domElement);Un.target.copy(xr.maqueta.target);Un.enableDamping=!0;Un.maxPolarAngle=1.3;Un.minDistance=7;Un.maxDistance=42;var pr=new wa(9275094,2761024,.55);nn.add(pr);var jn=new Aa(13091839,.55);jn.position.set(-10,18,8);jn.castShadow=!0;jn.shadow.mapSize.set(2048,2048);Object.assign(jn.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:1,far:50});jn.shadow.bias=-5e-4;nn.add(jn);var{group:ed,rooms:_t}=Ru();nn.add(ed);var Ne=Cu(nn,_t),vn=Lu(nn,_t),td=Uu(nn),nd=Nu(nn),Ya=Du(nn,Ne.anchors.router(),[Ne.anchors.echo(),Ne.anchors.tv(),Ne.anchors.fridge(),Ne.anchors.washer(),Ne.anchors.ac(),vn.body.position.clone().setY(.3),...Object.keys(_t).map(n=>_t[n].bulb.position.clone())]);for(let n of["sala","cocina","ninos","pasillo"])_t[n].on=!0;var bx=5.5,xn=!1;function Sx(){for(let n of Object.values(_t)){n.level=_c(n.level,n.on?1:0,.12);let e=new Ce(n.color);n.light.color.copy(e),n.light.intensity=n.level*bx*(xn?.4:1),n.bulb.material.emissive.copy(e),n.bulb.material.emissiveIntensity=n.level*2.4,n.bulb.material.color.set(n.level>.5?16777215:10197940),n.halo.material.color.copy(e),n.halo.material.opacity=n.level*.85}}function id(n){xn=n,document.body.classList.toggle("is-day",n)}function Ex(){let n=xn?1:0;return pr.intensity=_c(pr.intensity,xn?1.5:.55,.06),pr.color.lerp(new Ce(xn?14676479:9275094),.06),pr.groundColor.lerp(new Ce(xn?7114586:2761024),.06),jn.intensity=_c(jn.intensity,xn?2.2:.55,.06),jn.color.lerp(new Ce(xn?16773848:13091839),.06),n}var tn=null;function vr(n,e=1.1){let t=typeof n=="string"?xr[n]:n;tn={fromPos:yn.position.clone(),fromT:Un.target.clone(),to:t,t:0,duration:e}}function Za(){let n=Xa.clientWidth,e=Xa.clientHeight;Ht.setSize(n,e),qa.setSize(n,e),yn.aspect=n/e;let t=document.querySelector("#orders"),i=document.body.classList,s;i.contains("mode-story")?s=i.contains("story-full")||n<=900?0:-Math.min(620,n*.44)/2:s=(t&&!t.classList.contains("is-collapsed")&&n>900?330:0)/2;let r=i.contains("story-full")?-e*.14:i.contains("mode-story")&&!i.contains("show-talk")?0:50;yn.setViewOffset(n,e,s,r,n,e),yn.updateProjectionMatrix()}window.addEventListener("resize",Za);Za();var Qe={you:gt("#bubble-you"),alexa:gt("#bubble-alexa"),ring:gt("#alexa-ring"),hint:gt("#ring-hint"),status:gt("#voice-status"),toasts:gt("#toasts"),card:gt("#info-card"),flow:[...document.querySelectorAll(".flow li")]};function vc(n){Qe.you.querySelector("p").textContent=n,Qe.you.hidden=!1}function wx(n){Qe.alexa.querySelector("p").textContent=n,Qe.alexa.hidden=!1}function ki(n){Qe.flow.forEach((e,t)=>{e.classList.toggle("is-active",t+1===n),e.classList.toggle("is-done",n>0&&t+1<n)})}function Us(n){Qe.ring.dataset.state=n,Ne.setAlexa(n)}function $t(n,e="info"){let t=document.createElement("div");t.className=`toast toast--${e}`,t.textContent=n,Qe.toasts.appendChild(t),setTimeout(()=>t.classList.add("is-leaving"),4200),setTimeout(()=>t.remove(),4800)}var Ju=Promise.resolve();function sd(n){return wx(n),Us("speaking"),Ju=new Promise(e=>{Hu(n,{onEnd:()=>{Qe.ring.dataset.state==="speaking"&&Us("idle"),ki(0),e()}})}),Ju}var Dn=(n,e,t)=>{_t[n].on=e,t!==void 0&&(_t[n].color=t)};function Tx(n){let e=Ne.anchors,t=()=>vn.body.position.clone().setY(.35);switch(n.type){case"light":return _t[n.room].on===n.on?{reply:n.on?je.lightAlreadyOn(n.room):je.lightAlreadyOff(n.room),targets:[e.light(n.room)]}:{targets:[e.light(n.room)],apply:()=>Dn(n.room,n.on),reply:n.on?je.lightOn(n.room):je.lightOff(n.room)};case"light.color":return{targets:[e.light(n.room)],apply:()=>Dn(n.room,!0,ka[n.color]),reply:je.lightColor(n.room,n.color)};case"light.all":return{targets:Object.keys(_t).map(i=>e.light(i)),apply:()=>Object.keys(_t).forEach(i=>Dn(i,n.on,n.on?mr:void 0)),reply:n.on?je.allOn():je.allOff()};case"robot.clean":return{targets:[t()],apply:()=>vn.clean(n.room),reply:n.room==="bano"?je.robotTryBath():je.robotClean(n.room)};case"robot.dock":return vn.state.mode==="docked"?{reply:je.robotAlreadyDocked()}:{targets:[t()],apply:()=>vn.dock(),reply:je.robotDock()};case"device":{let i={tv:[e.tv,s=>Ne.setTv(s),je.tvOn,je.tvOff],washer:[e.washer,s=>Ne.setWasher(s),je.washerOn,je.washerOff],ac:[e.ac,s=>Ne.setAc(s),je.acOn,je.acOff]}[n.device];return{targets:[i[0]()],apply:()=>i[1](n.on),reply:n.on?i[2]():i[3]()}}case"scene.night":return{targets:[...Object.keys(_t).map(i=>e.light(i)),e.tv()],apply:()=>{Object.keys(_t).forEach(i=>Dn(i,!1)),Ne.setTv(!1),vn.dock()},reply:je.night()};case"scene.morning":return{targets:[e.light("sala"),e.light("cocina")],apply:()=>{Dn("sala",!0,mr),Dn("cocina",!0,mr)},reply:je.morning()};case"talk.think":return{reply:je.think()};case"talk.whoami":return{reply:je.whoami()};case"talk.hello":return{reply:je.hello()};case"talk.thanks":return{reply:je.thanks()};case"wake":return{reply:je.wake()};case"empty":return{reply:je.empty(),error:!0};default:return{reply:je.unknown(),error:!0}}}var Ga=!1;async function yr(n,{fromVoice:e=!1,handsFree:t=!1}={}){let i=zu(n);if(!(t&&!i.wake)&&!Ga){Ga=!0;try{vc(n?rd(n):"\u2026"),Qe.alexa.hidden=!0,ki(1),Us("thinking"),await gc(e?250:450),ki(2),await gc(500);let s=Tx(i);if(s.error&&Rt.error(),s.targets?.length){ki(3);let r=[Ne.anchors.echo(),Ne.anchors.router()];await Promise.all(s.targets.map((a,o)=>gc(o*60).then(()=>td.send([...r,a],1.3)))),s.targets.forEach(a=>nd.at(a)),s.apply?.(),Rt.ok(),ki(4)}await sd(s.reply)}finally{Ga=!1}}}var rd=n=>n.charAt(0).toUpperCase()+n.slice(1);Ne.bathroom.onEvent=n=>{n==="motion-on"&&(Ax(),Dn("bano",!0,mr),$t("Sensor de movimiento: detect\xF3 a alguien y encendi\xF3 la luz del ba\xF1o.","sensor")),n==="motion-off"&&(setTimeout(Rx,1200),Dn("bano",!1),$t("Sensor de movimiento: ya no hay nadie. Apag\xF3 la luz del ba\xF1o.","sensor")),n==="flush"&&(Rt.flush(),$t("Sensor sin contacto: detect\xF3 la mano y descarg\xF3 la taza.","sensor")),n==="fridge-open"&&(Rt.beep(),$t("\xA1La puerta de la heladera qued\xF3 abierta! Ci\xE9rrala para no gastar energ\xEDa.","warn"))};vn.state.onEvent=(n,e)=>{n==="blocked"&&(Rt.error(),$t("El robot se detuvo: hay un escal\xF3n en la puerta del ba\xF1o.","warn")),n==="blocked-returning"&&sd(je.robotBlocked()),n==="clean-done"&&$t(`${je.robotDone(e)} Vuelve a su base.`,"info"),n==="docked"&&$t("El robot lleg\xF3 a su base y se est\xE1 cargando.","info")};var Ds=!1;function Ax(){Ds||Gi.active||(Ds=!0,vr("bano"))}function Rx(){if(!Ds||Gi.active){Ds=!1;return}Ds=!1,vr(gr)}var xc=null;function Cx(n,e){let t=Bu[n];if(!t)return;xc=e,Qe.card.querySelector("h3").textContent=n==="light"?`${t.title} \xB7 ${_t[e.split(":")[1]].label}`:t.title,Qe.card.querySelector(".card-body").textContent=t.body,Qe.card.querySelector(".card-fact").textContent=t.fact;let i=Qe.card.querySelector(".card-action");i.hidden=!t.action,i.textContent=t.action??"",Qe.card.hidden=!1}gt("#info-close").addEventListener("click",()=>{Qe.card.hidden=!0});var Ls=0;function yc(n){if(n.startsWith("light:")){let e=n.split(":")[1];Dn(e,!_t[e].on,_t[e].on?void 0:_t[e].color),Rt.click()}else if(n==="fridge"){let e=Ne.toggleFridge(Ls);Rt.click(),e||$t("Puerta de la heladera cerrada.","info")}else n==="motion"?Ne.personEnter()||$t("Ya hay alguien en el ba\xF1o.","info"):(n==="flush"||n==="toilet")&&Ne.waveHand()}Qe.card.querySelector(".card-action").addEventListener("click",()=>xc&&yc(xc));var Ku=new Ca,ju=new pe,Wa=null;function ad(n){let e=Ht.domElement.getBoundingClientRect();return ju.set((n.clientX-e.left)/e.width*2-1,-((n.clientY-e.top)/e.height)*2+1),Ku.setFromCamera(ju,yn),Ku.intersectObjects(nn.children,!0).find(i=>i.object.userData.pick)?.object.userData.pick??null}Ht.domElement.addEventListener("pointerdown",n=>{Wa=[n.clientX,n.clientY]});Ht.domElement.addEventListener("pointerup",n=>{if(!Wa||Math.hypot(n.clientX-Wa[0],n.clientY-Wa[1])>6)return;let e=ad(n);if(!e)return;let t=e.startsWith("light:")?"light":e;Cx(t,e),(t==="light"||e==="fridge")&&yc(e),e==="tv"&&(Ne.setTv(!Ne.tv.on),Rt.click()),e==="washer"&&(Ne.setWasher(!Ne.washer.on),Rt.click()),e==="ac"&&(Ne.setAc(!Ne.ac.on),Rt.click()),e==="router"&&(_i=!_i,Ya.setStrong(_i),Vi())});Ht.domElement.addEventListener("pointermove",n=>{Ht.domElement.style.cursor=ad(n)?"pointer":""});var _i=!1,gr="maqueta";function Vi(){gt("#toggle-wifi").setAttribute("aria-pressed",String(_i)),gt("#toggle-day").setAttribute("aria-pressed",String(xn)),gt("#toggle-day").textContent=xn?"Noche":"D\xEDa",gt("#toggle-view").textContent=gr==="maqueta"?"Ver desde arriba":"Ver maqueta"}gt("#toggle-wifi").addEventListener("click",()=>{_i=!_i,Ya.setStrong(_i),Vi()});gt("#toggle-day").addEventListener("click",()=>{id(!xn),Vi()});gt("#toggle-view").addEventListener("click",()=>{gr=gr==="maqueta"?"arriba":"maqueta",Ds=!1,vr(gr),Vi()});gt("#toggle-orders").addEventListener("click",()=>{let e=gt("#orders").classList.toggle("is-collapsed");gt("#toggle-orders").setAttribute("aria-expanded",String(!e)),Za()});Vi();document.querySelectorAll("[data-say]").forEach(n=>{n.addEventListener("click",()=>{Rt.unlock(),yr(n.dataset.say)})});document.querySelectorAll("[data-act]").forEach(n=>{n.addEventListener("click",()=>{Rt.unlock(),yc(n.dataset.act)})});var Hi=Vu({grammar:Fu,onPartial:n=>{Qe.ring.dataset.state==="listening"&&vc(rd(n)+"\u2026")},onResult:(n,e)=>yr(n,{fromVoice:!0,handsFree:e==="handsfree"}),onStatus:n=>od(n)});function od(n,e){Qe.status.dataset.state=n,Qe.status.textContent={loading:"Preparando el o\xEDdo de Alexa\u2026",ready:"Alexa est\xE1 lista",error:e??"La voz no est\xE1 disponible. Usa los botones de \xF3rdenes."}[n],Qe.hint.textContent=n==="ready"?"Mant\xE9n presionado el anillo (o la barra espaciadora) y habla":n==="loading"?"Mientras tanto, prueba los botones de \xF3rdenes":"Usa los botones de \xF3rdenes de la derecha",gt("#handsfree").disabled=n!=="ready"}location.protocol==="file:"&&(document.querySelector("#file-warning").hidden=!1);Hi.load().catch(n=>{let e=n.message==="file-protocol"?"Abriste el archivo equivocado. Cierra Chrome y haz doble clic en \xABAbrir Casa Inteligente\xBB dentro de la carpeta.":"La voz no est\xE1 disponible. Usa los botones de \xF3rdenes.";od("error",e),console.error(n)});var _r=!1;async function ld(){if(Rt.unlock(),!Hi.ready||_r||Ga){Hi.ready||$t(Qe.status.textContent,"info");return}_r=!0,speechSynthesis.cancel();try{await Hi.startPush()}catch{_r=!1,$t("No pude usar el micr\xF3fono. Revisa el permiso de Chrome.","warn");return}Rt.listen(),Us("listening"),ki(1),vc("Escuchando\u2026"),Qe.alexa.hidden=!0}async function Mc(){if(!_r)return;_r=!1,Rt.stop(),Us("thinking");let n=await Hi.stopPush();yr(n,{fromVoice:!0})}Qe.ring.addEventListener("pointerdown",n=>{n.preventDefault(),Qe.ring.setPointerCapture(n.pointerId),ld()});Qe.ring.addEventListener("pointerup",Mc);Qe.ring.addEventListener("pointercancel",Mc);window.addEventListener("keydown",n=>{n.code==="Space"&&!n.repeat&&!n.target.closest?.("button, input")&&(n.preventDefault(),ld())});window.addEventListener("keyup",n=>{n.code==="Space"&&(n.preventDefault(),Mc())});gt("#handsfree").addEventListener("change",async n=>{try{await Hi.setHandsFree(n.target.checked),$t(n.target.checked?"Manos libres: empieza cada orden diciendo \xABAlexa\xBB.":"Manos libres desactivado.","info"),Us((n.target.checked,"idle"))}catch{n.target.checked=!1,$t("No pude usar el micr\xF3fono. Revisa el permiso de Chrome.","warn")}});var Px=new Ra;function cd(){let n=Math.min(Px.getDelta(),.05);if(Ls+=n,tn){tn.t=Math.min(1,tn.t+n/tn.duration);let e=1-Math.pow(1-tn.t,3);yn.position.lerpVectors(tn.fromPos,tn.to.pos,e),Un.target.lerpVectors(tn.fromT,tn.to.target,e),tn.t>=1&&(tn=null)}Un.update(),Ex(),Sx(),Ne.update(n,Ls),vn.update(n,Ls),Gi.update(n),Ya.update(n,Ls),td.update(n),nd.update(n),Ht.render(nn,yn),qa.render(nn,yn),requestAnimationFrame(cd)}var Ix=Gu(nn),Qu=n=>new A(_t[n].bounds.cx,.4,_t[n].bounds.cz),Gi=Zu({rooms:_t,devices:Ne,robot:vn,callouts:Ix,controls:Un,runOrder:yr,goTo:vr,LAMP:mr,anchors:Ne.anchors,buildables:[...ed.children,Ne.echo.group,Ne.tv.group,Ne.fridge.group,Ne.washer.group,Ne.ac.group,Ne.kitchen.microwave.group,Ne.kitchen.coffee.group,Ne.kitchen.dishwasher.group,Ne.bath.toilet,vn.body],setLight:Dn,setWifi(n){_i=n,Ya.setStrong(n),Vi()},setDay(n){id(n),Vi()},personEnter:()=>Ne.personEnter(),now:()=>Ls,roomName:n=>Cs[n].name,poses:{cover:{pos:new A(-17,15,13),target:new A(.6,0,-.2)},overview:xr.maqueta,bano:xr.bano,sala:{pos:Qu("sala").add(new A(-9.5,9,4.5)),target:Qu("sala").add(new A(0,0,-.6))}},onModeChange(){let n=document.body.classList.contains("mode-story");Un.minDistance=n?2.5:7,Qe.card.hidden=!0,Qe.you.hidden=!0,Qe.alexa.hidden=!0,ki(0),Za()}});Gi.go(location.hash.includes("demo")?Gi.demoIndex:0);for(let n of["pointerdown","keydown","touchend"])window.addEventListener(n,()=>Rt.unlock(),{capture:!0,passive:!0});$u({canReload:()=>Gi.index===0});window.__casa={rooms:_t,robot:vn,devices:Ne,runOrder:yr,voice:Hi,goTo:vr,presenter:Gi};window.__casaCam=()=>yn.position.toArray().map(n=>n.toFixed(2)).join(",");cd();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
