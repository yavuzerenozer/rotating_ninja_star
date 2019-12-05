"use strict";

var canvas;
var gl;

var theta = 0.0;
var thetaLoc;
var vertices = [
    //X,Y            R,   G,   B
    0.0, 0.125,       0.5, 0.5, 0.5,      
    -0.25, 0.25,      0.5, 0.5, 0.5,
    -0.125, 0.0,      0.5, 0.5, 0.5,
    
    
    -0.125, 0.0,      0.5, 0.5, 0.5,
    -0.25, -0.25,     0.5, 0.5, 0.5,
    0.0, -0.125,      0.5, 0.5, 0.5,
     
    
    0.0, -0.125,      0.5, 0.5, 0.5,
    0.25, -0.25,      0.5, 0.5, 0.5,
    0.125, 0.0,       0.5, 0.5, 0.5,
    
    
    0.125, 0.0,       0.5, 0.5, 0.5,
    0.25, 0.25,       0.5, 0.5, 0.5,
    0.0, 0.125,       0.5, 0.5, 0.5,
       
    -0.125, 0.0,      0.5, 0.5, 0.5,
    0.0, 0.125,       0.5, 0.5, 0.5,
    0.125, 0.0,       0.5, 0.5, 0.5,
    
    -0.125, 0.0,      0.5, 0.5, 0.5,
    0.0, -0.125,      0.5, 0.5, 0.5,
    0.125, 0.0,       0.5, 0.5, 0.5,
                     
];

var vertices1 = [];
var vertices2 = [];
var vertices3 = [];
var vertices4 = [];
var vertices5 = [];


window.onload = function init()
{
    canvas = document.getElementById( "glCanvas" );
    gl = canvas.getContext("webgl2");
    
    if(!gl) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }
    


    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 0.0, 1.0 );

    //  Load shaders and initialize attribute buffers
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );
    
   
   
    var origin1 = [-0.125, 0.0];
    var origin2 = [0.0, -0.125];
    var origin3 = [0.125, 0.0];
    var origin4 = [0.0, 0.125];
    var origin5 = [0.0, 0.0];
    
   
    
    vertices1.push(origin1[0]);
    vertices1.push(origin1[1]);
    
    vertices2.push(origin2[0]);
    vertices2.push(origin2[1]);
    
    vertices3.push(origin3[0]);
    vertices3.push(origin3[1]);
    
    vertices4.push(origin4[0]);
    vertices4.push(origin4[1]);
    
    vertices5.push(origin5[0]);
    vertices5.push(origin5[1]);
    
    
    vertices1.push(1.0);  //The yellow color for fragment shader
    vertices1.push(1.0);  //The yellow color for fragment shader
    vertices1.push(0.0);  //The yellow color for fragment shader
    
    vertices2.push(1.0);  //The yellow color for fragment shader
    vertices2.push(1.0);  //The yellow color for fragment shader
    vertices2.push(0.0);  //The yellow color for fragment shader
    
    vertices3.push(1.0);  //The yellow color for fragment shader
    vertices3.push(1.0);  //The yellow color for fragment shader
    vertices3.push(0.0);  //The yellow color for fragment shader
    
    vertices4.push(1.0);  //The yellow color for fragment shader
    vertices4.push(1.0);  //The yellow color for fragment shader
    vertices4.push(0.0);  //The yellow color for fragment shader
    
    vertices5.push(1.0);  //The yellow color for fragment shader
    vertices5.push(1.0);  //The yellow color for fragment shader
    vertices5.push(0.0);  //The yellow color for fragment shader
    
  
    for(var i = 0; i <= 360; i+=1){
        
        var j = i * Math.PI/180;
        
        var vert1 = [Math.sin(j)/40 -0.125,Math.cos(j)/40];//-0.5
        var vert2 = [Math.sin(j)/40,Math.cos(j)/40-0.125];
        var vert3 = [Math.sin(j)/40 +0.125,Math.cos(j)/40];//+0.5
        var vert4 = [Math.sin(j)/40,Math.cos(j)/40+0.125];
        var vert5 = [Math.sin(j)/40,Math.cos(j)/40];
        
        vertices1.push(vert1[0]);
        vertices1.push(vert1[1]);
        
        vertices2.push(vert2[0]);
        vertices2.push(vert2[1]);
        
        vertices3.push(vert3[0]);
        vertices3.push(vert3[1]);
        
        vertices4.push(vert4[0]);
        vertices4.push(vert4[1]);
        
        vertices5.push(vert5[0]);
        vertices5.push(vert5[1]);
        
        
        vertices1.push(1.0);  //The yellow color for fragment shader
        vertices1.push(1.0);  //The yellow color for fragment shader
        vertices1.push(0.0);  //The yellow color for fragment shader
    
        vertices2.push(1.0);  //The yellow color for fragment shader
        vertices2.push(1.0);  //The yellow color for fragment shader
        vertices2.push(0.0);  //The yellow color for fragment shader
    
        vertices3.push(1.0);  //The yellow color for fragment shader
        vertices3.push(1.0);  //The yellow color for fragment shader
        vertices3.push(0.0);  //The yellow color for fragment shader
    
        vertices4.push(1.0);  //The yellow color for fragment shader
        vertices4.push(1.0);  //The yellow color for fragment shader
        vertices4.push(0.0);  //The yellow color for fragment shader
    
        vertices5.push(1.0);  //The yellow color for fragment shader
        vertices5.push(1.0);  //The yellow color for fragment shader
        vertices5.push(0.0);  //The yellow color for fragment shader
                
    }
           
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    
    gl.bufferData(gl.ARRAY_BUFFER, (vertices.length + vertices1.length + vertices2.length + vertices3.length + vertices4.length + vertices5.length)* Float32Array.BYTES_PER_ELEMENT, gl.STATIC_DRAW);                                
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(vertices), 0);
    gl.bufferSubData(gl.ARRAY_BUFFER, vertices.length * Float32Array.BYTES_PER_ELEMENT, new Float32Array(vertices1), 0);
    gl.bufferSubData(gl.ARRAY_BUFFER, (vertices1.length + vertices.length) * Float32Array.BYTES_PER_ELEMENT, new Float32Array(vertices2), 0);
    gl.bufferSubData(gl.ARRAY_BUFFER, (2*vertices1.length + vertices.length) * Float32Array.BYTES_PER_ELEMENT, new Float32Array(vertices3), 0);
    gl.bufferSubData(gl.ARRAY_BUFFER, (3*vertices1.length + vertices.length) * Float32Array.BYTES_PER_ELEMENT, new Float32Array(vertices4), 0);
    gl.bufferSubData(gl.ARRAY_BUFFER, (4*vertices1.length + vertices.length) * Float32Array.BYTES_PER_ELEMENT, new Float32Array(vertices5), 0);
    
    /*
        RENDER TIME
    */
    
    gl.vertexAttribPointer(         
        gl.getAttribLocation(program, "vPosition"), 
        2, 
        gl.FLOAT, 
        gl.FALSE, 
        5 * Float32Array.BYTES_PER_ELEMENT, 
        0,
    );
    
    gl.vertexAttribPointer(         
        gl.getAttribLocation(program, "vColor"), 
        3,  //Number of elements per attribute
        gl.FLOAT,   //Type of elements per attribute
        gl.FALSE,   //Normalizing
        5*Float32Array.BYTES_PER_ELEMENT,   //Size of an individual vertex(includes both vertex coordinates and color)
        2*Float32Array.BYTES_PER_ELEMENT,   //Offset(Since triangle has 2 vertex values, (x,y) offset should be 2 to get to the color section)
    );   
    
    
    gl.enableVertexAttribArray(gl.getAttribLocation(program, "vPosition"));
    gl.enableVertexAttribArray(gl.getAttribLocation(program, "vColor"));
    thetaLoc = gl.getUniformLocation( program, "theta" );

     render();
};

function render() {

    gl.clear( gl.COLOR_BUFFER_BIT );
    theta += 0.01;
    gl.uniform1f( thetaLoc, theta );

    gl.drawArrays(gl.TRIANGLES, 0, vertices.length/5);//rendering star
    gl.drawArrays(gl.TRIANGLE_FAN, vertices.length/5, vertices1.length/5); //rendering a circle
    gl.drawArrays(gl.TRIANGLE_FAN, vertices.length/5 + (vertices1.length)/5, vertices2.length/5); //rendering the rest
    gl.drawArrays(gl.TRIANGLE_FAN, vertices.length/5 + (2 * vertices1.length)/5, vertices3.length/5);
    gl.drawArrays(gl.TRIANGLE_FAN, vertices.length/5 + (3 * vertices1.length)/5, vertices4.length/5);
    gl.drawArrays(gl.TRIANGLE_FAN, vertices.length/5 + (4* vertices1.length)/5, vertices5.length/5);
    window.requestAnimationFrame(render);
}